const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "\index.html"))
})

app.listen(3090, ()=>{
    console.log("Servidor corriendo en el puerto 3090");
})
