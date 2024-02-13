import './App.css'
import { useState } from 'react'
import TodoLi from './TodoLi';

export default function App(){
  const[newItem,setNewItem]=useState('');
  const[items,setItems]=useState([]);

  function addItem(){
    if(!newItem ) return alert('Add item in input !');

    const item = {
      id:Math.floor(Math.random()*1000),
      value:newItem
    }

    setItems(oldList=>[...oldList,item]);
    setNewItem('');
  }

  function deleteItem(id){
    const newArritem=items.filter(item=>item.id!==id);
    setItems(newArritem);
  }

  
  return(
    <>
    <h1>TODO List</h1>
    <div className='todo-main'>

      <input id= 'input'  
      type="text" placeholder='Add new item' 
      value={newItem}
      onChange={e=>setNewItem(e.target.value)}
      />

      <button onClick={addItem}>new todo</button>

      <ul>
        {items.map(item=>{
          <TodoLi key={item.id} item={item} deleteFunk={deleteItem}/>
        })}
      </ul>
    </div>
    </>
  )

  
}
