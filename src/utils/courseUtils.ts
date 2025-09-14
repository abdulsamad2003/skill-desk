import coursesData from '../data/courses.json';

export interface Course {
  id: string;
  title: string;
  description: string;
  overview: string;
  thumbnail: string;
  modules: number;
  lessons: number;
  duration: string;
  difficulty: string;
  enrolledCount: number;
  completionRate: number;
  rating: number;
  department: string;
  skills: string[];
  status: string;
  createdAt: string;
  dueDate: string | null;
  instructor: string;
  price: number;
  isPopular: boolean;
}

export interface CourseCategory {
  id: number;
  name: string;
  description: string;
  image: string;
  courseCount: number;
  avgRating: number;
  href: string;
  courses: Course[];
}

// Get all courses from JSON
export const getAllCourses = (): Course[] => {
  console.log('Loading courses from JSON:', coursesData.length, 'courses found');
  return coursesData as Course[];
};

// Get courses grouped by category
export const getCoursesByCategory = (): CourseCategory[] => {
  const courses = getAllCourses();
  const categoryMap = new Map<string, CourseCategory>();

  courses.forEach((course) => {
    const categoryName = course.department;
    
    if (!categoryMap.has(categoryName)) {
      categoryMap.set(categoryName, {
        id: categoryMap.size + 1,
        name: categoryName,
        description: getCategoryDescription(categoryName),
        image: getCategoryImage(categoryName),
        courseCount: 0,
        avgRating: 0,
        href: `/courses/${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
        courses: []
      });
    }

    const category = categoryMap.get(categoryName)!;
    category.courses.push(course);
    category.courseCount++;
  });

  // Calculate average ratings
  categoryMap.forEach((category) => {
    const totalRating = category.courses.reduce((sum, course) => sum + course.rating, 0);
    category.avgRating = Math.round((totalRating / category.courseCount) * 10) / 10;
  });

  return Array.from(categoryMap.values()).sort((a, b) => b.courseCount - a.courseCount);
};

// Get top categories (limited number)
export const getTopCategories = (limit: number = 6): CourseCategory[] => {
  return getCoursesByCategory().slice(0, limit);
};

// Get courses by specific category
export const getCoursesByCategoryName = (categoryName: string): Course[] => {
  return getAllCourses().filter(course => course.department === categoryName);
};

// Helper function to get category descriptions
const getCategoryDescription = (categoryName: string): string => {
  const descriptions: { [key: string]: string } = {
    "Data Science & AI": "Master artificial intelligence, machine learning, and data analysis to build intelligent systems and extract insights from data.",
    "Cybersecurity": "Learn essential security concepts, threat analysis, and ethical hacking to protect digital assets and systems.",
    "Software Development": "Build modern web and mobile applications using cutting-edge technologies and development frameworks.",
    "Cloud Computing": "Master cloud platforms like AWS, Azure, and Google Cloud to deploy and scale applications in the cloud.",
    "Digital Marketing": "Learn SEO, social media marketing, content strategy, and analytics to drive business growth and engagement.",
    "Design": "Create intuitive and beautiful digital products using modern design tools and user experience principles.",
    "Project Management": "Master project management methodologies including Agile, Scrum, and PMP principles to lead successful projects.",
    "Business & Leadership": "Develop leadership skills and strategic thinking to lead teams and drive organizational success.",
    "Mobile Development": "Build native and cross-platform mobile applications using React Native and Flutter.",
    "DevOps": "Learn DevOps practices, automation, and infrastructure as code for modern software delivery.",
    "Blockchain": "Master blockchain technology and smart contract development for decentralized applications.",
    "Machine Learning": "Advanced machine learning course focusing on production-ready ML systems and MLOps.",
    "Data Analytics": "Learn data analysis, visualization, and statistical modeling using Python and modern tools.",
    "Product Management": "Master product management from ideation to launch with user research and strategy.",
    "Game Development": "Create 2D and 3D games using Unity engine with game design principles and C# programming.",
    "Salesforce": "Master Salesforce platform development including Apex, Lightning components, and administration.",
    "Content Creation": "Learn content creation, video editing, and social media content strategy with modern tools.",
    "Database": "Master database design, administration, and optimization with SQL and modern database systems.",
    "IT Support": "Comprehensive IT support training covering troubleshooting, system administration, and customer service."
  };

  return descriptions[categoryName] || "Explore courses in this category to advance your skills and career.";
};

// Helper function to get category images
const getCategoryImage = (categoryName: string): string => {
  const imageMap: { [key: string]: string } = {
    "Data Science & AI": "/assets/top-courses/data-science-and-ai.jpg",
    "Cybersecurity": "/assets/top-courses/cyber-security.jpg",
    "Software Development": "/assets/top-courses/software-development.jpg",
    "Cloud Computing": "/assets/top-courses/cloud-computing.jpg",
    "Digital Marketing": "/assets/top-courses/digital-marketing.jpg",
    "Design": "/assets/top-courses/ui-ux-designer.jpg",
    "Project Management": "/assets/top-courses/Project-management.jpg",
    "Business & Leadership": "/assets/top-courses/business-and-leader.jpg",
    "Mobile Development": "/assets/top-courses/ai-image.jpg",
    "DevOps": "/assets/top-courses/ai-image-2.jpg",
    "Blockchain": "/assets/top-courses/ai-image-3.jpg",
    "Machine Learning": "/assets/top-courses/ai-image-4.jpg",
    "Data Analytics": "/assets/top-courses/data-science-and-ai.jpg",
    "Product Management": "/assets/top-courses/Project-management.jpg",
    "Game Development": "/assets/top-courses/software-development.jpg",
    "Salesforce": "/assets/top-courses/cloud-computing.jpg",
    "Content Creation": "/assets/top-courses/digital-marketing.jpg",
    "Database": "/assets/top-courses/ai-image.jpg",
    "IT Support": "/assets/top-courses/teams.jpg"
  };

  return imageMap[categoryName] || "/assets/top-courses/ai-image.jpg";
};
