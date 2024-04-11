const express = require('express');

const app = express();

const { todo,user } = require('C:\\Users\\kulu1\\Desktop\\To-Do-\\backend\\db.js');

const port =3000;

app.use(express.json());
app.listen(port,()=>{
    console.log(`listening on port${port}`)
});