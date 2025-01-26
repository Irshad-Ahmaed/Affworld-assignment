// src/components/TaskBoard.js

import React, { useEffect, useState } from 'react';
import useTaskStore from '../stores/taskStore';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskColumn from './TaskColumn';
import AddTaskForm from './AddTaskForm';

const TaskBoard = () => {
  const { fetchTasks } = useTaskStore();
  const [show, setShow] = useState('hidden');

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const columns = ['Pending', 'Completed', 'Done'];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen w-full bg-gray-100">
        <div className="container mx-auto w-full">
          <div onClick={()=> {show == 'hidden' ? setShow('block') : setShow('hidden')}} className='text-blue-500 font-semibold my-2 bg-gray-200 cursor-pointer w-fit 
            p-2 rounded-lg hover:bg-blue-500 hover:text-gray-200 transition-all'
            >{show == 'hidden' ? 'Add Task' : 'Hide'}</div>
          <div className={`${show}`}><AddTaskForm /></div>
          <hr className='text-gray-300'/>
          <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
            {columns.map((column) => (
              <TaskColumn key={column} status={column} />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default TaskBoard;
