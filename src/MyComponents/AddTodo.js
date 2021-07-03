import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [tittle,setTittle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!tittle)
        {
            alert("Tittle cann't be blank");
        }
        else if(!desc)
        {
            alert("Description cann't be blank");
        }
        else
        {
            props.addTodo(tittle,desc);
            setTittle("");
            setDesc("");
        }
    }
    return(
            <form className="container mt-2" onSubmit={submit}>
                <h4>Add Todo</h4>
                <div className="mb-3">
                    <label htmlFor="tittle" className="form-label">Todo Tittle</label>
                    <input type="text" value={tittle} onChange={(e)=>setTittle(e.target.value)} className="form-control" id="tittle" aria-describedby="tittleHelp"/>
                    <div id="tittle" className="form-text">Please Give a Tittle</div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-success">Submit</button>
            </form>

    )
}