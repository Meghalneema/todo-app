const ToDo=require("../modules/ToDoModules");

const getToDo = async (req, res) => {                 //module.exports.getToDo
    const todo=await ToDo.find()
    res.send(todo);
};

const saveToDo = async (req, res) => {               
    const {text}=req.body;
    ToDo.create({text}).then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.send(data);
    })
};

const updateToDo = async (req, res) => {               
    const {_id,text}=req.body;
    ToDo.findByIdAndUpdate(_id,{text})
    .then(()=> res.send("updated successfully"))
    .catch((err) => console.log(err))
};

const deleteToDo = async (req, res) => {               
    const {_id}=req.body;
    ToDo.findByIdAndDelete(_id)
    .then(()=> res.send("deleted successfully"))
    .catch((err) => console.log(err))
};

module.exports={getToDo,saveToDo,updateToDo,deleteToDo}
