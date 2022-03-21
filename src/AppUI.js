import React from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoItem from "./components/CreateTodoItem";
import { TodoContext } from "./TodoContext";
import { Modal } from "./modal";

function AppUI(){
    const {error, loading, todosSearched, completeTodos, deleteTodo, modal} = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>        
        <TodoList>
            {error &&  <p>Tenemos una situacion</p>}
            {loading &&  <p>Estamos cargando</p>}
            {(!loading && !todosSearched.length && !error) &&  <p>Crea tu primer todo</p>}
            {todosSearched.map(ToDo=>(
            <TodoItem key={ToDo.text} text={ToDo.text}
            onComplete={()=> completeTodos(ToDo.text)} 
            completed={ToDo.completed}
            onDelete={() => deleteTodo(ToDo.text)} />
            ))}        
        </TodoList>  
        {modal && <Modal/>}
                     
        <CreateTodoItem />
        </React.Fragment>
    );
}

export { AppUI }