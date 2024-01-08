const express= require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const cors= require('cors');
const router=require("./routes/ToDoRoutes");

const app= express();
port= process.env.port || 5000;

app.use(cors());
app.use(express.json()); 

mongoose.connect(MONGODB_URL).then(()=>console.log("connected to mongoDB.......")).catch((error)=>console.log(error))

app.use(router);
app.listen(port,(req,res)=>{
    console.log(`Server started on port ${port}`);
})
