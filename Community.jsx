import { useState } from 'react';
import { UserGroupIcon, ChatBubbleLeftIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: ChatBubbleLeftIcon },
    { id: 'study-groups', label: 'Study Groups', icon: UserGroupIcon },
    { id: 'mentors', label: 'Mentors', icon: AcademicCapIcon },
  ];

  const discussions = [
    {
      id: 1,
      title: 'Tips for React Performance Optimization',
      author: 'Sarah Chen',
      replies: 24,
      likes: 156,
      category: 'React',
    },
    {
      id: 2,
      title: 'Getting Started with TailwindCSS',
      author: 'Mike Johnson',
      replies: 18,
      likes: 92,
      category: 'CSS',
    },
    {
      id: 3,
      title: 'Best Practices for API Design',
      author: 'Alex Kumar',
      replies: 31,
      likes: 203,
      category: 'Backend',
    },
  ];

  const studyGroups = [
    {
      id: 1,
      name: 'Frontend Masters',
      members: 128,
      topic: 'Web Development',
      activeNow: 12,
    },
    {
      id: 2,
      name: 'Algorithm Study Circle',
      members: 85,
      topic: 'Data Structures',
      activeNow: 8,
    },
    {
      id: 3,
      name: 'UI/UX Design Group',
      members: 156,
      topic: 'Design',
      activeNow: 15,
    },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Emily White',
      expertise: 'Machine Learning',
      rating: 4.9,
      students: 234,
    },
    {
      id: 2,
      name: 'Prof. David Lee',
      expertise: 'Web Architecture',
      rating: 4.8,
      students: 189,
    },
    {
      id: 3,
      name: 'Lisa Anderson',
      expertise: 'UI/UX Design',
      rating: 4.7,
      students: 156,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-semibold mb-2">Community</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Connect with fellow learners, join study groups, and get help from mentors
        </p>

        {/* Tabs */}
        <div className="flex space-x-4 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-lime-active text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
        {activeTab === 'discussions' && (
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-lime-active/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium mb-1 hover:text-lime-active transition-colors">
                      {discussion.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Posted by {discussion.author}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                    {discussion.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{discussion.replies} replies</span>
                  <span>{discussion.likes} likes</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'study-groups' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studyGroups.map((group) => (
              <div
                key={group.id}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-lime-active/20 transition-colors"
              >
                <h3 className="font-medium mb-2">{group.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {group.topic}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {group.members} members
                  </span>
                  <span className="text-lime-active">
                    {group.activeNow} active now
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'mentors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-lime-active/20 transition-colors"
              >
                <h3 className="font-medium mb-1">{mentor.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {mentor.expertise}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-yellow-500">★ {mentor.rating}</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {mentor.students} students
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;