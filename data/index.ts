import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I focus on collaborative development and clear, open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I easily adapt to various time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: `CISCO Certified Network Associate (CCNA),CISCO. Cyber Security and Ethical Hacking Fundamentals,UIU.`,
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building a platform to share AI generated stock videos using React Native",
    description: "ReelAI",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested to working together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "QuillQuest: A University-Based Forum",
    des: "A dynamic platform fostering academic interaction, support, and community building, with features like discussion boards, collaborative projects, and job opportunities.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://quillquest-forum.vercel.app/",
  },
  {
    id: 2,
    title: "QuillQuest Chat",
    des: "A dynamic platform to chat, support, and community building.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://quillquest-chat.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with K.M Shahriar Alam Adib was a privilege. His impressive result in the Final Year Design Project highlighted his dedication, perseverance, and strong work ethic. His enthusiasm and resilience make him an outstanding candidate for work or any demanding role. He will excel in his future endeavors.",
    name: "Hasan Sarwar, PhD",
    title1: "Professor, Department of Computer Science and Engineering",
    title2: "Dean, School of Science and Engineering",
    title3: "United International University",
    img: "/Dr.-Hasan-Sarwar-240x300.jpg",
  },
  {
    quote:
      "I highly recommend K.M Shahriar Alam Adib, a standout student from United International University. His exceptional performance in Web Programming, including his innovative problem-solving and strong teamwork skills, highlights his readiness for advanced studies. Adib will be a valuable asset to your program.",
    name: "Nahid Hossain",
    title1: "Assistant Professor & Program Coordinator",
    title2: "Department of Computer Science & Engineering",
    title3: "United International University",
    img: "/Nahid-Hossain-240x300.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Enguneer Hut",
    img: "/02-removebg-preview.png",
    nameImg: "/02-removebg-preview.png",
  },
  {
    id: 2,
    name: "Vromon Buzz",
    img: "/logo.png",
    nameImg: "/logo.png",
  },
  {
    id: 3,
    name: "EduSoft Consultants Ltd.",
    img: "/EdusoftLogo(short).png",
    nameImg: "/EdusoftLogo(short).png",
  },
];

export const workExperience = [
  {
    id: 1,
    title:
      "Web Developer Intern - Engineer Hut (September 2023 - February 2024)",
    desc: "Developed and maintained company websites, ensuring content accuracy and enhancing user experience and web functionality.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title:
      "Customer Service Executive Intern - Vromon Buzz (October 2023 - April 2024)",
    desc: "Provided customer support, maintained website and aligned services with company goals, streamlining processes and enhancing customer experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ShahRiarKhan55",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kmshahriaralamadib/",
  },
  {
    id: 3,
    img: "/facebook.svg",
    link: "https://www.facebook.com/Shahriar.Khan.55/",
  },
  // {
  //   id: 4,
  //   img: "/twit.svg",
  //   link: "https://www.linkedin.com/in/kmshahriaralamadib/",
  // },
];
