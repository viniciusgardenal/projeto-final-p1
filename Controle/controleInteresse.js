import Interessados from "../Modelo/Interessados.js";

export default class controleInteresse{
    
    gravar(requisicao, resposta){
        resposta.type("application/json" );
        if(requisicao.method === "POST" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const nome  = dados.nome;
            const cpf   = dados.cpf;
            const dataN = dados.dataN;
            const email = dados.email;
            const rg    = dados.rg;
            const opcao = dados.opcao;

            if (nome && cpf > 0 && dataN && email && rg && opcao){
                const interessados = new Interessados(0, nome, cpf, dataN, email, rg, opcao);
                interessados.gravar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        id: interessados.id,
                        mensagem: "Interessado registrado com sucesso!"
                    });
                }).catch((erro)=>{
                    resposta.status(500).json({
                        status:false,
                        mensagem: "Não foi possível registrar o interessado." + erro.message
                    });
                });
            }
            else{
                resposta.status("400").json({
                    status:false,
                    mensagem: "Informe todos os dados necessários para cadastrar o interessado. Verifique a documentação da API."
                })
            }
        }
        else{
            resposta.status("400").json({
                status:false,
                mensagem: "Método não permitido para registrar um interessado"
            });
        }
    }

    atualizar(requisicao, resposta){
        resposta.type("application/json");
        if(requisicao.method === "PUT" && requisicao.is("application/json")){
            const dados = requisicao.body;
            const id    = dados.id;
            const nome  = dados.nome;
            const cpf   = dados.cpf;
            const dataN = dados.dataN;
            const email = dados.email;
            const rg    = dados.rg;
            const opcao = dados.opcao

            if (id > 0 && nome &&  cpf > 0 && dataN && email && rg && opcao){
                const interessados = new Interessados(id, nome, cpf, dataN, email, rg, opcao);
                interessados.atualizar().then(()=>{
                    resposta.status(200).json({
                        status:true,
                        id: interessados.id,
                        mensagem: "Interessado atualizado com sucesso!"
                    });
                }).catch((erro)=>{
                    resposta.status(500).json({
                        status:false,
                        mensagem: "Não foi possível atualizar o interessado." + erro.message
                     });
                });
            }
            else{
                resposta.status("400").json({
                    status:false,
                    mensagem: "Informe todos os dados necessários para cadastrar o interessado. Verifique a documentação da API."
                })
            }
        }
        else{
            resposta.status("400").json({
                status:false,
                mensagem: "Método não permitido para atualizar uma atividade. Verifique a documentação da API."
            });
        }
    }

    excluir(requisicao, resposta){
        resposta.type("application/json");

        const id = requisicao.params.id;
        if(requisicao.method === "DELETE"){

            if(id){
                
                    const interessados = new Interessados(id);
                    interessados.excluir().then(()=>{
                        resposta.status(200).json({
                            status:true,
                            mensagem: "Interessado excluído com sucesso!"
                        });
                    }).catch((erro)=>{
                        resposta.status(500).json({
                            status:false,
                            mensagem: "Não foi possível excluir o interessado." + erro.message
                        });
                    });
                }
                else{
                    resposta.status("400").json({
                        status:false,
                        mensagem: "Informe o ID do Interessado para exclui-lo. Verifique a documentação da API."
                    })
                }
        }
        else{
            resposta.status("400").json({
                status:false,
                mensagem: "Método não permitido para excluir um interessado. Verifique a documentação da API."
            });
        }
    }

    consultar(requisicao, resposta){ 
        resposta.type("application/json");
        if(requisicao.method === "GET"){
            let termoConsulta = requisicao.params.id;
            const interessados = new Interessados(0);
            if (isNaN(parseInt(termoConsulta))){
                if(termoConsulta === undefined ){
                    termoConsulta = '';
                }
                interessados.consultar(termoConsulta).then((listaInteressadoss)=>{
                    resposta.status(200).json(listaInteressadoss);
                }).catch((erro)=>{
                    resposta.status(500).json({
                        status:false,
                        mensagem: "Não foi possível realizar a consulta."
                    })
                });
                }
                else{
                    interessados.consultarnome(termoConsulta).then((listaInteressadoss)=>{
                        resposta.status(200).json(listaInteressadoss);
                    }).catch((erro)=>{
                        resposta.status(500).json({
                            status:false,
                            mensagem: "Não foi possível realizar a consulta."
                        })
                    });
                } 
       
        } 
         else{
            resposta.status("400").json({
                status:false,
                mensagem: "Método não permitido para consultar um interessado. Verifique a documentação da API."
            });
        }
    }
}