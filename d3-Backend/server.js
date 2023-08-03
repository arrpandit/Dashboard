const express = require('express')
const data = require('./data.json')
const cors = require('cors')
let converter = require('json-2-csv');


const app = express();
app.use(cors())

app.get('/jsondata',async (req,res)=>{
    const csv = await converter.json2csv(data);
    res.send(csv);
})

app.listen(3000,()=>console.log("server runnig"))