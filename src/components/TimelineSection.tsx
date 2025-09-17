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
    title: "Officer, iOS Developer",
    organization: "Phillip Bank Plc",
    date: "2025 - Present",
    description: "Developed and maintained iOS apps for banking projects such as Phillip Mobile Banking and Phillip Business.",
    location: "Phnom Penh, Cambodia"
  },
  {
    id: "2",
    type: "work",
    title: "Software Engineer, iOS Developer",
    organization: "KOSIGN (Cambodia) Investment Co., Ltd.",
    date: "2023 - 2025",
    description: "Developed and maintained iOS apps for outsourced projects such as 비즈플레이 4.0, IBK 법인카드, 비즈플레이 On-Premise, 비플 법인카드, 비플 개인카드, 트리플러스, 우리카드 비즈플레이, 삼성카드 and 비즈플레이. Additionally, I was responsible for maintaining local iOS projects, including WABOOKS, Kosign Store and WeHR.",
    location: "Phnom Penh, Cambodia"
  },
    {
    id: "3",
    type: "education",
    title: "IT Professional Training",
    organization: "Korean Software HRD Center",
    date: "2022",
    description: "Completed basic and advanced courses, gaining hands-on project experience, including the development of an iOS app 'WeMeet', and a web app 'K-Learning'.",
    location: "Phnom Penh, Cambodia"
  },
  {
    id: "4",
    type: "education",
    title: "Bachelor's Degree in Computer Science",
    organization: "Norton University",
    date: "2019-2023",
    description: "Learning C++, C#, Java, JavaScript and Flutter, with a foundation in Data Structures, Algorithms, Database Management, and Linux. My studies also include Statistics, Computer Networks, Web Development, Cyber Security and E-Commerce, equipping me with a well-rounded understanding of core computer science.",
    location: "Phnom Penh, Cambodia"
  },
  {
    id: "5",
    type: "work",
    title: "Digital Marketing",
    organization: "GMi68 International",
    date: "2020 - 2022",
    description: "Design creative marketing assets such as posters, banners, logos, and other visual content. Manage and maintain the company’s official Facebook page, including content planning, posting, and audience engagement",
    location: "Phnom Penh, Cambodia"
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
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.1, ease: "easeOut"}}
                    viewport={{ once: true }}
                    className="relative flex items-start transition-all duration-300 group"
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
                        <div className="relative rounded-2xl p-[1px] bg-border group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">

                          {/* Inner Card Layer (background & content) */}
                          <div className="relative rounded-[calc(1rem-1px)] bg-background overflow-hidden">

                            {/* Semi-transparent gradient overlay */}
                            <div className="absolute inset-0 z-10 rounded-[calc(1rem-1px)] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                                <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm rounded-full whitespace-nowrap mt-2 md:mt-0">
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