import Interessados from "../Modelo/Interessados.js"
import Conexao from "./conexao.js";

export default class InteresseDAO{

    async gravar(interessados){
        if(interessados instanceof Interessados){
            const conexao = await Conexao();
            const sql="INSERT INTO interessados(id, nome, cpf, dataN, email, rg, opcao) \
            VALUES(?,?,?,?,?,?,?)";
            const valores = [interessados.id, interessados.nome, interessados.cpf, interessados.dataN, interessados.email, interessados.rg, interessados.opcao]
            const [result] = await conexao.query(sql,valores)
            interessados.id = result.insertId;
        }
    }

    async atualizar(interessados){
        if(interessados instanceof Interessados){
            const conexao = await Conexao();
            const sql="UPDATE interessados SET nome=?, cpf=?, dataN=?, email=?, rg=?, opcao=? WHERE id=?";
            const valores = [interessados.nome, interessados.cpf, interessados.dataN, interessados.email, interessados.rg, interessados.opcao, interessados.id]
            await conexao.query(sql,valores)
        }
    }

    async excluir(interessados){
        if(interessados instanceof Interessados){
            const conexao = await Conexao();
            const sql="DELETE FROM interessados \
            WHERE id=? ";
            const valores = [interessados.id]
            await conexao.query(sql,valores)
        }
    }

    async consultar(termo){
        const conexao = await Conexao();
        const sql = "SELECT * FROM interessados WHERE id LIKE ?";
        const valores = ['%' + termo + '%'];
        const [rows] = await conexao.query(sql,valores);
        const listaInteressadoss = [];
        for(const row of rows){
            const interessados = new Interessados(row['id'], row['nome'],row['cpf'],row['dataN'], row['email'], row['rg'], row['opcao']);
            listaInteressadoss.push(interessados);
        }
        return listaInteressadoss;
    }

    async consultarinteressados(nome){
        const conexao = await Conexao();
        const sql = "SELECT * FROM interessados WHERE nome=? ";
        const valores = [nome];
        const [rows] = await conexao.query(sql,valores);
        const listaInteressadoss = [];
        for(const row of rows){
            const interessados = new Interessados(row['id'], row['nome'],row['cpf'],row['dataN'], row['email'], row['rg'], row['opcao']);
            listaInteressadoss.push(interessados);
        }
        return listaInteressadoss;
    }
}