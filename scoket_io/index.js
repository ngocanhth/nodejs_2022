var express = require('express');

var app = express()
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require("http").Server(app)
var io = require("socket.io")(server);
server.listen(3000)

// lang nge co nguoi ket noi len

io.on("connection", function(socket){
    console.log('Co nguoi ket noi')
    socket.on("disconnect", function(){
        console.log(socket.id + " ngat ket noi")
    })

    socket.on("Client-send-data", function(data){
        console.log(socket.id + " Vua gui" + data);
       // io.sockets.emit("Server-send-data", "from server send " + data)
        // socket.emit("Server-send-data", "from server send " + data)
        socket.broadcast.emit("Server-send-data", "from server send " + data)
      //  io.to("2i3Dt60dD2g1zsLkAAAC").emit("Server-send-data", "from server send " + data)
    }) 

    socket.on("Client-send-total", function(data){
        console.log(socket.id + " hai so a va b la: " + data);
        socket.broadcast.emit("Server-send-total", data)
    }) 

    socket.on("Client-send-mau", function(data){
        console.log(socket.id + " mau client send la: " + data);
        io.sockets.emit("Server-send-mau", data)
    })
})

app.get("/", function(req, res){
    res.render('homepage')
})