import { motion } from "framer-motion"
import { Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typewriter } from 'react-simple-typewriter';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient opacity-5" />

      <motion.div
        className="container px-4 mx-auto text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent py-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hy Sokchea
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-medium text-foreground mb-4 flex flex-wrap text-center justify-center items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span>I'm an&nbsp;</span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            <Typewriter
              words={['iOS Developer', 'Software Engineer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h2>
        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting beautiful, intuitive mobile experiences with Swift and SwiftUI.
          Passionate about clean code, user-centric design, and bringing ideas to life.
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
<Button
  size="lg"
  className="relative rounded-full px-8 py-3 text-gray-900 dark:text-white shadow-glow hover:shadow-large transition-all duration-300"
>
  <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <span className="block h-full w-full rounded-full bg-white dark:bg-gray-900" />
  </span>
  <span className="relative flex items-center">
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </span>
</Button>

<Button
  size="lg"
  onClick={() =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }
  className="relative rounded-full px-8 py-3 text-gray-900 dark:text-white shadow-glow hover:shadow-large transition-all duration-300"
>
  <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">
    <span className="block h-full w-full rounded-full bg-white dark:bg-gray-900" />
  </span>
  <span className="relative">Learn More</span>
</Button>

        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}