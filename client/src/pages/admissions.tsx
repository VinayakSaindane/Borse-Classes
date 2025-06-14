import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your complete address" }),
  studentGrade: z.string().min(1, { message: "Please select a grade" }),
  interestedCourse: z.string().min(1, { message: "Please select a course" }),
  previousSchool: z.string().min(2, { message: "Please enter previous school name" }),
  parentName: z.string().min(2, { message: "Please enter parent/guardian name" }),
  parentRelation: z.string().min(1, { message: "Please select relation" }),
  additionalInfo: z.string().optional(),
  terms: z.boolean().refine(val => val === true, { message: "You must agree to the terms and conditions" })
});

type FormData = z.infer<typeof formSchema>;

export default function Admissions() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      studentGrade: "",
      interestedCourse: "",
      previousSchool: "",
      parentName: "",
      parentRelation: "",
      additionalInfo: "",
      terms: false
    }
  });

  const onSubmit = (data: FormData) => {
    toast({
      title: "Admission Form Submitted",
      description: "Thank you for applying! We will contact you shortly to proceed with the admission process.",
    });
    
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Admissions - Gurav Classes</title>
        <meta name="description" content="Apply for admission to Gurav Classes. Our simple enrollment process makes it easy to secure your spot in our classes." />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h6 className="text-primary font-medium mb-2">ADMISSIONS</h6>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 font-poppins mb-4">Join Our Learning Community</h1>
            <p className="text-lg text-neutral-600">Follow our simple enrollment process to secure your spot in our classes.</p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-6">Enrollment Process</h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-2">Submit Application</h4>
                    <p className="text-neutral-600">Complete the online application form with basic information about the student and preferred courses.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-2">Diagnostic Assessment</h4>
                    <p className="text-neutral-600">Students take a short diagnostic test to help us understand their current knowledge level and learning needs.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-2">Personalized Consultation</h4>
                    <p className="text-neutral-600">Meet with our academic counselors to discuss learning goals and receive course recommendations.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900 mb-2">Complete Registration</h4>
                    <p className="text-neutral-600">Submit required documents and complete the fee payment to secure your enrollment.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-neutral-50 rounded-lg shadow-md border-l-4 border-secondary">
                <h4 className="text-lg font-medium text-neutral-900 mb-2">Required Documents</h4>
                <ul className="list-disc list-inside text-neutral-600 space-y-1">
                  <li>Previous academic records</li>
                  <li>Identification proof (Aadhar card/Birth certificate)</li>
                  <li>Passport-sized photographs</li>
                  <li>Parent/Guardian contact information</li>
                </ul>
              </div>
              
              <div className="mt-8 p-4 bg-neutral-50 rounded-lg shadow-md border-l-4 border-primary">
                <h4 className="text-lg font-medium text-neutral-900 mb-2">Fee Structure</h4>
                <p className="text-neutral-600 mb-2">Our fee structure varies based on the course, grade level, and duration:</p>
                <ul className="list-disc list-inside text-neutral-600 space-y-1">
                  <li>Primary Education (Grades 6-8): ₹12,000 - ₹18,000 per year</li>
                  <li>Secondary Education (Grades 9-10): ₹15,000 - ₹25,000 per year</li>
                  <li>Higher Secondary (Grades 11-12): ₹25,000 - ₹35,000 per year</li>
                  <li>Competitive Exam Preparation: ₹40,000 - ₹60,000 per year</li>
                  <li>Registration Fee (one-time): ₹2,000</li>
                </ul>
                <p className="text-neutral-600 mt-2">* Scholarships available for meritorious students</p>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-6">Admission Application Form</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-neutral-700">First Name *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="First Name" 
                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-neutral-700">Last Name *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Last Name" 
                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-neutral-700">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="email" 
                                placeholder="yourname@example.com" 
                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-neutral-700">Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                type="tel" 
                                placeholder="+91 9876543210" 
                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Address *</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={2} 
                              placeholder="Your complete address" 
                              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="studentGrade"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-neutral-700">Student's Current/Upcoming Grade *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                                  <SelectValue placeholder="Select Grade" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="6">Grade 6</SelectItem>
                                <SelectItem value="7">Grade 7</SelectItem>
                                <SelectItem value="8">Grade 8</SelectItem>
                                <SelectItem value="9">Grade 9</SelectItem>
                                <SelectItem value="10">Grade 10</SelectItem>
                                <SelectItem value="11">Grade 11</SelectItem>
                                <SelectItem value="12">Grade 12</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="interestedCourse"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-neutral-700">Interested Course(s) *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                                  <SelectValue placeholder="Select Course" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mathematics">Mathematics</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="jee_neet">JEE/NEET Preparation</SelectItem>
                                <SelectItem value="olympiad">Olympiad Training</SelectItem>
                                <SelectItem value="computer_science">Computer Science</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="previousSchool"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Previous/Current School *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="School name" 
                              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="parentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-neutral-700">Parent/Guardian Name *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Full name" 
                                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="parentRelation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-neutral-700">Relation to Student *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                                  <SelectValue placeholder="Select Relation" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="father">Father</SelectItem>
                                <SelectItem value="mother">Mother</SelectItem>
                                <SelectItem value="guardian">Legal Guardian</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={3} 
                              placeholder="Any specific requirements, medical conditions, or other information we should know?" 
                              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-neutral-600">
                              I agree to the <a href="#terms" className="text-primary hover:underline">Terms & Conditions</a> and <a href="#privacy" className="text-primary hover:underline">Privacy Policy</a>.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Submit Application
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 font-poppins mb-4">Admission FAQs</h2>
            <p className="text-neutral-600">Answers to commonly asked questions about our admission process.</p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
            <div className="py-5">
              <h3 className="text-lg font-medium text-neutral-900">Is there an entrance test for admission?</h3>
              <p className="mt-2 text-neutral-600">
                Yes, we conduct a diagnostic assessment to understand the student's current knowledge level. However, this is not a pass/fail test but rather a tool to help us tailor our teaching approach to each student's needs.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-lg font-medium text-neutral-900">Can students join in the middle of an academic year?</h3>
              <p className="mt-2 text-neutral-600">
                Yes, students can join our regular courses throughout the year. We provide additional support to help them catch up with the curriculum. However, for competitive exam preparation courses, we recommend starting with a new batch.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-lg font-medium text-neutral-900">Are there any scholarships available?</h3>
              <p className="mt-2 text-neutral-600">
                Yes, we offer merit-based scholarships to deserving students. Students who have excelled in academics or competitive exams can apply for scholarships during the admission process.
              </p>
            </div>
            
            <div className="py-5">
              <h3 className="text-lg font-medium text-neutral-900">What is the payment schedule for fees?</h3>
              <p className="mt-2 text-neutral-600">
                We offer flexible payment options including one-time full payment (with discount), quarterly, or monthly installments. The payment schedule will be discussed during the admission process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
