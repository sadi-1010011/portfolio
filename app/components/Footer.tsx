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




// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-semibold mb-4">thepluto</h3>
//             <p>Crafting digital experiences that inspire and innovate.</p>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><Link href="#services" className="hover:text-blue-400">Services</Link></li>
//               <li><Link href="#portfolio" className="hover:text-blue-400">Portfolio</Link></li>
//               <li><Link href="#pricing" className="hover:text-blue-400">Pricing</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <p>Email: info@thepluto.com</p>
//             <p>Phone: (123) 456-7890</p>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-gray-700 text-center">
//           <p>&copy; {new Date().getFullYear()} thepluto. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }