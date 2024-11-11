import React, { useRef, useState } from "react";
import { tasks as initTasks } from "../tasks";
import TaskItem from "./task-item";
import AddTask from "./add-task";
import SearchTask from "./search-task";

const TaskContainer = () => {
  const [tasks, setTasks] = useState(initTasks);
  const tasksRef = useRef(initTasks);
  const handleTaskCompletion = (id: number): void => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.status = "completed";
      }
      return task;
    });
    setTasks(() => [...updatedTasks]);
    tasksRef.current = updatedTasks;
  };
  const handleTaskDeletion = (id: number): void => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    tasksRef.current = updatedTask;
    setTasks(updatedTask);
  };
  const handleAddTask = (taskObj: any) => {
    const newTaskArray = [...tasks, taskObj];
    setTasks(newTaskArray);
    tasksRef.current = newTaskArray;
  };
  const handleSearch = (value: string): void => {
    if (value === "") {
      setTasks(tasksRef.current);
      return;
    }
    const filteredTask = tasksRef.current.filter((task) =>
      task.category.includes(value)
    );
    setTasks(filteredTask);
  };
  return (
    <div>
      <SearchTask onSearch={handleSearch} />
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            {...task}
            onTaskComplete={handleTaskCompletion}
            onTaskDelete={handleTaskDeletion}
          />
        );
      })}
      <AddTask onTaskAdd={handleAddTask} />
    </div>
  );
};

export default TaskContainer;
