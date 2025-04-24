import { BellIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'New Course Available',
      message: 'Advanced JavaScript Course is now available for enrollment.',
      time: '2 hours ago',
      type: 'course',
      isRead: false,
    },
    {
      id: 2,
      title: 'Assignment Due',
      message: 'Your React Fundamentals assignment is due tomorrow.',
      time: '5 hours ago',
      type: 'assignment',
      isRead: false,
    },
    {
      id: 3,
      title: 'Live Session Reminder',
      message: 'Your Web Development live session starts in 1 hour.',
      time: '1 day ago',
      type: 'session',
      isRead: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BellIcon className="w-6 h-6 text-lime-active dark:text-lime-active-dark" />
          <h1 className="text-2xl font-semibold">Notifications</h1>
        </div>
        <button className="text-sm text-gray-500 hover:text-lime-active dark:hover:text-lime-active-dark transition-colors">
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-xl transition-all duration-300 ${notification.isRead ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-700 shadow-glow-lime dark:shadow-glow-mint'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{notification.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {notification.message}
                </p>
                <span className="text-xs text-gray-400 mt-2 block">
                  {notification.time}
                </span>
              </div>
              {notification.isRead && (
                <CheckCircleIcon className="w-5 h-5 text-lime-active dark:text-lime-active-dark flex-shrink-0" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;