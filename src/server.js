const express = require("express")
const server = express()

// config pasta public disponivel p todas as pastas
server.use(express.static("public"))

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos do app
// page inicial

server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um Título" })
})

server.get("/create-point", (req, res) => {
    res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

// ligar o servidor
server.listen(3000)