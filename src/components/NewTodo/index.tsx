// import Check from "../../assets/icon-check.svg"
import { useState } from "react"
import { ITodo, ITodoForm } from "../../types"

const NewTodo = ({ handleCreateTodo }: ITodoForm) => {
    const [input, setInput] = useState("")
    const [id, setId] = useState(Math.random() * 1000)

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo: ITodo = {
            text: input,
            id: id,
            isCompleted: false,
        }
        setId(Math.random() * 1000)
        handleCreateTodo(newTodo);
        setInput("")
    }

    return (
        <form className="new todo" onSubmit={submitHandler}>
            <button className="submit-btn" type="submit">
                {/* <img src={Check} /> */}
            </button>
            <input
            className="input"
            type="text" 
            placeholder="Create a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
        </form>
    )
}

export { NewTodo }