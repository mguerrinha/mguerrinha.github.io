// All the text and data on the site lives here, in English and Portuguese.
// Edit this file to update the site; components only handle layout.

export const profile = {
  name: "Miguel Guerrinha",
  email: "mlguerrinha@gmail.com",
  github: "https://github.com/mguerrinha",
  linkedin: "https://linkedin.com/in/miguel-guerrinha",
  // Same photo as the CV, stored in /public. Replace public/me.jpg to change it
  // (a square image of about 960x960 works best).
  photo: "./me.jpg",
};

export const skills = [
  {
    id: "languages",
    items: ["C", "C++", "C#", "Java", "Python", "JavaScript", "Dart", "PHP", "Haskell", "Prolog", "HTML", "CSS"],
  },
  { id: "frameworks", items: ["React", "Flutter", "Laravel", "Bootstrap", "ROS", "Arduino"] },
  { id: "data", items: ["PostgreSQL", "SQLite", "Firebase", "Google Cloud Platform"] },
  { id: "tools", items: ["Git", "Docker", "Linux", "CMake", "Figma", "Notion"] },
];

// category: "algorithms" | "systems" | "apps"
// grade is out of 20; remove the field to hide it on a card.
export const projects = [
  {
    id: "prog",
    course: "PROG",
    category: "algorithms",
    stack: "C++",
    grade: 20.0,
    url: "https://github.com/mguerrinha/project-pro",
    en: {
      title: "Image processing library",
      text: "A C++ library to represent and process 8-bit RGB colour images.",
    },
    pt: {
      title: "Biblioteca de processamento de imagem",
      text: "Uma biblioteca em C++ para representar e processar imagens RGB de 8 bits.",
    },
  },
  {
    id: "da1",
    course: "DA",
    category: "algorithms",
    stack: "C++",
    grade: 19.1,
    url: "https://github.com/mguerrinha/DA_project_1",
    en: {
      title: "Water supply analysis tool",
      text: "Models a water supply network as a graph of cities, reservoirs and pumping stations, and analyses how it copes with demand and failures.",
    },
    pt: {
      title: "Análise de redes de abastecimento de água",
      text: "Modela uma rede de abastecimento de água como um grafo de cidades, reservatórios e estações de bombagem, e analisa a sua resposta à procura e a falhas.",
    },
  },
  {
    id: "aed2",
    course: "AED",
    category: "algorithms",
    stack: "C++",
    grade: 18.6,
    url: "https://github.com/mguerrinha/AED_2",
    en: {
      title: "Flight network explorer",
      text: "A graph-based model of airports and flights to explore routes and connections across the global air network.",
    },
    pt: {
      title: "Explorador de redes de voos",
      text: "Um modelo em grafos de aeroportos e voos para explorar rotas e ligações na rede aérea mundial.",
    },
  },
  {
    id: "esof",
    course: "ESOF",
    category: "apps",
    stack: "Flutter · Dart",
    grade: 18.3,
    url: "https://github.com/mguerrinha/ESOF",
    en: {
      title: "Grocery tracker app",
      text: "A mobile app that keeps track of the groceries you have at home, with alerts for expiry dates and low stock.",
    },
    pt: {
      title: "App de gestão de mercearias",
      text: "Uma aplicação móvel que acompanha os produtos que tens em casa, com alertas de validade e de stock baixo.",
    },
  },
  {
    id: "lcom",
    course: "LCOM",
    category: "systems",
    stack: "C",
    grade: 17.98,
    url: "https://github.com/mguerrinha/LCOM",
    en: {
      title: "Last One Standing",
      text: "A territory-expansion game inspired by Land.io, written in C for the Computer Laboratory course.",
    },
    pt: {
      title: "Last One Standing",
      text: "Um jogo de expansão de território inspirado no Land.io, escrito em C para Laboratório de Computadores.",
    },
  },
  {
    id: "aed1",
    course: "AED",
    category: "algorithms",
    stack: "C++",
    grade: 17.93,
    url: "https://github.com/mguerrinha/AED_1",
    en: {
      title: "Schedule manager",
      text: "Manages students, classes and courses, including requests to change schedules.",
    },
    pt: {
      title: "Gestor de horários",
      text: "Gere estudantes, turmas e unidades curriculares, incluindo pedidos de alteração de horário.",
    },
  },
  {
    id: "bd",
    course: "BD",
    category: "apps",
    stack: "SQL · SQLite",
    grade: 17.6,
    url: "https://github.com/mguerrinha/BD",
    en: {
      title: "Transport company database",
      text: "A relational database for a transport company's vehicles, warehouses, employees and orders.",
    },
    pt: {
      title: "Base de dados de uma transportadora",
      text: "Uma base de dados relacional para os veículos, armazéns, funcionários e encomendas de uma transportadora.",
    },
  },
  {
    id: "ldts",
    course: "LDTS",
    category: "apps",
    stack: "Java",
    grade: 17.3,
    url: "https://github.com/mguerrinha/FEUP-LDTS-SpaceShooter",
    en: {
      title: "Space Shooter",
      text: "An arcade game in Java: dodge meteors, destroy enemies and collect power-ups.",
    },
    pt: {
      title: "Space Shooter",
      text: "Um jogo arcade em Java: desviar de meteoros, destruir inimigos e apanhar power-ups.",
    },
  },
  {
    id: "rcom2",
    course: "RCOM",
    category: "systems",
    stack: "C",
    grade: 17.2,
    url: "https://github.com/mguerrinha/FEUP-RCOM-Proj2",
    en: {
      title: "FTP download client",
      text: "An FTP-style application protocol for downloading files, alongside the configuration of a small computer network.",
    },
    pt: {
      title: "Cliente de download FTP",
      text: "Um protocolo de aplicação do tipo FTP para descarregar ficheiros, a par da configuração de uma pequena rede de computadores.",
    },
  },
  {
    id: "rcom1",
    course: "RCOM",
    category: "systems",
    stack: "C",
    grade: 16.7,
    url: "https://github.com/mguerrinha/FEUP-RCOM-Proj1",
    en: {
      title: "Data link protocol over RS-232",
      text: "A custom data link protocol for reliable file transfer over a serial cable.",
    },
    pt: {
      title: "Protocolo de ligação de dados sobre RS-232",
      text: "Um protocolo de ligação de dados próprio para transferência fiável de ficheiros por cabo série.",
    },
  },
  {
    id: "ltw",
    course: "LTW",
    category: "apps",
    stack: "PHP · SQLite",
    grade: 14.4,
    url: "https://github.com/mguerrinha/LTW",
    en: {
      title: "Second-hand marketplace",
      text: "A website for buying and selling pre-owned items.",
    },
    pt: {
      title: "Marketplace de artigos usados",
      text: "Um website para comprar e vender artigos em segunda mão.",
    },
  },
  {
    id: "da2",
    course: "DA",
    category: "algorithms",
    stack: "C++",
    grade: 12.9,
    url: "https://github.com/mguerrinha/DA_2",
    en: {
      title: "Travelling Salesperson solver",
      text: "Tackles the Travelling Salesperson Problem with several algorithms and heuristics, and compares them.",
    },
    pt: {
      title: "Problema do Caixeiro-Viajante",
      text: "Aborda o Problema do Caixeiro-Viajante com vários algoritmos e heurísticas, e compara-os.",
    },
  },
];

