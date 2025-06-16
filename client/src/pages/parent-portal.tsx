import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function ParentPortal() {
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
      description: "Welcome to Om Sai Classes Parent Portal!",
    });
  };

  // Mock data for student info and parent portal
  const parentData = {
    name: "Prakash Sharma",
    email: "prakash.sharma@example.com",
    children: [
      {
        id: 1,
        name: "Rohit Sharma",
        grade: "10",
        subjects: "Science & Mathematics",
        profilePic: null,
        attendance: 92,
        overallProgress: 78,
        recentGrades: [
          { subject: "Mathematics", grade: "A", percentage: 85 },
          { subject: "Physics", grade: "B+", percentage: 78 },
          { subject: "Chemistry", grade: "A-", percentage: 82 },
          { subject: "Biology", grade: "B", percentage: 75 }
        ],
        upcomingTests: [
          { id: 1, subject: "Mathematics", topic: "Integration", date: "October 18, 2023" },
          { id: 2, subject: "Chemistry", topic: "Organic Chemistry", date: "October 22, 2023" }
        ],
        latestRemarks: [
          { id: 1, teacher: "Mr. Patel", subject: "Mathematics", date: "October 5, 2023", content: "Rohit has shown excellent progress in solving complex problems. Needs to work on time management during tests." },
          { id: 2, teacher: "Ms. Joshi", subject: "Science", date: "October 2, 2023", content: "Active participant in class discussions. Did very well in the recent practical assessments." }
        ]
      }
    ],
    announcements: [
      { id: 1, title: "Parent-Teacher Meeting", date: "October 25, 2023", content: "The quarterly Parent-Teacher Meeting will be held on October 25, 2023. Schedule your slot through the portal." },
      { id: 2, title: "Fee Payment Reminder", date: "October 10, 2023", content: "The last date for payment of the second term fees is October 15, 2023. Please make the payment to avoid late charges." }
    ],
    payments: [
      { id: 1, description: "First Term Fees", amount: "₹25,000", date: "July 10, 2023", status: "Paid" },
      { id: 2, description: "Second Term Fees", amount: "₹25,000", date: "October 15, 2023", status: "Pending" }
    ]
  };

  const activeChild = parentData.children[0];

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
          <title>Parent Portal - Om Sai Classes</title>
          <meta name="description" content="Access your child's academic records, attendance, fee payments, and communicate with teachers." />
          <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        </Helmet>
        
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center">
                <span className="text-white text-2xl font-bold">BC</span>
              </div>
              <h2 className="mt-6 text-3xl font-bold text-neutral-900 font-poppins">Parent Portal</h2>
              <p className="mt-2 text-neutral-600">Log in to track your child's progress</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email/Parent ID</label>
                <input 
                  id="email" 
                  name="email" 
                  type="text" 
                  defaultValue="parent@example.com"
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
                  className="w-full px-4 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-secondary-dark transition-colors"
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
        <title>Parent Dashboard - Om Sai Classes</title>
        <meta name="description" content="Access your child's academic records, attendance, fee payments, and communicate with teachers." />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-50">
        {/* Portal Header */}
        <header className="bg-secondary text-white sticky top-0 z-40 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">BC</span>
              </div>
              <h1 className="text-white font-medium">Om Sai Classes Parent Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white opacity-80 hover:opacity-100">
                <i className="bx bx-bell text-xl"></i>
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-light text-white flex items-center justify-center">
                    <i className="bx bx-user text-sm"></i>
                  </div>
                  <span className="hidden md:inline">{parentData.name}</span>
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
                    <h5 className="font-medium text-neutral-900">{parentData.name}</h5>
                    <p className="text-sm text-neutral-500">{parentData.email}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 className="text-sm font-semibold text-neutral-700 mb-2">Your Children</h6>
                  <div className="space-y-2">
                    {parentData.children.map((child) => (
                      <div key={child.id} className="flex items-center p-2 bg-neutral-50 rounded-md">
                        <div className="w-8 h-8 rounded-full bg-secondary-light flex items-center justify-center mr-3">
                          <i className="bx bx-user-circle text-white"></i>
                        </div>
                        <div>
                          <h6 className="text-sm font-medium text-neutral-900">{child.name}</h6>
                          <p className="text-xs text-neutral-500">Grade {child.grade} • {child.subjects}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 bg-secondary-light">
                  <h3 className="font-medium text-secondary">Quick Access</h3>
                </div>
                <div className="p-4">
                  <nav className="space-y-1">
                    <a href="#dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-secondary-light text-secondary">
                      <i className="bx bx-home-alt mr-3"></i>
                      Dashboard
                    </a>
                    <a href="#progress" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-line-chart mr-3"></i>
                      Academic Progress
                    </a>
                    <a href="#attendance" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-calendar-check mr-3"></i>
                      Attendance
                    </a>
                    <a href="#fees" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-credit-card mr-3"></i>
                      Fee Payments
                    </a>
                    <a href="#messaging" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-neutral-700 hover:bg-neutral-100">
                      <i className="bx bx-message-square-detail mr-3"></i>
                      Teacher Communication
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
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary data-[state=active]:bg-transparent"
                  >
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger
                    value="academic"
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary data-[state=active]:bg-transparent"
                  >
                    Academic Progress
                  </TabsTrigger>
                  <TabsTrigger
                    value="fees"
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary data-[state=active]:bg-transparent"
                  >
                    Fee Payments
                  </TabsTrigger>
                  <TabsTrigger
                    value="communication"
                    className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary data-[state=active]:bg-transparent"
                  >
                    Communication
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="dashboard" className="mt-0">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <h2 className="text-xl font-bold text-neutral-900 mb-4">Welcome, {parentData.name}!</h2>
                      <p className="text-neutral-600 mb-4">Here's an overview of your child's performance and important updates.</p>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Child Performance Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <h4 className="text-sm font-medium text-neutral-700 mb-2">Attendance</h4>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-neutral-700">Current Term</span>
                            <span className="text-sm font-medium text-neutral-700">{activeChild.attendance}%</span>
                          </div>
                          <Progress value={activeChild.attendance} className="h-2" />
                          <p className="text-xs text-neutral-500 mt-2">Last updated: October 10, 2023</p>
                        </div>
                        
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <h4 className="text-sm font-medium text-neutral-700 mb-2">Overall Academic Progress</h4>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-neutral-700">Current Term</span>
                            <span className="text-sm font-medium text-neutral-700">{activeChild.overallProgress}%</span>
                          </div>
                          <Progress value={activeChild.overallProgress} className="h-2" />
                          <p className="text-xs text-neutral-500 mt-2">Based on test scores and assignments</p>
                        </div>
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Recent Grades</h3>
                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full divide-y divide-neutral-200">
                          <thead className="bg-neutral-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Subject
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Grade
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Percentage
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-neutral-200">
                            {activeChild.recentGrades.map((grade, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                                  {grade.subject}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                                  {grade.grade}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                                  {grade.percentage}%
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Announcements</h3>
                      <div className="space-y-3 mb-6">
                        {parentData.announcements.map((announcement) => (
                          <div key={announcement.id} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                            <div className="flex justify-between mb-2">
                              <h6 className="font-medium text-neutral-900">{announcement.title}</h6>
                              <span className="text-xs text-neutral-500">{announcement.date}</span>
                            </div>
                            <p className="text-sm text-neutral-600">{announcement.content}</p>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Upcoming Tests</h3>
                      <div className="space-y-3">
                        {activeChild.upcomingTests.map((test) => (
                          <div key={test.id} className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 flex justify-between items-center">
                            <div>
                              <h6 className="font-medium text-neutral-900">{test.subject} - {test.topic}</h6>
                              <p className="text-sm text-neutral-500">Date: {test.date}</p>
                            </div>
                            <Button size="sm" variant="outline">Remind Me</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="academic">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-neutral-900 mb-4">Academic Progress</h2>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Subject-wise Performance</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {activeChild.recentGrades.map((subject, index) => (
                          <div key={index} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                            <div className="flex justify-between mb-2">
                              <h6 className="font-medium text-neutral-900">{subject.subject}</h6>
                              <span className="px-2 py-1 bg-secondary-light text-secondary text-xs rounded-full">
                                Grade: {subject.grade}
                              </span>
                            </div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-neutral-700">Overall</span>
                              <span className="text-sm text-neutral-700">{subject.percentage}%</span>
                            </div>
                            <Progress value={subject.percentage} className="h-2" />
                            <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
                              <div className="bg-white p-2 rounded border border-neutral-200">
                                <div className="font-medium">85%</div>
                                <div className="text-neutral-500">Tests</div>
                              </div>
                              <div className="bg-white p-2 rounded border border-neutral-200">
                                <div className="font-medium">78%</div>
                                <div className="text-neutral-500">Assignments</div>
                              </div>
                              <div className="bg-white p-2 rounded border border-neutral-200">
                                <div className="font-medium">90%</div>
                                <div className="text-neutral-500">Participation</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Teacher Remarks</h3>
                      <div className="space-y-4">
                        {activeChild.latestRemarks.map((remark) => (
                          <div key={remark.id} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                            <div className="flex justify-between mb-2">
                              <h6 className="font-medium text-neutral-900">{remark.subject} - by {remark.teacher}</h6>
                              <span className="text-xs text-neutral-500">{remark.date}</span>
                            </div>
                            <p className="text-sm text-neutral-600">{remark.content}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="fees">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-neutral-900 mb-4">Fee Management</h2>
                      
                      <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 mb-6">
                        <h3 className="font-medium text-neutral-900 mb-2">Fee Summary</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-3 rounded border border-neutral-200 text-center">
                            <div className="text-sm text-neutral-500">Annual Fee</div>
                            <div className="text-xl font-bold text-neutral-900">₹50,000</div>
                          </div>
                          <div className="bg-white p-3 rounded border border-neutral-200 text-center">
                            <div className="text-sm text-neutral-500">Paid</div>
                            <div className="text-xl font-bold text-accent">₹25,000</div>
                          </div>
                          <div className="bg-white p-3 rounded border border-neutral-200 text-center">
                            <div className="text-sm text-neutral-500">Pending</div>
                            <div className="text-xl font-bold text-secondary">₹25,000</div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Payment History</h3>
                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full divide-y divide-neutral-200">
                          <thead className="bg-neutral-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Description
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Amount
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Date
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-neutral-200">
                            {parentData.payments.map((payment) => (
                              <tr key={payment.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                                  {payment.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                                  {payment.amount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                                  {payment.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    payment.status === 'Paid' 
                                      ? 'bg-accent-light text-accent' 
                                      : 'bg-secondary-light text-secondary'
                                  }`}>
                                    {payment.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Make a Payment</h3>
                      <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Select Fee</label>
                          <select className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary">
                            <option value="second_term">Second Term Fees - ₹25,000</option>
                            <option value="transport">Transport Fee - ₹5,000</option>
                            <option value="activity">Activity Fee - ₹2,000</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Payment Method</label>
                          <div className="flex space-x-4">
                            <div className="flex items-center">
                              <input id="card" name="payment_method" type="radio" checked className="h-4 w-4 text-secondary focus:ring-secondary border-neutral-300" />
                              <label htmlFor="card" className="ml-2 block text-sm text-neutral-700">
                                Credit/Debit Card
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input id="upi" name="payment_method" type="radio" className="h-4 w-4 text-secondary focus:ring-secondary border-neutral-300" />
                              <label htmlFor="upi" className="ml-2 block text-sm text-neutral-700">
                                UPI
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input id="netbanking" name="payment_method" type="radio" className="h-4 w-4 text-secondary focus:ring-secondary border-neutral-300" />
                              <label htmlFor="netbanking" className="ml-2 block text-sm text-neutral-700">
                                Net Banking
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Button className="bg-secondary hover:bg-secondary-dark">
                            Proceed to Payment
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="communication">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold text-neutral-900 mb-4">Teacher Communication</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="font-medium text-neutral-900 mb-4">Contact Teachers</h3>
                          <div className="space-y-4">
                            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 flex items-center">
                              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                                <i className="bx bx-user text-xl text-primary"></i>
                              </div>
                              <div className="flex-1">
                                <h6 className="font-medium text-neutral-900">Mr. Anand Patel</h6>
                                <p className="text-xs text-neutral-500">Mathematics</p>
                              </div>
                              <Button size="sm" variant="outline" className="ml-2">
                                <i className="bx bx-message-square-detail mr-1"></i> Message
                              </Button>
                            </div>
                            
                            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 flex items-center">
                              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                                <i className="bx bx-user text-xl text-primary"></i>
                              </div>
                              <div className="flex-1">
                                <h6 className="font-medium text-neutral-900">Ms. Priya Joshi</h6>
                                <p className="text-xs text-neutral-500">Science</p>
                              </div>
                              <Button size="sm" variant="outline" className="ml-2">
                                <i className="bx bx-message-square-detail mr-1"></i> Message
                              </Button>
                            </div>
                            
                            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 flex items-center">
                              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                                <i className="bx bx-user text-xl text-primary"></i>
                              </div>
                              <div className="flex-1">
                                <h6 className="font-medium text-neutral-900">Mr. Rajiv Kumar</h6>
                                <p className="text-xs text-neutral-500">Class Teacher</p>
                              </div>
                              <Button size="sm" variant="outline" className="ml-2">
                                <i className="bx bx-message-square-detail mr-1"></i> Message
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-neutral-900 mb-4">Schedule a Meeting</h3>
                          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-neutral-700 mb-1">Select Teacher</label>
                              <select className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary">
                                <option value="">Select a teacher</option>
                                <option value="anand_patel">Mr. Anand Patel (Mathematics)</option>
                                <option value="priya_joshi">Ms. Priya Joshi (Science)</option>
                                <option value="rajiv_kumar">Mr. Rajiv Kumar (Class Teacher)</option>
                              </select>
                            </div>
                            
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-neutral-700 mb-1">Preferred Date</label>
                              <input type="date" className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary" />
                            </div>
                            
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-neutral-700 mb-1">Preferred Time</label>
                              <select className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary">
                                <option value="">Select time slot</option>
                                <option value="morning">Morning (9 AM - 12 PM)</option>
                                <option value="afternoon">Afternoon (2 PM - 4 PM)</option>
                                <option value="evening">Evening (5 PM - 7 PM)</option>
                              </select>
                            </div>
                            
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-neutral-700 mb-1">Meeting Purpose</label>
                              <textarea rows={3} className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary" placeholder="Briefly describe the purpose of the meeting"></textarea>
                            </div>
                            
                            <div className="text-right">
                              <Button className="bg-secondary hover:bg-secondary-dark">
                                Request Meeting
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="font-medium text-neutral-900 mb-4">Communication History</h3>
                      <div className="space-y-4">
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <div className="flex justify-between mb-2">
                            <h6 className="font-medium text-neutral-900">Meeting with Mr. Anand Patel</h6>
                            <span className="text-xs text-neutral-500">September 20, 2023</span>
                          </div>
                          <p className="text-sm text-neutral-600 mb-2">Discussed Rohit's performance in mathematics and strategies to improve problem-solving skills.</p>
                          <div className="flex justify-between items-center">
                            <span className="px-2 py-1 bg-accent-light text-accent text-xs rounded-full">Completed</span>
                            <Button size="sm" variant="outline">View Notes</Button>
                          </div>
                        </div>
                        
                        <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                          <div className="flex justify-between mb-2">
                            <h6 className="font-medium text-neutral-900">Message to Ms. Priya Joshi</h6>
                            <span className="text-xs text-neutral-500">September 15, 2023</span>
                          </div>
                          <p className="text-sm text-neutral-600 mb-2">Inquiry about the upcoming science project requirements and deadline.</p>
                          <div className="flex justify-between items-center">
                            <span className="px-2 py-1 bg-accent-light text-accent text-xs rounded-full">Replied</span>
                            <Button size="sm" variant="outline">View Conversation</Button>
                          </div>
                        </div>
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
