import React, { useState } from "react";

interface addTasksProps {
  onTaskAdd: (taskObj: any) => void;
}

const AddTask = ({ onTaskAdd }: addTasksProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTask = () => {
    const taskObj = {
      id: Date.now(),
      title,
      description,
      category,
      status: "pending",
    };
    onTaskAdd(taskObj);
    handleCancel();
  };
  const handleCancel = () => {
    setDescription("");
    setTitle("");
    setCategory("");
  };
  return (
    <div className="add-task-container">
      <div>Add Task</div>
      <div>
        <label>Title</label>
        <input
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Category</label>
        <input
          placeholder="Add Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button onClick={handleAddTask}>Add</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default AddTask;
