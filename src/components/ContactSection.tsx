import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // For now, using the direct Supabase URL until env vars are properly configured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://eruffbncnptlgjanlpnq.supabase.co'
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydWZmYm5jbnB0bGdqYW5scG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MzMxMzIsImV4cCI6MjA3MzMwOTEzMn0.LEDm5JKYGhxXAiWe-hAa0bDoCG0aT-JlT1xizLGM72M'
      
      const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email')
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at sokcheahy57@gmail.com",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:sokcheahy57@gmail.com",
      color: "hover:text-red-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/alexjohnson",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/alexjohnson",
      color: "hover:text-gray-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/alexjohnson",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent py-2">
            Get In Touch
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Let's work together
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question, want to discuss a project, or just 
                    want to say hello, feel free to reach out!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>sokcheahy57@gmail.com</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <span className="w-5 h-5 mr-3 text-primary flex items-center justify-center">📍</span>
                    <span>Phnom Penh, Cambodia</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4 text-foreground">Connect with me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-muted rounded-full text-muted-foreground transition-all duration-300 hover:bg-primary/10 ${link.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-8 card-gradient rounded-2xl shadow-soft"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-primary-hover text-white-foreground shadow-glow hover:shadow-large transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}