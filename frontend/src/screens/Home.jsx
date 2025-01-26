import React from 'react';
import TaskBoard from '../components/TaskBoard';

const Home = () => {
  return (
    <div className="min-h-screen xs:w-[55%] sm:w-[65%] md-w[80%] lg:w-[85%] xl:w-full max-w-[1000px] bg-gray-100 flex justify-center p-6">
      <TaskBoard />
    </div>
  );
};

export default Home;
