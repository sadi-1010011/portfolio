'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-foreground"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-muted-foreground text-center max-w-2xl mx-auto"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
          viewport={{ once: true }}
        >
          I'm a passionate MERN stack developer with 3 years of experience building robust and scalable web applications. 
          I love turning complex problems into simple, beautiful, and intuitive solutions. 
          When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
        </motion.p>
      </div>
    </motion.section>
  )
}

