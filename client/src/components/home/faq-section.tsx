import { useState } from 'react';
import { faqs } from '@/lib/data';
import { Link } from 'wouter';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h6 className="text-primary font-medium mb-2">FAQ</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-poppins mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-600">Find answers to common questions about our programs, admissions, and learning approach.</p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button 
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-neutral-900">{faq.question}</h3>
                <i className={`bx bx-chevron-down text-2xl text-neutral-500 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`mt-2 ${openFAQ === index ? 'block' : 'hidden'}`}>
                <p className="text-neutral-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-neutral-700">Don't see your question here?</p>
          <Link href="/contact" className="inline-flex items-center text-primary font-medium mt-2">
            Contact our support team <i className="bx bx-right-arrow-alt ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
