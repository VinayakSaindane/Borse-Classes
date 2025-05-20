import { Link } from 'wouter';
import { useState } from 'react';
import { courses } from '@/lib/data';

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category.includes(activeTab));

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h6 className="text-primary font-medium mb-2">OUR PROGRAMS</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-poppins mb-4">Courses Designed for Success</h2>
          <p className="text-neutral-600">Comprehensive programs designed to help students excel academically and develop essential skills for the future.</p>
        </div>
        
        {/* Course Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
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
                  <Link href={`/courses/${course.id}`} className="px-4 py-2 bg-primary text-white rounded-md text-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* View All Courses Button */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-8">
            <Link href="/courses" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
              View All Courses <i className="bx bx-right-arrow-alt ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
