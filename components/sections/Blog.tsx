import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Blog() {
  const posts = [
    {
      title: 'Building Scalable Microservices with Go',
      date: 'October 15, 2025',
      summary: 'Learn how to architect high-performance microservices using Go and best practices for distributed systems.',
      category: 'Architecture'
    },
    {
      title: 'Next.js 15: What\'s New and Why It Matters',
      date: 'October 8, 2025',
      summary: 'A deep dive into the latest Next.js features and how they can improve your web application performance.',
      category: 'Frontend'
    },
    {
      title: 'Cloud Migration Strategies for Legacy Systems',
      date: 'September 28, 2025',
      summary: 'A comprehensive guide to successfully migrating legacy applications to modern cloud infrastructure.',
      category: 'DevOps'
    }
  ];
  
  return (
    <Section id="blog" background="dark">
      <SectionHeader 
        title="Insights & Resources"
        subtitle="Our blog covers technology, architecture, best practices, case studies and trends to help you stay ahead."
        badge="Best knowledge posts for you"
      />
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {posts.map((post, index) => (
          <article 
            key={index} 
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-violet-600"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-violet-600/30 text-white rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
              <p className="text-white leading-relaxed mb-4">{post.summary}</p>
              <button className="text-violet-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center">
        <Button href="/blog" variant="outline" size="lg">
          View All Posts
        </Button>
      </div>
    </Section>
  );
}

