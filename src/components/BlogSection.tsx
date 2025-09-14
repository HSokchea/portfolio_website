import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "SwiftUI vs UIKit: Making the Right Choice in 2024",
    excerpt: "A comprehensive comparison of SwiftUI and UIKit, exploring when to use each framework and how to make the transition smoothly.",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "swiftui-vs-uikit-2024",
    category: "Development"
  },
  {
    id: "2",
    title: "Building Performant iOS Apps with Core Data",
    excerpt: "Learn best practices for using Core Data in your iOS applications, including optimization techniques and common pitfalls to avoid.",
    date: "2024-01-08",
    readTime: "12 min read",
    slug: "core-data-performance",
    category: "Tutorial"
  },
  {
    id: "3",
    title: "The Future of iOS Development: What's Coming Next",
    excerpt: "Exploring the latest trends and upcoming features in iOS development, from AI integration to new SwiftUI capabilities.",
    date: "2024-01-01",
    readTime: "6 min read",
    slug: "future-ios-development",
    category: "Industry"
  }
]

export function BlogSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent py-2">
            Latest Blog Posts
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer relative transition-transform duration-500"
                >
                  {/* Border Layer (normal border by default, gradient on hover) */}
                  <div className="relative rounded-2xl p-[1px] bg-border group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-500">

                    {/* Inner Card Layer (background & content) */}
                    <div className="relative rounded-[calc(1rem-1px)] bg-background overflow-hidden">

                      {/* Semi-transparent gradient overlay */}
                      <div className="absolute inset-0 z-10 rounded-[calc(1rem-1px)] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="relative z-20 p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div className="flex items-center gap-4 mb-2 md:mb-0">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {post.category}
                            </span>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <Button
                          variant="ghost"
                          className="group-hover:text-primary transition-colors duration-300 p-0 h-auto font-semibold"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" className="px-8">
                View All Posts
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}