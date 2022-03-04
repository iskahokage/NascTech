const express = require ('express');
const router = require('./routes/router');
const cors = require('cors');
const morgan = require('morgan')
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000

// app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use('/api/v1', router)

const run = () =>{
    try {
        app.listen(PORT, ()=>{
            console.log(`server running on port: ${PORT}`);
        })
    } catch (error) {
        console.error(error)
    }
}
run();