import { Todo } from "../Todo"
import { TodoFooter } from "../TodoFooter/TodoFooter";
import { ITodoList, ITodo } from "../../types";
import { useRef, useState } from "react";


const TodoList = ({todos, handleRemoveTodo, handleUpdateTodo, handleCompleteTodo, setTodos}: ITodoList) => {

    const [filterType, setFilterType] = useState("All")

    const dragItem = useRef<number | null>(null)
    const dragOverItem = useRef<number | null>(null)

    const handleSort = () => {
        let newTodosState = [...todos];

        const draggedItemContent = newTodosState.splice(dragItem.current!, 1)[0];

        newTodosState.splice(dragOverItem.current!, 0, draggedItemContent)

        dragItem.current = null
        dragOverItem.current = null

        setTodos(newTodosState)
    }

    const filterTodos = (filterType: string) => {
        switch (filterType){
            case "All":
            default:
                return todos;
            case "Active":
                return todos.filter((todo: ITodo) => todo.isCompleted !== true);
            case "Completed":
                return todos.filter((todo: ITodo) => todo.isCompleted === true);
        }
    }

    const handleRevomeCompletedTodos = () => {
        const newTodosState: ITodo[] = todos.filter((todo: ITodo) => todo.isCompleted !== true)

        setTodos(newTodosState)
    }
    
    return (
        <ul className="todo-list">
            {filterTodos(filterType).length > 0 && filterTodos(filterType).map((todo, index) => {
                return (
                    <li className="todo" key={index} 
                        draggable
                        onDragStart={() => dragItem.current = index}
                        onDragEnter={() => dragOverItem.current = index}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault}
                        >
                        <Todo 
                            todo={todo}
                            handleRemoveTodo={handleRemoveTodo}
                            handleUpdateTodo={handleUpdateTodo}
                            handleCompleteTodo={handleCompleteTodo}
                            />
                    </li>
                )
            })}
            <li>
                <TodoFooter 
                    todosLenght={todos.filter((todo: ITodo) => todo.isCompleted !== true).length}
                    setFilterType={setFilterType}
                    filterType={filterType}
                    handleRevomeCompletedTodos={handleRevomeCompletedTodos}
                    />
            </li>
        </ul>
    )
}

export { TodoList }