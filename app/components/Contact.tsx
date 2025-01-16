'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-muted"
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
          Contact Me
        </motion.h2>
        <motion.div 
          className="max-w-lg mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { Icon: Mail, text: 'sadi1010011@gmail.com' },
            { Icon: Phone, text: '+91 6238998062' },
            { Icon: MapPin, text: 'Kozhikode, Kerala' },
          ].map(({ Icon, text }, index) => (
            <motion.div 
              key={index} 
              className="flex items-center mb-4"
              variants={{
                hidden: { x: -20, opacity: 0 },
                show: { x: 0, opacity: 1 }
              }}
            >
              <Icon className="mr-4 text-primary" />
              <p className="text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section> 
  )
}

