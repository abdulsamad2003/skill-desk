'use client';

import AnimatedBackground from './AnimatedBackground';

const Features = () => {
  return (
    <section className="features">
      <AnimatedBackground />
      
      <div className="features-container">
        <div className="features-header">
          <h2>
            <span>Enterprise-Ready</span>
            Powerful Features
          </h2>
          <p className='text-white/70 pt-4 text-center' >Everything you need to create, manage, <br /> and scale your learning programs with cutting-edge AI technology.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>AI Course Builder-Chatbot</h3>
            <p>An intelligent conversational chatbot that instantly creates a complete, ready-to-launch course—with modules, lessons, and quizzes—just by interacting with you.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3>Unified Learning Hub</h3>
            <p>Bring all your internal and external learning resources together in one platform for a seamless, centralized training experience.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3>Competency & Skill Management</h3>
            <p>Track, measure, and improve workforce skills with AI-powered gap analysis, adaptive learning paths, and targeted upskilling.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>AI Chat with Video</h3>
            <p>Enable learners to interact with training videos—ask questions and get instant, AI-generated explanations for better retention. <span className="coming-soon">Coming Soon</span></p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3>AI Roleplay Simulator</h3>
            <p>Let employees safely practice real-life workplace conversations with responsive AI for improved confidence. <span className="coming-soon">Coming Soon</span></p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3>AI ChatBot for Learner Support</h3>
            <p>Provide 24/7 on-demand assistance to learners through intelligent, conversational AI agents.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3>Career Path & Skill Recommendations</h3>
            <p>Get AI-driven career growth suggestions tailored to each employee's role, skills, and learning history.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>Skill Demand Forecasting</h3>
            <p>Stay ahead of industry changes by predicting emerging skill needs and adjusting training strategies proactively.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3>Performance Boost Insights</h3>
            <p>Leverage AI to identify performance gaps and receive actionable recommendations to enhance learning outcomes.</p>
        </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3>Team Readiness & Risk Simulation</h3>
            <p>Assess team skills, test cybersecurity readiness, and run realistic simulations to prepare for real-world challenges.</p>
                 </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3>Deep Analytics & Impact Reports</h3>
            <p>Access powerful dashboards and reports to track learner progress, program effectiveness, and L&D ROI.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3>Content Marketplace Access</h3>
            <p>Easily integrate and assign premium courses from top providers like Coursera and Udemy within your learning ecosystem. <span className="coming-soon">Coming Soon</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
