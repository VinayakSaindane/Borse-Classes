import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/hero-section';
import StatsSection from '@/components/home/stats-section';
import AboutSection from '@/components/home/about-section';
import CoursesSection from '@/components/home/courses-section';
import AdmissionsSection from '@/components/home/admissions-section';
import PortalPreview from '@/components/home/portal-preview';
import TestimonialsSection from '@/components/home/testimonials-section';
import FAQSection from '@/components/home/faq-section';
import ContactSection from '@/components/home/contact-section';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Borse Classes - Excellence in Education</title>
<meta name="description" content="Borse Classes provides quality education and personalized learning experiences. Explore our courses, admissions process, and student resources." />
<meta property="og:title" content="Borse Classes - Excellence in Education" />
<meta property="og:description" content="Borse Classes provides quality education and personalized learning experiences. Explore our courses, admissions process, and student resources." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guravclasses.com" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <AdmissionsSection />
      <PortalPreview />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
