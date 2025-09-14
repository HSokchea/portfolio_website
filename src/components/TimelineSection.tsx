import { motion } from "framer-motion"
import { GraduationCap, Briefcase, Award, Code } from "lucide-react"

interface TimelineItem {
  id: string
  type: "education" | "work" | "achievement" | "project"
  title: string
  organization: string
  date: string
  description: string
  location?: string
}

const timelineItems: TimelineItem[] = [
  {
    id: "1",
    type: "work",
    title: "Senior iOS Developer",
    organization: "TechFlow Inc.",
    date: "2021 - Present",
    description: "Leading iOS development for enterprise applications, mentoring junior developers, and implementing best practices for code quality and app performance.",
    location: "San Francisco, CA"
  },
  {
    id: "2",
    type: "achievement",
    title: "Apple Design Award Nomination",
    organization: "Apple Inc.",
    date: "2023",
    description: "TaskFlow iOS app was nominated for Apple Design Award in the Innovation category for its intuitive user interface and seamless user experience."
  },
  {
    id: "3",
    type: "work",
    title: "iOS Developer",
    organization: "StartupLabs",
    date: "2019 - 2021",
    description: "Developed and maintained multiple iOS applications from concept to App Store launch, working closely with design and product teams.",
    location: "Austin, TX"
  },
  {
    id: "4",
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "University of California, Berkeley",
    date: "2015 - 2019",
    description: "Graduated Magna Cum Laude with focus on mobile application development and human-computer interaction.",
    location: "Berkeley, CA"
  },
  {
    id: "5",
    type: "project",
    title: "Open Source Contributor",
    organization: "Swift Community",
    date: "2020 - Present",
    description: "Active contributor to Swift open source projects and iOS development tools, with contributions to popular libraries and frameworks."
  }
]

const getIcon = (type: string) => {
  switch (type) {
    case "education":
      return <GraduationCap className="h-5 w-5" />
    case "work":
      return <Briefcase className="h-5 w-5" />
    case "achievement":
      return <Award className="h-5 w-5" />
    case "project":
      return <Code className="h-5 w-5" />
    default:
      return <Briefcase className="h-5 w-5" />
  }
}

const getIconColor = (type: string) => {
  switch (type) {
    case "education":
      return "text-blue-500"
    case "work":
      return "text-green-500"
    case "achievement":
      return "text-yellow-500"
    case "project":
      return "text-purple-500"
    default:
      return "text-primary"
  }
}

export function TimelineSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent py-2">
            Experience & Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    {/* Timeline dot */}
                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-card shadow-medium ${getIconColor(item.type)}`}>
                      {getIcon(item.type)}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <motion.div
                        className="group cursor-pointer relative transition-transform duration-500"
                        whileHover={{ y: -2 }}
                      >
                        {/* Border Layer (normal border by default, gradient on hover) */}
                        <div className="relative rounded-2xl p-[2px] bg-border group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">
                          
                          {/* Inner Card Layer (background & content) */}
                          <div className="relative rounded-[calc(1rem-2px)] bg-background overflow-hidden">
                            
                            {/* Semi-transparent gradient overlay */}
                            <div className="absolute inset-0 z-10 rounded-[calc(1rem-2px)] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Content */}
                            <div className="relative z-20 p-6">
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                <div>
                                  <h3 className="text-xl font-semibold text-foreground mb-1">
                                    {item.title}
                                  </h3>
                                  <p className="text-primary font-medium">{item.organization}</p>
                                  {item.location && (
                                    <p className="text-sm text-muted-foreground">{item.location}</p>
                                  )}
                                </div>
                                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full whitespace-nowrap mt-2 md:mt-0">
                                  {item.date}
                                </span>
                              </div>
                              
                              <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}