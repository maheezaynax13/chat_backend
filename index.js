const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 5555;

const { addUser, removeUser, getUser, usersInRoom } = require("./users");
const router = require("./router");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
    /* options */
});

io.on("connection", (socket) => {
    // ...
    // console.log("Socket connection established successfully!");

    socket.on("join", ({ name, room }, callBack) => {
        const { user, error } = addUser({ id: socket.id, name, room });
        if (error) return callBack(error);

        socket.emit("message", { user: "admin", text });

        socket.join(user.room);
    });

    socket.on("disconnect", () => {
        // console.log("User has left!");
    });
});

app.use(router);

httpServer.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
