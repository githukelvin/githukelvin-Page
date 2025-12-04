export interface PersonalInfo {
  name: string
  title: string
  email: string
  github: string
  portfolio: string
  location: string
  summary: string
}

export interface Experience {
  company: string
  position: string
  period: string
  location: string
  description: string
  achievements: string[]
}

export interface Project {
  name: string
  company: string
  type: string
  technologies: string[]
  description: string
  features?: string[]
  modules?: string[]
  impact: string
  github: string | null
  demo: string | null
}

export interface Skills {
  frontend: {
    frameworks: string[]
    libraries: string[]
    stateManagement: string[]
    mobile: string[]
  }
  backend: {
    languages: string[]
    frameworks: string[]
    databases: string[]
    apis: string[]
  }
  enterpriseIntegration: {
    sapBusinessOne: string[]
    paymentSystems: string[]
    messaging: string[]
    cloudServices: string[]
  }
  devOps: {
    versionControl: string[]
    packageManagers: string[]
    deployment: string[]
    tools: string[]
  }
  dataScience: {
    libraries: string[]
    techniques: string[]
    datasets: string[]
    methods: string[]
  }
}

export interface Education {
  degree: string
  institution: string
  year: string
  coursework: string[]
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  experience: Experience[]
  projects: Project[]
  skills: Skills
  education: Education[]
  strengths: string[]
  currentlyLearning: string[]
}
