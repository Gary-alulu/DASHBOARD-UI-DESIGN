import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

const DailySchedule = () => {
  const scheduleItems = [
    {
      title: 'Design System',
      type: 'Class',
      time: '10:30 AM',
      location: 'Room 2B',
      status: 'active',
    },
    {
      title: 'Typography',
      type: 'Test',
      time: '1:30 PM',
      location: 'Room 4A',
      status: 'upcoming',
    },
    {
      title: 'Visual Design',
      type: 'Class',
      time: '3:00 PM',
      location: 'Room 1C',
      status: 'upcoming',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'border-lime-active';
      case 'upcoming':
        return 'border-gray-300';
      default:
        return 'border-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm dark:shadow-glow-purple">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold dark:text-gray-100">Daily Schedule</h2>
        <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">View All</button>
      </div>

      <div className="space-y-4">
        {scheduleItems.map((item) => (
          <div
            key={item.title}
            className={`relative pl-4 border-l-4 ${getStatusColor(item.status)} p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-r-lg transition-all duration-300 dark:hover:shadow-glow-lime`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium dark:shadow-sm ${
                  item.type === 'Class' ? 'bg-blue-100 text-blue-700 dark:bg-status-blue-dark dark:text-white dark:shadow-glow-blue' : 'bg-orange-100 text-orange-700 dark:bg-status-orange-dark dark:text-white dark:shadow-glow-orange'
                }`}>
                  {item.type}
                </span>
              </div>
              <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1 mb-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySchedule;