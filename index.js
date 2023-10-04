const express = require('express')
const app = express();
const cors = require('cors')
const port = 5000;

const catagories = require('./data/catagories.json')


app.use(cors());

app.get('/', (req, res)=>{
    res.send("Hello talking from express server hello bro,");
});

app.get('/catagories', (req, res) => {
    res.send(catagories)
})

app.listen(port, ()=>{
    console.log(`Server is running successfully from port: ${port}`)
})