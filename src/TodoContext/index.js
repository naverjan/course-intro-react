import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props){
    //Variables simples    

    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('Todos_v1', []);  
    const [search, setSearch] = React.useState('');
    const [modal, setModal] = React.useState(false);
  
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    
    //Todos buscados
    let todosSearched = [];
    if(!search.length >=  1){
      todosSearched = todos.sort((todo1, todo2)=>{ 
        return (todo1.completed === todo2.completed) ? 0 : (todo1.completed) ? 1 : -1;
      });
    }else{
      todosSearched = todos.filter(todo =>  {
        return todo.text.toLowerCase().includes(search.toLowerCase())
      });
    }
  
    const completeTodos = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text == text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;    
      saveTodos(newTodos.sort((todo1, todo2)=>{ 
        return (todo1.completed === todo2.completed) ? 0 : (todo1.completed) ? 1 : -1;
      }));
    }
  
    const deleteTodo = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text == text);    
      const newTodos = [...todos];
      newTodos.splice(todoIndex, todoIndex+1);    
      saveTodos(newTodos.sort((todo1, todo2)=>{ 
        return (todo1.completed === todo2.completed) ? 0 : (todo1.completed) ? 1 : -1;
      }));
    }      

    const createTodo = (text) =>{
      const newTodos = [...todos];
      newTodos.push({text: text, completed: false});
      saveTodos(newTodos.sort((todo1, todo2)=>{ 
        return (todo1.completed === todo2.completed) ? 0 : (todo1.completed) ? 1 : -1;
      }));
      setModal(false);
    }

    return (
        //Va a encapsular cualquier otro componente
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            search,
            setSearch,
            todos,
            error,
            loading,
            todosSearched,    
            completeTodos,
            deleteTodo,
            modal,
            setModal,
            createTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


<TodoContext.Consumer></TodoContext.Consumer>

export {TodoContext, TodoProvider}