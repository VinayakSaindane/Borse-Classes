import { useState } from 'react';
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
  studentGrade: z.string().min(1, { message: "Please select a grade" }),
  interestedCourse: z.string().min(1, { message: "Please select a course" }),
  message: z.string().optional(),
  terms: z.boolean().refine(val => val === true, { message: "You must agree to the terms and conditions" })
});

type FormData = z.infer<typeof formSchema>;

export default function AdmissionsSection() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      studentGrade: "",
      interestedCourse: "",
      message: "",
      terms: false
    }
  });

  const onSubmit = (data: FormData) => {
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest. We will contact you soon!",
    });
    
    form.reset();
  };

  return (
    <section id="admissions" className="py-16 bg-gradient-to-br from-neutral-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h6 className="text-primary font-medium mb-2">ADMISSIONS</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-poppins mb-4">Join Our Learning Community</h2>
          <p className="text-neutral-600">Follow our simple enrollment process to secure your spot in our classes.</p>
        </div>
        
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
            
            <div className="mt-8 p-4 bg-white rounded-lg shadow-md border-l-4 border-secondary">
              <h4 className="text-lg font-medium text-neutral-900 mb-2">Required Documents</h4>
              <ul className="list-disc list-inside text-neutral-600 space-y-1">
                <li>Previous academic records</li>
                <li>Identification proof (Aadhar card/Birth certificate)</li>
                <li>Passport-sized photographs</li>
                <li>Parent/Guardian contact information</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-6">Admission Enquiry Form</h3>
              
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
                  
                  <FormField
                    control={form.control}
                    name="studentGrade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">Student's Current Grade *</FormLabel>
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
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={3} 
                            placeholder="Any specific requirements or questions?" 
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
                    Submit Enquiry
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
