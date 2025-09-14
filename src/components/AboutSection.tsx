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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent py-2">
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
                  alt="Hy Sokchea"
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
                Hi! I'm Sokchea, a passionate iOS Developer with over 2 years of hands-on experience building and
                maintaining scalable, user-friendly iOS apps using Swift, SwiftUI,
                UIKit, Combine, and CoreData. Proven track record delivering
                production-ready features for both local and outsourced fintech
                projects, including expense management apps like Bizplay and
                WABOOK. Skilled in RESTful API integration, secure data handling,
                and guiding junior developers. Experienced in managing TestFlight
                distributions, and well-versed in SOLID principles, clean architecture,
                and Apple’s app compliance standards.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about developing high-performance, secure mobile solutions for fintech, banking and enterprise
                use cases.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-4 gap-6 pt-4">
                <div className="text-center p-4 card-gradient rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 card-gradient rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
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