import React from 'react';
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
    return(
        <div className="container mt-2">
            <h3 className="">ToDos List</h3>
            { /*Pass Todos List into TodoItem  which is comes from App.js
                <TodoItem todoItem = {props.todos[0]}/>*/ }
            {props.todos.length === 0? "No Todos To Display":
            props.todos.map((todoItem)=>
                {
                    return(
                        <TodoItem todoItem = {todoItem} key={todoItem.sno} onDelete = {props.onDelete}/>
                    )
                }
            )}
        </div>
    )
}