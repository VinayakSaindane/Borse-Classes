import { Link } from 'wouter';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h6 className="text-primary font-medium mb-2">BLOG & NEWS</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-poppins mb-4">Latest Updates & Articles</h2>
          <p className="text-neutral-600">Stay informed with educational insights, classroom news, and student achievements.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-neutral-100 relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-2">
                  <i className="bx bx-calendar mr-2"></i> {formatDate(post.date)}
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{post.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{post.description}</p>
                <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary font-medium">
                  Read More <i className="bx bx-right-arrow-alt ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/blog" className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
            View All Posts <i className="bx bx-right-arrow-alt ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
