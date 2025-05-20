import { Link } from 'wouter';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight font-poppins mb-4">
              Empowering Minds, <span className="text-primary">Inspiring Futures</span>
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              At Borse Classes, we combine innovative teaching methodologies with personalized attention to help students achieve academic excellence and develop crucial life skills.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/courses" className="px-6 py-3 bg-primary text-white font-medium rounded-lg text-center hover:bg-primary-dark transition-colors shadow-md">
                Explore Courses
              </Link>
              <Link href="/admissions" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg text-center hover:bg-primary hover:text-white transition-colors">
                Admission Process
              </Link>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256" alt="Student avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256" alt="Student avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256" alt="Student avatar" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-xs font-medium">
                  500+
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Joined by 500+ students</p>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    <i className="bx bxs-star text-yellow-400"></i>
                    <i className="bx bxs-star text-yellow-400"></i>
                    <i className="bx bxs-star text-yellow-400"></i>
                    <i className="bx bxs-star text-yellow-400"></i>
                    <i className="bx bxs-star text-yellow-400"></i>
                  </div>
                  <span className="ml-1 text-sm text-neutral-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Students engaged in learning at Borse Classes" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
            
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">
                  <i className="bx bx-book-open text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">20+ Courses</p>
                  <p className="text-xs text-neutral-500">Across all subjects</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 bg-white rounded-lg shadow-lg p-4 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                  <i className="bx bx-user-voice text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">Expert Teachers</p>
                  <p className="text-xs text-neutral-500">With proven results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-6 left-0 w-full h-12 bg-white" style={{ clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)" }}></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary opacity-5 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary opacity-5 rounded-full -ml-20 -mb-20"></div>
    </section>
  );
}
