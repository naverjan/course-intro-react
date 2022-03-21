import '../styles/CreateTodoItem.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoItem(){        
    const {setModal} = React.useContext(TodoContext);    
    
    return(
        <section id='sectionCreateTodo'>
            <a 
                href='#miModal'
                className='btnCreate'    
                onClick={()=>setModal(true)}
            >
                Create New Task
            </a>
        </section>
    )
}

export default CreateTodoItem;