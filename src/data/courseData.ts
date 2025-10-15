export interface Course {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  author: string;
  duration: string;
  level: string;
  students: string;
  rating: string;
  language: string;
  description: string;
  overview: string;
  requirements: string[];
  curriculum: string[];
  benefits: string;
  instructorImage: string;
}

export const courses: Course[] = [
  {
    id: 1,
    slug: "basic-to-advance-ui-ux-design",
    title: "Basic to Advance UI/UX Design Course",
    category: "Web Design",
    image: "/images/courses/course1.jpg",
    author: "Sarah Chen",
    duration: "185 minutes",
    level: "Beginner to Advanced",
    students: "2,450+",
    rating: "4.9/5.0",
    language: "English",
    description: "This comprehensive UI/UX design course takes you from basic principles to advanced techniques in creating stunning web and mobile interfaces.",
    overview: "This comprehensive UI/UX design course takes you from basic principles to advanced techniques in creating stunning web and mobile interfaces. Learn industry-standard tools and methodologies used by top designers worldwide.",
    requirements: [
      "Basic computer skills and internet access",
      "Design software (Figma, Adobe XD, or Sketch recommended)",
      "Passion for creating exceptional user experiences"
    ],
    curriculum: [
      "Module 1: Introduction to UI/UX Design Fundamentals",
      "Module 2: User Research and Persona Development",
      "Module 3: Wireframing and Information Architecture",
      "Module 4: Visual Design and Brand Identity",
      "Module 5: Advanced Prototyping and Animation",
      "Module 6: Usability Testing and Iteration",
      "Module 7: Design Systems and Component Libraries",
      "Module 8: Final Project and Portfolio Development"
    ],
    benefits: "This course combines theoretical knowledge with practical hands-on projects, ensuring you gain real-world skills that employers value. With lifetime access to course materials and a supportive community of fellow learners, you'll have everything you need to succeed in the competitive field of UI/UX design.",
    instructorImage: "/images/courses/course-author1.png"
  },
  {
    id: 2,
    slug: "mobile-apps-development",
    title: "Basic to Advance Mobile Apps Development",
    category: "iOS Mobile App",
    image: "/images/courses/course2.jpg",
    author: "Marcus Rodriguez",
    duration: "185 minutes",
    level: "Beginner to Advanced",
    students: "2,150+",
    rating: "4.8/5.0",
    language: "English",
    description: "Master mobile app development from basics to advanced techniques for iOS and Android platforms.",
    overview: "This comprehensive mobile app development course teaches you everything from basic concepts to advanced techniques for building iOS and Android applications. Learn industry-standard tools and frameworks used by professional developers.",
    requirements: [
      "Basic programming knowledge",
      "Computer with macOS or Windows",
      "Xcode or Android Studio installed",
      "Passion for mobile technology"
    ],
    curriculum: [
      "Module 1: Introduction to Mobile Development",
      "Module 2: Setting Up Development Environment",
      "Module 3: UI Components and Layouts",
      "Module 4: Navigation and Data Management",
      "Module 5: APIs and Network Integration",
      "Module 6: Advanced Features and Animations",
      "Module 7: Testing and Debugging",
      "Module 8: Publishing to App Stores"
    ],
    benefits: "This course provides hands-on experience with real projects, helping you build a portfolio of mobile applications. You'll learn from industry experts and gain skills that are in high demand in today's job market.",
    instructorImage: "/images/courses/course-author2.png"
  },
  {
    id: 3,
    slug: "digital-marketing-strategy",
    title: "Grow Your Digital Marketing With Lamber",
    category: "Digital Marketing",
    image: "/images/courses/course3.jpg",
    author: "Jennifer Thompson",
    duration: "160 minutes",
    level: "Intermediate",
    students: "3,200+",
    rating: "4.9/5.0",
    language: "English",
    description: "Learn advanced digital marketing strategies to grow your business and online presence.",
    overview: "This advanced digital marketing course covers all aspects of modern digital marketing strategies. Learn SEO, social media marketing, content marketing, email campaigns, and analytics to grow your business online.",
    requirements: [
      "Basic understanding of marketing concepts",
      "Access to social media accounts",
      "Google Analytics account",
      "Willingness to experiment with marketing campaigns"
    ],
    curriculum: [
      "Module 1: Digital Marketing Fundamentals",
      "Module 2: SEO and Content Strategy",
      "Module 3: Social Media Marketing",
      "Module 4: Email Marketing Automation",
      "Module 5: Paid Advertising (PPC, Facebook Ads)",
      "Module 6: Analytics and Performance Measurement",
      "Module 7: Conversion Rate Optimization",
      "Module 8: Integrated Marketing Campaigns"
    ],
    benefits: "Gain practical skills that directly impact business growth. Learn from successful marketing professionals and apply proven strategies to achieve measurable results in your marketing efforts.",
    instructorImage: "/images/courses/course-author3.png"
  },
  {
    id: 4,
    slug: "business-development-strategies",
    title: "How To Grow your Business Development",
    category: "Business",
    image: "/images/courses/course4.jpg",
    author: "David Kim",
    duration: "140 minutes",
    level: "Beginner to Intermediate",
    students: "1,800+",
    rating: "4.7/5.0",
    language: "English",
    description: "Discover proven strategies to grow your business and develop sustainable competitive advantages.",
    overview: "This business development course provides actionable strategies for growing your business in today's competitive marketplace. Learn about market analysis, customer acquisition, strategic partnerships, and scaling operations effectively.",
    requirements: [
      "Basic business knowledge",
      "Access to business metrics/data",
      "Willingness to implement growth strategies",
      "Note-taking materials"
    ],
    curriculum: [
      "Module 1: Business Development Fundamentals",
      "Module 2: Market Analysis and Opportunity Identification",
      "Module 3: Customer Acquisition Strategies",
      "Module 4: Strategic Partnerships and Alliances",
      "Module 5: Sales Process Optimization",
      "Module 6: Digital Transformation for Business Growth",
      "Module 7: Scaling Operations Efficiently",
      "Module 8: Measuring and Sustaining Growth"
    ],
    benefits: "Apply proven frameworks to identify growth opportunities and implement scalable business strategies. Learn from successful entrepreneurs and executives who have built thriving businesses.",
    instructorImage: "/images/courses/course-author4.png"
  },
  {
    id: 5,
    slug: "medical-care-at-home",
    title: "Basic Medical Caring from your Home",
    category: "Medical Care",
    image: "/images/courses/course5.jpg",
    author: "Dr. Emily Watson",
    duration: "120 minutes",
    level: "Beginner",
    students: "950+",
    rating: "4.6/5.0",
    language: "English",
    description: "Learn essential medical care techniques you can perform at home to maintain health and wellness.",
    overview: "This course teaches basic medical care techniques that can be performed at home to maintain health and wellness. Learn about first aid, preventive care, monitoring vital signs, and when to seek professional medical assistance.",
    requirements: [
      "Basic understanding of human anatomy",
      "First aid kit for practice exercises",
      "Thermometer and blood pressure monitor",
      "Willingness to learn hands-on medical skills"
    ],
    curriculum: [
      "Module 1: Introduction to Home Healthcare",
      "Module 2: First Aid Basics and Emergency Response",
      "Module 3: Monitoring Vital Signs at Home",
      "Module 4: Preventive Health Measures",
      "Module 5: Managing Chronic Conditions",
      "Module 6: Nutrition and Wellness at Home",
      "Module 7: Mental Health and Stress Management",
      "Module 8: Creating a Home Healthcare Plan"
    ],
    benefits: "Develop confidence in handling basic medical situations at home. Learn skills that can help protect your family's health and potentially save lives in emergency situations.",
    instructorImage: "/images/courses/course-author5.png"
  },
  {
    id: 6,
    slug: "advanced-ui-ux-mobile-design",
    title: "Basic to Advance UI/UX Design (Web+Mobile)",
    category: "Mobile Apps",
    image: "/images/courses/course6.jpg",
    author: "Alex Johnson",
    duration: "200 minutes",
    level: "Advanced",
    students: "1,650+",
    rating: "4.9/5.0",
    language: "English",
    description: "Master advanced UI/UX design techniques specifically for mobile applications and responsive web design.",
    overview: "This advanced UI/UX design course focuses specifically on mobile applications and responsive web design. Learn specialized techniques for creating seamless user experiences across multiple devices and platforms.",
    requirements: [
      "Intermediate UI/UX design knowledge",
      "Proficiency with design tools (Figma, Sketch, Adobe XD)",
      "Basic understanding of HTML/CSS",
      "Portfolio of previous design work"
    ],
    curriculum: [
      "Module 1: Mobile-First Design Principles",
      "Module 2: Responsive Design Patterns",
      "Module 3: Gestures and Touch Interactions",
      "Module 4: Mobile Navigation Systems",
      "Module 5: Performance Optimization for Mobile",
      "Module 6: Cross-Platform Design Consistency",
      "Module 7: Accessibility in Mobile Design",
      "Module 8: Advanced Prototyping and Testing"
    ],
    benefits: "Specialize in mobile design and become highly sought after in the job market. Learn advanced techniques that distinguish professional designers from amateurs.",
    instructorImage: "/images/courses/course-author6.png"
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};

export const getRelatedCourses = (currentId: number, limit: number = 3): Course[] => {
  return courses.filter(course => course.id !== currentId).slice(0, limit);
};