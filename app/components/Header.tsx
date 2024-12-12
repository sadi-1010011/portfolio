'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.header 
      className="bg-background/80 backdrop-blur-sm fixed w-full z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.ul 
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <Link href={`#${item.toLowerCase()}`} className="text-foreground hover:text-primary">
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-primary text-primary-foreground"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </nav>
    </motion.header>
  )
}

