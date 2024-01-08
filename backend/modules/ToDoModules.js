const mongoose=require("mongoose");

const ToDoSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true,
    }
})

module.exports=mongoose.model("ToDo",ToDoSchema);




// _id :'6593f91d012451108d16106b'
// text: "node.js"
// __v :0