import express from 'express'
import http, { createServer } from 'http'
import {Server} from 'socket.io'
import cors from 'cors'


const PORT = process.env.PORT||3000
const app = express().use(cors)
app.use(cors())
const server = http.createServer(app)

const io = new Server(server)

io.on("connection", async (socket)=>{

    const socketid = socket.id;
    console.log("Client connect : ", socketid);
    socket.on("message", (data)=>{
        console.log(data);
    })
    socket.emit("message", {text:"hello"})
})


server.listen(PORT, ()=>{
    console.log("server is running on port 3000");
})

