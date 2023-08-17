export type ITodo = {
    text: string;
    id: number;
    isCompleted: boolean;
}

export type ITodoForm = {
    todos: ITodo[];
    handleCreateTodo: (todo: ITodo) => void;
}

export type ITodoList = {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    handleRemoveTodo: (id: number) => void;
    handleUpdateTodo: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    handleCompleteTodo: (id: number) => void;
}

export type ITodoItem = {
    todo: ITodo;
    handleRemoveTodo: (id: number) => void;
    handleUpdateTodo: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    handleCompleteTodo: (id: number) => void;
}

export type TodoFooterProps = {
    todosLenght: number;
    filterType: string;
    setFilterType: React.Dispatch<React.SetStateAction<string>>;
    handleRevomeCompletedTodos: () => void;
}