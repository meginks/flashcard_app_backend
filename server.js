const express = require('express') 
const cors = require('cors') 
const wordRoutes = require('/routes/words.js')
const server = express() 

server.use(express.json())

// Middleware
server.use(cors()) 


// Routes
server.use('/parole', wordRoutes) 


// Sanity check 
server.get('/', (req, res) => {
    res.send(`<p>Buongiorno! </p>`);
});


module.exports = server;