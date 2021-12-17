import './App.scss';
import React, { useRef, useState } from 'react'
import Header from './components/header/heder';
import Footer from './components/Footer/Footer';
import image from './Assets/Images/manhattan.jpg'
import Apple from './components/Lib/Svg/Apple';
import Todo from './components/todo/Todo';

function App() {
  const [todo,setTodo] = React.useState([
    {id:0, title:'men', isComplated: false},
    {id:1, title:'sen', isComplated: false}
  ])

  const hendeleDelete = (evt)=>{
    const {id} = evt.target.dataset;
    const filterTodo = todo.filter((row)=> row.id !== Number(id) )
    setTodo(filterTodo)
  }
  const hading = useRef(null)
  return (
    <>
      <Header />
      {/* <img src={image} alt="" /> */}
      <input type="text" placeholder='yozing' onKeyUp={(evt)=>{
        if(evt.code == 'Enter'){
          const newTodo = {
            id: todo[todo.length -1].id +1 || 0 ,
            title: evt.target.value.trim(),
            isComplated: false
          }
          setTodo([...todo,newTodo])
          evt.target.value = null
        }
      }}/>
      <ul ref={hading}  onClick={()=>{hading.current.classList.toggle('active')}}>
        {todo.length > 0 && todo.map((row)=>{
         return  <Todo key={row.id} arr={row} removeTodo={hendeleDelete}/>
        })}
        
      </ul>
      <Apple />
      <Apple width={150} height={150} />
      <Footer />
    </>
  );
}

export default App;
