export const profile = {
  name: 'Linus Wallin',
  title: "Computer Science Master's Student @ KTH",
  summary:
    'Computer Science student passionate about data visualization, programming, and application development. Driven by a strong work ethic, attention to detail, and a commitment to developing impactful solutions.',
  email: 'linus.wallin00@gmail.com',
  phone: '+46 76 301 96 84',
  showPhone: false,
  linkedinUrl: null,
  githubUrl: null,
};

export const skills = [
  {
    category: 'Languages & Tools',
    items: ['Python', 'C#', 'Go', 'JavaScript', 'React'],
  },
  {
    category: 'Practices',
    items: ['Version Control and CI', 'Communication and team collaboration', 'Curious'],
  },
  {
    category: 'Spoken Languages',
    items: ['Swedish', 'English', 'Finnish'],
  },
];

export const projects = [
  {
    id: 'dh2642-flower-app',
    title: 'DH2642 — Interaction Programming and the Dynamic Web',
    description:
      'Course project built with a team of four: a website where users create an account and store images of flowers, which are identified via an external API.',
    tech: ['Vue', 'HTML', 'JavaScript', 'CSS'],
    image: null,
    link: null,
    linkLabel: 'Visit site',
  },
  {
    id: 'elmhills-kennel',
    title: 'Website for Elmhills Kennel',
    description:
      "Designed and built a website for my mother's and sister's dog kennel, showcasing their dogs and litters.",
    tech: ['React', 'JavaScript', 'CSS'],
    image: null,
    link: null,
    linkLabel: 'Visit site',
  },
  {
    id: 'mtg-life-tracker',
    title: 'Android Application — MTG Life Tracker',
    description:
      'A simple Android app for tracking life totals and other game mechanics for the card game Magic the Gathering.',
    tech: ['Android'],
    image: null,
    link: null,
    linkLabel: 'View on GitHub',
  },
  {
    id: 'go-htmx-tournament',
    title: 'Go + HTMX Tournament App (Ongoing)',
    description:
      'Building the MVP of a tournament management web application with a friend, aiming to make it easier for individuals to create and manage tournaments.',
    tech: ['Go', 'HTMX'],
    image: null,
    link: null,
    linkLabel: 'View on GitLab',
  },
];

export const education = [
  {
    degree: "Master's Degree in Computer Science",
    institution: 'KTH Royal Institute of Technology, Stockholm',
    dates: 'Aug 2023 – June 2026',
    thesisTitle:
      '3D Boids in Safety-critical Urban Search and Rescue Scenarios Represented by Artificial Potential Fields',
    thesisLink: null,
  },
  {
    degree: "Bachelor's Degree in Media Technology",
    institution: 'KTH Royal Institute of Technology, Stockholm',
    dates: 'Aug 2020 – Jun 2023',
    thesisTitle: 'The Effects of Color on Depth Perception in Virtual Reality: A Case Study',
    thesisLink: 'https://kth.diva-portal.org/smash/record.jsf?pid=diva2:1794939',
  },
];

export const publications = [
  {
    role: 'Writer',
    title: 'The Effects of Color on Depth Perception in Virtual Reality: A Case Study',
    venue: "Bachelor's Thesis, KTH",
    link: 'https://kth.diva-portal.org/smash/record.jsf?pid=diva2:1794939',
  },
  {
    role: 'Co-writer',
    title:
      'Exploring the Influence of Object Shapes and Colors on Depth Perception in Virtual Reality for Minimally Invasive Neurosurgical Training',
    venue: "CHI EA '24, ACM, Article 154",
    link: 'https://doi.org/10.1145/3613905.3650813',
  },
];
