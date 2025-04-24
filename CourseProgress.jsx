import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const CourseProgress = () => {
  const [filter, setFilter] = useState('Active');

  const courses = [
    {
      title: '3D Design Course',
      instructor: 'Marcus Andrews',
      timeRemaining: '45h 12m',
      progress: 45,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
    {
      title: 'Development Basics',
      instructor: 'Sarah Wilson',
      timeRemaining: '12h 30m',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm dark:shadow-glow-purple">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold dark:text-gray-100">Courses You're Taking</h2>
        
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none px-4 py-2 pr-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-lime-active"
          >
            <option>Active</option>
            <option>Completed</option>
            <option>Archived</option>
          </select>
          <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.title} className="p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:border-lime-active dark:hover:border-lime-active-dark dark:hover:shadow-glow-lime transition-all duration-300">
            <div className="flex items-center gap-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{course.instructor}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-32 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-lime-active dark:bg-lime-active-dark rounded-full transition-all duration-500 dark:shadow-glow-lime"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{course.progress}%</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{course.timeRemaining} left</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseProgress;