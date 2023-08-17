import Close from "../../assets/icon-cross.svg"
import Check from "../../assets/icon-check.svg"
import { ITodoItem } from "../../interfaces"
// import { useState } from "react"

const Todo = ({ todo, handleRemoveTodo, handleUpdateTodo, handleCompleteTodo }: ITodoItem) => {
    // const [editable, setEditable] = useState(true)

    return (
        <>
            <button className={`btn check ${todo.isCompleted ? "completed" : ""}`} onClick={() => handleCompleteTodo(todo.id)}>
                {todo.isCompleted ? <img src={Check}/> : <span></span>}
            </button>
                <input 
                    className={`input ${todo.isCompleted ? "completed" : ""}`}
                    value={todo.text}
                    onChange={(e) => handleUpdateTodo(e, todo.id)}
                    />
            <button className="close-btn" onClick={() => handleRemoveTodo(todo.id)}>
                <img src={Close} />
            </button>
        </>
    )
}
export { Todo }