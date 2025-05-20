import {
  type User,
  type InsertUser,
  type Course,
  type InsertCourse,
  type Inquiry,
  type InsertInquiry,
  type AdmissionApplication,
  type InsertAdmissionApplication,
  type BlogPost,
  type InsertBlogPost,
  type Student,
  type InsertStudent,
  type Parent,
  type InsertParent,
  type Enrollment,
  type InsertEnrollment
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Student operations
  getStudent(id: number): Promise<Student | undefined>;
  getStudentByUserId(userId: number): Promise<Student | undefined>;
  createStudent(student: InsertStudent): Promise<Student>;

  // Parent operations
  getParent(id: number): Promise<Parent | undefined>;
  getParentByUserId(userId: number): Promise<Parent | undefined>;
  createParent(parent: InsertParent): Promise<Parent>;

  // Course operations
  getCourse(id: number): Promise<Course | undefined>;
  getAllCourses(): Promise<Course[]>;
  createCourse(course: InsertCourse): Promise<Course>;

  // Enrollment operations
  getEnrollment(id: number): Promise<Enrollment | undefined>;
  getEnrollmentsByStudent(studentId: number): Promise<Enrollment[]>;
  getEnrollmentsByCourse(courseId: number): Promise<Enrollment[]>;
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;

  // Inquiry operations
  getInquiry(id: number): Promise<Inquiry | undefined>;
  getAllInquiries(): Promise<Inquiry[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Admission application operations
  getAdmissionApplication(id: number): Promise<AdmissionApplication | undefined>;
  getAllAdmissionApplications(): Promise<AdmissionApplication[]>;
  createAdmissionApplication(application: InsertAdmissionApplication): Promise<AdmissionApplication>;

  // Blog post operations
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private students: Map<number, Student>;
  private parents: Map<number, Parent>;
  private courses: Map<number, Course>;
  private enrollments: Map<number, Enrollment>;
  private inquiries: Map<number, Inquiry>;
  private admissionApplications: Map<number, AdmissionApplication>;
  private blogPosts: Map<number, BlogPost>;

  private userIdCounter: number;
  private studentIdCounter: number;
  private parentIdCounter: number;
  private courseIdCounter: number;
  private enrollmentIdCounter: number;
  private inquiryIdCounter: number;
  private admissionApplicationIdCounter: number;
  private blogPostIdCounter: number;

  constructor() {
    this.users = new Map();
    this.students = new Map();
    this.parents = new Map();
    this.courses = new Map();
    this.enrollments = new Map();
    this.inquiries = new Map();
    this.admissionApplications = new Map();
    this.blogPosts = new Map();

    this.userIdCounter = 1;
    this.studentIdCounter = 1;
    this.parentIdCounter = 1;
    this.courseIdCounter = 1;
    this.enrollmentIdCounter = 1;
    this.inquiryIdCounter = 1;
    this.admissionApplicationIdCounter = 1;
    this.blogPostIdCounter = 1;

    // Initialize with some sample courses
    this.initSampleData();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const createdAt = new Date();
    const user: User = { id, ...insertUser, createdAt };
    this.users.set(id, user);
    return user;
  }

  // Student operations
  async getStudent(id: number): Promise<Student | undefined> {
    return this.students.get(id);
  }

  async getStudentByUserId(userId: number): Promise<Student | undefined> {
    return Array.from(this.students.values()).find(
      (student) => student.userId === userId
    );
  }

  async createStudent(insertStudent: InsertStudent): Promise<Student> {
    const id = this.studentIdCounter++;
    const student: Student = { id, ...insertStudent };
    this.students.set(id, student);
    return student;
  }

  // Parent operations
  async getParent(id: number): Promise<Parent | undefined> {
    return this.parents.get(id);
  }

  async getParentByUserId(userId: number): Promise<Parent | undefined> {
    return Array.from(this.parents.values()).find(
      (parent) => parent.userId === userId
    );
  }

  async createParent(insertParent: InsertParent): Promise<Parent> {
    const id = this.parentIdCounter++;
    const parent: Parent = { id, ...insertParent };
    this.parents.set(id, parent);
    return parent;
  }

  // Course operations
  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async getAllCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = this.courseIdCounter++;
    const course: Course = { id, ...insertCourse };
    this.courses.set(id, course);
    return course;
  }

  // Enrollment operations
  async getEnrollment(id: number): Promise<Enrollment | undefined> {
    return this.enrollments.get(id);
  }

  async getEnrollmentsByStudent(studentId: number): Promise<Enrollment[]> {
    return Array.from(this.enrollments.values()).filter(
      (enrollment) => enrollment.studentId === studentId
    );
  }

  async getEnrollmentsByCourse(courseId: number): Promise<Enrollment[]> {
    return Array.from(this.enrollments.values()).filter(
      (enrollment) => enrollment.courseId === courseId
    );
  }

  async createEnrollment(insertEnrollment: InsertEnrollment): Promise<Enrollment> {
    const id = this.enrollmentIdCounter++;
    const enrollment: Enrollment = { id, ...insertEnrollment };
    this.enrollments.set(id, enrollment);
    return enrollment;
  }

  // Inquiry operations
  async getInquiry(id: number): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.inquiryIdCounter++;
    const createdAt = new Date();
    const inquiry: Inquiry = { id, ...insertInquiry, createdAt, isResolved: false };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  // Admission application operations
  async getAdmissionApplication(id: number): Promise<AdmissionApplication | undefined> {
    return this.admissionApplications.get(id);
  }

  async getAllAdmissionApplications(): Promise<AdmissionApplication[]> {
    return Array.from(this.admissionApplications.values());
  }

  async createAdmissionApplication(
    insertApplication: InsertAdmissionApplication
  ): Promise<AdmissionApplication> {
    const id = this.admissionApplicationIdCounter++;
    const createdAt = new Date();
    const application: AdmissionApplication = { 
      id, 
      ...insertApplication, 
      status: "pending", 
      createdAt 
    };
    this.admissionApplications.set(id, application);
    return application;
  }

  // Blog post operations
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(post => post.isPublished);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostIdCounter++;
    const blogPost: BlogPost = { id, ...insertBlogPost };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  // Initialize with sample data
  private initSampleData() {
    // Sample courses
    const courses: InsertCourse[] = [
      {
        title: "Advanced Mathematics",
        description: "Comprehensive course covering algebra, geometry, calculus, and problem-solving strategies.",
        category: "primary,secondary",
        duration: "16 weeks",
        audience: "Grades 8-12",
        price: "₹15,000",
        isPopular: true,
        isNew: false
      },
      {
        title: "Integrated Science Program",
        description: "Explore physics, chemistry, and biology through practical experiments and conceptual learning.",
        category: "primary,secondary",
        duration: "20 weeks",
        audience: "Grades 6-10",
        price: "₹18,500",
        isPopular: false,
        isNew: false
      },
      {
        title: "JEE/NEET Preparation",
        description: "Intensive coaching for JEE and NEET aspirants with regular mock tests and personalized feedback.",
        category: "competitive",
        duration: "12 months",
        audience: "Grades 11-12",
        price: "₹45,000",
        isPopular: false,
        isNew: true
      }
    ];

    courses.forEach(course => {
      this.createCourse(course);
    });


  }
}

export const storage = new MemStorage();
