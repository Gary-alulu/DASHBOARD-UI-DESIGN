import { ClockIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { VideoCameraIcon, ChatBubbleLeftIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const MyClasses = () => {
  const classes = [
    {
      title: 'Advanced Web Development',
      instructor: 'Dr. Sarah Johnson',
      time: '10:00 AM - 11:30 AM',
      date: 'Mon, Wed, Fri',
      students: 24,
      nextSession: 'React State Management',
      materials: ['Lecture Notes', 'Code Examples', 'Assignment 3'],
      bgColor: 'bg-soft-purple'
    },
    {
      title: 'UI/UX Design Principles',
      instructor: 'Prof. Michael Chen',
      time: '2:00 PM - 3:30 PM',
      date: 'Tue, Thu',
      students: 18,
      nextSession: 'User Research Methods',
      materials: ['Design Guidelines', 'Case Studies', 'Project Brief'],
      bgColor: 'bg-mint-green'
    },
    {
      title: 'Data Structures & Algorithms',
      instructor: 'Dr. Alex Martinez',
      time: '11:00 AM - 12:30 PM',
      date: 'Mon, Wed',
      students: 30,
      nextSession: 'Graph Algorithms',
      materials: ['Algorithm Examples', 'Practice Problems', 'Quiz 2'],
      bgColor: 'bg-status-blue'
    },
    {
      title: 'Mobile App Development',
      instructor: 'Prof. Emily Taylor',
      time: '3:00 PM - 4:30 PM',
      date: 'Tue, Thu',
      students: 22,
      nextSession: 'iOS Navigation Patterns',
      materials: ['API Documentation', 'Sample Code', 'Project Guidelines'],
      bgColor: 'bg-pastel-yellow'
    }
  ];

  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-poppins font-semibold mb-2">My Classes</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your active classes and upcoming sessions</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-lime-active dark:bg-lime-active-dark text-white rounded-lg hover:shadow-glow-lime transition-all duration-300">
            Join New Class
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.title}
            className={`course-card ${classItem.bgColor} bg-opacity-20`}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">{classItem.title}</h3>
              <span className="status-badge bg-lime-active dark:bg-lime-active-dark text-white">
                Active
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                <span>{classItem.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <span>{classItem.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="w-4 h-4" />
                <span>{classItem.students} students</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(classItem.instructor)}&background=random`}
                alt={classItem.instructor}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium">{classItem.instructor}</span>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <VideoCameraIcon className="w-5 h-5 text-lime-active dark:text-lime-active-dark" />
                <h4 className="font-medium">Next Session</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{classItem.nextSession}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:shadow-glow-lime transition-all duration-300">
                  <ChatBubbleLeftIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:shadow-glow-lime transition-all duration-300">
                  <DocumentTextIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              <button className="px-4 py-2 text-sm bg-lime-active dark:bg-lime-active-dark text-white rounded-lg hover:shadow-glow-lime transition-all duration-300">
                Join Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyClasses;