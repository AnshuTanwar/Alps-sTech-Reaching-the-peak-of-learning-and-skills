
import { Course } from "@/components/CourseCard";
import { Result } from "@/components/ResultCard";

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development including HTML, CSS, and JavaScript. Build responsive websites from scratch.",
    instructor: "John Smith",
    duration: "8 weeks",
    level: "beginner",
    price: 1999,
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2831&auto=format&fit=crop",
    enrollmentStatus: "open",
  },
  {
    id: "2",
    title: "Advanced JavaScript Programming",
    description: "Master advanced JavaScript concepts including closures, promises, async/await, and modern ES6+ features.",
    instructor: "Sarah Johnson",
    duration: "10 weeks",
    level: "intermediate",
    price: 2499,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
    enrollmentStatus: "open",
  },
  {
    id: "3",
    title: "Database Management Systems",
    description: "Learn about database design, SQL, NoSQL, and how to integrate databases with applications.",
    instructor: "Michael Chen",
    duration: "12 weeks",
    level: "intermediate",
    price: 2999,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
    enrollmentStatus: "open",
  },
  {
    id: "4",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using React Native framework for iOS and Android.",
    instructor: "Emily Rodriguez",
    duration: "14 weeks",
    level: "advanced",
    price: 3499,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874&auto=format&fit=crop",
    enrollmentStatus: "in progress",
  },
  {
    id: "5",
    title: "Cybersecurity Fundamentals",
    description: "Learn the basics of network security, encryption, and protecting systems from cyber threats.",
    instructor: "David Wilson",
    duration: "10 weeks",
    level: "beginner",
    price: 2299,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop",
    enrollmentStatus: "open",
  },
  {
    id: "6",
    title: "Data Science and Machine Learning",
    description: "Introduction to data analysis, statistical methods, and machine learning algorithms using Python.",
    instructor: "Lisa Wong",
    duration: "16 weeks",
    level: "advanced",
    price: 3999,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    enrollmentStatus: "closed",
  },
];


export const resultsData: Result[] = [
  {
    id: "1",
    courseId: "1",
    courseName: "Web Development Fundamentals",
    score: 88,
    maxScore: 100,
    grade: "B+",
    date: "2023-05-15",
    feedback: "Great work on the HTML and CSS portions. Need some improvement in JavaScript fundamentals.",
  },
  {
    id: "2",
    courseId: "2",
    courseName: "Advanced JavaScript Programming",
    score: 78,
    maxScore: 100,
    grade: "C+",
    date: "2023-08-22",
    feedback: "Good understanding of ES6 features, but work needed on asynchronous programming concepts.",
  },
  {
    id: "3",
    courseId: "5",
    courseName: "Cybersecurity Fundamentals",
    score: 95,
    maxScore: 100,
    grade: "A",
    date: "2023-11-10",
    feedback: "Excellent understanding of security principles and threat modeling.",
  },
];

export const enrolledCoursesData: { courseId: string; enrollmentDate: string }[] = [
  {
    courseId: "1",
    enrollmentDate: "2023-03-10",
  },
  {
    courseId: "2",
    enrollmentDate: "2023-06-15",
  },
  {
    courseId: "5",
    enrollmentDate: "2023-09-05",
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return coursesData.find(course => course.id === id);
};

export const getStudentResults = (userId?: string): Result[] => {
  if (!userId) return [];
  
  const userData = localStorage.getItem("user");
  if (!userData) return [];
  
  const user = JSON.parse(userData);
  
  if (!user.results || !Array.isArray(user.results) || user.results.length === 0) {
    return [];
  }
  
  return resultsData.filter(result => user.results.includes(result.id));
};

export const getEnrolledCourses = (userId?: string) => {
  if (!userId) return [];
  
  const userData = localStorage.getItem("user");
  if (!userData) return [];
  
  const user = JSON.parse(userData);
  
  
  if (!user.enrolledCourses || !Array.isArray(user.enrolledCourses) || user.enrolledCourses.length === 0) {
    return [];
  }
  
  
  return user.enrolledCourses.map(courseId => {
    const course = getCourseById(courseId);
    return {
      ...course,
      enrollmentDate: new Date().toISOString().split('T')[0], 
    };
  }).filter(Boolean); 
};
