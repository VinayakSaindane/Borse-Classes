import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'wouter';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().optional()
});

type LoginData = z.infer<typeof loginSchema>;

export default function Login() {
  const [location, navigate] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'student' | 'parent' | 'admin'>('student');
  
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    }
  });

  const onSubmit = (data: LoginData) => {
    toast({
      title: "Login Successful",
      description: `Welcome back! You've been logged in as a ${activeTab}.`,
    });
    
    // Navigate to appropriate portal
    if (activeTab === 'student') {
      navigate('/student-portal');
    } else if (activeTab === 'parent') {
      navigate('/parent-portal');
    } else {
      // Admin portal would go here if implemented
      navigate('/');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Borse Classes</title>
<meta name="description" content="Log in to access your Borse Classes student or parent portal." />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Image and Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center p-8 md:p-16">
          <div className="max-w-lg">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-xl">BC</span>
              </div>
              <h1 className="text-3xl font-bold font-poppins">Borse Classes</h1>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Welcome to our Learning Portal</h2>
            <p className="text-white text-opacity-90 mb-8">
              Access your personalized dashboard to track progress, view course materials, and engage with our learning community.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-accent">
                  <i className="bx bx-check-shield text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">Secure Access</h4>
                  <p className="text-white text-opacity-80 text-sm">Your data is encrypted and protected with the highest security standards.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-accent">
                  <i className="bx bx-devices text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">Multi-device Support</h4>
                  <p className="text-white text-opacity-80 text-sm">Access your portal from any device - desktop, tablet, or mobile.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 text-accent">
                  <i className="bx bx-time text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-white">24/7 Availability</h4>
                  <p className="text-white text-opacity-80 text-sm">Learning resources and information available whenever you need them.</p>
                </div>
              </div>
            </div>
            
            <p className="text-white text-opacity-80 text-sm">
              Don't have an account? <Link href="/admissions" className="text-accent hover:underline">Contact the administration</Link> for portal access.
            </p>
          </div>
        </div>
        
        {/* Right Side - Login Form */}
        <div className="md:w-1/2 bg-white flex items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 font-poppins">Log In</h2>
              <p className="text-neutral-600 mt-2">Enter your credentials to access your account</p>
            </div>
            
            <Tabs 
              defaultValue="student" 
              className="mb-8"
              onValueChange={(value) => setActiveTab(value as 'student' | 'parent' | 'admin')}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="parent">Parent</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>
              
              <TabsContent value="student" className="mt-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light text-white mb-4">
                    <i className="bx bx-user-circle text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">Student Portal</h3>
                  <p className="text-sm text-neutral-600">Access your courses, assignments, and grades</p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email/Student ID</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="student@example.com" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="password" 
                              placeholder="••••••••" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-center justify-between">
                      <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Remember me
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <a href="#forgot-password" className="text-sm text-primary hover:text-primary-dark">
                        Forgot password?
                      </a>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Log in
                    </Button>
                    
                    <p className="text-center text-xs text-neutral-500 mt-4">
                      For demo, use: student@example.com / password123
                    </p>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="parent" className="mt-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-light text-white mb-4">
                    <i className="bx bx-user-check text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">Parent Portal</h3>
                  <p className="text-sm text-neutral-600">Track your child's progress and attendance</p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email/Parent ID</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="parent@example.com" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="password" 
                              placeholder="••••••••" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-center justify-between">
                      <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Remember me
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <a href="#forgot-password" className="text-sm text-primary hover:text-primary-dark">
                        Forgot password?
                      </a>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-secondary hover:bg-secondary-dark"
                    >
                      Log in
                    </Button>
                    
                    <p className="text-center text-xs text-neutral-500 mt-4">
                      For demo, use: parent@example.com / password123
                    </p>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="admin" className="mt-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-light text-white mb-4">
                    <i className="bx bx-shield-quarter text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">Admin Portal</h3>
                  <p className="text-sm text-neutral-600">Manage courses, students, and content</p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Admin Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="admin@example.com" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="password" 
                              placeholder="••••••••" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex items-center justify-between">
                      <FormField
                        control={form.control}
                        name="rememberMe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              Remember me
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <a href="#forgot-password" className="text-sm text-primary hover:text-primary-dark">
                        Forgot password?
                      </a>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent-dark"
                    >
                      Log in
                    </Button>
                    
                    <p className="text-center text-xs text-neutral-500 mt-4">
                      Admin access is restricted
                    </p>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
            
            <div className="text-center">
              <p className="text-sm text-neutral-600">
                Having trouble logging in? <Link href="/contact" className="text-primary hover:underline">Contact support</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
