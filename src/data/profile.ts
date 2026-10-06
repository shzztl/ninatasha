/**
 * All profile content lives here. Edit this file to update the site.
 *
 * Placeholders: any value set to `null` (links) or wrapped in PLACEHOLDER()
 * is rendered with a visible "To be added" marker so nothing is invented.
 */

/** Marks text as placeholder copy so the UI can flag it visually. */
export const PLACEHOLDER = (text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.') => ({
  placeholder: true as const,
  text,
})

export type Copy = string | ReturnType<typeof PLACEHOLDER>

export const profile = {
  name: 'Nur Izzatul Natasha',
  initials: 'NIN',
  title: 'Computer Science Graduate',
  focus: ['Data', 'IoT & Embedded Systems', 'Android Development'],
  positioning: [
    'Computer Science Graduate',
    'Data & Analytics',
    'IoT & Embedded Systems',
    'Android Development',
    'Project Management',
  ],
  location: 'Sarawak, Malaysia',
  bio: PLACEHOLDER(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ) as Copy,
  /** Path in /public, e.g. '/img/natasha.jpg'. null shows the abstract glass placeholder. */
  photo: null as string | null,
  floatingPills: [
    { label: 'Currently exploring', value: 'Android Development' },
    { label: 'Focus', value: 'Technology • Data • IoT' },
    { label: 'Based in', value: 'Sarawak, Malaysia' },
  ],
}

/** Contact links. Leave null until the real value is known — never guess. */
export const links = {
  email: null as string | null, // e.g. 'name@example.com'
  linkedin: null as string | null, // full URL
  github: null as string | null, // full URL
}

export const expertise = [
  {
    icon: 'cpu',
    title: 'Computer Science',
    body: 'Background in Computer Science and Network Computing.',
  },
  {
    icon: 'chart',
    title: 'Data & Analytics',
    body: 'Power BI, data cleaning, reporting and research data.',
  },
  {
    icon: 'phone',
    title: 'Android Development',
    body: 'Java, Android Studio, Firebase and Firestore.',
  },
  {
    icon: 'chip',
    title: 'IoT & Embedded Systems',
    body: 'Arduino, sensors, microcontrollers and connected systems.',
  },
] as const

export const about = {
  paragraphs: [
    PLACEHOLDER(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    ),
    PLACEHOLDER(
      'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.',
    ),
  ] as Copy[],
  values: [
    'Continuous Learning',
    'Problem Solving',
    'Practical Technology',
    'Data-Driven Thinking',
    'Adaptability',
    'Digitalisation',
  ],
}

export const journey = [
  'Computer Science',
  'Network Computing',
  'IoT & Embedded Systems',
  'Data Analytics',
  'Project Management',
  'Android Development',
]

export type EducationItem = {
  school: string
  qualification: string
  dates: string | null
  highlights: string[]
}

export const education: EducationItem[] = [
  {
    school: 'Universiti Malaysia Sarawak (UNIMAS)',
    qualification: 'Bachelor of Computer Science (Network Computing)',
    dates: null,
    highlights: ['Network Computing', 'Software Development', 'IoT', 'Technical Project Development'],
  },
  {
    school: 'Labuan Matriculation College',
    qualification: 'Computer Science',
    dates: null,
    highlights: [],
  },
]

export type ExperienceItem = {
  role: string
  organisation: string
  dates: string | null
  context: string | null
  points: Copy[]
  highlight?: string
  skills?: string[]
}

/** Newest first. */
export const experience: ExperienceItem[] = [
  {
    role: 'PROTÉGÉ Project Management',
    organisation: 'Lawas District Office, Sarawak',
    dates: '2026 – Present',
    context: 'Development and Social Unit / project office context.',
    points: [PLACEHOLDER()],
    highlight: 'Project Management + Technology + Digitalisation',
  },
  {
    role: 'Data Analyst Executive Trainee',
    organisation: 'SDEC / Pepper Labs',
    dates: '2025 – 2026',
    context: 'Research & Development context.',
    points: [PLACEHOLDER()],
    skills: ['Power BI', 'Excel', 'Airtable', 'Data Analysis', 'Data Visualisation', 'Research'],
  },
  {
    role: 'Network Operations Intern',
    organisation: 'Telekom Malaysia',
    dates: null,
    context: null,
    points: [],
  },
]

export type Project = {
  title: string
  category: string
  tech: string[]
  summary: string
  features?: string[]
  /** Repository URL — null until available. */
  repo: string | null
  /** Show a GitHub button (or its placeholder) for this project. */
  showRepo?: boolean
  tone: 'lavender' | 'olive' | 'sky' | 'rose'
}

export const projects: Project[] = [
  {
    title: 'e-Social Event Management System',
    category: 'Android Application',
    tech: ['Java', 'Android Studio', 'Firebase', 'Firestore', 'CRUD', 'Material UI'],
    summary:
      'Internal event management Android application for managing Development and Social Unit event records.',
    features: [
      'Event management',
      'Event status/workflow',
      'Calendar',
      'Search/filtering',
      'Firebase/Firestore integration',
      'Activity records',
      'Admin/editor functionality',
    ],
    repo: null,
    showRepo: true,
    tone: 'lavender',
  },
  {
    title: 'Smart Parcel Box SMS Alert System',
    category: 'IoT / Embedded Systems',
    tech: ['Arduino Uno', 'SIM900', 'PIR', 'IR', 'LCD I2C', 'Relay', 'Solenoid', 'SMS'],
    summary:
      'IoT smart parcel box that detects parcel activity and provides SMS alerts with owner-controlled unlocking.',
    repo: null,
    tone: 'olive',
  },
  {
    title: 'Smart Irrigation System',
    category: 'IoT / Embedded Systems',
    tech: ['Arduino Nano 33 IoT', 'DHT11', 'Soil Moisture'],
    summary:
      'Smart irrigation concept using environmental and soil data to support automated watering decisions.',
    repo: null,
    tone: 'sky',
  },
  {
    title: 'Data Analytics & Power BI Research',
    category: 'Data Analytics',
    tech: ['Power BI', 'Excel', 'Airtable'],
    summary:
      'Research and visualisation work involving digital research data from six Sarawak universities.',
    repo: null,
    tone: 'rose',
  },
]

export const skills = [
  { group: 'Development', items: ['Java', 'Android Studio', 'Firebase', 'Firestore'] },
  { group: 'Data', items: ['Power BI', 'Excel', 'Airtable'] },
  { group: 'IoT / Embedded', items: ['Arduino', 'Sensors', 'GSM/SMS', 'Microcontrollers'] },
  {
    group: 'Professional',
    items: ['Project Management', 'Documentation', 'Research', 'Data Analysis', 'Digitalisation'],
  },
]

export const contact = {
  heading: "Let's Connect",
  body: "Interested in technology, data, IoT, application development or digitalisation? I'd be happy to connect.",
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
