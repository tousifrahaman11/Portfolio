// Single source of truth for portfolio content. Edit links here.
export const LINKS = {
  email: 'tousifrahamanair1@gmail.com',
  github: 'https://github.com/tousifrahaman11',
  linkedin: 'https://www.linkedin.com/in/tousif-rahaman5/',
  resume: '/Tousif_Rahaman_Resume.pdf',
}

export const NAV = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

// repo/demo: set to a verified URL to show the button. null = hidden (demo) or marked placeholder (repo).
export const PROJECTS = [
  {
    id: 'resume-analyzer',
    featured: true,
    title: 'AI-Powered Resume Analyzer',
    problem: 'Helps job seekers see how their resume reads to applicant tracking systems and what to improve.',
    built: 'A full-stack platform: a Java/Spring Boot backend exposing REST APIs and a React.js frontend. Users upload a resume and get an ATS score, AI-driven feedback and matching job listings.',
    features: [
      'Resume parsing with Apache Tika',
      'ATS scoring and improvement recommendations',
      'AI-powered analysis using the Gemini API',
      'Personalized job recommendations via the Adzuna Jobs API',
      'JWT in HTTP-only cookies, Google OAuth 2.0 and BCrypt hashing',
      'Email verification and OTP-based password reset',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MySQL', 'Spring Data JPA', 'REST APIs', 'Gemini API'],
    repo: 'https://github.com/tousifrahaman11/springresume',
    demo: 'https://resume-analyser-kp0f.onrender.com/',
    image: null, // e.g. '/screenshots/resume-analyzer.png' once you add a real screenshot
  },
  {
    id: 'loan-chatbot',
    featured: false,
    title: 'Loan Chatbot: Full-Stack Lending Platform',
    problem: 'Turns a multi-step lending application into a guided conversation.',
    built: 'A MERN-based conversational platform with Redux Toolkit that walks a user through verification, credit checks, approval and sanction-letter stages.',
    features: [
      'Multi-step loan verification',
      'Credit-score-driven eligibility assessment',
      'Automated EMI calculator',
      'PDF sanction-letter generation',
    ],
    tech: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    repo: 'https://github.com/tousifrahaman11/Bank-loan', // found on your GitHub; not linked in the resume, so please confirm
    demo: 'https://ban-loan.netlify.app/',
    image: null,
  },
  {
    id: 'bank-ledger',
    featured: false,
    title: 'Bank Transaction Backend: Ledger System',
    problem: 'Keeps every balance traceable by deriving it from transaction history instead of trusting a stored number.',
    built: 'An auditable, multi-tiered double-entry ledger backend in Node.js and Express, with MongoDB transactions protecting every transfer.',
    features: [
      'Double-entry ledger with balances derived from DEBIT/CREDIT history',
      'MongoDB multi-document transactions with automatic rollback on failed transfers',
      'Idempotency keys to prevent duplicate processing',
      'JWT-secured REST APIs',
      'API behaviour validated with Postman across security and edge cases',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Postman'],
    repo: 'https://github.com/tousifrahaman11/Bank-transaction-Backend',
    demo: null, // backend-only: no live demo listed on the resume
    image: null,
  },
]
