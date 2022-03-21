import React from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter(){
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
 return(
   <section id='sectionTodoCounter'>
      <h1 className='title'>ToDo Machine</h1>
      <h3 className='subTitle'>Gestiona todas tus tareas</h3> 
      <p className='todoCounter'>Has completado {completedTodos} de las {totalTodos} tareas creadas</p>
   </section>
 );
}

export default TodoCounter;