import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || post.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(blogPosts.map(post => post.category.toLowerCase()))];

  return (
    <>
      <Helmet>
        <title>Blog & News - Borse Classes</title>
        <meta name="description" content="Stay informed with educational insights, classroom news, and student achievements from Borse Classes." />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Helmet>
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h6 className="text-primary font-medium mb-2">BLOG & NEWS</h6>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 font-poppins mb-4">Latest Updates & Articles</h1>
            <p className="text-lg text-neutral-600">Stay informed with educational insights, classroom news, and student achievements.</p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              <div className="w-full md:w-1/2">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={categoryFilter === category ? "default" : "outline"}
                    onClick={() => setCategoryFilter(category)}
                    className="whitespace-nowrap"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {filteredPosts.length > 0 && (
              <div className="mb-12">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/3">
                      <img 
                        src={filteredPosts[0].imageUrl} 
                        alt={filteredPosts[0].title} 
                        className="h-64 w-full object-cover md:h-full" 
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="flex items-center text-sm text-neutral-500 mb-2">
                        <i className="bx bx-calendar mr-2"></i> {formatDate(filteredPosts[0].date)}
                        <span className="mx-2">•</span>
                        <span>{filteredPosts[0].category}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900 mb-4">{filteredPosts[0].title}</h2>
                      <p className="text-neutral-600 mb-6">{filteredPosts[0].description}</p>
                      <Link href={`/blog/${filteredPosts[0].id}`} className="inline-flex items-center text-primary font-medium">
                        Read More <i className="bx bx-right-arrow-alt ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow animate-hover">
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
            ) : (
              <div className="text-center py-16">
                <div className="text-7xl mb-4">
                  <i className="bx bx-search-alt"></i>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">No Articles Found</h3>
                <p className="text-neutral-600">We couldn't find any articles matching your search criteria.</p>
                <Button 
                  onClick={() => { setSearchTerm(''); setCategoryFilter('all'); }} 
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Subscription Box */}
            <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 md:p-12 shadow-xl text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-white text-opacity-90 mb-6">
                  Stay updated with the latest educational resources, exam tips, and news from Borse Classes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white text-neutral-900 border-0"
                  />
                  <Button variant="secondary" className="whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 font-poppins mb-4">Explore Categories</h2>
            <p className="text-neutral-600">Discover articles in your area of interest.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-primary-light text-white flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-book-open text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Educational Tips</h3>
              <p className="text-neutral-600 mb-4">Effective study techniques, exam preparation, and learning strategies.</p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setCategoryFilter('education')}
              >
                View Articles
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-secondary-light text-white flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-trophy text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Student Achievements</h3>
              <p className="text-neutral-600 mb-4">Success stories, competition results, and recognition of our students.</p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setCategoryFilter('achievements')}
              >
                View Articles
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-accent-light text-white flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-calendar-event text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Upcoming Events</h3>
              <p className="text-neutral-600 mb-4">Workshops, seminars, parent meetings, and special learning events.</p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setCategoryFilter('events')}
              >
                View Articles
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
