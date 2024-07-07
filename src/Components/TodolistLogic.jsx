
import { useState,useEffect } from 'react'

function TodolistLogic() {
    const [task,setTask]=useState("")
    const [arr, setArr] = useState(JSON.parse(localStorage.getItem('data')) || []);
    const [editId, setEditId] = useState(null)
    
    const handlesubmit=(e)=>{
      console.log("handlesubmit called!");
        e.preventDefault()
        if(editId ==null){
          let obj = {
            id : Date.now(),
            task : task,
          }
          setArr([...arr,obj])
        }else{
          const updt=arr.map((el)=>{
            if(el.id == editId){
              return {...el,task:task}
            }
            return el;
          })
          setArr(updt);
          setEditId(null);
        }
        setTask('')
    }
    const handleTaskChange = (e) => {
      setTask(e.target.value); 
    };

    const deleteTask = (id) => {
      setArr(arr.filter((el) => el.id !== id));
    };
    const editTask = (id) => {
      arr.map((el) => {
        if (el.id == id) {
          setTask(el.task);
          setEditId(id);
        }
        return el;
      });
    };
    
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
     },[arr])
  return (
    <>
    <div className='mt-3'>
        <h1 className='mb-3 border-bottom'>To Do List</h1>
      <form onSubmit={handlesubmit} className='d-flex gap-4'>
        <input type="text" value={task} placeholder='Enter task' onChange={handleTaskChange} className='form-control'/>
        <input type="submit" value={editId !== null ? 'Update' : 'Add'} className='btn btn-primary' />
      </form>
    </div>
    <div>
    {arr && arr.map((el) => (
          <div key={el.id} className='d-flex w-100 justify-content-between mt-3 border-bottom border-black py-3'>
            <h4>{el.task}</h4>
            <div className="btn-group d-flex">
              <button className='btn btn-info' onClick={()=>editTask(el.id)}>Edit</button>
              <button className='btn btn-danger' onClick={() => deleteTask(el.id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default TodolistLogic