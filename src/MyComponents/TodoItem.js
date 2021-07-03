import React from 'react';

export const TodoItem = (props) => {
    return(
        <div className="card mt-2">
            <h4 className="card-header">{props.todoItem.tittle}</h4>
            <div className="card-body" >
                
                <p>{props.todoItem.desc}</p>
                <button className="btn btn-danger btn-sm" onClick = {() => {props.onDelete(props.todoItem)}}>Delete</button>
            </div>
        </div>
    )
}