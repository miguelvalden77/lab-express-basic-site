const express = require("express")
const app = express()

// Settings
app.set("port", 3000)

// Middleware
app.use(express.static("public"))

app.listen(app.get("port"), ()=>{
    console.log("Mi servidor corre en el puerto " + app.get("port"))
})

app.get("/home", (req, res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (req, res)=>{
    res.sendFile(__dirname + "/views/works.html")
})

app.get("/gallery", (req, res)=>{
    res.sendFile(__dirname + "/views/gallery.html")
})