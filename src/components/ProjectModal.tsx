import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

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

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card rounded-2xl shadow-large max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <p className="text-muted-foreground mb-6 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                {project.longDescription}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex items-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex items-center bg-primary hover:bg-primary-hover"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View App
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}