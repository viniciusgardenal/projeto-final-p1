import InteresseDAO from "../Persistencia/interesseDAO.js";
export default class Interessados{
    #id;
    #nome;
    #cpf;
    #dataN;
    #email;
    #rg;
    #opcao;



    constructor(id, nome, cpf, dataN, email, rg, opcao){
        this.#id = id;
        this.#nome = nome; 
        this.#cpf = cpf;
        this.#dataN = dataN;
        this.#email = email;
        this.#rg = rg;
        this.#opcao = opcao;
    }

    get id(){
        return this.#id
    }

    set id(novoid){
        this.#id = novoid;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novonome){
        this.#nome = novonome;
    }

    get cpf(){
        return this.#cpf;
    
    }
    
    set cpf(novocpf){
        this.#cpf = novocpf;
    }

    get dataN(){
        return this.#dataN;
    }

    set dataN(novadataN){
        this.#dataN = novadataN;
    }

    get email(){
        return this.#email;
    }

    set email(novoemail){
        this.#email = novoemail;
    }

    get rg(){
        return this.#rg;
    
    }
        
    set rg(novorg){
        this.#rg = novorg;
    }

    get opcao(){
        return this.#opcao;
    
    }
        
    set opcao(novaopcao){
        this.#opcao = novaopcao;
    }

    
    toJSON(){
        return{
            "id"      : this.#id,
            "nome"    : this.#nome,
            "cpf"     : this.#cpf,
            "dataN"   : this.#dataN,
            "email"   : this.#email,
            "rg"      : this.#rg,
            "opcao"   : this.#opcao

        }
    }

    async gravar(){
        const interesseDAO = new InteresseDAO();
        this.id = await interesseDAO.gravar(this);
    }

    async atualizar(){
        const interesseDAO = new InteresseDAO();
        await interesseDAO.atualizar(this);
    }

    async excluir(){
        const interesseDAO = new InteresseDAO();
        await interesseDAO.excluir(this);
    }

    async consultar(termo){
        const interesseDAO = new InteresseDAO();
        const interesses = await interesseDAO.consultar(termo);
        return interesses;
    }

    async consultarnome(nome){
        const interesseDAO = new InteresseDAO();
        const interesses = await interesseDAO.consultarnome(nome);
        return interesses;
    }

}