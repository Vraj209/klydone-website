import { AIService, AIUseCase } from '../types';

// AI Repository following Single Responsibility Principle
export class AIRepository {
  static getAIServices(): AIService[] {
    return [
      {
        icon: "intelligence",
        title: "Custom AI Solutions",
        description: "Tailored AI models and algorithms designed specifically for your business needs, from predictive analytics to natural language processing.",
        features: ["Machine Learning", "Deep Learning", "Neural Networks"],
      },
      {
        icon: "bot",
        title: "AI Chatbots & Assistants",
        description: "Intelligent conversational AI that handles customer queries, automates support, and enhances user engagement 24/7.",
        features: ["NLP Integration", "Multi-language", "Context-Aware"],
      },
      {
        icon: "analytics",
        title: "Predictive Analytics",
        description: "Advanced data analysis using AI to forecast trends, optimize operations, and make data-driven business decisions.",
        features: ["Forecasting", "Pattern Recognition", "Risk Analysis"],
      },
      {
        icon: "vision",
        title: "Computer Vision",
        description: "Image and video analysis solutions for quality control, object detection, facial recognition, and visual inspection.",
        features: ["Object Detection", "Image Classification", "OCR"],
      },
      {
        icon: "automation",
        title: "Process Automation",
        description: "Intelligent automation that streamlines repetitive tasks, reduces errors, and increases operational efficiency.",
        features: ["RPA", "Workflow Automation", "Smart Routing"],
      },
      {
        icon: "generative",
        title: "Generative AI",
        description: "Leverage cutting-edge generative models for content creation, code generation, and creative automation.",
        features: ["GPT Integration", "Content Generation", "Code Assistance"],
      },
    ];
  }

  static getAIUseCases(): AIUseCase[] {
    return [
      {
        industry: "E-commerce",
        application: "Product recommendations, inventory forecasting, dynamic pricing",
        impact: "35% increase in conversion rates",
      },
      {
        industry: "Healthcare",
        application: "Medical image analysis, patient risk prediction, diagnostic assistance",
        impact: "40% faster diagnosis accuracy",
      },
      {
        industry: "Finance",
        application: "Fraud detection, risk assessment, algorithmic trading",
        impact: "60% reduction in false positives",
      },
      {
        industry: "Manufacturing",
        application: "Quality control, predictive maintenance, supply chain optimization",
        impact: "50% decrease in downtime",
      },
    ];
  }
}