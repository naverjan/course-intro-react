import '../styles/TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch(){    
    const {search, setSearch} = React.useContext(TodoContext);

    const onSearchInputChance = (e) =>{
        setSearch(e.target.value)
    };

    return(
        <section id='sectionTodoSearch'>
            <input onChange={onSearchInputChance} type='text' placeholder='Escriba el ToDo a buscar' className='inputSearch'
                value={search}></input>                    
        </section>
    )
}

export default TodoSearch;