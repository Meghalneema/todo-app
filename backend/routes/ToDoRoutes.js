const {Router}=require('express')
const {getToDo,saveToDo,updateToDo,deleteToDo}=require("../controllers/ToDoControllers");


const router=Router();

router.route("/").get(getToDo);
router.route("/save").post(saveToDo);
router.route("/update").put(updateToDo);
router.route("/delete").delete(deleteToDo);

// router.get('/', getToDo);
// router.get('/',(req,res)=>{
//     res.json("Hi there ...!!")
// })

module.exports=router
