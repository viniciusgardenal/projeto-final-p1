const botaosalvar = document.getElementById("salvar");
const botaoLimpar = document.getElementById("limpar");

// document.getElementById("limpar").onclick="excluirInteressado";

let acao = "";

window.onload = exibirinteresse;

botaosalvar.onclick = ()=>{
    this.disabled = true;
    salvarinteresse();
    
}

botaoLimpar.onclick = ()=>{
    limparForm();
    manipularBotoes();
}



function manipularBotoes(pAcao){
    this.acao = pAcao;
    const botaosalvar = document.getElementById("salvar");
    const botaoLimpar = document.getElementById("limpar");
    if (this.acao === "salvar"){
        botaosalvar.disabled = false;
        botaoLimpar.disabled = true;
       
    }
    else{
        // if (this.acao ==="salvar"){
            // limparForm();
        // }
        botaosalvar.disabled = false;
        // botaoCancelar.disabled = false;
    }
}

function salvarinteresse() {
    
    const formInteresse = document.getElementById("forminteresse");
    if(formInteresse.checkValidity()){

        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const dataN = document.getElementById("dataN").value;
        const email = document.getElementById("email").value;
        const rg = document.getElementById("rg").value;
        const opcao = document.getElementById("opcao").value;

        fetch('http://localhost:3000/Interesses',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "nome": nome,
                "cpf":cpf,
                "dataN":dataN,
                "email":email,
                "rg":rg,
                "opcao": opcao
            })
        }).then((resposta)=>{
            return resposta.json();
        }).then((dados)=>{
            if(dados.status){
                window.alert(dados.mensagem + "ID" + dados.id);
            }
            else{
                window.alert(dados.mensagem);
            }
        }).catch((erro)=>{
            window.alert("Não foi possível realizar a operação: " + erro.message);
        });
        limparForm();
        formInteresse.classList.remove('was-validated');
    } else{
        formInteresse.classList.add('was-validated');
    }

}


function limparForm(){
    document.getElementById("nome").value="";
    document.getElementById("cpf").value ="";
    document.getElementById("dataN").value="";
    document.getElementById("email").value="";
    document.getElementById("rg").value="";
    document.getElementById("opcao").value="";
}

function prepararTela(id="", cpf="", nome="", data="", email="", rg="", opcao="", acao=""){
    let botaosalvar = document.getElementById("salvar");
    let botaoLimpar = document.getElementById("limpar");

    document.getElementById("id").value= id;
    document.getElementById("nome").value= nome;
    document.getElementById("cpf").value = cpf;
    document.getElementById("dataN").value= data;
    document.getElementById("email").value= email;
    document.getElementById("rg").value= rg;
    document.getElementById("opcao").value= opcao;

    if (acao === "limpar"){
        document.getElementById("id").disabled = true;
        botaosalvar.disabled = true;
        botaoLimpar.disabled = false;
       
    }
    else{
        // if (this.acao ==="salvar"){
            // limparForm();
        // }
        document.getElementById("id").disabled = true;
        botaosalvar.disabled = false;
       
        // botaoCancelar.disabled = false;
    }
}

function excluirInteressado(id) {
    
    if(confirm("Confirma a exclusão do interessado selecionado")){
        fetch('http://localhost:3000/Interesses/' + id,{
            method: "DELETE",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                id: document.getElementById("id").value
            })
        }).then((resposta)=>{
            if(resposta.ok) {
               return resposta.json(); 
            }else{
                throw new Error("Erro ao excluir interessado");
            }
            
        }).then((dados)=>{
            if(dados && typeof dados === "object" && "status" in dados){
               if(dados.status){
                    window.alert(dados.mensagem + "Id" + dados.id);
                }
                else{
                    window.alert(dados.mensagem);
                }
                exibirinteresse();
                prepararTela(); 
            }else{
                throw new Error("Resposta inválida do servidor");
            }
                
            
        }).catch((erro)=>{
            window.alert("Não foi possível realizar a operação: " + erro.message);
        });
    }
    else{
        prepararTela();
    }

}

function exibirinteresse(){
    let espacoTabela = document.getElementById("espacoTabela");

    fetch('http://localhost:3000/Interesses', {method:"GET"}).then((resposta)=>{
        return resposta.json();
    }).then((dados)=>{
        if(Array.isArray(dados) && dados.length > 0){
            let tabela = document.createElement('table');
            tabela.className=("table table-striped table-hover");
            let cabecalho = document.createElement("thead");
            cabecalho.innerHTML=`<tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Data</th>
                                    <th>Email</th>
                                    <th>RG</th>
                                    <th>Opções</th>
                                    <th>Excluir</th>
                                </tr>`
            tabela.appendChild(cabecalho);
            let body = document.createElement("tbody");
            for (const interesse of dados){
                const linha = document.createElement("tr");
                linha.innerHTML=`
                            <tr>
                                <td>${interesse.id}</td>
                                <td>${interesse.nome}</td>
                                <td>${interesse.cpf}</td>
                                <td>${interesse.dataN}</td>
                                <td>${interesse.email}</td>
                                <td>${interesse.rg}</td>
                                <td>${interesse.opcao}</td>
                                <td>
                                <button id="limpar" type="button" class="btn btn-outline-danger" onclick="excluirInteressado('${interesse.id}','${interesse.nome}','${interesse.cpf}','${interesse.data}','${interesse.email}','${interesse.rg}','${interesse.opcao}','exclusao')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                              </svg>
                                </button>
                                </td>
                            </tr>`
                 body.appendChild(linha);                      
            }
            tabela.appendChild(body);
            espacoTabela.innerHTML="";
            espacoTabela.appendChild(tabela);

        }
        else{
            espacoTabela.innerHTML="<p>Não existem interesses a serem exibidos!</p>";
        }
    }).catch((erro)=>{
        espacoTabela.innerHTML="Erro ao obter o interesse: " + erro.message;
    })
}
