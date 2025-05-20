import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "../shared/schema";
import { insertInquirySchema } from "../shared/schema";
import { insertAdmissionApplicationSchema } from "../shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // User routes
  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.status(201).json({ user });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ error: validationError.message });
      } else {
        res.status(500).json({ error: "Failed to create user" });
      }
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });

  // Contact inquiry routes
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiryData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(inquiryData);
      res.status(201).json({ inquiry });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ error: validationError.message });
      } else {
        res.status(500).json({ error: "Failed to submit inquiry" });
      }
    }
  });

  // Admission application routes
  app.post("/api/admission-applications", async (req, res) => {
    try {
      const applicationData = insertAdmissionApplicationSchema.parse(req.body);
      const application = await storage.createAdmissionApplication(applicationData);
      res.status(201).json({ application });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ error: validationError.message });
      } else {
        res.status(500).json({ error: "Failed to submit admission application" });
      }
    }
  });

  // Course routes
  app.get("/api/courses", async (_req, res) => {
    try {
      const courses = await storage.getAllCourses();
      res.json({ courses });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const courseId = parseInt(req.params.id);
      const course = await storage.getCourse(courseId);
      
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }
      
      res.json({ course });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch course" });
    }
  });

  // Blog routes
  app.get("/api/blog-posts", async (_req, res) => {
    try {
      const blogPosts = await storage.getAllBlogPosts();
      res.json({ blogPosts });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const blogPost = await storage.getBlogPost(postId);
      
      if (!blogPost) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json({ blogPost });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  // Authentication routes
  app.post("/api/login", (req, res) => {
    const { email, password, userType } = req.body;
    
    // In a real app, this would validate credentials against the database
    // For demo purposes, we'll accept any credentials
    if (!email || !password || !userType) {
      return res.status(400).json({ error: "Email, password, and user type are required" });
    }
    
    res.json({ 
      success: true, 
      message: "Login successful", 
      user: {
        id: 1,
        email,
        userType,
        name: userType === "student" ? "Rohit Sharma" : "Prakash Sharma"
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
