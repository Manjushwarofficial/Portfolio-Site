import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Skill from './components/Skill'
import Projects from './components/Projects'
import { Footer } from './components/Footer'
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  NotepadTextDashed,
} from "lucide-react";

function App() {
  const socialLinks = [
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://x.com/ig_Manjushwar",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/manjushwar-khairkar/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/Manjushwarofficial/",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:manjushwarpk.ds.23@nitj.ac.in",
      label: "Email",
    },
  ];

  return (
    <div className="bg-black w-full ">
      {/* no fixed height or transforms here */}
      <Nav />
      <HeroSection />
      <Skill />
      <Projects />
      <Footer
        brandName="Manjushwar"
        brandDescription="Building amazing data science experiences with modern technologies. Passionate about creating intuitive and performant applications."
        socialLinks={socialLinks}
        creatorName="Manjushwar Khairkar"
        creatorUrl=""
        brandIcon={
          <a href='https://drive.google.com/file/d/1dYUaMuQ0e2hUmD-vx3h2U3ZA7U41Vpdw/view?usp=share_link'><NotepadTextDashed className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg" /></a>
        }
      />
    </div>

  )
}

export default App
