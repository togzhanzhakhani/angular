export interface Course {
    id: number;
    title: string;
    start_date: string;
    duration: number;
    target_audience: string;
    lessons_count: number;
    lesson_duration: number;
    about_program: string;
    modules: CourseModule[];
    pricing: CoursePricing[];
  }
  
  export interface CourseModule {
    id: number;
    title: string;
    description: string;
  }
  
  export interface CoursePricing {
    id: number;
    title: string;
    description: string;
    price: number;
  }

  export interface User {
    username: string;
    password: string;
  }
  
  