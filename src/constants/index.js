import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT =
  "Crafting seamless user experiences with clean, responsive, and dynamic front-end designs that bring your ideas to life. Want to see the magic behind the code? Dive deeper into my journey and expertise below.";

export const ABOUT_TEXT =
  "Data Science student at Telkom University with a strong focus on front-end development and data analysis. I have a good command of ReactJS, NextJS, Bootstrap and Tailwind CSS, and have worked on front-end projects that implement responsive web design principles. In addition, I have mastered Python, TensorFlow, and SQL, which enhance my ability to perform in-depth data analysis and build machine learning models. With a high enthusiasm for learning and developing myself, I am committed to continuing to develop my skills to become an expert in data analysis and front-end development.";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Web Development",
    company: "CCI Telkom Unviersity",
    description: `Designed and developed a website with a team using React.js and Next.js along with Tailwind CSS for the frontend, and Node.js and AdonisJS for the backend.`,
    technologies: ["Javascript", "React.js", "Next.js", "TailwindCSS"],
  },
  {
    year: "2023 - Present",
    role: "Machine Learning",
    company: "GDSC Telkom University",
    description: `Actively participated in a project utilizing statistical concepts, data processing, and various machine learning algorithms.`,
    technologies: ["Python", "TensorFlow", "NumPy", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Green-Cure",
    image: project1,
    description:
      "I was responsible as a Front-End Developer, using React.js, Next.js, and Tailwind CSS to create responsive user interfaces. Additionally, I handled data fetching from APIs for plant disease detection, ensuring an optimal user experience across devices.",
    technologies: ["Next.JS", "TailwindCSS", "Adonis.JS", "PostgreSQL"],
    url: "https://green-cure.netlify.app/",
  },
  {
    title: "Iphone 15 Clone Website",
    image: project2,
    description:
      "I worked on a project to clone the iPhone 15 website using Three.js, React, and GSAP, which I learned from YouTube. In this project, I delved into using Three.js to create 3D models and implemented interactive animations with GSAP to create a dynamic and engaging user experience. This project also provided me with a deeper understanding of integrating 3D models into web development.",
    technologies: ["React.js", "Three.js", "GSAP"],
    url: "https://iphone15-apple.vercel.app/",
  },
  {
    title: "Dapur Nusantara",
    image: project3,
    description:
      "I am working on a website project called Dapur Nusantara using HTML, CSS, JavaScript, and Bootstrap. In this project, I am focusing on mastering Bootstrap to create a responsive and visually appealing design. The Dapur Nusantara website aims to provide users with information about various traditional Indonesian foods, allowing them to better understand and enjoy the diverse culinary heritage of Indonesia. Additionally, users can make reservations to dine at the Dapur Nusantara restaurant through the website.",
    technologies: ["HTML", "JavaScript", "Bootstrap"],
    url: "https://dapur-nusantara.vercel.app/",
  },
];

export const CONTACT = {
  address: "Bandung, Indonesia",
  phoneNo: "+62-8211-9307054",
  email: "rafihauzan42@gmail.com",
};
