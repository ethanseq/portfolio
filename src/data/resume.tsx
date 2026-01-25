import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, MusicIcon, PlaneIcon} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Cpp } from "@/components/ui/svgs/cpp";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Redis } from "@/components/ui/svgs/redis";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Django } from "@/components/ui/svgs/django";
import { RabbitMQ } from "@/components/ui/svgs/rabbitmq";
import { Linux } from "@/components/ui/svgs/linux";
import { Git } from "@/components/ui/svgs/git";
import { AWS } from "@/components/ui/svgs/aws";
import { Grafana } from "@/components/ui/svgs/grafana";
import { OpenTelemetry } from "@/components/ui/svgs/opentelemetry";


export const DATA = {
  name: "Ethan Sequeira",
  initials: "ES",
  url: "https://ethanseq.com",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:`Software engineer focused on building systems that perform at scale and make a meaningful impact. 
               Outside of work, you'll find me making music, exploring new places, or working on projects.`,
  summary:`I 
          work with cross-functional teams to develop applications for performance and scale in automotive manufacturing. I love 
          collaborating with people from different backgrounds and disciplines. Always rewarding 
          to solve hard problems and accomplish meaningful things together. These days I wear a lot of hats: engineering, 
          product management, managing external partnerships and employees, financial analysis, production optimization,
          legal coordination, and presenting technical strategy to executives and investors.`,
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "C++", icon: Cpp },
    { name: "Java", icon: Java },
    { name: "Django", icon: Django },
    { name: "FastAPI", icon: FastAPI },
    { name: "Postgres", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "Redis", icon: Redis },
    { name: "AWS", icon: AWS },
    { name: "Docker", icon: Docker },
    { name: "Linux", icon: Linux },
    { name: "OpenTelemetry", icon: OpenTelemetry },
    { name: "Grafana", icon: Grafana },
    { name: "RabbitMQ", icon: RabbitMQ },
    { name: "Git", icon: Git },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/music", icon: MusicIcon, label: "Music" },
    { href: "/travel", icon: PlaneIcon, label: "Travel" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@ethanseq.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ethanseq",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ethanseq/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON",
      title: "Engineering Supervisor",
      logoUrl: "/atom2.svg",
      start: "Sep 2025",
      end: "Present",
      description:
        "Leading a team to develop and ship a distributed resistance spot welding optimization system. Created full observability infrastructure using OpenTelemetry and LGTM stack. Currently driving product management and business strategy, with significant North American plant-wide deployment planned for 2026.",
    },
    {
      company: "Airtime Platform",
      badges: [],
      href: "https://www.airtimevolleyball.com",
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "/airtime.png",
      start: "May 2025",
      end: "Present",
      description: (
        <>
          Working with <a href="https://joefurf.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Joe Furfaro</a> and <a href="https://www.linkedin.com/in/maurice-el-helou-b4811519a/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Maurice el Helou</a> to build a high-performance training platform. Starting with <a href="https://www.airtimevolleyball.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Airtime Volleyball</a> for Q2 2026! Built with Python/Django backend, React/Next.js frontend, and deployed with AWS.
        </>
      ),
    },
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON",
      title: "Lead Engineer",
      logoUrl: "/atom2.svg",
      start: "Sep 2024",
      end: "Aug 2025",
      description:
        "Developed a high-performance event-driven C++ application for processing real-time weld data and running optimization jobs. Architected a distributed system with an intelligent job broker that lets one edge device service multiple manufacturing lines instead of needing separate devices for each line, while collaborating with weld engineers on optimization algorithms and managing the full-stack monitoring app.",
    },
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON / Remote",
      title: "Software Engineer",
      logoUrl: "/martinrea.svg",
      start: "Apr 2023",
      end: "Aug 2024",
      description:
        "Worked and provided mentorship on developing vision solutions for manufacturing. Started a Python library that abstracts complex computer vision workflows and speeds up development time. Created a configurable data augmentation framework for training ML models and implemented quality inspection systems using both ML and classical CV techniques in Python and C++.",
    },
    {
      company: "ARCO Lab",
      href: "https://arcolab.mcmaster.ca",
      badges: [],
      location: "Hamilton, ON",
      title: "Research Assistant",
      logoUrl: "/arco.png",
      start: "Aug 2023",
      end: "Jun 2024",
      description: (
        <>
          Worked with <a href="https://mattgiamou.ca" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Dr. Matthew Giamou</a> on research for optimal beacon placement for range-aided localization. <a href="https://arxiv.org/abs/2405.11550" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Published a paper</a> with provable performance guarantees. Built a 2D/3D localization simulator in Python for experimentation and developed optimization frameworks for minimizing localization error in GPS and autonomous navigation. Really grateful for Dr. Giamou's guidance; learned a ton.
        </>
      ),
    },
    {
      company: "Vielight",
      href: "https://www.vielight.com",
      badges: [],
      location: "Toronto, ON / Remote",
      title: "Capstone",
      logoUrl: "/vielight.svg",
      start: "Sep 2023",
      end: "Apr 2024",
      description:
        "Built a real-time AWS cloud app to stream and process 64-channel EEG data, handling everything from hardware acquisition to automated signal analysis. Created a full-stack web app (Node.js/Express backend, Chart.js frontend) that visualizes brain wave data, generates topoplots, and dynamically adjusts photobiomodulation device parameters.",
    },
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON",
      title: "Software Engineering Intern",
      logoUrl: "/martinrea.svg",
      start: "May 2022",
      end: "August 2022",
      description:
        "Developed custom computer vision solutions for various manufacturing business units using Python and OpenCV. Presented to board of directors, corporate partners, and investors. Rewrote AGV image processing algorithms in C++ and CUDA for 25x performance boost through parallel computing, plus improved SLAM stability and added save/load functionality.",
    },
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON",
      title: "Software Engineering Intern",
      logoUrl: "/martinrea.svg",
      start: "May 2021",
      end: "August 2021",
      description:
        "Worked on an AGV for factory inventory management that was decently cheaper than commercial options while improving production line safety and efficiency. Optimized computer vision algorithms using Python, C++, Java, and OpenCV, achieving 5x faster object detection and avoidance, plus implemented motion profiling, camera calibration, and ArUco marker positioning.",
    },
    {
      company: "TD Bank",
      href: "https://www.td.com/ca/en/personal-banking",
      badges: [],
      location: "Toronto, ON",
      title: "Customer Experience Associate",
      logoUrl: "/td.png",
      start: "Nov 2020",
      end: "Feb 2021",
      description:
        "Part-time role during university that gave me my first real exposure to retail banking. Supported clients with transactions and money management while learning how to recommend products that fit their needs.",
    },
  ],
  education: [
    {
      school: "McMaster University",
      href: "https://www.eng.mcmaster.ca/ibiomed/",
      degree: "B. Eng. Software and Biomedical Engineering (Co-op)",
      logoUrl: "/mcmaster.svg",
      start: "2019",
      end: "2024",
    },
    {
      school: "Cawthra Park Secondary School",
      href: "https://cawthrapark.peelschools.org/music",
      degree: "High School Diploma, Regional Arts Program (Piano)",
      logoUrl: "/cawthra.svg",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
} as const;
