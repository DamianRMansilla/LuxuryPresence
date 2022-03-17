let express = require("express");
let path = require("path");
let app = express();

const publicPath = path.resolve(__dirname, "./Public")
app.use(express.static(publicPath))


var puerto;
if(process.env.PORT) {
    puerto = process.env.PORT;
} else {
    puerto = 3090;
}

app.listen(puerto || puerto, function(){ console.log("Servidor corriendo en puerto 3090")})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "\index.html"))
})

// app.listen(3090, ()=>{
//     console.log("Servidor corriendo en el puerto 3090");
// })
