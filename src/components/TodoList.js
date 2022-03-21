import React from 'react';
import '../styles/TodoList.css';

function TodoList(props){
    return(
        <section id='sectionTodoList'>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoList;