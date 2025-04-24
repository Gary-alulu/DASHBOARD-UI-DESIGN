import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, UserGroupIcon, ChatBubbleLeftIcon, BellIcon, CalendarIcon, UsersIcon, Cog6ToothIcon, ArrowDownTrayIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, onClose }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };
  const location = useLocation();

  const menuItems = [
    { icon: HomeIcon, label: 'Dashboard', path: '/' },
    { icon: BookOpenIcon, label: 'My Courses', path: '/my-courses' },
    { icon: UserGroupIcon, label: 'My Classes', path: '/my-classes' },
    { icon: ChatBubbleLeftIcon, label: 'Messages', path: '/messages' },
    { icon: BellIcon, label: 'Notifications', path: '/notifications' },
    { icon: CalendarIcon, label: 'Calendar', path: '/calendar' },
    { icon: UsersIcon, label: 'Community', path: '/community' },
    { icon: Cog6ToothIcon, label: 'Settings', path: '/settings' },
    { icon: isDark ? SunIcon : MoonIcon, label: isDark ? 'Light Mode' : 'Dark Mode', onClick: toggleTheme },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-sidebar-dark p-6 flex flex-col z-50 transform transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-lime-active rounded-lg" />
          <span className="text-white font-poppins font-semibold text-xl">Eduplex</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            item.onClick ? (
              <button
                key={item.label}
                className="sidebar-link w-full text-left"
                onClick={item.onClick}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </Link>
            )
          ))}
        </nav>

        {/* Download App Card */}
        <div className="mt-6 p-4 bg-lime-active bg-opacity-10 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <ArrowDownTrayIcon className="w-6 h-6 text-lime-active" />
            <span className="text-xs text-lime-active font-semibold">NEW</span>
          </div>
          <h3 className="text-white font-semibold mb-1">Download App</h3>
          <p className="text-sm text-gray-400">Get our mobile app for a better experience</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;