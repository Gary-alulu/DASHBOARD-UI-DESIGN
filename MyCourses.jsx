import { StarIcon, ClockIcon } from '@heroicons/react/24/solid';
import { PencilIcon, BeakerIcon, CameraIcon, CodeBracketIcon, ChartBarIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

const MyCourses = () => {
  const courses = [
    {
      icon: PencilIcon,
      title: 'Content Writing Mastery',
      progress: 75,
      lessons: 12,
      rating: 4.8,
      category: 'Writing',
      bgColor: 'bg-pastel-yellow',
      nextLesson: 'Writing Compelling Headlines',
      timeLeft: '45 min'
    },
    {
      icon: BeakerIcon,
      title: 'Advanced UX Research',
      progress: 60,
      lessons: 8,
      rating: 5.0,
      category: 'UX/UI',
      bgColor: 'bg-soft-purple',
      nextLesson: 'User Testing Methods',
      timeLeft: '30 min'
    },
    {
      icon: CameraIcon,
      title: 'Digital Photography',
      progress: 90,
      lessons: 10,
      rating: 4.6,
      category: 'Art and Design',
      bgColor: 'bg-mint-green',
      nextLesson: 'Advanced Composition',
      timeLeft: '20 min'
    },
    {
      icon: CodeBracketIcon,
      title: 'Web Development',
      progress: 40,
      lessons: 15,
      rating: 4.9,
      category: 'Programming',
      bgColor: 'bg-status-blue',
      nextLesson: 'Responsive Design',
      timeLeft: '60 min'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      progress: 25,
      lessons: 14,
      rating: 4.7,
      category: 'Analytics',
      bgColor: 'bg-status-orange',
      nextLesson: 'Statistical Analysis',
      timeLeft: '50 min'
    },
    {
      icon: PaintBrushIcon,
      title: 'Graphic Design',
      progress: 85,
      lessons: 11,
      rating: 4.8,
      category: 'Design',
      bgColor: 'bg-soft-purple',
      nextLesson: 'Color Theory',
      timeLeft: '35 min'
    },
  ];

  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-poppins font-semibold mb-2">My Courses</h1>
          <p className="text-gray-500 dark:text-gray-400">Continue learning from where you left off</p>
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <option>All Categories</option>
            <option>Writing</option>
            <option>UX/UI</option>
            <option>Art and Design</option>
            <option>Programming</option>
            <option>Analytics</option>
          </select>
          <select className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <option>Sort by Progress</option>
            <option>Sort by Rating</option>
            <option>Sort by Date</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.title}
            className={`course-card ${course.bgColor} bg-opacity-20 relative overflow-hidden`}
          >
            {/* Progress bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700">
              <div 
                className={`h-full ${course.bgColor} transition-all duration-300`}
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <div className="flex items-start justify-between mb-4 pt-3">
              <div className={`p-3 ${course.bgColor} rounded-xl`}>
                <course.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{course.lessons} lessons</span>
            </div>

            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{course.rating}</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="inline-block px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium dark:text-gray-300">
                {course.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {course.progress}% Complete
              </span>
            </div>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm font-medium mb-2">Next Lesson:</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">{course.nextLesson}</span>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="w-4 h-4" />
                  <span>{course.timeLeft}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCourses;