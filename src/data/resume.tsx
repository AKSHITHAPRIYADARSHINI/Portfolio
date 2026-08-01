import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";


export const DATA = {
  name: "Akshitha Priyadarshini Murugan",
  initials: "APM",
  url: "https://dillion.io",
  location: "Chicago, IL",
 // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Cybersecurity Aspirant. I love protecting systems and industries.",
  summary:
    "I’m Akshitha Priyadarshini Murugan, currently pursuing my Master’s in Cybersecurity at the [Illinois Institute of Technology in Chicago, Illinois](/#education). I am in my third semester and maintaining a good GPA. Over the past year, during my higher studies, I have explored various tools and participated in multiple [security events and conferences](/#hackathons).",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Bash",
    "SQL",
    "Active Directory",
    "GCP",
    "Security Tools",
    "Splunk",
    "Nmap",
    "Metasploit",
    "Nessus",
    "Cryptography",
    "OpenSSL",
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
    "Presentation",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "akshipriya14@gmail.com",
    //tel: "+1(312)933-7752",
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
        url: "https://1drv.ms/b/c/4afe6308ae928d0e/IQB6Hy8X-vvnQ4NvOMXhpE2DAQXEqgsEERnWfcOZVZz3kcg?e=osutjM",
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
        url: "akshipriya14@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Cyber Security Summit",
      location: "Minneapolis, MN",
      title: "Project Management Intern",
      logoUrl: "/css.png",
      start: "July 2026",
      end: "October 2026",
      description: (
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground italic">Remote &amp; Onsite</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Supporting the Summit’s mission to bridge tech innovation with policy leadership across critical infrastructure sectors.</li>
            <li>• Securing sponsors for The Cybersecurity Summit and facilitating weekly meetings with cybersecurity leaders across
                 critical infrastructure sectors.</li>
            <li>• Nominated by Summit managers and selected from a group of 20+ interns to be a panelist at the upcoming CSS 16 Summit, representing the intern cohort in discussions centered on "Human-Led, AI-Powered.</li>
          </ul>
        </div>
      ),
    },
    {
      company: "Value Aligners",
      location: "Oakland, CA",
      title: "Internship",
      logoUrl: "/vl.jpg",
      start: "February 2026", 
      end: "May 2026",
      roles: [ 
        {
          title: "Technical Operational Lead",
          start: "Apr '26",
          end: "May '26",
          location: "Remote",
          description: (
            <ul className="space-y-1 text-muted-foreground ml-2">
              <li>• Led a team of 7 across sales and marketing divisions.</li>
              <li>• Managed Zoho CRM and Zoho Digital Marketing to streamline operations, optimize campaigns, and drive business growth.</li>
              <li>• Streamlined internal workflows and supported data-driven decision-making to boost team productivity.</li>
            </ul>
          ),
        },
        {
          title: "Cloud Engineer",
          start: "Mar '26",
          end: "Apr '26",
          location: "Remote",
          description: (
            <ul className="space-y-1 text-muted-foreground ml-2">
              <li>• Worked on GCP Virtual Machines to update and edit the company portfolio.</li>
              <li>• Implemented a GRC (Governance, Risk, Compliance) Agentic AI to streamline compliance and risk management processes.</li>
              <li>• Managed cloud resources and ensured smooth deployment of applications on GCP.</li>
            </ul>
          ),
        },
        {
          title: "Cybersecurity Marketing Intern",
          start: "Feb '26",
          end: "Mar '26",
          location: "Remote",
          description: (
            <ul className="space-y-1 text-muted-foreground ml-2">
              <li>• Researched 20+ cybersecurity vendors and analyzed emerging cloud security trends.</li>
              <li>• Created AWS security-focused content and performed SEO for digital campaigns.</li>
              <li>• Managed encrypted vendor databases and supported cloud operations within SDLC.</li>
            </ul>
          ),
        },
      ],
    },
    {
      company: "Ford Motor Pvt Ltd",
      location: "Chennai, TN",
      title: "Software Developer Intern",
      logoUrl: "/atomic.jpg",
      start: "January 2024",
      end: "April 2024",
      description: (
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground italic">Onsite</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Improved internal Struts-based application for Ford Europe.</li>
            <li>• Completed an NLP project using LLMs for topic generation.</li>
            <li>• Developed a ticket-analysis tool with Excel export for a 20-member team.</li>
          </ul>
        </div>
      ),
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
      gpa: "3.6",
      verifiedLink: "#",
    },
    {
      school: "RMK Engineering College",
      href: "https://www.rmkec.ac.in/2023/",
      degree: "Bachelor of Technology - Computer Science & Business Systems",
      logoUrl: "/waterloo.jpg",
      start: "2020",
      end: "2024",
      gpa: "3.4",
      verifiedLink: "#",
    },
    {
      school: "St. John's Public School",
      href: "https://sjps.edu.in/",
      degree: "High School",
      logoUrl: "/laurier.png",
      start: "2013",
      end: "2020",
    },
    {
      school: "Boaz Public School",
      href: "https://boazpublicschool.com/",
      degree: "Primary School",
      logoUrl: "/ib.jpg",
      start: "2004",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "AI-Driven Multi-Agent E-Commerce Platform",
      //href: "https://automatic.chat",
      dates: "August 2025 - November 2025",
      active: true,
      description:
        "Comparative study of multi-agent orchestration workflows using AutoGen and LangChain to build an e-commerce platform. Designed, tested, and documented with reproducible environment setup and full notebooks.",
      technologies: [
        "Replicate API",
        "Open API",
        "Ollama",
        "Python Notebook",
        "Virtual Environments",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AKSHITHAPRIYADARSHINI/AI-Driven-Multi-Agent-E-Commerce-Platform-AutoGen-LangChain-Experiments-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Cryptographic MAC Implementation & Forgery Attack Simulation",
     // href: "https://magicui.design",
      dates: "Jan 2025 - May 2025",
      active: true,
      description:
        "Demonstrates how insecure Message Authentication Code constructions can be exploited through chosen-message forgery attacks. Interactive educational tool with practical cryptographic examples.",
      technologies: [
        "Python",
        "HTML5",
        "CSS3",
        "Windows/Linux",
        "Hashlib",
      ],
      links: [
        {
          type: "Website",
          href: "https://ashitaa-a76b8.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
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
      title: "RSA Sign Then Encrypt Interactive Demonstration",
      //href: "https://llm.report",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "Interactive demonstration of RSA sign-then-encrypt workflow. Shows secure message signing and encryption between two parties with practical cryptographic implementation.",
      technologies: [
        "Python",
        "RSA",
        "Cryptography",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AKSHITHAPRIYADARSHINI/RSA-Sign-Then-Encrypt-Interactive-Demonstration",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Abnormal behavior detection using YOLO",
      //href: "https://chatcollect.com",
      dates: "Dec 2023 - Jun 2024",
      active: false,
      description:
        "Real-time human behavior analysis using YOLO v8 object detection and custom Conv2D network. Detects abnormal patterns in visual contexts for security applications.",
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
  ],
  certificates: [
    {
      title: "Introduction to Security Principles in Cloud Computing",
      subtitle: "Google/Coursera",
      date: "2025",
      category: "Google Cloud",
      description: "Passionate about cloud security, I completed this comprehensive course to master the principles of securing cloud infrastructure and applications.",
      tags: ["Cloud Security", "Google Cloud", "Infrastructure"],
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/XQQEX9SZENFU",
    },
    {
      title: "Cybersecurity 101",
      subtitle: "TryHackMe",
      date: "2025",
      category: "Cybersecurity",
      description: "Driven by a passion for cybersecurity, I achieved proficiency in ethical hacking and security fundamentals.",
      tags: ["Cybersecurity", "Ethical Hacking", "Security"],
      credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-WF9VZ5AJ8H.pdf",
    },
    {
      title: "CompTIA Security+",
      subtitle: "CompTIA",
      date: "In Progress",
      category: "Cybersecurity",
      description: "A globally recognized, vendor-neutral certification that validates foundational skills in cybersecurity.",
      tags: ["Cybersecurity", "Ethical Hacking", "Security"],
      credentialUrl: "https://www.comptia.org/en-us/certifications/security/",
    },
    {
      title: "CCNA",
      subtitle: "Cisco",
      date: "In Progress",
      category: "Cybersecurity",
      description: "CCNA (Cisco Certified Network Associate) is an industry-recognized certification that validates foundational knowledge and skills in networking.",
      tags: ["Cybersecurity", "Ethical Hacking", "Security"],
      credentialUrl: "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna.html",
    },
  ],

  hackathons: [
    {
      title: "HackwithChicago 3.0",
      dates: "Apr 2nd - 4th, 2026",
      location: "Chicago, Illinois",
      description:
        "Participated in HackWithChicago 3.0, developing ResearchGraph, an AI-powered research assistant that leverages Neo4j knowledge graphs, retrieval-augmented generation (RAG), and citation verification to help researchers explore academic literature with traceable evidence.",
      icon: "public",
      image:
        "/hack.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://researchgraph.kineloop.com/",

        },
      ],
    },
    {
      title: "ISSA - MindHack 2026 (Volunteer and Participant)",
      dates: "January 14 - April, 2026",
      location: "Chicago, IL ",
      description:
"Collaborated with a team of volunteers to support ISSA MindHack 2026, helping conduct outreach to over 500 students and encouraging participation in the event. Competed as part of a five-member team in a cybersecurity scenario-based role-play challenge, solving complex problems without the use of electronic devices or internet access. Demonstrated teamwork, critical thinking, and effective decision-making under pressure, contributing to an outstanding team performance.",      
      image: "/mind.png.png",
      href: "https://mtap.io/event/MINDHACK2026?srsltid=AfmBOooJ5Asw0ApGi7KsbjCWQWLFeGsasluX76sX2Xh8IXVyhdErp_vB",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://mtap.io/event/MINDHACK2026?srsltid=AfmBOooJ5Asw0ApGi7KsbjCWQWLFeGsasluX76sX2Xh8IXVyhdErp_vB",
        },
      ],  
    },
    {
      title: "Lean Education Agile Foundary Lab - The Agile Mind",
      dates: "Feburary 9 - April, 2026",
      location: "New York, New York ",
      description:
        "I collaborate with a team of four (Team Virus). We were assigned a school security–related problem statement by The Agile Mind and are responsible for developing and presenting two innovative solution approaches. The project follows Agile methodology, emphasizing teamwork, iterative development, and problem-solving.",
      image: "/leaf.jpg",
      href: "https://www.l-eaflab.org/",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.l-eaflab.org/",
        },
      ],  
    },
    {
      title: "Inaugural UpWise Coffee and Cyber",
      dates: "March 25, 2026",
      location: "South Carolina, SC",
      description:
        "Invited as a guest to the inaugural UpWiSE Coffee & Cyber event, where I engaged with cybersecurity professionals and shared insights alongside industry peers. The opportunity strengthened my professional network and highlighted my contributions through collaboration with The Agile Mind team.",
      image: "/Inaug.png",
      href: "https://www.l-eaflab.org/",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.l-eaflab.org/",
        },
      ],  
    },
    {
      title: "ChiBrrCon 26'",
      dates: "Feburary 5, 2026",
      location: "Chicago, Illinois ",
      description:
        "ChiBrrCon ’26 is a one-day, high-impact cybersecurity conference in Chicago focused on Leadership, Artificial Intelligence, Identity and Access Management, and enterprise security. The event features 30 expert speakers delivering technical and strategic sessions, followed by a dynamic “B-Sides” after party.",
      image: "/chi.png",
      href: "https://chibrrcon.com/",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://chibrrcon.com/",
        },
      ],  
    },
    {
      title: "GDG Chicago Google (Google Developer Group)",
      dates: "January 26, 2026",
      location: "Chicago, Illinois ",
      description:
        "The session focused on building full-stack applications with Google Antigravity, and it offered valuable technical insights into modern development workflows, architecture, and best practices.",
      image: "/gdg.png",
      href: "https://chibrrcon.com/",
      links: [
        {
          title: "Organization",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gdg.community.dev/",
        },
      ],  
    },
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
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.rmkec.ac.in/2023/",
        },
      ],
    },
  ],
} as const;
