export default function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary font-poppins">95%</h3>
            <p className="text-neutral-600 mt-2">Success Rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary font-poppins">15+</h3>
            <p className="text-neutral-600 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary font-poppins">30+</h3>
            <p className="text-neutral-600 mt-2">Expert Teachers</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-primary font-poppins">5000+</h3>
            <p className="text-neutral-600 mt-2">Students Taught</p>
          </div>
        </div>
      </div>
    </section>
  );
}
