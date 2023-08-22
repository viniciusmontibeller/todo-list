// import Check from "../../assets/icon-check.svg"
import { useState } from "react"
import { ITodo, ITodoForm } from "../../types"

const NewTodo = ({ handleCreateTodo, todos }: ITodoForm) => {
    const [input, setInput] = useState("")
    const [id, setId] = useState(() => generateNewId())

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo: ITodo = {
            text: input,
            id: id,
            isCompleted: false,
        }
        setId(generateNewId())
        handleCreateTodo(newTodo);
        setInput("")
    }

    function generateNewId (){
        let newId = Math.random() * 1000;
        const todosIdList = todos.map((todo) => todo.id)
        if(todosIdList.includes(newId)){
            return newId = Math.random() * 1000;
        }
        return newId
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