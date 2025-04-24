import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NewCourses from './components/NewCourses';
import WeeklyActivity from './components/WeeklyActivity';
import DailySchedule from './components/DailySchedule';
import CourseProgress from './components/CourseProgress';
import RightSidebar from './components/RightSidebar';
import MyCourses from './components/MyCourses';
import MyClasses from './components/MyClasses';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import Calendar from './components/Calendar';
import Community from './components/Community';
import Settings from './components/Settings';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:pl-[300px] lg:pr-6">
          <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
          
          <Routes>
            <Route path="/" element={
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left and Middle Content */}
                <div className="lg:col-span-2 space-y-6">
                  <NewCourses />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <WeeklyActivity />
                    <DailySchedule />
                  </div>
                  
                  <CourseProgress />
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-1">
                  <RightSidebar />
                </div>
              </div>
            } />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/my-classes" element={<MyClasses />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/community" element={<Community />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
