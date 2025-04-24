import { StarIcon } from '@heroicons/react/24/solid';
import { PencilIcon, BeakerIcon, CameraIcon } from '@heroicons/react/24/outline';

const NewCourses = () => {
  const courses = [
    {
      icon: PencilIcon,
      title: 'Content Writing',
      lessons: 12,
      rating: 4.8,
      category: 'Writing',
      bgColor: 'bg-pastel-yellow',
    },
    {
      icon: BeakerIcon,
      title: 'Usability Testing',
      lessons: 8,
      rating: 5.0,
      category: 'UX/UI',
      bgColor: 'bg-soft-purple',
    },
    {
      icon: CameraIcon,
      title: 'Photography',
      lessons: 10,
      rating: 4.6,
      category: 'Art and Design',
      bgColor: 'bg-mint-green',
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-poppins font-semibold">New Courses</h2>
        <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.title}
            className={`course-card ${course.bgColor} bg-opacity-20`}
          >
            <div className="flex items-start justify-between mb-4">
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

            <span className="inline-block px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm font-medium dark:text-gray-300">
              {course.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewCourses;