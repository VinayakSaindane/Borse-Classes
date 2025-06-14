import { Link } from 'wouter';
import { upcomingClasses, studentAssignments } from '@/lib/data';

export default function PortalPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h6 className="text-primary font-medium mb-2">DIGITAL LEARNING</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-poppins mb-4">Student & Parent Portals</h2>
          <p className="text-neutral-600">Our digital platforms provide seamless access to learning resources, progress tracking, and communication tools.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-6">Student Portal Features</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-primary">
                  <i className="bx bx-book-open text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Digital Learning Materials</h4>
                  <p className="text-neutral-600 text-sm">Access to course notes, video lectures, practice worksheets, and supplementary resources.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-primary">
                  <i className="bx bx-calendar-check text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Assignment Management</h4>
                  <p className="text-neutral-600 text-sm">View upcoming assignments, submit completed work, and receive feedback from teachers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-primary">
                  <i className="bx bx-line-chart text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Progress Tracking</h4>
                  <p className="text-neutral-600 text-sm">Monitor academic progress with detailed performance analytics and improvement suggestions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-primary">
                  <i className="bx bx-chat text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Communication Tools</h4>
                  <p className="text-neutral-600 text-sm">Direct messaging with teachers, discussion forums, and announcement notifications.</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-6">Parent Portal Features</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-secondary">
                  <i className="bx bx-stats text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Academic Performance</h4>
                  <p className="text-neutral-600 text-sm">Real-time view of your child's academic progress, attendance, and assessment results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-secondary">
                  <i className="bx bx-credit-card text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Fee Management</h4>
                  <p className="text-neutral-600 text-sm">View payment history, upcoming dues, and make online payments securely.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-secondary">
                  <i className="bx bx-message-detail text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Teacher Communication</h4>
                  <p className="text-neutral-600 text-sm">Schedule parent-teacher meetings and communicate directly with instructors.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/student-portal" className="px-6 py-3 bg-primary text-white font-medium rounded-lg text-center hover:bg-primary-dark transition-colors shadow-md">
                Student Login
              </Link>
              <Link href="/parent-portal" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg text-center hover:bg-primary hover:text-white transition-colors">
                Parent Login
              </Link>
            </div>
          </div>
          
          <div className="relative">
            {/* Portal dashboard mockup */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-neutral-200">
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">BC</span>
                  </div>
                  <h4 className="text-white font-medium">Gurav Classes Student Portal</h4>
                </div>
                <div className="flex space-x-2">
                  <button className="text-white opacity-80 hover:opacity-100">
                    <i className="bx bx-bell text-xl"></i>
                  </button>
                  <button className="text-white opacity-80 hover:opacity-100">
                    <i className="bx bx-cog text-xl"></i>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                    <i className="bx bx-user text-2xl text-neutral-500"></i>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-900">Welcome back, Rohit!</h5>
                    <p className="text-sm text-neutral-500">Grade 10 • Science & Math</p>
                  </div>
                </div>
                
                <nav className="flex border-b border-neutral-200 mb-6">
                  <button className="px-4 py-2 border-b-2 border-primary text-primary font-medium">Dashboard</button>
                  <button className="px-4 py-2 text-neutral-500 hover:text-neutral-700">Courses</button>
                  <button className="px-4 py-2 text-neutral-500 hover:text-neutral-700">Assignments</button>
                  <button className="px-4 py-2 text-neutral-500 hover:text-neutral-700">Resources</button>
                </nav>
                
                <h5 className="font-medium text-neutral-900 mb-4">Your Upcoming Classes</h5>
                
                <div className="space-y-3 mb-6">
                  {upcomingClasses.map((classItem) => (
                    <div key={classItem.id} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex justify-between items-center">
                      <div>
                        <h6 className="font-medium text-neutral-900">{classItem.title}</h6>
                        <p className="text-sm text-neutral-500">{classItem.time}</p>
                      </div>
                      {classItem.isToday ? (
                        <button className="px-3 py-1 bg-primary text-white text-sm rounded">Join</button>
                      ) : (
                        <span className="px-3 py-1 bg-neutral-200 text-neutral-600 text-sm rounded">Upcoming</span>
                      )}
                    </div>
                  ))}
                </div>
                
                <h5 className="font-medium text-neutral-900 mb-4">Recent Assignments</h5>
                
                <div className="space-y-3">
                  {studentAssignments.map((assignment) => (
                    <div key={assignment.id} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded ${assignment.iconBgClass} flex items-center justify-center mr-3`}>
                          <i className={`bx ${assignment.icon} text-xl ${assignment.status === 'Completed' ? 'text-primary-dark' : 'text-secondary-dark'}`}></i>
                        </div>
                        <div>
                          <h6 className="font-medium text-neutral-900">{assignment.title}</h6>
                          <p className="text-sm text-neutral-500">Due: {assignment.dueDate}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 ${assignment.status === 'Completed' ? 'bg-accent text-white' : 'bg-secondary text-white'} text-sm rounded`}>
                        {assignment.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 bg-white p-4 rounded-lg shadow-lg z-10 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <i className="bx bx-devices text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Multi-device Access</h4>
                  <p className="text-sm text-neutral-600">Desktop, Tablet & Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
