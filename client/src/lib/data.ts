// Course data
export interface Course {
  id: string;
  title: string;
  category: string[];
  rating: number;
  reviewCount: number;
  description: string;
  duration: string;
  audience: string;
  price: string;
  imageUrl: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const courses: Course[] = [
  {
    id: "mathematics-grade-8-10",
    title: "Mathematics for 8-10th Standard",
    category: ["primary", "secondary"],
    rating: 4.9,
    reviewCount: 120,
    description: "Comprehensive course covering algebra, geometry, and problem-solving strategies for students in 8th to 10th standard.",
    duration: "16 weeks",
    audience: "Grades 8-10",
    price: "₹15,000",
    imageUrl: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
    isPopular: true
  },
  {
    id: "science-grade-6-10",
    title: "Integrated Science Program",
    category: ["primary", "secondary"],
    rating: 4.8,
    reviewCount: 95,
    description: "Explore physics, chemistry, and biology through practical experiments and conceptual learning for 6th to 10th standard students.",
    duration: "20 weeks",
    audience: "Grades 6-10",
    price: "₹18,500",
    imageUrl: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300"
  },
  {
    id: "english-language-arts",
    title: "English Language & Literature",
    category: ["primary", "secondary"],
    rating: 4.7,
    reviewCount: 85,
    description: "Enhance reading comprehension, writing skills, and literary analysis for students in 6th to 10th standard.",
    duration: "14 weeks",
    audience: "Grades 6-10",
    price: "₹14,000",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
    isNew: true
  },
  {
    id: "social-studies-grade-6-10",
    title: "Social Studies Program",
    category: ["primary", "secondary"],
    rating: 4.6,
    reviewCount: 75,
    description: "Comprehensive coverage of history, geography, and civics with interactive learning for 6th to 10th standard students.",
    duration: "16 weeks",
    audience: "Grades 6-10",
    price: "₹13,500",
    imageUrl: "https://images.unsplash.com/photo-1503551723145-6c040742065b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300"
  }
];



// FAQ data
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What are the class timings?",
    answer: "Classes are scheduled in different batches throughout the day - morning (6 AM - 9 AM), afternoon (2 PM - 5 PM), and evening (6 PM - 9 PM). Weekend batches are also available. Students can choose the batch that best suits their schedule during enrollment."
  },
  {
    question: "How are the batch sizes managed?",
    answer: "We maintain small batch sizes of 15-20 students per class to ensure personalized attention and effective learning. For competitive exam preparation courses, batches are further optimized based on students' performance levels to provide targeted guidance."
  },
  {
    question: "What is your fee structure?",
    answer: "Our fee structure varies based on the course, grade level, and duration. Regular subject courses for grades 6-10 range from ₹15,000 to ₹25,000 per year. Competitive exam preparation courses like JEE/NEET are priced between ₹40,000 to ₹60,000 annually. Detailed fee information is provided during the admission consultation."
  },
  {
    question: "Do you provide study material?",
    answer: "Yes, comprehensive study materials are provided to all enrolled students. These include textbooks, workbooks, practice problem sets, and digital resources accessible through our student portal. Our materials are regularly updated to align with the latest curriculum changes and examination patterns."
  },
  {
    question: "How do you track and report student progress?",
    answer: "We conduct regular assessments, including weekly quizzes, monthly tests, and term examinations. Detailed performance analytics are available on the student and parent portals. Parent-teacher meetings are scheduled quarterly to discuss progress and areas for improvement. Additionally, personalized improvement plans are created for students who need extra support."
  }
];

// Testimonials data
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Grade 12 Student • JEE Advanced Qualifier",
    content: "The JEE preparation at Borse Classes was exceptional. The teachers not only simplified complex concepts but also taught us effective problem-solving strategies. The regular mock tests helped me identify my weaknesses and work on them. I secured AIR 845 in JEE Advanced thanks to their guidance.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=96&h=96"
  },
  {
    id: "2",
    name: "Rajesh Patel",
    role: "Parent of Arjun (Grade 9)",
    content: "As a parent, I appreciate the transparency and regular updates provided by Borse Classes. The parent portal allows me to track my son's progress and stay involved in his education. His grades in Mathematics and Science have improved significantly, and he's developed a genuine interest in learning.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=96&h=96"
  },
  {
    id: "3",
    name: "Aditya Nair",
    role: "Grade 10 Student • NTSE Scholar",
    content: "What sets Borse Classes apart is their focus on conceptual understanding rather than memorization. The interactive teaching methods and practical demonstrations helped me grasp complex science topics easily. The NTSE preparatory classes were particularly helpful, with specialized material and expert guidance.",
    rating: 4.5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=96&h=96"
  }
];

// Gallery images
export interface GalleryImage {
  id: string;
  title: string;
  imageUrl: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    title: "Interactive Physics Class",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "2",
    title: "Chemistry Lab Experiments",
    imageUrl: "https://pixabay.com/get/g45f1000cc211113fa1da59bf535dd9b74b2d123ffd195614b3bb3b1d2af9fc25d52291e12c8c361a908a36ce0a876df7ccffaaa537c8d306be7d8a37e28dd0d2_1280.jpg"
  },
  {
    id: "3",
    title: "Collaborative Learning",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "4",
    title: "Science Olympiad Winners",
    imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
  }
];

// Student dashboard data
export interface UpcomingClass {
  id: string;
  title: string;
  time: string;
  isToday: boolean;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: "Completed" | "Pending";
  icon: string;
  iconBgClass: string;
}

export const upcomingClasses: UpcomingClass[] = [
  {
    id: "1",
    title: "Mathematics - Trigonometry",
    time: "Today • 4:00 PM - 5:30 PM",
    isToday: true
  },
  {
    id: "2",
    title: "Science - Chemical Reactions",
    time: "Tomorrow • 5:00 PM - 6:30 PM",
    isToday: false
  }
];

export const studentAssignments: Assignment[] = [
  {
    id: "1",
    title: "Quadratic Equations Set 3",
    dueDate: "Oct 15, 2023",
    status: "Completed",
    icon: "bx-math",
    iconBgClass: "bg-primary-light"
  },
  {
    id: "2",
    title: "Chemical Equations Balancing",
    dueDate: "Oct 18, 2023",
    status: "Pending",
    icon: "bx-atom",
    iconBgClass: "bg-secondary-light"
  }
];
