import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akshitha Priyadarshini Murugan",
  initials: "APM",
  url: "https://dillion.io",
  location: "Chicago, IL",
 // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Cybersecurity Aspirant. I love hacking and protecting Systems.",
  summary:
    "I’m Akshitha Priyadarshini Murugan, currently pursuing my Master’s in Cybersecurity at the [Illinois Institute of Technology in Chicago, Illinois](/#education). I am in my third semester and maintaining a good GPA. Over the past year, during my higher studies, I have explored various tools and participated in multiple [security events and conferences](/#hackathons).",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Bash",
    "SQL",
    "Security Tools",
    "ISO 27001",
    "OWASP Top 10",
    "SIEM",
    "Docker",
    "Wireshark",
    "Microsoft suite",
    "Google Suite",
    "Git",
    "Public-key Cryptograph",
    "Network Security",
    "Pentesting",
    "Encryption Protocols",
    "Firewall",
    "IDP & IPS",
    "Governance & Regulation",
    "Leadership",
    "Communication",
    "Collaboration",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "akshipriya14@gmail.com",
    tel: "+1(312)933-7752",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AKSHITHAPRIYADARSHINI",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akshitha-priyadarshini-m-/",
        icon: Icons.linkedin,

        navbar: true,
      },
      TryHackMe: {
        name: "TryHackMe",
        url: "https://tryhackme.com/p/AkshithaPriyad",
        icon: Icons.tryhackme,
        navbar: true,
      },
      MicrosoftLearning: {
        name: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/users/akshithapriyadarshinimurugan-1410/",
        icon: Icons.microsoftLearning,
        navbar: true,
      },
      X: {
        name: "TryHackMe",
        url: "https://tryhackme.com/p/AkshithaPriyad",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Resume",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
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
      company: "Ford Motor Pvt Ltd",
      href: "https://www.india.ford.com/",
      badges: [],
      location: "Onsite",
      title: "Software Developer Intern",
      logoUrl: "/atomic.jpg",
      start: "January 2024",
      end: "April 2024",
      description:
      <ul>
       <li> • Enhanced internal application using Struts (Java & JavaScript) for Ford Europe users </li>

       <li> • Developed automation solution on Google Cloud Platform (GCP) benefiting 500+ users across Europe </li>

       <li> • Contributed to GCP security using Forseti (FOSCA) ensuring compliance with internal policies </li>

       <li> • Completed NLP project generating topics from descriptions using large language models (LLMs) </li>

       <li> • Created ticket analysis solution with Excel export helping team of ~20 members manage hundreds of tickets weekly </li>

       <li> • Collaborated with multiple departments including cybersecurity team on security policies and best practices`, </li>
        </ul>

    },
  ],
  education: [
    {
      school: "Illinois Institute of Technology",
      href: "https://www.iit.edu/",
      degree: "Master of Science - Cybersecurity",
      course: "Cybersecurity",
      logoUrl: "/buildspace.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "RMK Engineering College",
      href: "https://www.rmkec.ac.in/2023/",
      degree: "Bachelor of Technology - Computer Science & Business Systems",
      logoUrl: "/waterloo.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "St. John's Public School",
      href: "https://sjps.edu.in/",
      degree: "High School",
      logoUrl: "/laurier.png",
      start: "2020",
      end: "2013",
    },
    {
      school: "Boaz Public School",
      href: "https://boazpublicschool.com/",
      degree: "Primary School",
      logoUrl: "/ib.jpg",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Abnormal behavior detection using YOLO",
      //href: "https://chatcollect.com",
      dates: "Dec 2023 - Jun 2024",
      active: false,
      description:
        "The Proposed system combines state-of-the-art object detection with deep learning to Comprehensively analyze and detect human behavior in various visual contexts. The system's core components are YOLO v8, an advanced object detection model, and a custom Conv2D network specifically designed for behavior analysis.",
      technologies: [
        "Python 3.x",
        "YOLOv8",
        "TensorFlow",
        "OpenCV",
        "Tkinter",
        "WandB",
        "Roboflow",
        "Kaggle",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AKSHITHAPRIYADARSHINI/Abnormal-behavior-detection-using-YOLO",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Cryptographic MAC Implementation & Forgery Attack Simulation",
     // href: "https://magicui.design",
      dates: "Jan 2025 - May 2025",
      active: true,
      description:
        "This project presents a comprehensive demonstration of how insecure Message Authentication Code (MAC) constructions can be exploited through chosen-message forgery attacks.",
      technologies: [
        "Python",
        "HTML5",
        "CSS3",
        "Windows/Linux",
        "Hashlib",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AKSHITHAPRIYADARSHINI/MAC-Scheme-Simulation-Forgery-Attack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "ISSA - Information Security Student Association",
      dates: "July 23rd - Present, 2025",
      location: "Chicago, Illinois",
      description:
        "I participate and volunteer for every chapter meeting that happens on every month 2nd week. I get insights on real time risk and mitigation from the professioanls.",
      image: "/issa.png",
      href: "https://issa-chicago.org/",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://issa-chicago.org/",
        },
      ],  
    },
    {
      title: "Women in Cybersecurity",
      dates: " April 14th - Present, 2025",
      location: "Chicago, Illinois",
      description:
        "Im a member and part of event community at my University, I use this platform for my professional development and task managing skills.",
      image:
        "/wicys.png",
      //mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.wicys.org/",
        },
      ],
    },
    {
      title: "HackwithChicago 2.0",
      dates: "Nov 17th - 18th, 2025",
      location: "Chicago, Illinois",
      description:
        "Participated in HackWithChicago 2.0, developing secure AI healthcare solutions with real-time data, UI/UX design, and intelligent patient prioritization at Microsoft.",
      icon: "public",
      image:
        "/hack.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/AKSHITHAPRIYADARSHINI/meditrack-wound-healing-Updts",
        },
      ],
    },
    {
      title: "Evergreen Climate Innovations – Co Invest Climate ",
      dates: "Aug 20th 2024",
      location: "Chicago, Illinois",
      description:
        "Coordinated Evergreen Climate Innovations’ Co-Invest Climate event, managing logistics, participant engagement, and operations to support climate-focused innovation and collaboration initiatives.",
      image:
        "/evergreen.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://evergreeninno.org/",
        },
      ],
    },
    {
      title: "RMK Engineering College - Symposium",
      dates: "Aug 4th, 2023",
      location: "Chennai, Tamil Nadu",
      description:
        "Hosted and coordinated symposium sessions, engaging attendees, managing event flow, and ensuring seamless execution of talks, workshops, and panel discussions.",
      image:
        "/waterloo.jpg",
      //win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://www.rmkec.ac.in/2023/",
        },
      ],
    },
  ],
} as const;
