import { motion } from "framer-motion"
import profileImage from "@/assets/profile.jpg"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 hero-gradient rounded-2xl blur-3xl opacity-20"></div>
                <img
                  src={profileImage}
                  alt="Alex Johnson"
                  className="relative w-full rounded-2xl shadow-large"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm Alex, a passionate iOS developer with over 5 years of experience creating 
                mobile applications that users love. I specialize in Swift and SwiftUI, with a 
                keen eye for design and user experience.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in mobile technology, 
                contributing to open-source projects, or mentoring fellow developers. I believe 
                in writing clean, maintainable code and creating apps that make a real difference 
                in people's lives.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center p-4 card-gradient rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 card-gradient rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Apps Developed</div>
                </div>
                <div className="text-center p-4 card-gradient rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-sm text-muted-foreground">App Downloads</div>
                </div>
                <div className="text-center p-4 card-gradient rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}