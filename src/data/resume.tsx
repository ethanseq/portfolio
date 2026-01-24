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
      logoUrl: "/atom.png",
      start: "Sep 2025",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON",
      title: "Lead Engineer",
      logoUrl: "/atom.png",
      start: "Sep 2024",
      end: "Aug 2025",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON / Remote",
      title: "Software Engineer",
      logoUrl: "/martinrea.jpg",
      start: "Apr 2023",
      end: "Aug 2024",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
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
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
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
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON",
      title: "Software Engineering Intern",
      logoUrl: "/martinrea.jpg",
      start: "May 2022",
      end: "August 2022",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Martinrea",
      href: "https://www.martinrea.com",
      badges: [],
      location: "Vaughan, ON",
      title: "Software Engineering Intern",
      logoUrl: "/martinrea.jpg",
      start: "May 2021",
      end: "August 2021",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
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
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "McMaster University",
      href: "https://www.eng.mcmaster.ca/ibiomed/",
      degree: "B. Eng. Software and Biomedical Engineering (Co-op)",
      logoUrl: "/mcmaster.png",
      start: "2019",
      end: "2024",
    },
    {
      school: "Cawthra Park Secondary School",
      href: "https://cawthrapark.peelschools.org/music",
      degree: "High School Diploma, Regional Arts Program (Piano)",
      logoUrl: "/cawthra.png",
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
