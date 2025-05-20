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
  type InsertEnrollment,
  users,
  students,
  parents,
  courses,
  enrollments,
  inquiries,
  admissionApplications,
  blogPosts
} from "@shared/schema";
import { eq } from "drizzle-orm";
import { db } from "./db";

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

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Student operations
  async getStudent(id: number): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.id, id));
    return student;
  }

  async getStudentByUserId(userId: number): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.userId, userId));
    return student;
  }

  async createStudent(insertStudent: InsertStudent): Promise<Student> {
    const [student] = await db.insert(students).values(insertStudent).returning();
    return student;
  }

  // Parent operations
  async getParent(id: number): Promise<Parent | undefined> {
    const [parent] = await db.select().from(parents).where(eq(parents.id, id));
    return parent;
  }

  async getParentByUserId(userId: number): Promise<Parent | undefined> {
    const [parent] = await db.select().from(parents).where(eq(parents.userId, userId));
    return parent;
  }

  async createParent(insertParent: InsertParent): Promise<Parent> {
    const [parent] = await db.insert(parents).values(insertParent).returning();
    return parent;
  }

  // Course operations
  async getCourse(id: number): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }

  async getAllCourses(): Promise<Course[]> {
    return await db.select().from(courses);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const [course] = await db.insert(courses).values(insertCourse).returning();
    return course;
  }

  // Enrollment operations
  async getEnrollment(id: number): Promise<Enrollment | undefined> {
    const [enrollment] = await db.select().from(enrollments).where(eq(enrollments.id, id));
    return enrollment;
  }

  async getEnrollmentsByStudent(studentId: number): Promise<Enrollment[]> {
    return await db.select().from(enrollments).where(eq(enrollments.studentId, studentId));
  }

  async getEnrollmentsByCourse(courseId: number): Promise<Enrollment[]> {
    return await db.select().from(enrollments).where(eq(enrollments.courseId, courseId));
  }

  async createEnrollment(insertEnrollment: InsertEnrollment): Promise<Enrollment> {
    const [enrollment] = await db.insert(enrollments).values(insertEnrollment).returning();
    return enrollment;
  }

  // Inquiry operations
  async getInquiry(id: number): Promise<Inquiry | undefined> {
    const [inquiry] = await db.select().from(inquiries).where(eq(inquiries.id, id));
    return inquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries);
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    // Set default values for createdAt and isResolved
    const inquiryWithDefaults = {
      ...insertInquiry,
      createdAt: new Date(),
      isResolved: false
    };
    
    const [inquiry] = await db.insert(inquiries).values(inquiryWithDefaults).returning();
    return inquiry;
  }

  // Admission application operations
  async getAdmissionApplication(id: number): Promise<AdmissionApplication | undefined> {
    const [application] = await db
      .select()
      .from(admissionApplications)
      .where(eq(admissionApplications.id, id));
    return application;
  }

  async getAllAdmissionApplications(): Promise<AdmissionApplication[]> {
    return await db.select().from(admissionApplications);
  }

  async createAdmissionApplication(
    insertApplication: InsertAdmissionApplication
  ): Promise<AdmissionApplication> {
    // Set default values for status and createdAt
    const applicationWithDefaults = {
      ...insertApplication,
      status: "pending",
      createdAt: new Date()
    };
    
    const [application] = await db
      .insert(admissionApplications)
      .values(applicationWithDefaults)
      .returning();
    return application;
  }

  // Blog post operations
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [blogPost] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return blogPost;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [blogPost] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return blogPost;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).where(eq(blogPosts.isPublished, true));
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const [blogPost] = await db.insert(blogPosts).values(insertBlogPost).returning();
    return blogPost;
  }

  // Initialize sample data
  async initializeSampleData() {
    // Check if we already have courses
    const existingCourses = await db.select().from(courses);
    
    if (existingCourses.length === 0) {
      // Sample courses
      const sampleCourses: InsertCourse[] = [
        {
          title: "Mathematics for 8-10th Standard",
          description: "Comprehensive course covering algebra, geometry, and problem-solving strategies for students in 8th to 10th standard.",
          category: "primary,secondary",
          duration: "16 weeks",
          audience: "Grades 8-10",
          price: "₹15,000",
          isPopular: true,
          isNew: false
        },
        {
          title: "Integrated Science Program",
          description: "Explore physics, chemistry, and biology through practical experiments and conceptual learning for 6th to 10th standard students.",
          category: "primary,secondary",
          duration: "20 weeks",
          audience: "Grades 6-10",
          price: "₹18,500",
          isPopular: false,
          isNew: false
        },
        {
          title: "English Language & Literature",
          description: "Enhance reading comprehension, writing skills, and literary analysis for students in 6th to 10th standard.",
          category: "primary,secondary",
          duration: "14 weeks",
          audience: "Grades 6-10",
          price: "₹14,000",
          isPopular: false,
          isNew: true
        },
        {
          title: "Social Studies Program",
          description: "Comprehensive coverage of history, geography, and civics with interactive learning for 6th to 10th standard students.",
          category: "primary,secondary",
          duration: "16 weeks",
          audience: "Grades 6-10",
          price: "₹13,500",
          isPopular: false,
          isNew: false
        }
      ];

      for (const course of sampleCourses) {
        await this.createCourse(course);
      }
    }
  }
}

export const storage = new DatabaseStorage();
