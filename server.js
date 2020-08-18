const express = require('express');
const app = express();
const axios = require('axios')
const routes = require('./routes');
const mongoose = require('mongoose');
const compression = require('compression');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// app.use(routes)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
    // res.sendFile(path.join(__dirname, "../client/public/index.html"));
})


app.get('/getpokemon', async (req, res) => {
    console.log('route hit')
    const data = {};
    const url = `https://pokeapi.co/api/v2/pokemon/10`
    try {
        const response = await axios.get(url)
        console.log(response)
        // response.json()
    } catch (error) {
        console.log(error)
    }
})

const http = require('http').createServer(app);
const io = require("socket.io")(http);

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

// app.listen(PORT, () => {
//     console.log(`listening on ${PORT}`);
// })

http.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

process.on('SIGINT', () => {
    mongoose.connection.close().then(() => {
        console.log("Mongoose disconnected");
        process.exit(0);
    })
})