const express = require ('express');
const router = require('./routes/router');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000


app.use(express.json())
app.use('/api/v1', router)

const run = async() =>{
    try {
        app.listen(PORT, ()=>{
            console.log(`server running on port: ${PORT}`);
        })
    } catch (error) {
        console.error(error)
    }
}
run();