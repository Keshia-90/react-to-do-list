import { useState } from "react";

const Todo = ({ task, deleteHandler, index }) => {
const [complete, setComplete] = useState(false);

return (
    <div>
    {complete ? (
        <h2 className="taskDone" style={{textDecoration: "line-through", color:"darkmagenta" }}>
        {task}
        </h2>
    ) : (
        <h2 className="newTask">{task}</h2>
    )}
    <button className="delete" onClick={() => deleteHandler(index)}>Delete</button>
    <button className="complete" onClick={() => setComplete(true)}>Complete</button>
    </div>
);
};

export default Todo;