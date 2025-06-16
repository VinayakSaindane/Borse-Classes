import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <span className="text-xl font-bold text-white font-poppins">Om Sai Classes</span>
            </div>
            
            <p className="text-neutral-400 mb-6">
              Empowering students through quality education and personalized learning experiences since 2008.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-primary transition-colors">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-primary transition-colors">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-primary transition-colors">
                <i className="bx bxl-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-primary transition-colors">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/admissions" className="text-neutral-400 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">Mathematics (Grade 6-10)</Link></li>
              <li><Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">Science (Grade 6-10)</Link></li>
              <li><Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">English (Grade 6-10)</Link></li>
              <li><Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">Social Studies (Grade 6-10)</Link></li>
              <li><Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">Olympiad Training</Link></li>
              <li><Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">Summer Enrichment</Link></li>
              <li><Link href="/courses" className="text-neutral-400 hover:text-white transition-colors">Skill Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="bx bx-map text-primary mt-1 mr-3"></i>
                <span className="text-neutral-400">123 Education Avenue, Knowledge Park, Mumbai - 400001</span>
              </li>
              <li className="flex items-start">
                <i className="bx bx-phone text-primary mt-1 mr-3"></i>
                <span className="text-neutral-400">+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <i className="bx bx-envelope text-primary mt-1 mr-3"></i>
                <span className="text-neutral-400">info@guravclasses.com</span>
              </li>
              <li className="flex items-start">
                <i className="bx bx-time text-primary mt-1 mr-3"></i>
                <span className="text-neutral-400">Mon-Sat: 8AM-8PM<br/>Sunday: 9AM-1PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Om Sai Classes. All rights reserved.
            </p>
            
            <div className="flex space-x-4 text-sm text-neutral-500">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
