import { Link } from 'wouter';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
      <div className="px-2 pt-2 pb-4 space-y-3">
        <Link 
          href="/" 
          className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100"
        >
          About
        </Link>
        <Link 
          href="/courses" 
          className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Courses
        </Link>
        <Link 
          href="/admissions" 
          className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Admissions
        </Link>

        <Link 
          href="/contact" 
          className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100"
        >
          Contact
        </Link>
        
        <div className="pt-4 flex flex-col space-y-3">
          <Link 
            href="/login" 
            className="px-3 py-2 text-primary font-medium text-center border border-primary rounded-md"
          >
            Log In
          </Link>
          <Link 
            href="/admissions" 
            className="px-3 py-2 bg-primary text-white font-medium text-center rounded-md"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
