import { ReactComponent as Close } from "../../assets/icon-cross.svg"
import { ReactComponent as Check } from "../../assets/icon-check.svg"
import { ITodoItem } from "../../types"

const Todo = ({ todo, handleRemoveTodo, handleUpdateTodo, handleCompleteTodo }: ITodoItem) => {

    return (
        <>
            <button 
                aria-label="Mark todo as completed"
                className={`btn check ${todo.isCompleted ? "completed" : ""}`} 
                onClick={() => handleCompleteTodo(todo.id)}>
                {todo.isCompleted ? <Check/> : <span/>}
            </button>
                {/* <p 
                    className={`input ${todo.isCompleted ? "completed" : ""}`} 
                    contentEditable={true}
                    >{todo.text}</p> */}
                <input 
                    className={`input ${todo.isCompleted ? "completed" : ""}`}
                    value={todo.text}
                    onChange={(e) => handleUpdateTodo(e, todo.id)}
                    />
            <button 
                aria-label="Delete todo"
                className="close-btn" 
                onClick={() => handleRemoveTodo(todo.id)}>
                <Close />
            </button>
        </>
    )
}
export { Todo }