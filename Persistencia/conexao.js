import mysql from "mysql2/promise";

export default async function Conexao (){
    if(global.conexao && global.conexao.status != "disconnected"){
        return global.conexao;
    }
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "imobiliaria",
        port: 3306,
        multipleStatements: true
    });

    global.conexao = conexao;
    return conexao;
}