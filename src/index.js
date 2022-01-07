// dependencies
const express = require('express');

const cors = require('cors')

// express 
const app = express();

// database (temporary)

// cors

// endpoints
app.get('/', (req, res) => {
    // res.send('Backend Creditu')
    res.json(['player1', 'player2'])
})

// start the server
app.listen(3001, () => {
    console.log('listening on port 3001')
})
