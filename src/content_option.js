import img from "./assets/img.JPG";

const logotext = "RUTURAJ";
const meta = {
  title: "Tapaswi Ruturaj Guru",
  description:
    "Creative UI/UX Designer | Specializing in User-Centered Design, Wireframing & Prototyping.",
};

const introdata = {
  title: "Hi, I'm Tapaswi Ruturaj Guru",
  animated: {
    first: "I design intuitive user experiences",
    second: "I craft seamless UI interfaces",
    third: "I bring ideas to life with Figma & Prototyping",
  },
  description:
    "Passionate UI/UX designer dedicated to creating visually appealing and user-friendly digital experiences. I focus on usability, accessibility, and aesthetic consistency to enhance user interactions.",
  your_img_url: img,
};

const dataabout = {
  title: "About Me",
  aboutme:
    "I’m a UI/UX designer with a keen eye for aesthetics and a strong focus on user experience. I specialize in wireframing, prototyping, and designing interactive interfaces that engage and inspire users. My process is rooted in research, design thinking, and testing to ensure the best results.",
};

const worktimeline = [
  {
    jobtitle: "UI/UX Designer",
    where: "Creative Agency",
    date: "2023 - Present",
  },
  {
    jobtitle: "Junior UX Designer",
    where: "Startup Inc.",
    date: "2021 - 2023",
  },
  {
    jobtitle: "Freelance Designer",
    where: "Self-Employed",
    date: "2019 - 2021",
  },
];

const skills = [
  {
    name: "Figma",
    value: 95,
  },
  {
    name: "Adobe XD",
    value: 90,
  },
  {
    name: "Sketch",
    value: 85,
  },
  {
    name: "User Research",
    value: 80,
  },
  {
    name: "Wireframing & Prototyping",
    value: 90,
  },
  {
    name: "HTML & CSS",
    value: 75,
  },
  {
    name: "JavaScript (UI interactions)",
    value: 70,
  },
];

const services = [
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive, accessible, and user-friendly interfaces that enhance the overall user experience.",
  },
  {
    title: "Prototyping & Wireframing",
    description:
      "Developing interactive prototypes and wireframes to visualize user flows and test usability.",
  },
  {
    title: "User Research & Testing",
    description:
      "Conducting research and usability testing to ensure products meet user needs and expectations.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "Mobile app UI design for a fintech startup, focusing on usability and clean aesthetics.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "E-commerce website redesign with improved navigation and user journey.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "Dashboard UI for an analytics platform with real-time data visualization.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "Dark-mode portfolio website designed for a modern and sleek experience.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "name@domain.com",
  YOUR_FONE: "(555)123-4567",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
