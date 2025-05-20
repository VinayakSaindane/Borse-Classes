import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Borse Classes</title>
        <meta name="description" content="Learn about Borse Classes' history, mission, teaching philosophy, and our team of experienced educators." />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h6 className="text-primary font-medium mb-2">ABOUT US</h6>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 font-poppins mb-4">Our Story & Mission</h1>
            <p className="text-lg text-neutral-600">Discover the journey, values, and people behind Borse Classes.</p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Borse Classes campus" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 font-poppins mb-6">Our History</h2>
              
              <p className="text-neutral-700 mb-4">
                Founded in 2008 by Dr. Anil Borse, a visionary educationist with over 25 years of teaching experience, Borse Classes began with a simple mission: to transform education from rote learning to conceptual understanding.
              </p>
              
              <p className="text-neutral-700 mb-4">
                What started as a small tutoring center with just 15 students has now evolved into a premier educational institution with multiple branches, serving thousands of students annually across Mumbai.
              </p>
              
              <p className="text-neutral-700 mb-4">
                Throughout our journey, we have maintained an unwavering commitment to educational excellence, continuously adapting our methodologies to meet the evolving needs of students while staying true to our core philosophy of nurturing both academic brilliance and character development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 font-poppins mb-6">Our Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-primary">
              <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-4">Our Mission</h3>
              <p className="text-neutral-700 mb-2">
                To provide high-quality education that empowers students to excel academically while developing critical thinking, problem-solving abilities, and strong character foundations.
              </p>
              <p className="text-neutral-700">
                We strive to create a learning environment that is engaging, supportive, and adaptive to each student's unique needs and potential.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-secondary">
              <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-4">Our Vision</h3>
              <p className="text-neutral-700 mb-2">
                To be recognized as the leading educational institution that transforms traditional learning paradigms and sets new standards of excellence in education.
              </p>
              <p className="text-neutral-700">
                We aim to nurture a generation of lifelong learners who are intellectually curious, socially responsible, and prepared to thrive in a rapidly changing world.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 font-poppins mb-6">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-bulb text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-poppins mb-2">Excellence</h3>
              <p className="text-neutral-600">
                We pursue excellence in all aspects of education, continuously raising the bar for ourselves and our students.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-user-voice text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-poppins mb-2">Integrity</h3>
              <p className="text-neutral-600">
                We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-heart text-3xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-poppins mb-2">Empathy</h3>
              <p className="text-neutral-600">
                We foster a culture of care, understanding, and respect for the diverse needs and backgrounds of our students.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 font-poppins mb-6">Meet Our Team</h2>
            <p className="text-neutral-600">Our team of dedicated educators and staff work tirelessly to provide the best learning experience for our students.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center overflow-hidden">
              <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300" 
                  alt="Dr. Anil Borse" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-poppins">Dr. Anil Borse</h3>
              <p className="text-primary font-medium mb-2">Founder & Director</p>
              <p className="text-neutral-600 text-sm mb-4">
                Ph.D. in Physics with over 25 years of teaching experience. Passionate about transforming education through innovative teaching methods.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bxl-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bxl-twitter text-xl"></i>
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bx-envelope text-xl"></i>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center overflow-hidden">
              <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300" 
                  alt="Dr. Priya Sharma" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-poppins">Dr. Priya Sharma</h3>
              <p className="text-primary font-medium mb-2">Academic Director</p>
              <p className="text-neutral-600 text-sm mb-4">
                Ph.D. in Mathematics with expertise in curriculum development. Leads our academic team and ensures high-quality educational delivery.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bxl-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bxl-twitter text-xl"></i>
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bx-envelope text-xl"></i>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center overflow-hidden">
              <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300" 
                  alt="Prof. Rajesh Mehta" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 font-poppins">Prof. Rajesh Mehta</h3>
              <p className="text-primary font-medium mb-2">Chief Science Instructor</p>
              <p className="text-neutral-600 text-sm mb-4">
                M.Sc. in Chemistry with 15 years of experience. Former IIT-JEE examiner who specializes in making complex scientific concepts accessible to students.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bxl-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bxl-twitter text-xl"></i>
                </a>
                <a href="#" className="text-neutral-500 hover:text-primary transition-colors">
                  <i className="bx bx-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#full-team" className="inline-flex items-center text-primary font-medium">
              View All Team Members <i className="bx bx-right-arrow-alt ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
