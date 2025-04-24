import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    {
      title: 'Team Meeting',
      time: '09:00 AM - 10:30 AM',
      type: 'meeting',
    },
    {
      title: 'Project Deadline',
      time: '02:00 PM',
      type: 'deadline',
    },
    {
      title: 'Study Group',
      time: '04:00 PM - 05:30 PM',
      type: 'study',
    },
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'deadline':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'study':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
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

  const handleDateClick = (date) => {
    setSelectedDate(date);
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
          className="h-16 border-b border-r border-gray-200 dark:border-gray-700"
        />
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isToday =
        day === today.getDate() &&
        currentMonth.getMonth() === today.getMonth() &&
        currentMonth.getFullYear() === today.getFullYear();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={day}
          onClick={() => handleDateClick(date)}
          className={`
            h-16 p-1 border-b border-r border-gray-200 dark:border-gray-700 cursor-pointer
            hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
            ${isToday ? 'bg-lime-active/5' : ''}
            ${isSelected ? 'ring-2 ring-lime-active ring-inset' : ''}
          `}
        >
          <span className={`
            inline-flex items-center justify-center w-6 h-6 text-sm rounded-full
            ${isToday ? 'bg-lime-active text-white' : ''}
          `}>
            {day}
          </span>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-6">
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

        <div className="grid grid-cols-7 border-t border-l border-gray-200 dark:border-gray-700">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="h-12 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400 border-b border-r border-gray-200 dark:border-gray-700"
            >
              {day}
            </div>
          ))}
          {renderCalendar()}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Today's Events</h2>
          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="group flex items-center justify-between p-3.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200 border border-transparent hover:border-lime-active/20 hover:shadow-sm"
            >
              <div>
                <h3 className="font-medium mb-1 group-hover:text-lime-active transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{event.time}</p>
              </div>
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}
              >
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;