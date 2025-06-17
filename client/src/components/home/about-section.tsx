import { Link } from 'wouter';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h6 className="text-primary font-medium mb-2">ABOUT US</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-poppins mb-4">Nurturing Excellence Since 1981</h2>
          <p className="text-neutral-600">Discover our journey, mission, and the passionate team behind Borse Classes.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                alt="Modern learning environment at Borse Classes" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-10 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <i className="bx bx-medal text-3xl text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900">Award Winning</h4>
                    <p className="text-sm text-neutral-600">Excellence in Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-6">Our Story & Mission</h3>
            
            <p className="text-neutral-700 mb-4">
              Founded in 1981 by Mr. Dudhaji Borse, a visionary educationist with over 45 years of teaching experience, Borse Classes began with a simple mission: to transform education from rote learning to conceptual understanding.
            </p>
            
            <p className="text-neutral-700 mb-6">
              What started as a small tutoring center with just 20 students has now evolved into a premier educational institution , serving hundreds of students annually. Our teaching methodology blends traditional wisdom with modern innovation.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-accent">
                  <i className="bx bx-check-circle text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Personalized Learning Approach</h4>
                  <p className="text-neutral-600 text-sm">We adapt our teaching methods to suit individual learning styles.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-accent">
                  <i className="bx bx-check-circle text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Extra Problems Solved</h4>
                  <p className="text-neutral-600 text-sm">Beyond academics, we focus on building character and life skills.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-accent">
                  <i className="bx bx-check-circle text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Technology Integration</h4>
                  <p className="text-neutral-600 text-sm">We leverage cutting-edge educational technology to enhance learning.</p>
                </div>
              </div>
            </div>
            
            <Link href="/about" className="inline-flex items-center text-primary font-medium">
              Meet Our Team <i className="bx bx-right-arrow-alt ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
