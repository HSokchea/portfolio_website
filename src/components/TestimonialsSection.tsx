import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Inc.",
    content: "Alex delivered exceptional work on our iOS app. His attention to detail and user experience expertise resulted in a 40% increase in user engagement. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b386?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "CTO",
    company: "StartupLabs",
    content: "Working with Alex was a game-changer for our mobile strategy. His clean code and innovative solutions helped us launch ahead of schedule with a polished, professional app.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: "3",
    name: "Emily Johnson",
    role: "Design Lead",
    company: "CreativeMinds",
    content: "Alex has an incredible ability to translate design concepts into beautiful, functional iOS experiences. His collaboration skills and technical expertise are top-notch.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            What People Say
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative p-6 card-gradient rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
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