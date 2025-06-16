import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: FormData) => {
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you soon!",
    });
    
    form.reset();
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h6 className="text-primary font-medium mb-2">CONTACT US</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-poppins mb-4">Get in Touch</h2>
          <p className="text-neutral-600">Have questions or need more information? We're here to help.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                    <i className="bx bx-map text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">Main Branch</h4>
                    <p className="text-neutral-600">123 Education Avenue, Knowledge Park, Mumbai - 400001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                    <i className="bx bx-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">Phone Number</h4>
                    <p className="text-neutral-600">+91 9876543210 (Admissions)</p>
                    <p className="text-neutral-600">+91 9876543211 (General Inquiries)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                    <i className="bx bx-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">Email</h4>
                    <p className="text-neutral-600">admissions@guravclasses.com</p>
                    <p className="text-neutral-600">info@guravclasses.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                    <i className="bx bx-time text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">Operating Hours</h4>
                    <p className="text-neutral-600">Monday to Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-neutral-600">Sunday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-neutral-900 font-poppins mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <i className="bx bxl-youtube"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>
            
            <div className="mt-8 bg-neutral-50 rounded-lg p-4 border border-neutral-200">
              <h4 className="font-medium text-neutral-900 mb-2">Our Branches</h4>
              <ul className="list-disc list-inside text-neutral-600 space-y-1">
                <li>Dadar - 123 Dadar West, Mumbai - 400028</li>
                <li>Andheri - 456 Andheri East, Mumbai - 400069</li>
                <li>Thane - 789 Thane West, Thane - 400601</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 font-poppins mb-6">Send Us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-neutral-700">Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Your full name" 
                              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
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
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">Phone Number</FormLabel>
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
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">Subject *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary">
                              <SelectValue placeholder="Select Subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="admission">Admission Inquiry</SelectItem>
                            <SelectItem value="course">Course Information</SelectItem>
                            <SelectItem value="fees">Fee Structure</SelectItem>
                            <SelectItem value="job">Career Opportunities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
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
                        <FormLabel className="text-sm font-medium text-neutral-700">Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            placeholder="How can we help you?" 
                            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-neutral-900 font-poppins text-center mb-8">Find Us</h3>
          
          <div className="h-96 bg-neutral-100 rounded-xl overflow-hidden flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900799053!2d72.88118659220658!3d19.082250916457207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1656051364441!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Om Sai Classes Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
