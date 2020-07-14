const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const compression = require('compression');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

const http = require('http').createServer(app);
const io = require("socket.io")(http);

app.use(routes)

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/pokedex";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
});

http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

process.on('SIGINT', () => {
    mongoose.connection.close().then(() => {
        console.log("Mongoose disconnected");
        process.exit(0);
    })
})