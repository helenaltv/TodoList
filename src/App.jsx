import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Städa", done: false },
    { id: 2, title: "Diska", done: false },
    { id: 3, title: "Handla", done: false },
    { id: 4, title: "Tvätta", done: false },
  ]);

  function handleDone(taskId) {
    setTasks(function (prevTasks) {
      return prevTasks.map(function (task) {
        return task.id === taskId ? { ...task, done: !task.done } : task;
      });
    });
  }

  function handleDelete(taskId) {
    setTasks(function (prevTasks) {
      return prevTasks.filter(function (task) {
        return task.id !== taskId;
      });
    });
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {tasks.map(function (task) {
          return (
            <TodoList
              key={task.id}
              task={task}
              onDone={function () {
                handleDone(task.id);
              }}
              onDelete={function () {
                handleDelete(task.id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
