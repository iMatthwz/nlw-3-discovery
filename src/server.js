//Importa dependências

const express = require("express");
const path = require("path");
const pages = require("./pages.js")

const server = express(); //Inicia o express

server
    .use(express.urlencoded({extended: true})) //Usa o body da req
    .use(express.static("public")) //Usa os arquivos estáticos

    //Configura o template engine

    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")

    //Cria a rota

    .get("/", pages.index)
    .get("/orphanages", pages.orphanages)
    .get("/orphanage", pages.orphanage)
    .get("/create-orphanage", pages.createOrphanage)
    .post("/save-orphanage", pages.saveOrphanage)

server.listen(5500); //Liga o servidor