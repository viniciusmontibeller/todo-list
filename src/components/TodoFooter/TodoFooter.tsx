import { TodoFooterProps } from "../../types"

const TodoFooter = ({ todosLenght, filterType, setFilterType, handleRevomeCompletedTodos }:  TodoFooterProps) => {
    return (
        <footer className="footer">
            <p>{todosLenght} {todosLenght === 1 ? "item" : "items"} left</p>
            <div className="todos-state">
                <button className={`list-filter ${filterType === "All" ? "active" : ""}`} 
                    onClick={() => setFilterType("All")}>All</button>
                <button className={`list-filter ${filterType === "Active" ? "active" : ""}`} 
                    onClick={() => setFilterType("Active")}>Active</button>
                <button className={`list-filter ${filterType === "Completed" ? "active" : ""}`} 
                    onClick={() => setFilterType("Completed")}>Completed</button>
            </div>
            <button 
                className="complete-btn"
                onClick={handleRevomeCompletedTodos}>Clear Completed</button>
        </footer>
    )
}

export { TodoFooter } 