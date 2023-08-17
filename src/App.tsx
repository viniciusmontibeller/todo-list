import { TodoList } from "./components/TodoList"
import { NewTodo } from "./components/NewTodo"
import { ThemeProvider } from "./context/ThemeContext"
import { useState, useEffect, useContext } from "react"
import { Header } from "./components/Header"
import { ThemeContext } from "./context/ThemeContext"
import './styles/main.scss'

import { ITodo } from "./types"

type AppContentProps = {
  children: React.ReactNode;
}

const AppContent = ({children}: AppContentProps) => {

  const { theme } = useContext(ThemeContext)

  return(
    <div className={`theme-${theme} app-wrapper`}>
      <div className="body">
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

function App() {

  const [todos, setTodos] = useState<ITodo[]>(() => {
    
    const savedTodos = localStorage.getItem("todos");
    
    if(savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleCreateTodo = (todo: ITodo) =>{
    if(todo.text !== "") {
      setTodos([...todos, todo]);
    } else {
      return
    }
    }

  const handleRemoveTodo = (id: number) => {
    const newTodoState: ITodo[] = todos.filter((todo: ITodo) => todo.id !== id)
    setTodos(newTodoState)
  }

  const handleUpdateTodo = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newTodoState: ITodo[] = [...todos]

    newTodoState.find((todo: ITodo) => todo.id === id)!.text = e.target.value

    setTodos(newTodoState)
  }

  const handleCompleteTodo = (id: number) => {
    const newTodosState: ITodo[] = [...todos]

    newTodosState.find((todo: ITodo) => todo.id === id)!.isCompleted = !newTodosState.find((todo: ITodo) => todo.id === id)!.isCompleted
    console.log(id)

    setTodos(newTodosState)
  }

  return (
    <ThemeProvider>
      <AppContent>
          <Header />
          <NewTodo
            todos={todos}
            handleCreateTodo={handleCreateTodo} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            handleCompleteTodo={handleCompleteTodo}
            handleRemoveTodo={handleRemoveTodo}
            handleUpdateTodo={handleUpdateTodo}
            />
          <p className="obs">Drag and drop to reorder list</p>
      </AppContent>
    </ThemeProvider>
  )
}

export default App
