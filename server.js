require('dotenv').config({ path: './.env' });
const express = require('express');
const app = express();
const routes = require('./routes');
const session = require('express-session')
const passport = require('passport')
const compression = require('compression');

const connectDb = require('./utils/connectDb');
const PORT = process.env.PORT || 3001;

connectDb()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(
    session({
        secret: process.env.SESSION_SECRET || "the cat ate my keyboard",
        resave: true,
        saveUninitialized: true
    }))
app.use(passport.initialize());
app.use(passport.session());

app.use(routes)


// const http = require('http').createServer(app);
// const io = require("socket.io")(http);

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg)
//     })
//     socket.on('disconnect', () => {
//         console.log('user disconnected')
//     });
// });

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})