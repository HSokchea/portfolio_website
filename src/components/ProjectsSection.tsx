import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectModal } from "./ProjectModal"
import project1Image from "@/assets/project1.jpg"
import project2Image from "@/assets/project2.jpg"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  category: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "TaskFlow iOS",
    description: "A beautiful task management app with intuitive design and powerful features.",
    longDescription: "TaskFlow is a comprehensive task management application built for iOS that helps users organize their daily activities with style and efficiency. The app features a clean, modern interface designed with SwiftUI, offering seamless navigation and delightful interactions. Key features include smart categorization, priority levels, due date reminders, and collaborative task sharing. The app also integrates with Calendar and Reminders, providing a unified productivity experience.",
    image: project1Image,
    techStack: ["Swift", "SwiftUI", "Core Data", "CloudKit", "Combine"],
    githubUrl: "https://github.com",
    liveUrl: "https://apps.apple.com",
    category: "Productivity"
  },
  {
    id: "2",
    title: "WeatherLens",
    description: "Real-time weather app with stunning visuals and accurate forecasts.",
    longDescription: "WeatherLens revolutionizes how users interact with weather information through an immersive, visual experience. The app combines real-time weather data with beautiful, dynamic backgrounds that change based on current conditions. Features include hourly and 10-day forecasts, severe weather alerts, interactive radar maps, and location-based weather tracking. Built with performance in mind, the app uses efficient data caching and smooth animations to provide instant access to weather information.",
    image: project2Image,
    techStack: ["Swift", "UIKit", "MapKit", "Core Location", "REST APIs"],
    githubUrl: "https://github.com",
    liveUrl: "https://apps.apple.com",
    category: "Weather"
  },
  {
    id: "3",
    title: "FinanceTracker Pro",
    description: "Personal finance management with intelligent insights and budgeting tools.",
    longDescription: "FinanceTracker Pro is a comprehensive personal finance application that empowers users to take control of their financial future. The app offers automatic transaction categorization, budget creation and tracking, bill reminders, and investment portfolio monitoring. Advanced features include spending pattern analysis, financial goal setting, and AI-powered insights to help users make informed financial decisions. Security is paramount with Face ID authentication and bank-level encryption.",
    image: project1Image,
    techStack: ["Swift", "SwiftUI", "Core Data", "Charts", "Security Framework"],
    githubUrl: "https://github.com",
    category: "Finance"
  },
  {
    id: "4",
    title: "FitnessPal",
    description: "Comprehensive fitness tracking with workout plans and progress analytics.",
    longDescription: "FitnessPal is the ultimate fitness companion that helps users achieve their health and wellness goals through comprehensive tracking and personalized workout plans. The app features an extensive exercise database, custom workout builder, progress photos, body measurement tracking, and integration with HealthKit. Users can follow guided workout routines, track their nutrition, monitor sleep patterns, and receive motivational insights to stay on track with their fitness journey.",
    image: project2Image,
    techStack: ["Swift", "SwiftUI", "HealthKit", "Core ML", "WatchKit"],
    githubUrl: "https://github.com",
    liveUrl: "https://apps.apple.com",
    category: "Health & Fitness"
  }
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent py-2">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer relative transition-transform duration-500"
                onClick={() => handleProjectClick(project)}
              >
                {/* 🌈 Border Layer (normal border by default, gradient on hover) */}
                <div className="relative rounded-2xl p-[1px] bg-border group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">

                  {/* 🟫 Inner Card Layer (background & content) */}
                  <div className="relative rounded-[calc(1rem-1px)] bg-background overflow-hidden">

                    {/* 🎨 Semi-transparent gradient overlay */}
                    <div className="absolute inset-0 z-10 rounded-[calc(1rem-1px)] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* 📸 Image section */}
                    <div className="aspect-video relative overflow-hidden rounded-t-[calc(1rem-1px)]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* 📝 Text Content */}
                    <div className="p-6 relative z-20">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}