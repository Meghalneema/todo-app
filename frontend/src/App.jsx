// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import ToDo from './components/ToDo'
import { addToDO, getAllToDO, updateToDo , deleteToDo} from './utils/HandleApi'


function App() {
  const [todo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")


  useEffect(()=>{ 
    getAllToDO(setToDo)
  },[])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  };

  return (
    <div>
      {/* <div>Home page</div> */}
      <div className='App'></div>
      <div className='container'></div>
      <h1>ToDo App </h1>
      <div className='Top'>
        <input type='text' placeholder='Add ToDo....' value={text} onChange={(e) => setText(e.target.value)}/>
        
          <div className='Add' 
            onClick={isUpdating ? 
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) 
            : () => addToDO(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>  
        
        <div className='List'>
          {todo.map((item) => (<ToDo 
          key={item._id} 
          text={item.text} 
          updateMode={()=> updateMode(item._id,item.text)}
          deleteToDo={()=> deleteToDo(item._id,setToDo)}/>))}


        </div>

      </div>
    </div>
  )
}

export default App


// <div className='Add' onClick={isUpdating ?() => updateToDo(toDoId,text,setToDo,setText,setIsUpdating) : ()=>addToDO(text,setText,setToDo)}>
//           {isUpdating ? "update":"Add"}
//           </div>



// <ToDo text="Hi"/>
//           <ToDo text="Hello"/>
//           <ToDo text="world"/>
