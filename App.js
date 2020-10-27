import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./components/todoData";

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
    console.log(todoItems);
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App