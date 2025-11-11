import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

export default function AIServices() {
  const aiServices = [
    {
      icon: "🧠",
      title: "Custom AI Solutions",
      description:
        "Tailored AI models and algorithms designed specifically for your business needs, from predictive analytics to natural language processing.",
      features: ["Machine Learning", "Deep Learning", "Neural Networks"],
    },
    {
      icon: "🤖",
      title: "AI Chatbots & Assistants",
      description:
        "Intelligent conversational AI that handles customer queries, automates support, and enhances user engagement 24/7.",
      features: ["NLP Integration", "Multi-language", "Context-Aware"],
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description:
        "Advanced data analysis using AI to forecast trends, optimize operations, and make data-driven business decisions.",
      features: ["Forecasting", "Pattern Recognition", "Risk Analysis"],
    },
    {
      icon: "🎯",
      title: "Computer Vision",
      description:
        "Image and video analysis solutions for quality control, object detection, facial recognition, and visual inspection.",
      features: ["Object Detection", "Image Classification", "OCR"],
    },
    {
      icon: "⚡",
      title: "Process Automation",
      description:
        "Intelligent automation that streamlines repetitive tasks, reduces errors, and increases operational efficiency.",
      features: ["RPA", "Workflow Automation", "Smart Routing"],
    },
    {
      icon: "🔮",
      title: "Generative AI",
      description:
        "Leverage cutting-edge generative models for content creation, code generation, and creative automation.",
      features: ["GPT Integration", "Content Generation", "Code Assistance"],
    },
  ];

  const useCases = [
    {
      industry: "E-commerce",
      application:
        "Product recommendations, inventory forecasting, dynamic pricing",
      impact: "35% increase in conversion rates",
    },
    {
      industry: "Healthcare",
      application:
        "Medical image analysis, patient risk prediction, diagnostic assistance",
      impact: "40% faster diagnosis accuracy",
    },
    {
      industry: "Finance",
      application: "Fraud detection, risk assessment, algorithmic trading",
      impact: "60% reduction in false positives",
    },
    {
      industry: "Manufacturing",
      application:
        "Quality control, predictive maintenance, supply chain optimization",
      impact: "50% decrease in downtime",
    },
  ];

  return (
    <Section id="ai-services" background="dark">
      
          <SectionHeader
            badge="AI services we offer"
            title="Transform your business with Artificial Intelligence"
            subtitle="Harness the power of AI to automate processes, gain deeper insights, and unlock new possibilities for growth and innovation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-violet-600 hover:shadow-2xl hover:shadow-violet-600/20"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-violet-600/30 text-white rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-3xl p-12 border border-gray-700 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              AI in Action: Real-World Applications
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                    <h4 className="text-xl font-bold text-white">
                      {useCase.industry}
                    </h4>
                  </div>
                  <p className="text-gray-300 mb-3">{useCase.application}</p>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-violet-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-violet-500 font-semibold text-sm">
                      {useCase.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-violet-600 rounded-3xl p-12 text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Unlock AI Potential?
            </h3>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              From proof-of-concept to enterprise deployment, we deliver AI
              solutions that drive measurable business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" variant="secondary" size="lg">
                Schedule AI Consultation
              </Button>
          </div>
        </div>
    </Section>
  );
}
