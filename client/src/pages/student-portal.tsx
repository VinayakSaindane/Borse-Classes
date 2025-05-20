import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { upcomingClasses, studentAssignments } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function StudentPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Simulate authentication check
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    toast({
      title: "Login Successful",
      description: "Welcome back to Borse Classes Student Portal!",
    });
  };

  // Mock data for student profile
  const studentData = {
    name: "Rohit Sharma",
    grade: "10",
    subjects: "Science & Mathematics",
    enrollmentDate: "August 15, 2023",
    profilePic: null,
    attendance: 92,
    overallProgress: 78,
    scores: [
      { subject: "Mathematics", score: 85 },
      { subject: "Physics", score: 78 },
      { subject: "Chemistry", score: 82 },
      { subject: "Biology", score: 75 }
    ],
    announcements: [
      { id: 1, title: "Mid-term Tests Schedule", date: "October 10, 2023", content: "Mid-term tests will be conducted from October 15 to October 20. Please check your class schedule for the exact timings." },
      { id: 2, title: "Science Exhibition Registration", date: "October 5, 2023", content: "Registrations for the Annual Science Exhibition are now open. Interested students can register through the Events tab." }
    ],
    studyMaterials: [
      { id: 1, title: "Trigonometry Formulas", type: "PDF", date: "September 28, 2023" },
      { id: 2, title: "Chemical Reactions Video Lecture", type: "Video", date: "September 25, 2023" },
      { id: 3, title: "Physics Problem Set 5", type: "PDF", date: "September 20, 2023" }
    ]
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Student Portal - Borse Classes</title>
          <meta name="description" content="Access your personal student dashboard, view course materials, check grades, and manage assignments." />
          <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        </Helmet>
        
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center">
                <span className="text-white text-2xl font-bold">BC</span>
              </div>
              <h2 className="mt-6 text-3xl font-bold text-neutral-900 font-poppins">Student Portal</h2>
              <p className="mt-2 text-neutral-600">Log in to access your personal dashboard</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email/Student ID</label>
                <input 
                  id="email" 
                  name="email" 
                  type="text" 
                  defaultValue="student@example.com"
                  required 
                  className="mt-1 w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700">Password</label>
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  defaultValue="password123"
                  required 
                  className="mt-1 w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    id="remember-me" 
                    name="remember-me" 
                    type="checkbox" 
                    className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded" 
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-primary hover:text-primary-dark">
                  Forgot password?
                </a>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Log in
                </button>
                <p className="mt-4 text-center text-sm text-neutral-600">
                  <span className="mr-1">For demonstration, click Log in with the default credentials</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Student Dashboard - Borse Classes</title>
        <meta name="description" content="Access your personal student dashboard, view course materials, check grades, and manage assignments." />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-50">
        {/* Portal Header */}
        <header className="bg-primary text-white sticky top-0 z-40 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-sm">BC</span>
              </div>
              <h1 className="text-white font-medium">Borse Classes Student Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white opacity-80 hover:opacity-100">
                <i className="bx bx-bell text-xl"></i>
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-light text-white flex items-center justify-center">
                    <i className="bx bx-user text-sm"></i>
                  </div>
                  <span className="hidden md:inline">{studentData.name}</span>
                  <i className="bx bx-chevron-down"></i>
                </button>
                <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg invisible group-hover:visible transition-all">
                  <div className="py-1">
                    <a href="#profile" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Profile</a>
                    <a href="#settings" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Settings</a>
                    <Link href="/login" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Sign out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
                    <i className="bx bx-user text-3xl text-neutral-500"></i>
                  </div>
                  <div>
                    <h5 className="font-medium text-neutral-900">{studentData.name}</h5>
                    <p className="text-sm text-neutral-500">Grade {studentData.grade} • {studentData.subjects}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700">Attendance</span>
                      <span className="text-sm font-medium text-neutral-700">{studentData.attendance}%</span>
                    </div>
                    <Progress value={studentData.attendance} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700">Overall Progress</span>
                      <span className="text-sm font-medium text-neutral-700">{studentData.overallProgress}%</span>
                    </div>
                    <Progress value={studentData.overallProgress} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 bg-primary-light">
                  <h3 className="font-medium text-primary">Quick Access</h3>
                </div>
                <div className="p-4">
                  <nav className="space-y-1">
                    <a href="#dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary-light text-primary">
                      <i className="bx bx-home-alt mr-3"></i>
                      Dashboard
                    </a>
                    <a href="#courses" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-book mr-3"></i>
                      My Courses
                    </a>
                    <a href="#assignments" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-task mr-3"></i>
                      Assignments
                    </a>
                    <a href="#resources" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-file mr-3"></i>
                      Resources
                    </a>
                    <a href="#grades" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-bar-chart-alt-2 mr-3"></i>
                      Grades
                    </a>
                    <a href="#messages" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-message-square-detail mr-3"></i>
                      Messages
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="dashboard">
                <TabsList className="mb-6 p-0 border-b border-neutral-200 w-full rounded-none bg-transparent">
                  <TabsTrigger
                    value="dashboard"
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent"
                  >
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger
                    value="courses"
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent"
                  >
                    Courses
                  </TabsTrigger>
                  <TabsTrigger
                    value="assignments"
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent"
                  >
                    Assignments
                  </TabsTrigger>
                  <TabsTrigger
                    value="resources"
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent"
                  >
                    Resources
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="dashboard" className="mt-0">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-xl font-bold text-neutral-900 mb-4">Welcome back, {studentData.name}!</h2>
                      <p className="text-neutral-600 mb-4">Here's a summary of your recent activity and upcoming events.</p>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Your Upcoming Classes</h3>
                      <div className="space-y-3 mb-6">
                        {upcomingClasses.map((classItem) => (
                          <div key={classItem.id} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex justify-between items-center">
                            <div>
                              <h6 className="font-medium text-neutral-900">{classItem.title}</h6>
                              <p className="text-sm text-neutral-500">{classItem.time}</p>
                            </div>
                            {classItem.isToday ? (
                              <Button size="sm" className="px-3 py-1 h-auto">Join</Button>
                            ) : (
                              <span className="px-3 py-1 bg-neutral-200 text-neutral-600 text-sm rounded">Upcoming</span>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Announcements</h3>
                      <div className="space-y-3 mb-6">
                        {studentData.announcements.map((announcement) => (
                          <div key={announcement.id} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                            <div className="flex justify-between mb-2">
                              <h6 className="font-medium text-neutral-900">{announcement.title}</h6>
                              <span className="text-xs text-neutral-500">{announcement.date}</span>
                            </div>
                            <p className="text-sm text-neutral-600">{announcement.content}</p>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Recent Assignments</h3>
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
                    
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h3 className="font-medium text-neutral-900 mb-4">Performance Overview</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {studentData.scores.map((subject, index) => (
                          <div key={index} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                            <div className="flex justify-between mb-2">
                              <h6 className="font-medium text-neutral-900">{subject.subject}</h6>
                              <span className="font-medium text-neutral-900">{subject.score}%</span>
                            </div>
                            <Progress value={subject.score} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="courses">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-neutral-900 mb-4">My Courses</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-4">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded bg-primary-light flex items-center justify-center mr-3">
                              <i className="bx bx-math text-xl text-primary"></i>
                            </div>
                            <h3 className="font-medium text-neutral-900">Mathematics</h3>
                          </div>
                          <p className="text-sm text-neutral-600 mb-3">Advanced concepts in Algebra, Trigonometry, and Calculus.</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">Progress: 75%</span>
                            <Button size="sm" variant="outline">View Course</Button>
                          </div>
                        </div>
                        
                        <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-4">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded bg-secondary-light flex items-center justify-center mr-3">
                              <i className="bx bx-atom text-xl text-secondary"></i>
                            </div>
                            <h3 className="font-medium text-neutral-900">Science</h3>
                          </div>
                          <p className="text-sm text-neutral-600 mb-3">Comprehensive study of Physics, Chemistry, and Biology.</p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-neutral-500">Progress: 68%</span>
                            <Button size="sm" variant="outline">View Course</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="assignments">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-neutral-900 mb-4">Assignment Manager</h2>
                      <div className="space-y-4">
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-medium text-neutral-900">Quadratic Equations Set 3</h3>
                            <span className="px-3 py-1 bg-accent text-white text-xs rounded-full">Completed</span>
                          </div>
                          <p className="text-sm text-neutral-600 mb-2">Solve the given set of 10 quadratic equations using the methods taught in class.</p>
                          <div className="flex justify-between text-xs">
                            <span className="text-neutral-500">Due: Oct 15, 2023</span>
                            <span className="text-neutral-500">Submitted: Oct 12, 2023</span>
                          </div>
                        </div>
                        
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-medium text-neutral-900">Chemical Equations Balancing</h3>
                            <span className="px-3 py-1 bg-secondary text-white text-xs rounded-full">Pending</span>
                          </div>
                          <p className="text-sm text-neutral-600 mb-2">Balance the given set of 15 chemical equations and identify the reaction types.</p>
                          <div className="flex justify-between text-xs">
                            <span className="text-neutral-500">Due: Oct 18, 2023</span>
                            <Button size="sm">Submit Assignment</Button>
                          </div>
                        </div>
                        
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-medium text-neutral-900">Physics Numerical Problems</h3>
                            <span className="px-3 py-1 bg-neutral-200 text-neutral-600 text-xs rounded-full">Upcoming</span>
                          </div>
                          <p className="text-sm text-neutral-600 mb-2">Solve the numerical problems related to motion, force, and energy.</p>
                          <div className="flex justify-between text-xs">
                            <span className="text-neutral-500">Due: Oct 25, 2023</span>
                            <span className="text-neutral-500">Available from: Oct 20, 2023</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="resources">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-neutral-900 mb-4">Learning Resources</h2>
                      <div className="space-y-4">
                        {studentData.studyMaterials.map((material, index) => (
                          <div key={index} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded bg-primary-light flex items-center justify-center mr-3">
                                <i className={`bx ${material.type === 'PDF' ? 'bx-file-pdf' : 'bx-video'} text-xl text-primary`}></i>
                              </div>
                              <div>
                                <h3 className="font-medium text-neutral-900">{material.title}</h3>
                                <p className="text-xs text-neutral-500">Added: {material.date}</p>
                              </div>
                            </div>
                            <Button size="sm">
                              <i className="bx bx-download mr-1"></i> Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
