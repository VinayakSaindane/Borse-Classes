import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { courses } from '@/lib/data';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category.includes(activeTab));

  return (
    <>
      <Helmet>
        <title>Courses & Programs - Gurav Classes</title>
        <meta name="description" content="Explore our comprehensive range of courses designed to help students excel in academics and competitive exams." />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h6 className="text-primary font-medium mb-2">OUR PROGRAMS</h6>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 font-poppins mb-4">Courses & Programs</h1>
            <p className="text-lg text-neutral-600">Comprehensive programs designed to help students excel academically and develop essential skills for the future.</p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            <button 
              className={`px-4 py-2 m-1 rounded-md ${activeTab === 'all' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
              onClick={() => setActiveTab('all')}
            >
              All Courses
            </button>
            <button 
              className={`px-4 py-2 m-1 rounded-md ${activeTab === 'primary' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
              onClick={() => setActiveTab('primary')}
            >
              Primary (6-10)
            </button>
            <button 
              className={`px-4 py-2 m-1 rounded-md ${activeTab === 'secondary' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
              onClick={() => setActiveTab('secondary')}
            >
              Secondary (11-12)
            </button>
            <button 
              className={`px-4 py-2 m-1 rounded-md ${activeTab === 'competitive' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
              onClick={() => setActiveTab('competitive')}
            >
              Competitive Exams
            </button>
            <button 
              className={`px-4 py-2 m-1 rounded-md ${activeTab === 'skills' ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
              onClick={() => setActiveTab('skills')}
            >
              Skill Development
            </button>
          </div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow animate-hover"
              >
                <div className="h-48 bg-neutral-100 relative overflow-hidden">
                  <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="w-full h-full object-cover" 
                  />
                  {course.isPopular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                      Popular
                    </div>
                  )}
                  {course.isNew && (
                    <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                      New Batch
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-neutral-500">{course.category[0].charAt(0).toUpperCase() + course.category[0].slice(1)}</span>
                    <div className="flex items-center">
                      <i className="bx bxs-star text-yellow-400 text-sm"></i>
                      <span className="text-sm ml-1">{course.rating} ({course.reviewCount})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{course.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-neutral-500">
                      <i className="bx bx-time mr-1"></i> {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-neutral-500">
                      <i className="bx bx-user mr-1"></i> {course.audience}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{course.price}</span>
                    <Link href="/admissions" className="px-4 py-2 bg-primary text-white rounded-md text-sm">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 font-poppins mb-4">Our Teaching Methodology</h2>
            <p className="text-neutral-600">At Gurav Classes, we believe in making learning an engaging and enriching experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <i className="bx bx-bulb text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Conceptual Learning</h3>
              <p className="text-neutral-600">
                We focus on building strong foundations by helping students understand core concepts rather than memorizing facts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <i className="bx bx-user text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Personalized Attention</h3>
              <p className="text-neutral-600">
                Our small batch sizes ensure that each student receives individual attention and guidance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <i className="bx bx-line-chart text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Regular Assessment</h3>
              <p className="text-neutral-600">
                Frequent tests and evaluations help us track progress and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white font-poppins mb-4">Ready to Begin Your Learning Journey?</h2>
              <p className="text-white text-opacity-90 mb-8">
                Join thousands of students who have transformed their academic performance with Gurav Classes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/admissions" className="px-6 py-3 bg-white text-primary font-medium rounded-lg text-center hover:bg-neutral-100 transition-colors shadow-md">
                  Enroll Today
                </Link>
                <Link href="/contact" className="px-6 py-3 border border-white text-white font-medium rounded-lg text-center hover:bg-white hover:text-primary transition-colors">
                  Contact for More Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
