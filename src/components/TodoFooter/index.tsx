import { TodoFooterProps } from "../../types"

const TodoFooter = ({ todosLenght, filterType, setFilterType, handleRevomeCompletedTodos }:  TodoFooterProps) => {
    return (
        <footer className="footer">
            <span>{todosLenght} items left</span>
            <div className="todos-state">
                <p className={`list-filter ${filterType === "All" ? "active" : ""}`} 
                    onClick={() => setFilterType("All")}>All</p>
                <p className={`list-filter ${filterType === "Active" ? "active" : ""}`} 
                    onClick={() => setFilterType("Active")}>Active</p>
                <p className={`list-filter ${filterType === "Completed" ? "active" : ""}`} 
                    onClick={() => setFilterType("Completed")}>Completed</p>
            </div>
            <p onClick={handleRevomeCompletedTodos}>Clear Completed</p>
        </footer>
    )
}

export { TodoFooter } 