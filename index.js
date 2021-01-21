const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.use('/', express.static(__dirname + '/public'))
let user_pass_map = {}, id_user_map = {};

function login(socket, user){
    id_user_map[socket.id] = user.username
    socket.join(user.username)
    socket.emit('logged_in')
}


io.on('connection', (socket) => {
    socket.on('login', (data) => {
        if(user_pass_map[data.username]){
            if(user_pass_map[data.username] == data.password) login(socket, data)
            else socket.emit('login_failed')
        }
        else{
            user_pass_map[data.username] = data.password
            login(socket, data)
        }
    })
    socket.on('msg_send', (data) =>{
        data.from = id_user_map[socket.id]
        if(data.to) io.to(data.to).emit('msg_rcvd', data)
        else socket.broadcast.emit('msg_rcvd', data)
    })
})

server.listen(3000, () => console.log('Listening to port 3000'))
