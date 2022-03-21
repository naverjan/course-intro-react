import '../styles/TodoItem.css';
import React from 'react';

function TodoItem(props){    

    return(
        <li>
            <span className={'todo-'.concat((props.completed) ? 'done' : 'still')}>{props.text}</span>
            <button onClick={props.onDelete}>Eliminar</button>
            <button onClick={props.onComplete}>Hecha</button>            
        </li>
    )
}

export default TodoItem;