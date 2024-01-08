import axios from 'axios'

const baseUrl = "http://localhost:5001";

const getAllToDO=(setToDo)=>{
    axios.get(`${baseUrl}`).then(({data})=>{
        console.log("data getAllToDo-- ",data);
        setToDo(data)
    })
}

const addToDO=(text,setText,setToDo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then(({data})=>{
        console.log("data addToDo-- ",data);
        setText("")
        getAllToDO(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios.put(`${baseUrl}/update`,{_id:toDoId, text})              
      .then(({data}) => {
        setText("")
        console.log("data updateToDo-- ",data);
        setIsUpdating(false)
        getAllToDO(setToDo)
      })
      .catch((err) => console.log(err));
  };

const deleteToDo = (_id, setToDo) => {
    axios.delete(`${baseUrl}/delete`, { data: { _id } })              
      .then(({ data }) => {
        console.log("data deleteToDo-- ", data);
        getAllToDO(setToDo);
      })
      .catch((err) => console.log(err));
};  

export{getAllToDO,addToDO,updateToDo,deleteToDo}




// const addToDO = (text, setText, setToDo) => {
//     axios.post(`${baseUrl}/save`, { text })
//       .then(({ data }) => {
//         console.log("data-- ", data);
//         setText("");
//         getAllToDO(setToDo);
//       })
//       .catch((err) => {
//         console.error("Error adding ToDo:", err);
//       });
//   };

// const deleteToDo = (_id, setToDo) => {
//     axios.delete(`${baseUrl}/delete`,{_id})              
//       .then(({data}) => {
//         console.log("data deleteToDo-- ",data);
//         getAllToDO(setToDo)
//       })
//       .catch((err) => console.log(err));
//   };