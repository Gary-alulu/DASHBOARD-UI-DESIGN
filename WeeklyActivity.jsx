import { useState } from 'react';

const WeeklyActivity = () => {
  const [selectedFilter, setSelectedFilter] = useState('Weekly');
  const activityData = [
    { day: 'Su', hours: 2 },
    { day: 'Mo', hours: 4 },
    { day: 'Tu', hours: 3 },
    { day: 'We', hours: 6 },
    { day: 'Th', hours: 4 },
    { day: 'Fr', hours: 5 },
    { day: 'Sa', hours: 3 },
  ];

  const maxHours = Math.max(...activityData.map(d => d.hours));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Hours Activity</h2>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">32</span>
            <span className="status-badge bg-mint-green text-green-700">
              +32% from last week
            </span>
          </div>
        </div>

        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-lime-active"
        >
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="flex items-end justify-between h-[200px]">
        {activityData.map((data) => (
          <div key={data.day} className="flex flex-col items-center gap-2 w-8">
            <div 
              className="w-full bg-lime-active rounded-t-lg transition-all duration-700 ease-out"
              style={{
                height: `${(data.hours / maxHours) * 160}px`,
                opacity: 0.8,
                animation: 'grow 1s ease-out'
              }}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400">{data.day}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes grow {
          from { height: 0; }
          to { height: ${(maxHours / maxHours) * 160}px; }
        }
      `}</style>
    </div>
  );
};

export default WeeklyActivity;