import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectModal } from "./ProjectModal"
import wabookImage from "@/assets/wabook-logo.webp"
import bizplayImage from "@/assets/bizplay-logo.webp"
import bizplayOnPremiseImage from "@/assets/bizplay-On-Premise.webp"

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
    title: "WABOOKS",
    description: "WABOOKS Mobile App allows all busy CEOs and business owners to register expense by taking a photo of receipt to upload the bookkeeping, and get notified on daily cash reports and bank account debit/credit transaction.",
longDescription: `WABOOKS App features:
• Instant Receipt Registration – Capture a photo or select one from your gallery to record expenses quickly, without needing the web version.
• Advance Payment Requests – Easily request advance payments by selecting from available ledgers.
• Smart Notifications – Stay updated with financial reports, banking transactions, and business contact details.
• Multi-language Support – Available in Khmer, English, and Korean.`,
    image: wabookImage,
    techStack: ["Swift", "UIKit"],
    liveUrl: "https://apps.apple.com/us/app/wabooks/id1556391775",
    category: "B2B Fintech"
  },
  {
    id: "2",
    title: "비즈플레이",
    description: "The Bizplay app is an evidence-free expense processing service mobile app that can easily process automatically collected receipts on mobile.",
    longDescription: `비즈플레이 App features:
- Check the amount and details of this month's corporate card usage
- Check corporate card receipt details
- Expense by entering the purpose and contents of the receipt
- Take a picture of the receipt and attach it when submitting the receipt
- Preparation of expenditure resolution`,
    image: bizplayImage,
    techStack: ["Swift", "UIKit"],
    liveUrl: "https://apps.apple.com/us/app/%EB%B9%84%EC%A6%88%ED%94%8C%EB%A0%88%EC%9D%B4/id1501659393",
    category: "B2B Fintech"
  },
  {
    id: "3",
    title: "비즈플레이 On-Premise",
    description: "Personal finance management with intelligent insights and budgeting tools.",
    longDescription: `비즈플레이 On-Premise App features:
- Check the amount and details of this month's corporate card usage
- Check corporate card receipt details
- Expense by entering the purpose and contents of the receipt
- Take a picture of the receipt and attach it when submitting the receipt
- Completion of expenditure resolution`,
    image: bizplayOnPremiseImage,
    techStack: ["Swift", "UIKit"],
    liveUrl: "https://apps.apple.com/us/app/%EB%B9%84%EC%A6%88%ED%94%8C%EB%A0%88%EC%9D%B4-on-premise/id1663429345",
    category: "B2B Fintech"
  },
  {
    id: "4",
    title: "FitnessPal",
    description: "Comprehensive fitness tracking with workout plans and progress analytics.",
    longDescription: "FitnessPal is the ultimate fitness companion that helps users achieve their health and wellness goals through comprehensive tracking and personalized workout plans. The app features an extensive exercise database, custom workout builder, progress photos, body measurement tracking, and integration with HealthKit. Users can follow guided workout routines, track their nutrition, monitor sleep patterns, and receive motivational insights to stay on track with their fitness journey.",
    image: bizplayImage,
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
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs rounded-full">
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