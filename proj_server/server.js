const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "http://192.168.227.128:8080",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket)=> {
    socket.emit("hello", "DEAR PLAYER");
    socket.on("play", index => {
        console.log("server received", index)
        socket.broadcast.emit("play", index)
    })
})

server.listen(3000)
