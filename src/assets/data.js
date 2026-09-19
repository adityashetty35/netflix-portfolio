import skillsImg from "./cards/skills.svg";
import experienceImg from "./cards/experience.svg";
import educationImg from "./cards/education.svg";
import projectsImg from "./cards/projects.svg";
import contactImg from "./cards/contact.svg";
import musicImg from "./cards/music.svg";
import readingImg from "./cards/reading.svg";

export const slugify = (value) =>
  value.toLowerCase().trim().replace(/\s+/g, "-");

const catalog = {
  skills: {
    id: 1,
    title: "Skills",
    imgUrl: skillsImg,
    path: "/skills",
    details: {
      headline: "Technical Skills",
      description:
        "Python, Java, JavaScript/TypeScript; FastAPI, Flask, REST APIs, microservices, distributed systems, RAG, and cloud-native operations.",
    },
  },
  experience: {
    id: 2,
    title: "Experience",
    imgUrl: experienceImg,
    path: "/work-experience",
    details: {
      headline: "Experience",
      description:
        "4+ years building enterprise backends — currently Python Developer at Neural IT, previously Software Developer at Cerelabs.",
    },
  },
  education: {
    id: 3,
    title: "Education",
    imgUrl: educationImg,
    path: "/certifications",
    details: {
      headline: "Education",
      description:
        "B.Sc. Computer Science, PVG College of Science & Technology (2019–2022); S K Somaiya Junior College (2018–2019).",
    },
  },
  projects: {
    id: 4,
    title: "Projects",
    imgUrl: projectsImg,
    path: "/projects",
    details: {
      headline: "Projects",
      description:
        "Built Hoshi HRMS, Entrust Case Management, Queryfic, and an enterprise Document Masking Bot.",
    },
  },
  contact: {
    id: 5,
    title: "Contact Me",
    imgUrl: contactImg,
    path: "/contact-me",
    details: {
      headline: "Contact",
      description:
        "aadityashetty35@gmail.com | linkedin.com/in/aaditya-sangishetty-08b0b5215 | github.com/adityashetty35",
    },
  },
  music: {
    id: 6,
    title: "Music",
    imgUrl: musicImg,
    path: "/music",
    details: {
      headline: "Music",
      description:
        "Mostly hip-hop, rap, RnB, and drill — the soundtrack to long debugging sessions.",
    },
  },
  reading: {
    id: 7,
    title: "Reading",
    imgUrl: readingImg,
    path: "/reading",
    details: {
      headline: "Reading",
      description:
        "Books on systems, habits, and money — Atomic Habits, The Psychology of Money, Eat That Frog.",
    },
  },
};

const profileConfig = {
  recruiter: {
    hero: {
      headline: "Aaditya Sangishetty — Backend Software Engineer",
      description:
        "Backend Software Engineer with 4+ years designing scalable enterprise systems in Python and FastAPI. I build multi-tenant platforms, distributed services, REST APIs, real-time systems, and AI/LLM workflows—supporting 400+ enterprise clients and nearly 1M requests per day.",
      backgroundImage:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDRzdjBmb3IzOGEwejVmZ25uMXJ2ZjVyM2pjNWZlMW85dDFtYXJ5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NTF9D7WxRcu7fcJIZB/giphy.gif",
    },
    rows: [
      {
        title: "Today's Top Picks for Recruiter",
        items: ["experience", "skills", "projects", "education", "contact"],
      },
      { title: "More About Me", items: ["music", "reading"] },
    ],
  },

  developer: {
    hero: {
      headline: "How I Build — Python, FastAPI, and Distributed Systems",
      description:
        "Multi-tenant architectures, event-driven services on Redis and NSQ, real-time WebSocket pipelines, and MCP integrations that let LLMs talk to enterprise data. Here's the stack, the systems I've shipped, and the trade-offs behind them.",
      backgroundImage:
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aThnMmgzOGVmcXM3czJlNHQxYmxjZXp4ZWdxamJxemhpbWZrNGltaSZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/V4NSR1NG2p0KeJJyr5/giphy.gif",
    },
    rows: [
      {
        title: "The Stack & What I've Shipped",
        items: ["skills", "projects", "experience"],
      },
      { title: "Off the Clock", items: ["reading", "music", "contact"] },
    ],
  },

  stalker: {
    hero: {
      headline: "The Long Version",
      description:
        "Backend engineer based in Navi Mumbai. Beyond the commit history: the records on repeat, the books that actually stuck, where I studied, and every way to reach me. Scroll if you're curious.",
      backgroundImage:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdml6bnY1cHUybWU1c2dwbGJlZGFmeDA1czU3NWlmOTg2cXMyNzJjZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0HlQXkh1wx1RjtUA/giphy.gif",
    },
    rows: [
      {
        title: "Getting to Know Me",
        items: ["music", "reading", "education"],
      },
      { title: "The Professional Bit", items: ["experience", "contact"] },
    ],
  },

  adventurer: {
    hero: {
      headline: "Curiosity-Driven Development",
      description:
        "Off the clock I'm usually deep in a hip-hop record, a book about systems and habits, or a side project I swore would only take one weekend. Same curiosity that makes me pull apart a legacy codebase to see how it ticks.",
      backgroundImage:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Z6OW53ZTdoMnM4MWkxZGRmMnZ0eDJoZnlqYmx6Z3hhZHc0c2E0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKz2b5bGDHhLRxu/giphy.gif",
    },
    rows: [
      { title: "Things I'm Into", items: ["music", "reading", "projects"] },
      { title: "The Day Job", items: ["skills", "experience", "contact"] },
    ],
  },
};

export const profileNames = Object.keys(profileConfig);

export function getProfile(name) {
  const config = profileConfig[name] ?? profileConfig.recruiter;

  return {
    hero: config.hero,
    rows: config.rows.map((row) => ({
      title: row.title,
      items: row.items.map((key) => catalog[key]).filter(Boolean),
    })),
  };
}

export function findCard(profileName, sectionSlug) {
  const { rows } = getProfile(profileName);

  return rows
    .flatMap((row) => row.items)
    .find((item) => slugify(item.title) === slugify(sectionSlug ?? ""));
}
