export interface ITodo {
    text: string;
    id: number;
    isCompleted: boolean;
}

export interface ITodoForm {
    todos: ITodo[];
    handleCreateTodo: (todo: ITodo) => void;
}

export interface ITodoList {
    todos: ITodo[];
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
    handleRemoveTodo: (id: number) => void;
    handleUpdateTodo: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    handleCompleteTodo: (id: number) => void;

}

export interface ITodoItem {
    todo: ITodo;
    handleRemoveTodo: (id: number) => void;
    handleUpdateTodo: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    handleCompleteTodo: (id: number) => void;
}