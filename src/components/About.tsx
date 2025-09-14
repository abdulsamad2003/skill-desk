import React from 'react'
import Image from 'next/image'
import { 
  Bot, 
  Target, 
  BarChart3, 
  Video, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  Shield, 
  BarChart, 
  ShoppingCart 
} from 'lucide-react'
import "../styles/about.scss";
const About = () => {
  const features = [
    {
      number: "01",
      title: "AI Course Builder-Chatbot",
      description: "An intelligent conversational chatbot that instantly creates a complete, ready-to-launch course—with modules, lessons, and quizzes—just by interacting with you, eliminating weeks of manual work.",
      icon: Bot
    },
    {
      number: "02", 
      title: "Unified Learning Hub",
      description: "Bring all your internal and external learning resources together in one platform for a seamless, centralized training experience.",
      icon: Target
    },
    {
      number: "03",
      title: "Competency & Skill Management", 
      description: "Track, measure, and improve workforce skills with AI-powered gap analysis, adaptive learning paths, and targeted upskilling.",
      icon: BarChart3
    },
    {
      number: "04",
      title: "AI Chat with Video",
      description: "Enable learners to interact with training videos—ask questions and get instant, AI-generated explanations for better retention.",
      icon: Video
    },
    {
      number: "05",
      title: "AI Roleplay Simulator",
      description: "Let employees safely practice real-life workplace conversations with responsive AI for improved confidence and communication skills.",
      icon: Users
    },
    {
      number: "06",
      title: "AI ChatBot for Learner Support",
      description: "Provide 24/7 on-demand assistance to learners through intelligent, conversational AI agents.",
      icon: MessageCircle
    },
    {
      number: "07",
      title: "Career Path & Skill Recommendations",
      description: "Get AI-driven career growth suggestions tailored to each employee's role, skills, and learning history.",
      icon: TrendingUp
    },
    {
      number: "08",
      title: "Skill Demand Forecasting",
      description: "Stay ahead of industry changes by predicting emerging skill needs and adjusting training strategies proactively.",
      icon: Sparkles
    },
    {
      number: "09",
      title: "Performance Boost Insights",
      description: "Leverage AI to identify performance gaps and receive actionable recommendations to enhance learning outcomes and productivity.",
      icon: Zap
    },
    {
      number: "10",
      title: "Team Readiness & Risk Simulation",
      description: "Assess team skills, test cybersecurity readiness, and run realistic simulations to prepare for real-world challenges.",
      icon: Shield
    },
    {
      number: "11",
      title: "Deep Analytics & Impact Reports",
      description: "Access powerful dashboards and reports to track learner progress, program effectiveness, and L&D ROI.",
      icon: BarChart
    },
    {
      number: "12",
      title: "Content Marketplace Access",
      description: "Easily integrate and assign premium courses from top providers like Coursera and Udemy within your learning ecosystem.",
      icon: ShoppingCart
    }
  ]

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Features Section */}
        <div className="features-section">
          <div className="features-header">
            <h2 className="main-font features-title">Features</h2>
            <h3 className="main-font features-subtitle">One Platform Many Course</h3>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="feature-number main-font">{feature.number}</div>
                  <div className="feature-content">
                    <h4 className="main-font feature-title">
                      {feature.title}
                    </h4>
                    <p className="para-font feature-description">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About Content Section */}
        <div className="about-content-section">
          <div className="about-content">
            <div className="about-left">
              <Image
                src="/assets/about-images/about.png"
                alt="About Us"
                width={500}
                height={600}
                className="about-image"
              />
            </div>
            
            <div className="about-right">
              <div className="about-text">
                <h2 className="main-font about-title">About Us Education</h2>
                <h3 className="main-font about-subtitle">Go Your Skill in Next Level</h3>
                <p className="para-font about-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed turpis in arcu gravida faucibus euismod eget magna. Donec non justo ac libero pharetra congue.
                </p>
                
                <div className="about-missions">
                  <div className="mission-item">
                    <h4 className="main-font mission-title">Our Success Mission</h4>
                    <p className="para-font mission-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  
                  <div className="mission-item">
                    <h4 className="main-font mission-title">Our Success Mission</h4>
                    <p className="para-font mission-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                
                <button className="main-font discover-btn">Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About