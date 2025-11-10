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
    <Section id="blog" background="gray">
      <SectionHeader 
        title="Insights & Resources"
        subtitle="Our blog covers technology, architecture, best practices, case studies and trends to help you stay ahead."
      />
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {posts.map((post, index) => (
          <article 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{post.summary}</p>
              <button className="text-blue-600 font-semibold hover:underline">
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

