const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const sockets = []

wsServer.on("connection", (newSocket)=> {
    // console.log("New frontend connect");
    sockets.push(newSocket);

    setTimeout(() => {
        newSocket.send("Welcome to our server");
    }, 3000);

    sockets.forEach(socket => {
        if(socket !== newSocket) {
            socket.send("New member connect")
        }
    })
})