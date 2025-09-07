import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const footerLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Blog", id: "blog" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" }
  ]

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container px-4 mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Quick Links */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Alex Johnson. Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </div>
          
          <p className="text-sm text-muted-foreground mt-2">
            Designed and developed with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}