import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';

const RightSidebar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const assignments = [
    {
      title: 'Methods of data',
      deadline: '02 Jul, 10:30 AM',
      status: 'in-progress',
    },
    {
      title: 'Market Research',
      deadline: '05 Jul, 2:30 PM',
      status: 'completed',
    },
    {
      title: 'Data Collection',
      deadline: '15 Jul, 1:00 PM',
      status: 'upcoming',
    },
  ];

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'in-progress':
        return 'bg-status-blue/20 text-blue-700 border border-blue-200';
      case 'completed':
        return 'bg-mint-green/20 text-green-700 border border-green-200';
      case 'upcoming':
        return 'bg-status-orange/20 text-orange-700 border border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
    const today = new Date();
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div 
          key={`empty-${i}`}
          className="h-9 w-9"
        />
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === today.getDate() &&
        currentMonth.getMonth() === today.getMonth() &&
        currentMonth.getFullYear() === today.getFullYear();

      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isPast = date < new Date(today.setHours(0, 0, 0, 0));

      days.push(
        <button
          key={day}
          className={`
            flex items-center justify-center h-9 w-9 text-sm rounded-full transition-all duration-200
            ${isToday ? 'bg-lime-active text-white hover:bg-lime-active/90 ring-2 ring-lime-active/20' : ''}
            ${!isToday && !isPast ? 'hover:bg-gray-50 active:bg-gray-100 hover:text-lime-active' : ''}
            ${isPast ? 'text-gray-400 cursor-not-allowed' : ''}
          `}
          disabled={isPast}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="space-y-6 sticky top-6">
      {/* Calendar */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Calendar</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium">
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="text-center text-sm text-gray-500 dark:text-gray-400">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
      </div>

      {/* Assignments */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Assignments</h2>
          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {assignments.map((assignment) => (
            <div
              key={assignment.title}
              className="group flex items-center justify-between p-3.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 border border-transparent hover:border-lime-active/20 hover:shadow-sm"
            >
              <div>
                <h3 className="font-medium mb-1 group-hover:text-lime-active transition-colors">{assignment.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{assignment.deadline}</p>
              </div>
              <span
                className={`status-badge px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all duration-200 group-hover:shadow-inner ${getStatusBadgeColor(assignment.status)}`}
              >
                {assignment.status.replace('-', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;