import {Router} from "express";
import controleInteresse from "../Controle/controleInteresse.js"

const rotaInteresse = new Router();
const intControle = new controleInteresse();

rotaInteresse.post("/", intControle.gravar)
    .put("/:id", intControle.atualizar)
    .delete("/:id", intControle.excluir)
    .get("/", intControle.consultar)
    .get("/:termo", intControle.consultar);


export default rotaInteresse;