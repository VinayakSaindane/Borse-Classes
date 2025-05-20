import { pgTable, text, serial, integer, boolean, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users Table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  userType: text("user_type").notNull(), // "student", "parent", "admin"
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  firstName: true,
  lastName: true,
  email: true,
  password: true,
  userType: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Students Table
export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  grade: text("grade").notNull(),
  enrollmentDate: date("enrollment_date").notNull(),
  parentId: integer("parent_id").references(() => parents.id),
});

export const insertStudentSchema = createInsertSchema(students).pick({
  userId: true,
  grade: true,
  enrollmentDate: true,
  parentId: true,
});

export type InsertStudent = z.infer<typeof insertStudentSchema>;
export type Student = typeof students.$inferSelect;

// Parents Table
export const parents = pgTable("parents", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  relation: text("relation").notNull(), // "father", "mother", "guardian"
});

export const insertParentSchema = createInsertSchema(parents).pick({
  userId: true,
  relation: true,
});

export type InsertParent = z.infer<typeof insertParentSchema>;
export type Parent = typeof parents.$inferSelect;

// Courses Table
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // "primary", "secondary", "competitive", "skills"
  duration: text("duration").notNull(),
  audience: text("audience").notNull(),
  price: text("price").notNull(),
  isPopular: boolean("is_popular").default(false),
  isNew: boolean("is_new").default(false),
});

export const insertCourseSchema = createInsertSchema(courses).pick({
  title: true,
  description: true,
  category: true,
  duration: true,
  audience: true,
  price: true,
  isPopular: true,
  isNew: true,
});

export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Course = typeof courses.$inferSelect;

// Enrollments Table
export const enrollments = pgTable("enrollments", {
  id: serial("id").primaryKey(),
  studentId: integer("student_id").notNull().references(() => students.id),
  courseId: integer("course_id").notNull().references(() => courses.id),
  enrollmentDate: date("enrollment_date").notNull(),
  status: text("status").notNull(), // "active", "completed", "pending"
});

export const insertEnrollmentSchema = createInsertSchema(enrollments).pick({
  studentId: true,
  courseId: true,
  enrollmentDate: true,
  status: true,
});

export type InsertEnrollment = z.infer<typeof insertEnrollmentSchema>;
export type Enrollment = typeof enrollments.$inferSelect;

// Contact Inquiries Table
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  isResolved: boolean("is_resolved").default(false),
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  phone: true,
  subject: true,
  message: true,
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

// Admission Applications Table
export const admissionApplications = pgTable("admission_applications", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  studentGrade: text("student_grade").notNull(),
  interestedCourse: text("interested_course").notNull(),
  previousSchool: text("previous_school").notNull(),
  parentName: text("parent_name").notNull(),
  parentRelation: text("parent_relation").notNull(),
  additionalInfo: text("additional_info"),
  status: text("status").notNull().default("pending"), // "pending", "approved", "rejected"
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertAdmissionApplicationSchema = createInsertSchema(admissionApplications).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  address: true,
  studentGrade: true,
  interestedCourse: true,
  previousSchool: true,
  parentName: true,
  parentRelation: true,
  additionalInfo: true,
});

export type InsertAdmissionApplication = z.infer<typeof insertAdmissionApplicationSchema>;
export type AdmissionApplication = typeof admissionApplications.$inferSelect;

// Blog Posts Table
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  slug: text("slug").notNull().unique(),
  publishDate: date("publish_date").notNull(),
  isPublished: boolean("is_published").notNull().default(true),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  description: true,
  content: true,
  category: true,
  slug: true,
  publishDate: true,
  isPublished: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
