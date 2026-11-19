import React from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function Contact() {
  return <section className="section contact" id="contact">
    <p className="eyebrow">05 — CONTACT</p>
    <h2>Have a project<br/>in <span>mind?</span></h2>
    <p className="section-subtitle">I'm always interested in connecting, learning, and exploring new opportunities.</p>
    <a className="button button-primary" href="mailto:ameenramali@hotmail.com"><Mail size={17}/> Say hello <ArrowUpRight size={17}/></a>
    <p className="contact-email">ameenramali@hotmail.com</p>
  </section>
}