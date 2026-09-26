export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  image?: string;
};

// Add a real link (e.g. the specific GitHub repo) for each project when you have one.
export const projects: Project[] = [
  {
    title: "FLUSEC — LLM-Driven Flutter Security Extension",
    description:
      "A VS Code extension that detects Flutter application security vulnerabilities through AST-based static analysis, with LLM-powered educational feedback and recommended fixes.",
    stack: ["Flutter", "Dart", "VS Code API", "LLM"],
    link: "https://github.com/movinduayanaja",
  },
  {
    title: "Clinic Appointment Management System",
    description:
      "A microservices-based backend for managing clinic operations — patients, doctors, appointments, and schedules — with an API Gateway routing client requests for scalable service communication.",
    stack: ["FastAPI", "Python", "HTTPX", "REST APIs", "Docker", "Microservices"],
    link: "https://github.com/movinduayanaja",
    image: "/projects/clinic.jpeg",
  },
  {
    title: "Mentovia — Skill Sharing Platform",
    description:
      "Student work plan management features including CRUD operations and progress tracking, with integrated frontend and backend for user workflow management.",
    stack: ["React", "Spring Boot", "MongoDB"],
    link: "https://github.com/movinduayanaja",
    image: "/projects/skillshare.jpeg",
  },
  {
    title: "SchedulEase — Student Scheduling System",
    description:
      "Schedule management functionality for administrators, with a user-friendly interface for students to view personalized daily schedules.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://github.com/movinduayanaja",
    image: "/projects/timeTablemanagement.jpg",
  },
  {
    title: "Google Authentication App",
    description:
      "Secure user authentication using Firebase Google Sign-In, including login, registration, and account verification.",
    stack: ["Flutter", "Firebase Authentication"],
    link: "https://github.com/movinduayanaja",
    image: "/projects/auth.png",

  },
  {
    title: "PetPulse — Pet Healthcare & Accessories Web App",
    description:
      "Built the delivery management feature with full CRUD operations for delivery managers, while users can view and track delivery details.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "https://github.com/movinduayanaja",
    image: "/projects/petpulse.jpg",
  },
];