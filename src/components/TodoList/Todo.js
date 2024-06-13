import React, { useState } from 'react';
import "./Todo.css";

const Todo = () => {
  
  const [todo, settodo] = useState(" ");
  const [maintask, setmaintask] = useState([]);

  const handlesub = (e) =>
  {
    e.preventDefault();
    settodo(" "); 
  };
  const handleadd =()=>
    {
      setmaintask([...maintask,{todo}])
      settodo(""); 
      
    }
  const handledelall=()=>
    {
      setmaintask([])
    }
    const handledelete=(i)=>
      {
           let taskdelete=[...maintask]
           taskdelete.splice(i, 1)
           setmaintask(taskdelete)
      }

  
      let taskdisplay=maintask.length > 0 ?
      maintask.map((t,i)=>
      <div className='taskdisplay-style'>
     <ul>
      <li>
        {t.todo}
      </li>
     </ul>
     <button type='button' className='btnstyle1' onClick={ ()=>
      {handledelete(i)}}>Delete</button>
     </div>
       ) :
       <h2>No Task Available</h2>
     

  return (
    <>
      <div className='maincontainer'>
        <div className='todoheading'>
          <h1>To-Do-List</h1>
        </div>
        <form onSubmit={handlesub}>
          <div className='parent'>
            <div className="inputcont">
              <input 
                type="text"  
                className="box" 
                placeholder="Enter text here..."
                value={todo}
                onChange={(e) => settodo(e.target.value)}
              />
            </div>
            <div className='butnbox'>
              <button type='button' className='btnstyle'onClick={handleadd} >Add</button>
           
              <button type='button' id="deleteall" className='btnstyle' onClick={handledelall}>Delete All</button>
            
            </div>
            <div className='list'>
              {taskdisplay}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Todo;

// Make a form, set input type,value and onchange for store text.
// Make a display-box for showing todo list.
// In display-box firstly write something or make a variable in JSX for store todo list in an array.
// Make usetstae for displaybox.
// Now, make a map function to display a todo list in from of array in display box.
// onclick addbutton-> setstate in a array format like  [...state and text in JSX from]
// onclick deletebutn-> state in form of ... stored in variable then apply splice function to delete index then setstate[...state]
