'use client'

import { motion } from 'framer-motion'
import { Github, GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'
import Sadiq from "./../img/sadiq.jpeg";
import Image from 'next/image'
import styles from "./styles.module.css";

export default function Hero() {

function animatedReaction() {
    const pic = document.getElementById('mypic');
    // Set initial styles for smooth animation
    pic.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    pic.style.transform = 'scale(1.1)'; // Slightly enlarge the picture
    pic.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'; // Subtle shadow effect

    // Reset styles after animation duration
    setTimeout(() => {
        pic.style.transform = 'scale(1)'; // Reset to original size
        pic.style.boxShadow = 'none'; // Remove the shadow
    }, 400);
}

  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-primary-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <div className="mypic-wrapper  flex items-center justify-center h-auto">
          <Image priority id="mypic" src={Sadiq} alt="profile" onClick={ animatedReaction } width="50" height="50" className={`w-1/3 h-auto rounded-full mb-2 ${styles.mypic}`} />
        </div>
        {/* <Image src={} /> */}
        <motion.h1 
          className="text-6xl font-bold mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Muhammed Sadiq
        </motion.h1>
        <motion.p 
          className="text-2xl mb-8"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        >
          MERN Stack Developer
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
        >
          {[
            { Icon: Github, href: 'https://github.com/sadi-1010011' },
            { Icon: Linkedin, href: 'https://linkedin.com/in/sadi-1010011' },
            { Icon: Mail, href: 'mailto:sadi1010011@gmail.com' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={30} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

