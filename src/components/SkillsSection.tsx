import { motion } from "framer-motion"

const skills = [
  { name: "Swift", percentage: 95, icon: "" },
  { name: "SwiftUI", percentage: 80, icon: "" },
  { name: "UIKit", percentage: 95, icon: "" },
  { name: "JavaScript", percentage: 60, icon: "" },
  { name: "NextJS", percentage: 60, icon: "" },
  { name: "Spring Boot", percentage: 40, icon: "" },
  { name: "Java", percentage: 60, icon: "" },
  { name: "Xcode", percentage: 95, icon: "" },
  { name: "Git", percentage: 90, icon: "" },
  { name: "Firebase", percentage: 75, icon: "" },
  { name: "Figma", percentage: 65, icon: "" },
  { name: "Jira", percentage: 80, icon: "" },
]

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Swift", "SwiftUI", "UIKit", "Combine"]
  },
  {
    title: "Backend & Data",
    skills: ["Core Data", "Firebase", "REST APIs", "CloudKit"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Xcode", "Git", "TestFlight", "Instruments"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent py-2">
            Skills & Technologies
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Skill Progress Bars */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer relative transition-transform duration-500"
                >
                  {/* 🌈 Border Layer (normal border by default, gradient on hover) */}
                  <div className="relative rounded-xl p-[2px] bg-border group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">

                    {/* 🟫 Inner Card Layer (background & content) */}
                    <div className="relative rounded-[calc(0.75rem-2px)] bg-background overflow-hidden">

                      {/* 🎨 Semi-transparent gradient overlay */}
                      <div className="absolute inset-0 z-10 rounded-[calc(0.75rem-2px)] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* 💬 Content */}
                      <div className="relative z-20 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-semibold text-foreground">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                        </div>

                        <div className="w-full bg-border rounded-full h-2">
                          <motion.div
                            className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}