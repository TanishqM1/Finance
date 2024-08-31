const express = require('express');
const cors = require('cors');
const mongose = require('mongoose');
const app = express();
const { readdirSync } = require('fs');

require('dotenv').config();


const PORT =  process.env.PORT

//DATABASE SETUP
const mongoose = require('mongoose');
const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    } catch (error) {
        console.log('Error Connecting Database');
    }
}

module.exports ={db}
//

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/' + route)))


app.get('/', (req,res)=> {
    res.send('nuhad ,123');
})



const server = () =>{
    
    db()
    app.listen(PORT, ()=> {

        console.log('listening to port:', PORT);

    })
}

server()