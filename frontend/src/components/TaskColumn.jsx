// src/components/TaskColumn.js

import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import useTaskStore from '../stores/taskStore';

const TaskColumn = ({ status }) => {
  const { updateTaskStatus, tasks } = useTaskStore();
  
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      if (item.status !== status) {
        updateTaskStatus(item.id, status);
      }
    },
  });

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="p-4 flex flex-col sm:w-[33%] w-[100%] bg-white shadow-lg rounded" ref={drop}>
      <h2 className="text-xl font-bold mb-4">{status}</h2>
      {filteredTasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;
