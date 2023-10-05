import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  recipesApp,
  tfc,
  threejs,
  blackJack,
} from "../assets";

// import java from "../assets/tech/java.png";
import python from "../assets/tech/python.png";
import mysql from "../assets/tech/mysql.png";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Frontend",
    icon: web,
  },
  {
    title: "Desenvolvedor Backend",
    icon: backend,
  },
  {
    title: "Desenvolvedor FullStack",
    icon: mobile,
  },
  {
    title: "Analista de Qualidade",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  // {
  //   name: "java",
  //   icon: java,
  // },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Recipe App",
    description:
      "Uma aplicação web que permite aos usuários pesquisar por receitas, visualizar receitas salvas e compartilhar receitas com outros usuários. Esta aplicação foi desenvolvida pela equipe de desenvolvimento na qual fiz parte durante o curso de desenvolvimento web fullstack da Trybe. Para acessar, basta logar com um email em formato valido e uma senha com no mínimo 7 caracteres.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "cypress",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "hooks",
        color: "blue-text-gradient",
      },
    ],
    category: 'Frontend',
    image: recipesApp,
    source_code_link: "https://github.com/Jaci-Xavier/recipe-app",
    deployed_url: 'https://recipe-app-one-sand.vercel.app/'
  },
  {
    name: "Trybe Futebol Clube",
    description:
      "Uma aplicação web no qual foi desenvolvido o banco de dados de um campeonato de futebol, onde o usuario consegue vizualizar uma classificação geral, a classificação por jogos em casa ou como visitante, alem de poder adicionar, editar e finalizar partidas entre os times. O calculo de pontos assim como a classificação são feitos automaticamente após a atualização da partida no banco de dados. Esta aplicação foi desenvolvida por mim durante o curso de desenvolvimento web fullstack da Trybe.",
    tags: [
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    category: 'Backend',
    image: tfc,
    source_code_link: "https://github.com/Jaci-Xavier/Projeto-Trybe-Futebol-Clube",
    deployed_url: 'https://github.com/Jaci-Xavier/Projeto-Trybe-Futebol-Clube'
  },
  {
    name: "Black Jack",
    description:
      "Este é um projeto de Blackjack desenvolvido com React. É um jogo de cartas onde o objetivo deste projeto é simular um jogo de Blackjack, onde o jogador compete contra o dealer para chegar o mais próximo possível de 21 pontos sem ultrapassá-lo. Para jogar basta logar com um email valido e uma senha com no mínimo 7 caracteres. Esta aplicação foi desenvolvida por mim consumindo a api de baralho do site https://deckofcardsapi.com/",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "hooks",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "blue-text-gradient",
      },
    ],
    category: 'Frontend',
    image: blackJack,
    source_code_link: "https://github.com/Jaci-Xavier/black-jack",
    deployed_url: 'https://black-jack-plum-rho.vercel.app'
  },
];

export { services, technologies, experiences, testimonials, projects };