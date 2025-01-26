// src/components/TaskCard.js

import React from 'react';
import { useDrag } from 'react-dnd';
import useTaskStore from '../stores/taskStore';

const TaskCard = ({ task }) => {
  const { deleteTask } = useTaskStore();
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task._id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTask(task._id);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending':
        return 'bg-yellow-100';
      case 'Completed':
        return 'bg-blue-100';
      case 'Done':
        return 'bg-green-100';
      default:
        return 'bg-blue-100';
    }
  };

  return (
    <div className={`p-4 mb-4 ${getStatusColor(task.status)} rounded shadow cursor-move`} ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>
      <button className="text-red-500 text-sm border rounded-xl p-1 mt-2 cursor-pointer hover:text-white hover:bg-red-400" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
