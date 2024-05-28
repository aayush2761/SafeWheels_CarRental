import React, { useState, useEffect } from "react";
import './Review.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const removeTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const addTask = (email, user_review) => {
    const updatedTasks = [...tasks, { email, user_review }];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div className="rcontainer">
      <h1 className="heading">  Customer Review</h1>
      {tasks.map((task, index) => (
        <div className="task" key={index}>
          <div>
            <p>{task.email}</p>
            <span>{task.user_review}</span>
          </div>
          <button className="deleteBtn" onClick={() => removeTask(index)}>
            -
          </button>
        </div>
      ))}
      <TaskForm addTask={addTask} />
    </div>
  );
}

function TaskForm({ addTask }) {
  const [email, setEmail] = useState("");
  const [user_review, setUserReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !user_review) return;
    addTask(email, user_review);
    setEmail("");
    setUserReview("");
  };

  return (
    <form onSubmit={handleSubmit} className="review">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Review"
        value={user_review}
        onChange={(e) => setUserReview(e.target.value)}
      />
      <button type="submit">Add Review</button>
    </form>
  );
}

export default function Review(){
  return <TaskList />;
}
