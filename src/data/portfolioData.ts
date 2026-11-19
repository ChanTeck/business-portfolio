export interface ProjectGalleryItem {
  src: string;
  caption: string;
  aspect: 'mobile' | 'landscape';
}

export interface ProjectItem {
  id: string;
  indexNumber: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack & Mobile' | 'Mobile App' | 'Embedded IoT' | 'Desktop & OOP';
  featured?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  coverImage: string;
  gallery: ProjectGalleryItem[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface TechMapping {
  name: string;
  category: string;
  projects: string[];
  note: string;
}

export interface Referee {
  name: string;
  role: string;
  institution: string;
  email: string;
  phone?: string;
}

export const CANDIDATE_PROFILE = {
  monogram: 'CTC',
  fullName: 'Chan Teck Cheng',
  firstName: 'CHAN',
  lastName: 'TECK CHENG',
  roleTitle: 'Software Engineering Student',
  institution: 'Raffles University',
  programme: 'Diploma in Information Technology',
  cohort: '2024 – 2026',
  intake: 'Sep-24',
  studentId: 'DIT_A2309F-2409008',
  internshipPeriod: 'Jan 2027 – Mar 2027 (3 Months)',
  locationShort: 'Johor, Malaysia',
  address:
    'Raffles University, Medini 7, Jalan Medini Sentral 5, Bandar Medini Iskandar Malaysia, 79250 Iskandar Puteri, Johor, Malaysia',
  email: 'chanteckcheng8899@gmail.com',
  phone: '+60 11-18820117',
  languages: ['English', 'Chinese', 'Malay'],
  bioHero:
    'Diploma in Information Technology student at Raffles University with hands-on experience in PHP, Flutter, React, MySQL, and embedded IoT — building practical software ahead of my Jan–Mar 2027 internship.',
  bioExtended:
    'Software Engineering student with practical experience across PHP, Flutter, React, MySQL, Supabase, and embedded C++ / ESP32 systems. Passionate about shipping clean, structured software solutions that bridge real-world user workflows with reliable backend architecture.',
  traits: ['Practical', 'Analytical', 'Trilingual', 'Detail-Oriented', 'Hands-On'],
  avatarUrl: '/assets/chan-teck-cheng.jpg',
  resumePdfUrl: '/assets/aistudio/Resume_918ef95a.pdf',
  supportLetterPdfUrl: '/assets/aistudio/Chan_Teck_Cheng_aaf28e13.pdf',
  supportLetterDate: '7 Nov 2026',
};

export const MARQUEE_STACK = [
  'REACT',
  'TYPESCRIPT',
  'FLUTTER',
  'DART',
  'PHP',
  'MYSQL',
  'SUPABASE',
  'JAVA',
  'C++',
  'PYTHON',
  'ESP32',
  'CAPACITOR',
  'TAILWIND CSS',
  'UI/UX',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile Development',
    description:
      'Building responsive web interfaces and cross-platform mobile applications with clean component structure.',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Dart', 'Capacitor', 'PHP', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'backend-data',
    title: 'Databases & Cloud',
    description:
      'Structuring relational schemas, authentication flows, and real-time persistence layers.',
    items: ['MySQL', 'Supabase PostgreSQL', 'User Authentication', 'CRUD Architecture'],
  },
  {
    id: 'systems-iot',
    title: 'Systems & Embedded IoT',
    description:
      'Engineering low-level object-oriented logic and microcontroller prototypes with physical peripherals.',
    items: ['C++ (OOP)', 'STL Containers', 'Java', 'Python', 'ESP32', 'Arduino IDE', 'OLED Display', 'Bluetooth'],
  },
  {
    id: 'design-tools',
    title: 'Interface Design & Workflow',
    description:
      'Crafting clear visual hierarchies, responsive layouts, and maintainable project workflows.',
    items: ['UI/UX Design', 'Android Studio', 'Responsive Layouts', 'Modular Architecture'],
  },
];

export const TECH_MATRIX: TechMapping[] = [
  {
    name: 'React',
    category: 'Frontend',
    projects: ['AeroDrive'],
    note: 'Built responsive fleet catalog, booking calculator, and host proposal views.',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    projects: ['AeroDrive'],
    note: 'Typed booking state, vehicle specs, and real-time messaging payloads.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    projects: ['AeroDrive'],
    note: 'Designed crisp mobile-first vehicle cards and admin operations dashboards.',
  },
  {
    name: 'Capacitor',
    category: 'Mobile Build',
    projects: ['AeroDrive'],
    note: 'Packaged the responsive web application into native mobile builds.',
  },
  {
    name: 'Supabase',
    category: 'Backend & Auth',
    projects: ['AeroDrive', 'Smart Study Planner'],
    note: 'Integrated PostgreSQL persistence, user registration, and real-time booking state.',
  },
  {
    name: 'Flutter',
    category: 'Mobile UI',
    projects: ['Smart Study Planner'],
    note: 'Engineered cross-platform study boards, task views, and achievement trackers.',
  },
  {
    name: 'Dart',
    category: 'Language',
    projects: ['Smart Study Planner'],
    note: 'Implemented state management and structured CRUD models in Android Studio.',
  },
  {
    name: 'ESP32',
    category: 'Microcontroller',
    projects: ['IoT Game Station'],
    note: 'Drove OLED rendering, push-button interrupts, buzzer tones, and Bluetooth sync.',
  },
  {
    name: 'Arduino IDE',
    category: 'Firmware',
    projects: ['IoT Game Station'],
    note: 'Compiled and flashed embedded C++ firmware onto the ESP32 hardware station.',
  },
  {
    name: 'C++',
    category: 'Systems & OOP',
    projects: ['Snake Game'],
    note: 'Built modular class encapsulation with STL vector & queue game state containers.',
  },
  {
    name: 'PHP',
    category: 'Web Backend',
    projects: ['Academic Web Systems'],
    note: 'Developed server-rendered web workflows paired with MySQL databases.',
  },
  {
    name: 'MySQL',
    category: 'Relational DB',
    projects: ['Academic Web Systems'],
    note: 'Designed normalized relational tables and structured SQL queries.',
  },
  {
    name: 'Java',
    category: 'Programming',
    projects: ['Academic OOP Coursework'],
    note: 'Applied object-oriented design patterns and core data structures.',
  },
  {
    name: 'Python',
    category: 'Scripting',
    projects: ['Problem Solving & Scripting'],
    note: 'Rapid algorithmic prototyping and structured task automation.',
  },
  {
    name: 'JavaScript',
    category: 'Web',
    projects: ['AeroDrive', 'Web Applications'],
    note: 'Interactive client logic, form validation, and asynchronous API handling.',
  },
  {
    name: 'HTML & CSS',
    category: 'Web Core',
    projects: ['AeroDrive', 'Web Applications'],
    note: 'Semantic markup and responsive grid/flexbox page architecture.',
  },
  {
    name: 'UI/UX',
    category: 'Design',
    projects: ['AeroDrive', 'Smart Study Planner'],
    note: 'Focused on high-contrast hierarchy, clear CTAs, and friction-free mobile flows.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aerodrive',
    indexNumber: '00',
    title: 'AeroDrive',
    subtitle: 'Cross-Platform Car Rental & Peer-to-Peer Fleet Platform',
    category: 'Full-Stack & Mobile',
    featured: true,
    summary:
      'A full-featured car rental and P2P vehicle hosting platform built with React, TypeScript, Tailwind CSS, Capacitor, and Supabase. Connects drivers with both company fleet and verified peer-to-peer hosts — complete with real-time admin live desk chat, dynamic CDW rental calculators, and native mobile deployment.',
    highlights: [
      'Developed a cross-platform car rental and peer-to-peer fleet platform.',
      'Integrated Supabase PostgreSQL for authentication, driver registration, and real-time bookings.',
      'Built responsive UI and vehicle management dashboards with Tailwind CSS.',
      'Deployed native mobile application builds using Capacitor.',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Capacitor', 'Supabase'],
    coverImage: '/assets/aistudio/Screenshot_2026-11-19_142210_1af34c05.png',
    gallery: [
      {
        src: '/assets/aistudio/Screenshot_2026-11-19_142210_1af34c05.png',
        caption: 'Vehicle Marketplace — P2P Verified Host & Company Fleet Listings',
        aspect: 'mobile',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-11-19_142046_940b9db2.png',
        caption: 'Dynamic Rental Calculator — Duration, CDW Plus Waiver & Deposit Breakdown',
        aspect: 'mobile',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-11-19_141506_e2497259.png',
        caption: 'Admin Live Desk — Real-Time P2P Listing Approvals & Support Chat',
        aspect: 'mobile',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-11-19_141904_44812705.png',
        caption: 'P2P Host Portal — Vehicle Proposal Form & Condition Photo Proof',
        aspect: 'mobile',
      },
      {
        src: '/assets/aistudio/Screenshot_2026-11-19_142257_7f45e8ff.png',
        caption: 'Driver Portal — IC / Driving License Registration Provisioned in Supabase',
        aspect: 'mobile',
      },
    ],
  },
  {
    id: 'smart-study-planner',
    indexNumber: '01',
    title: 'Smart Study Planner',
    subtitle: 'Mobile Study Scheduling & Achievement Tracker',
    category: 'Mobile App',
    summary:
      'A cross-platform Flutter mobile organizer developed in Android Studio and backed by Supabase to help students schedule coursework, manage tasks, and earn study milestones.',
    highlights: [
      'Implemented secure user authentication and session persistence with Supabase.',
      'Built complete CRUD operations for study tasks, deadlines, and daily schedules.',
      'Engineered an interactive Achievement System to reward consistent study habits.',
    ],
    stack: ['Flutter', 'Dart', 'Supabase', 'Android Studio'],
    coverImage: '/src/assets/images/project_study_planner_1795092675449.jpg',
    gallery: [
      {
        src: '/src/assets/images/project_study_planner_1795092675449.jpg',
        caption: 'Smart Study Planner — Flutter Mobile UI & Achievement Progress Overview',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'iot-game-station',
    indexNumber: '02',
    title: 'IoT Game Station',
    subtitle: 'Embedded ESP32 Handheld Hardware Console',
    category: 'Embedded IoT',
    summary:
      'A custom-built embedded gaming console powered by an ESP32 microcontroller and programmed via Arduino IDE, integrating physical controls, visual output, sound, and wireless Bluetooth.',
    highlights: [
      'Wired and debounced a multi-input Push Button Controller for responsive gameplay.',
      'Rendered live scoreboards and pixel sprites on a crisp OLED Display.',
      'Integrated a piezo Buzzer for audio feedback and Bluetooth module communication.',
    ],
    stack: ['ESP32', 'Arduino IDE', 'OLED Display', 'Bluetooth'],
    coverImage: '/src/assets/images/project_iot_gamestation_1795092675129.jpg',
    gallery: [
      {
        src: '/src/assets/images/project_iot_gamestation_1795092675129.jpg',
        caption: 'IoT Game Station — ESP32 Hardware Prototype with OLED, Buttons & Buzzer',
        aspect: 'landscape',
      },
    ],
  },
  {
    id: 'snake-game',
    indexNumber: '03',
    title: 'Snake Game',
    subtitle: 'Modular C++ Object-Oriented Arcade Engine',
    category: 'Desktop & OOP',
    summary:
      'A cleanly structured C++ Snake implementation emphasizing Object-Oriented Programming principles, STL container efficiency, and modular class separation.',
    highlights: [
      'Developed using C++ and strict Object-Oriented Programming principles.',
      'Implemented core game loop logic, scoring system, and boundary/self collision detection.',
      'Designed an interactive menu system with start, pause, and game over states.',
      'Utilized STL containers (vector, queue) alongside dynamic difficulty adjustment.',
      'Applied modular programming and class encapsulation for high readability and maintainability.',
    ],
    stack: ['C++', 'OOP', 'STL (vector, queue)'],
    coverImage: '/src/assets/images/project_snake_game_1795092676902.jpg',
    gallery: [
      {
        src: '/src/assets/images/project_snake_game_1795092676902.jpg',
        caption: 'C++ Snake Game — Object-Oriented Engine & Dynamic Difficulty Grid',
        aspect: 'landscape',
      },
    ],
  },
];

export const REFEREES: Referee[] = [
  {
    name: 'Mohd Najib Bin Mohd Salleh',
    role: 'Academic Referee',
    institution: 'Raffles University',
    email: 'MohdNajib@Raffles-University.edu.my',
  },
  {
    name: 'Choo Yen Lee',
    role: 'Academic Referee',
    institution: 'Raffles University',
    email: 'YEN.LEE.CHOO@Raffles-University.edu.my',
  },
  {
    name: 'Suraj Mariappan',
    role: 'Head of Department · Centre of Professional Development (CPD)',
    institution: 'Raffles University',
    email: 'surajmariappan@raffles-university.edu.my',
    phone: '+6017 3558188',
  },
];

export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function filterProjectsByCategory(
  category: 'All' | ProjectItem['category']
): ProjectItem[] {
  if (category === 'All') {
    return PROJECTS;
  }
  return PROJECTS.filter((project) => project.category === category);
}

export function getTechMappingByName(name: string): TechMapping | undefined {
  return TECH_MATRIX.find(
    (tech) => tech.name.toLowerCase() === name.trim().toLowerCase()
  );
}

export function getNextGalleryIndex(
  currentIndex: number,
  totalItems: number,
  direction: 'next' | 'prev'
): number {
  if (totalItems <= 0) {
    return 0;
  }
  if (direction === 'next') {
    return (currentIndex + 1) % totalItems;
  }
  return (currentIndex - 1 + totalItems) % totalItems;
}
