import React from "react";
import ReactDOM  from "react-dom";
import "./modal.css"
import { TodoContext } from "../TodoContext";

function Modal(){

    const [text, setText] = React.useState('');
    const {setModal, createTodo} = React.useContext(TodoContext);


    const onChangeText = (event) =>{
        let text = event.target.value;
        setText(text);            
    }


    return ReactDOM.createPortal(                
        <div id="miModal" className="modal">
            <div className="modal-contenido">
                <a onClick={() => setModal(false)} className="btnClose">X</a>
                <h2>Ingresa Tu Tarea</h2>
                <textarea type="text"
                 id="textTodo"
                 onChange={onChangeText}
                 />
                <button onClick={()=> createTodo(text)} className='btnCreate'>Crear Tarea</button>
            </div>  
        </div> 
        ,
        document.getElementById('modal')
    );
}

export {Modal};