export const content = {
  en: {
    meta: { title: "Miguel Guerrinha · Software Engineer" },
    nav: {
      about: "About",
      journey: "Journey",
      projects: "Projects",
      beyond: "Beyond code",
      contact: "Contact",
      menu: "Menu",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      language: "Language",
    },
    hero: {
      eyebrow: "Software engineer · Porto, Portugal",
      lead: "Junior Software Engineer at **Critical Flytech** and MSc student in Informatics and Computing Engineering at **FEUP**. Until 2025, I led the electrical systems of FAST, FEUP's solar-powered boat team.",
      primary: "See my projects",
      secondary: "Get in touch",
      photoAlt: "Portrait of Miguel Guerrinha",
    },
    about: {
      eyebrow: "About",
      title: "I like software that touches the real world.",
      paragraphs: [
        "I'm from Gouveia, a small town at the foot of Serra da Estrela, and I moved to Porto to study Informatics and Computing Engineering at FEUP. I finished my bachelor's in 2025, went straight into the master's, and started working as a Junior Software Engineer at the end of that year.",
        "I'm a hands-on person: I like getting my hands on things, taking them apart and figuring out how they work. That's what I enjoy most about engineering, the moment software meets something you can actually touch. I also do my best work as part of a team, on the job and off it.",
      ],
      facts: [
        { label: "Now", value: "Junior Software Engineer", detail: "Critical Flytech" },
        { label: "Studying", value: "MSc in Informatics and Computing Engineering", detail: "FEUP · University of Porto" },
        { label: "Before", value: "Electrical Systems lead", detail: "FAST · FEUP Academic Solar Team, 2024–2025" },
        { label: "From", value: "Gouveia", detail: "Serra da Estrela, Portugal" },
      ],
      strengthsLabel: "How I work",
      strengths: ["Planning", "Leadership", "Communication", "Problem solving", "Flexibility", "Persistence"],
      toolboxLabel: "Toolbox",
      skillGroups: {
        languages: "Languages",
        frameworks: "Frameworks & platforms",
        data: "Data & cloud",
        tools: "Tools",
      },
    },
    journey: {
      eyebrow: "Journey",
      title: "Where I've been, and where I am.",
      present: "Present",
      types: { work: "Work", team: "Team", edu: "Education" },
      items: [
        {
          type: "work",
          from: "2026",
          to: null,
          role: "Junior Software Engineer",
          place: "Critical Flytech",
        },
        {
          type: "work",
          from: "Dec 2025",
          to: "",
          role: "Junior Software Engineer",
          place: "Critical Software",
          text: "Where my professional career started, before moving to Critical Flytech.",
        },
        {
          type: "edu",
          from: "2025",
          to: null,
          role: "MSc in Informatics and Computing Engineering",
          place: "FEUP · Faculty of Engineering, University of Porto",
        },
        {
          type: "team",
          from: "2024",
          to: "2025",
          role: "Head of Electrical Systems",
          place: "FAST · FEUP Academic Solar Team",
          text: "Led the Electrical Systems department and was responsible for the control system of the team's solar boat.",
        },
        {
          type: "edu",
          from: "2022",
          to: "2025",
          role: "BSc in Informatics and Computing Engineering",
          place: "FEUP · Faculty of Engineering, University of Porto",
          text: "Three years of algorithms, operating systems, networks, databases and software engineering. Most of the projects below come from here.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Things I've built.",
      intro: "Course projects from my degree at FEUP. Grades are out of 20.",
      filters: { all: "All", algorithms: "Algorithms", systems: "Systems & networks", apps: "Apps, web & data" },
      viewCode: "View code on GitHub",
      more: "More on GitHub",
    },
    beyond: {
      eyebrow: "Beyond code",
      title: "Away from the keyboard.",
      cards: {
        fast: {
          meta: "FAST · 2024 to 2025",
          title: "A boat that runs on sunlight.",
          text: "At FAST, FEUP's Academic Solar Team, I led the Electrical Systems department and looked after the boat's control system. Water, batteries and deadlines: about as hands-on as engineering gets.",
        },
        lifeguard: {
          meta: "ISN · 2023",
          title: "Certified lifeguard.",
          text: "Trained and certified by ISN, Portugal's lifesaving institute, with a Basic Life Support and AED course on top. Staying calm when it matters turns out to be useful in engineering too.",
        },
        basketball: {
          meta: "Clube Camões · 2015 to 2022",
          title: "Seven seasons on court.",
          text: "I played basketball at Clube Camões for seven years. Most of what I know about being part of a team, I learned there first.",
        },
        roots: {
          meta: "Gouveia · Erasmus+ 2021 to 2022",
          title: "From the mountains to the rest of Europe.",
          text: "I grew up in Gouveia, in the Serra da Estrela mountains. In high school, an Erasmus+ project took me through Portugal, Germany, Poland and France, and made me want to keep working with people from everywhere.",
        },
      },
      alsoLabel: "Also along the way",
      also: [
        { title: "EBEC Porto", detail: "Engineering competition by BEST Porto", year: "2024" },
        { title: "Academia Júnior de Ciências", detail: "University of Beira Interior", year: "2021–22" },
        { title: "High School Merit Award", detail: "Gouveia School Group and City Hall", year: "2021/22" },
        { title: "Eu Sou Engenheiro summer course", detail: "Guarda Polytechnic Institute", year: "2021" },
        { title: "Primary School Merit Award", detail: "Gouveia School Group and City Hall", year: "2018/19" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk.",
      text: "Have an opportunity, a project, or just want to talk about boats that run on sunlight? My inbox is open.",
      copy: "Copy email",
      copied: "Copied",
    },
    footer: {
      built: "Built with React, Vite and Tailwind CSS.",
      top: "Back to top",
    },
  },

  pt: {
    meta: { title: "Miguel Guerrinha · Engenheiro de Software" },
    nav: {
      about: "Sobre",
      journey: "Percurso",
      projects: "Projetos",
      beyond: "Além do código",
      contact: "Contacto",
      menu: "Menu",
      themeToLight: "Mudar para tema claro",
      themeToDark: "Mudar para tema escuro",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Engenheiro de software · Porto, Portugal",
      lead: "Engenheiro de Software Júnior na **Critical Flytech** e estudante do Mestrado em Engenharia Informática e Computação na **FEUP**. Até 2025, liderei os sistemas elétricos da FAST, a equipa de barcos solares da FEUP.",
      primary: "Ver projetos",
      secondary: "Entrar em contacto",
      photoAlt: "Retrato de Miguel Guerrinha",
    },
    about: {
      eyebrow: "Sobre",
      title: "Gosto de software que toca no mundo real.",
      paragraphs: [
        "Sou de Gouveia, uma pequena cidade no sopé da Serra da Estrela, e mudei-me para o Porto para estudar Engenharia Informática e Computação na FEUP. Terminei a licenciatura em 2025, segui diretamente para o mestrado e comecei a trabalhar como Engenheiro de Software Júnior no final desse ano.",
        "Sou uma pessoa prática: gosto de pôr as mãos nas coisas, desmontá-las e perceber como funcionam. É disso que mais gosto na engenharia, o momento em que o software encontra algo em que se pode tocar. Também é em equipa que dou o meu melhor, no trabalho e fora dele.",
      ],
      facts: [
        { label: "Agora", value: "Engenheiro de Software Júnior", detail: "Critical Flytech" },
        { label: "A estudar", value: "Mestrado em Engenharia Informática e Computação", detail: "FEUP · Universidade do Porto" },
        { label: "Antes", value: "Líder de Sistemas Elétricos", detail: "FAST · FEUP Academic Solar Team, 2024–2025" },
        { label: "Origem", value: "Gouveia", detail: "Serra da Estrela, Portugal" },
      ],
      strengthsLabel: "Como trabalho",
      strengths: ["Planeamento", "Liderança", "Comunicação", "Resolução de problemas", "Flexibilidade", "Persistência"],
      toolboxLabel: "Tecnologias",
      skillGroups: {
        languages: "Linguagens",
        frameworks: "Frameworks e plataformas",
        data: "Dados e cloud",
        tools: "Ferramentas",
      },
    },
    journey: {
      eyebrow: "Percurso",
      title: "Por onde passei, e onde estou.",
      present: "Presente",
      types: { work: "Trabalho", team: "Equipa", edu: "Formação" },
      items: [
        {
          type: "work",
          from: "2026",
          to: null,
          role: "Engenheiro de Software Júnior",
          place: "Critical Flytech",
        },
        {
          type: "work",
          from: "Dez 2025",
          to: "",
          role: "Engenheiro de Software Júnior",
          place: "Critical Software",
          text: "Onde começou a minha carreira profissional, antes de passar para a Critical Flytech.",
        },
        {
          type: "edu",
          from: "2025",
          to: null,
          role: "Mestrado em Engenharia Informática e Computação",
          place: "FEUP · Faculdade de Engenharia da Universidade do Porto",
        },
        {
          type: "team",
          from: "2024",
          to: "2025",
          role: "Líder do Departamento de Sistemas Elétricos",
          place: "FAST · FEUP Academic Solar Team",
          text: "Liderei o departamento de Sistemas Elétricos e fui responsável pelo sistema de controlo do barco solar da equipa.",
        },
        {
          type: "edu",
          from: "2022",
          to: "2025",
          role: "Licenciatura em Engenharia Informática e Computação",
          place: "FEUP · Faculdade de Engenharia da Universidade do Porto",
          text: "Três anos de algoritmos, sistemas operativos, redes, bases de dados e engenharia de software. A maioria dos projetos abaixo vem daqui.",
        },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Coisas que construí.",
      intro: "Projetos de unidades curriculares do meu curso na FEUP. As notas são de 0 a 20.",
      filters: { all: "Todos", algorithms: "Algoritmos", systems: "Sistemas e redes", apps: "Apps, web e dados" },
      viewCode: "Ver código no GitHub",
      more: "Mais no GitHub",
    },
    beyond: {
      eyebrow: "Além do código",
      title: "Longe do teclado.",
      cards: {
        fast: {
          meta: "FAST · 2024 a 2025",
          title: "Um barco movido a luz do sol.",
          text: "Na FAST, a equipa académica de barcos solares da FEUP, liderei o departamento de Sistemas Elétricos e tratei do sistema de controlo do barco. Água, baterias e prazos: engenharia mais prática do que isto é difícil.",
        },
        lifeguard: {
          meta: "ISN · 2023",
          title: "Nadador-salvador certificado.",
          text: "Formado e certificado pelo ISN, o Instituto de Socorros a Náufragos, com um curso de Suporte Básico de Vida e DAE. Manter a calma quando é preciso também dá jeito na engenharia.",
        },
        basketball: {
          meta: "Clube Camões · 2015 a 2022",
          title: "Sete épocas em campo.",
          text: "Joguei basquetebol no Clube Camões durante sete anos. Quase tudo o que sei sobre fazer parte de uma equipa aprendi primeiro ali.",
        },
        roots: {
          meta: "Gouveia · Erasmus+ 2021 a 2022",
          title: "Da serra para o resto da Europa.",
          text: "Cresci em Gouveia, na Serra da Estrela. No secundário, um projeto Erasmus+ levou-me por Portugal, Alemanha, Polónia e França, e deixou-me com vontade de continuar a trabalhar com pessoas de todo o lado.",
        },
      },
      alsoLabel: "Também pelo caminho",
      also: [
        { title: "EBEC Porto", detail: "Competição de engenharia do BEST Porto", year: "2024" },
        { title: "Academia Júnior de Ciências", detail: "Universidade da Beira Interior", year: "2021–22" },
        { title: "Prémio de Mérito do Ensino Secundário", detail: "Agrupamento de Escolas e Câmara Municipal de Gouveia", year: "2021/22" },
        { title: "Curso de verão Eu Sou Engenheiro", detail: "Instituto Politécnico da Guarda", year: "2021" },
        { title: "Prémio de Mérito do Ensino Básico", detail: "Agrupamento de Escolas e Câmara Municipal de Gouveia", year: "2018/19" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Vamos falar.",
      text: "Tens uma oportunidade, um projeto, ou só queres falar sobre barcos movidos a energia solar? A minha caixa de entrada está aberta.",
      copy: "Copiar email",
      copied: "Copiado",
    },
    footer: {
      built: "Feito com React, Vite e Tailwind CSS.",
      top: "Voltar ao topo",
    },
  },
};
