'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="bg-background text-foreground py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Muhammed Sadiq. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}

