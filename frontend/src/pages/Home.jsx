import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Scale, 
  Bot, 
  Gavel, 
  FileText, 
  Users, 
  Calendar,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Home = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: Scale,
      title: 'Case Management',
      description: 'Comprehensive case tracking and management system with real-time updates and document handling.',
      color: 'text-blue-600'
    },
    {
      icon: Bot,
      title: 'AI Assistant',
      description: 'Intelligent AI-powered assistant to help with legal research, document analysis, and case insights.',
      color: 'text-purple-600'
    },
    {
      icon: Gavel,
      title: 'Judge Decision Bot',
      description: 'Advanced AI system to assist judges with decision-making based on legal precedents and case data.',
      color: 'text-green-600'
    },
    {
      icon: FileText,
      title: 'Document Summarizer',
      description: 'Automatically summarize lengthy legal documents and case files for quick review and analysis.',
      color: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Secure user authentication and role-based access control for different court personnel.',
      color: 'text-red-600'
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Efficient scheduling system for court hearings, meetings, and legal consultations.',
      color: 'text-indigo-600'
    }
  ]

  const benefits = [
    'Streamlined case workflow management',
    'AI-powered legal assistance',
    'Secure document handling',
    'Real-time collaboration tools',
    'Automated scheduling system',
    'Comprehensive reporting dashboard'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Welcome to{' '}
                <span className="text-primary">Fird AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Revolutionary Court Management System powered by Artificial Intelligence
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Streamline your judicial processes, enhance decision-making, and improve 
                court efficiency with our comprehensive AI-powered platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                onClick={() => navigate('/signup')}
                className="hover-lift text-lg px-8 py-3"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/login')}
                className="hover-lift text-lg px-8 py-3"
              >
                Sign In
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Scale className="h-16 w-16 text-primary animate-float" />
        </div>
        <div className="absolute top-40 right-10 opacity-20">
          <Gavel className="h-12 w-12 text-primary animate-float" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Bot className="h-14 w-14 text-primary animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the comprehensive suite of tools designed to revolutionize court management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift h-full">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4`}>
                        <Icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Fird AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines cutting-edge AI technology with intuitive design 
                to deliver unparalleled court management capabilities.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Secure & Reliable
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Enterprise-grade security with 99.9% uptime guarantee. 
                    Your data is protected with advanced encryption and compliance standards.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Zap className="h-4 w-4" />
                      <span>Fast</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>Reliable</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Court Management?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of legal professionals who trust Fird AI for their court management needs.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/signup')}
              className="hover-lift text-lg px-8 py-3"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

