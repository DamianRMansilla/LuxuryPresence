const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath))

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "\index.html"))
})

var puerto;
if(process.env.PORT) {
  puerto = process.env.PORT;
} else {
  puerto = 3090;
}

app.listen(puerto || puerto, function(){ console.log("Servidor corriendo en puerto 3090")})


// app.listen(3090, ()=>{
//     console.log("Servidor corriendo en el puerto 3090");
// })
