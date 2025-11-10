import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold border border-gray-700">
              Trusted by Saas, Healthcare & Finance Leaders
            </span>
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-5xl mb-6 leading-tight">
            <span className="bg-clip-text text-white">
              Driving Scalable Growth with Generative AI, Cloud & Modern Data
              Engineering
            </span>
          </h1>

          <p className="text-xl md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, We bring 15+ years of enterprise
            experience and cutting-edge AI expertise to your projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button href="#contact" variant="primary" size="md">
              Book Free Consultation Now
            </Button>
            <Button href="#case-studies" variant="outline" size="md">
              View Our Portfolio
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            Trusted by startups and enterprises alike for Generative AI, Cloud &
            Modern Data Engineering.
          </p>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div> */}
    </section>
  );
}
