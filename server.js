const { ApolloServer } = require("apollo-server");
const fs = require('fs');
const path = require('path');

const app = require('express')()
const http = require('http').createServer(app);

const io = require("socket.io")(http);
// const cfg = require('./config.json');

const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8')

const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers })

console.log(path.join(__dirname, "index.html"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "client/public/index.html"))
})

io.on('connection', (socket) => {
    // console.log(socket)
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        console.log(msg)
        console.log('message', + msg)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })


})

http.listen(3000, () => {
    console.log('listening on *:3000');
})

server.listen().then(({ url }) => {
    console.log(`server listening on ${url}`)
})