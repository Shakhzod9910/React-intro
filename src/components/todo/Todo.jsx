function Todo({ arr, removeTodo }){
    return (
        <div className="lists">
            <li>{arr.title}</li>
            <button data-id={arr.id} onClick={(evt)=>removeTodo(evt)}>X</button>
        </div>
    );
    
}

export default Todo