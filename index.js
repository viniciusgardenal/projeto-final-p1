// import Interessados from "./Modelo/Interessados.js";
import express from "express";
import rotaInteresse from "./Rotas/rotasInteresse.js";

const porta = 3000;
const hostname = "localhost";

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static("./Frontend"));
app.use(express.json());
app.use("/Interesses", rotaInteresse);

app.listen(porta, hostname,()=>{
    console.log("Backend respondendo em http://" + hostname + ":" + porta)
});