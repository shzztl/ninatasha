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
  focus: ['Android Development', 'Data Analytics', 'IoT & Embedded Systems'],
  positioning: [
    'Computer Science Graduate',
    'Data & Analytics',
    'IoT & Embedded Systems',
    'Android Development',
    'Project Management',
  ],
  location: 'Sarawak, Malaysia',
  bio: PLACEHOLDER(
    'With experience in project management, network operations, data analytics, and application development.',
  ) as Copy,
  /** Path in /public, e.g. '/img/natasha.jpg'. null shows the abstract glass placeholder. */
  photo: null as string | null,
  floatingPills: [
    { label: 'Currently exploring', value: 'Android Development' },
    { label: 'Focus', value: 'Data Analysis • Technology • IoT' },
    { label: 'Based in', value: 'Sarawak, Malaysia' },
  ],
}

/** Contact links. Leave null until the real value is known — never guess. */
export const links = {
  email: 'izzatulnatasha45@gmail.com', // e.g. 'name@example.com'
  linkedin: 'www.linkedin.com/in/nur-izzatul-natasha-rathuny-638336189', // full URL
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
      'I have a background in Computer Science with a focus on Network Computing, and my interests have expanded across data analytics, IoT, embedded systems and application development.',
    ),
    PLACEHOLDER(
      'My experience has allowed me to work across both technical and organisational environments — from data analysis and Power BI research to project management, documentation, digitalisation initiatives and Android application development.',
    ), 
    PLACEHOLDER(
      'I enjoy learning by building practical solutions and exploring how technology can improve everyday processes.',
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
    dates: '2020 - 2024',
    highlights: ['Network Administration', 'Networking', 'Embedded Systems', 'IoT', 'Microcontollers', 'Programming', 'Technical Documentation'],
  },
  {
    school: 'Labuan Matriculation College',
    qualification: 'Computer Science',
    dates: '2019 - 2020',
    highlights: ['Physical Science', 'Computer Science', 'Problem Solving', 'Computational Thinking', 'Scientific Fundamentals'],
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
    organisation: 'Lawas District Office / Maltimur Aktif Unggul Joint Venture (MAUJV)',
    dates: 'April 2026 – Present',
    context: 'Supporting project administration, IT support, documentation, records management, programme activities and digitalisation initiatives.',
    points: [PLACEHOLDER('• Village/community records management', 
            '• Administrative reporting & documentation',
            '• Programme materials & booklet design',
            '• Video editing & programme support',
            '• Digitalisation initiatives')],
    highlight: 'Project Coordination + Documentation + Digitalisation + Administrative Support',
  },
  {
    role: 'Data Analyst Executive Trainee (K-Youth)',
    organisation: 'Sarawak Digital Economy Corporation (SDEC) / Pepper Labs',
    dates: 'July 2025 – Jan 2026',
    context: 'Worked as a Data Analyst Executive Trainee within a research and development environment, applying data analytics, '
    + 'visualisation, data quality management, and technical reporting to support research and decision-making.',
    points: [PLACEHOLDER('• Developed interactive Power BI research dashboards',
            '• Performed data modelling & validation',
            '• Conducted data quality checks across multiple sources',
            '• Prepared technical reports & data summaries',
            '• Worked with IR4.0 robotics using Dobot Studio')],
    skills: ['Power BI', 'Data Analysis', 'Data Modelling', 'Data Validation', 'Data Visualisation', 'Microsoft Excel', 'Airtable', 'Research Data', 'Robotics'],
  },
  {
    role: 'Network Operations Intern',
    organisation: 'Telekom Malaysia',
    dates: null,
    context: 'Gained practical exposure to network operations, operational data analysis, KPI monitoring, technical reporting, and IT system support within a telecommunications environment.',
    points: [PLACEHOLDER('• Analysed network operational KPIs',
            '• Developed automated Excel KPI dashboards',
            '• Processed and structured operational datasets',
            '• Supported troubleshooting and performance analysis',
            '• Performed laptop configuration and secure data migration')],
    skills: ['Network Operations', 'KPI Monitoring', 'Data Analysis', 'Microsoft Excel', 'Dashboard Development', 'IT Support'],
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
