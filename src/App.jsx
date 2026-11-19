import React, { Suspense, lazy } from 'react'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, Code2, Palette, Database, Smartphone, Download, ExternalLink } from 'lucide-react'

const Contact = lazy(() => import('./components/Contact.jsx'))

const projects = [
  {
    number: '01',
    title: 'Semantic Detection System',
    type: 'AI / Full-stack application',
    description: 'An NLP-based application that analyzes user-submitted text, identifies sentiment and emotion, and organizes conversation history.',
    stack: ['Python', 'Flask', 'React', 'MongoDB'],
    link: 'https://github.com/100TAlaRic99/COMPLETE--FRONTEND-BACKEND-SDS',
    live: 'https://complete-frontend-backend-sds.vercel.app/login'
  },
  {
    number: '02',
    title: 'BiteBox',
    type: 'Food delivery interface',
    description: 'A responsive food delivery web application with cart, login, signup, and home pages, built around clear, user-friendly navigation.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/100TAlaRic99/BiteBox'
  },
  {
    number: '03',
    title: 'Free E-book Library',
    type: 'Frontend project',
    description: 'A responsive free e-book library website with book browsing, navigation, and testimonials in a clean, user-friendly interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/100TAlaRic99/Free-E-Book-Library'
  }
]

const skills = [
  { icon: Code2, name: 'Frontend', items: 'HTML · CSS · JavaScript · React · Bootstrap' },
  { icon: Database, name: 'Backend & Data', items: 'Python · Flask · REST APIs · MongoDB · MySQL' },
  { icon: Palette, name: 'Creative tools', items: 'Figma · Blender · Maya · Substance Painter' },
  { icon: Smartphone, name: 'Workflow', items: 'Git · GitHub · VS Code · Responsive design' }
]

function Header() {
  const [open, setOpen] = React.useState(false)
  const links = ['About', 'Projects', 'Skills', 'Resume', 'Contact']
  return <header className="header">
    <a className="logo" href="#home">dev<span>.</span>folio</a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}><Menu size={22}/></button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero section" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</p>
      <h1>Building digital<br/><span>experiences</span> that<br/>make an impact.</h1>
      <p className="hero-description">Hi, I'm <strong>Ameen Ramali</strong> — an aspiring full-stack developer focused on creating responsive, useful, and engaging web applications.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
        <a className="text-link" href="#contact">Get in touch <ArrowDown size={15}/></a>
      </div>
      <div className="hero-socials">
        <a href="https://github.com/100TAlaRic99" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
        <a href="https://www.linkedin.com/in/ameen-ramali" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>
        <a href="mailto:ameenramali@hotmail.com" aria-label="Email"><Mail size={19}/></a>
      </div>
    </div>
    <div className="hero-art" aria-label="Decorative code illustration">
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
      <div className="code-card">
        <div className="window-dots"><i/><i/><i/></div>
        <p><span className="code-purple">const</span> developer = {'{'}</p>
        <p className="indent">name: <span className="code-green">'Ameen Ramali'</span>,</p>
        <p className="indent">focus: <span className="code-green">'Full-stack'</span>,</p>
        <p className="indent">creative: <span className="code-orange">true</span>,</p>
        <p className="indent">curious: <span className="code-orange">true</span></p>
        <p>{'}'}</p>
        <div className="code-cursor"/>
      </div>
      <div className="floating-tag tag-top">{"</>"}</div>
      <div className="floating-tag tag-bottom"><span className="status-dot"/> Always learning</div>
    </div>
    <a className="scroll-hint" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
  </section>
}

function SectionHeading({ label, title, subtitle }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{subtitle && <p className="section-subtitle">{subtitle}</p>}</div>
}

function About() {
  return <section className="section about" id="about">
    <SectionHeading label="01 — ABOUT ME" title={<>A little about <span>myself.</span></>} />
    <div className="about-grid">
      <div className="about-mark">“</div>
      <div><p className="about-lead">I enjoy turning ideas into practical digital experiences.</p>
        <p className="body-copy">I'm a B.Sc. Information Technology graduate from Mumbai University (2026), currently building my skills in full-stack development and generative AI. I like learning how products work from the interface to the data behind them, and I enjoy solving problems through code and design.</p>
        <p className="body-copy">My current focus is strengthening my React, JavaScript, Python, and backend development skills while building projects that demonstrate what I learn.</p>
        <a className="text-link" href="#projects">See selected projects <ArrowUpRight size={16}/></a>
      </div>
    </div>
  </section>
}

function Projects() {
  return <section className="section projects" id="projects">
    <SectionHeading label="02 — SELECTED WORK" title={<>Things I've <span>built.</span></>} subtitle="A selection of projects that reflect my learning, problem-solving, and development journey."/>
    <div className="project-list">{projects.map(p => <article className="project-card" key={p.number}>
      <div className="project-number">{p.number}</div>
      <div className="project-info"><p className="project-type">{p.type}{p.live && <span className="live-badge"><span className="status-dot"/>Live</span>}</p><h3>{p.title}</h3><p className="body-copy">{p.description}</p><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
        <div className="project-actions">
          {p.live && <a className="project-btn project-btn-live" href={p.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15}/></a>}
          <a className="project-btn" href={p.link} target="_blank" rel="noreferrer"><Github size={15}/> Source code</a>
        </div>
      </div>
      <a className="project-link" href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on GitHub`}><ArrowUpRight/></a>
    </article>)}</div>
  </section>
}

function Skills() {
  return <section className="section skills" id="skills">
    <SectionHeading label="03 — TOOLKIT" title={<>Skills & <span>technologies.</span></>} subtitle="Tools and technologies I'm using to design, build, and improve digital products."/>
    <div className="skills-grid">{skills.map(({icon: Icon, name, items}) => <article className="skill-card" key={name}><div className="skill-icon"><Icon size={22}/></div><h3>{name}</h3><p>{items}</p></article>)}</div>
  </section>
}

function Resume() {
  return <section className="section resume" id="resume">
    <div className="resume-panel"><div><p className="eyebrow">04 — EXPERIENCE & EDUCATION</p><h2>Want the full<br/><span>picture?</span></h2><p className="body-copy">Download my resume to learn more about my education, technical skills, and project experience.</p></div>
      <a className="button button-primary" href="/Ameen-Ramali-Resume.pdf" download="Ameen-Ramali-Resume.pdf"><Download size={17}/> Download resume</a>
    </div>
  </section>
}

function Footer() {
  return <footer className="footer"><a className="logo" href="#home">dev<span>.</span>folio</a><p>Designed & built with React.</p><p>© {new Date().getFullYear()} Ameen Ramali</p></footer>
}

export default function App() {
  return <><Header/><main><Hero/><About/><Projects/><Skills/><Resume/><Suspense fallback={<section className="section"><p>Loading contact section…</p></section>}><Contact/></Suspense></main><Footer/></>
}