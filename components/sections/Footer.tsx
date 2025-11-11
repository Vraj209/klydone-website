import Link from 'next/link';

export default function Footer() {
  const navigationLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Backend Development', href: '#services' },
        { name: 'Frontend Development', href: '#services' },
        { name: 'Cloud Architecture', href: '#services' },
        { name: 'AI Solutions', href: '#services' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Security', href: '#security' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
      ]
    }
  ];
  
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com', icon: '💻' }
  ];
  
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold text-violet-600 bg-clip-text">
              Klydone
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Building the future of software. Fast. Reliable. Scalable.
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Contact:</p>
              <a href="mailto:hello@klydone.com" className="text-white hover:underline block mb-1">
                hello@klydone.com
              </a>
              <a href="tel:+15551234567" className="text-white hover:underline block">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
          
          {navigationLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Klydone. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

