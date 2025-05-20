import { useState } from 'react';
import { testimonials, galleryImages } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section id="gallery" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h6 className="text-primary font-medium mb-2">TESTIMONIALS</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-poppins mb-4">What Our Students & Parents Say</h2>
          <p className="text-neutral-600">Hear from our community about their experiences and success stories.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 border border-neutral-100">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={`${testimonial.name}'s testimonial`} 
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <i key={i} className="bx bxs-star"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="bx bxs-star-half"></i>
                  )}
                </div>
                <p className="text-neutral-600">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-neutral-900 font-poppins text-center mb-8">Our Student Gallery</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.imageUrl} 
                  alt={image.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300">
                  <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
