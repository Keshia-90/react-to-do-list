import { useState } from "react";
import "./App.css";
import TodoList from "./components/ToDoList";

const App =() => {
const [tasks, setTasks] = useState([]);
const [input, setInput] = useState("");
const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);   
    setInput("");
};

const deleteHandler = (index) => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    setTasks(storedTasks);
};

const handleKeyDown = (event) => {
    if (event.key === "Enter") {
    setTasks([...tasks, input]);
    setInput("");
    }
};

return (
    <div className="App">
    <h1>To-Do List</h1>

    <input className="tasks"
        type="text "
        value={input}
        placeholder="New Task"
        onKeyDown={handleKeyDown}
        onChange={(e) => {
        setInput(e.target.value);
        }}
    ></input>
    <button className="add" onClick={submitHandler}>Add To List</button>
    {tasks.map((task, index) => (
        <TodoList
        key={task}
        index={index}
        task={task}
        deleteHandler={deleteHandler}
        />
    ))}
    </div>
);
}

export default App;