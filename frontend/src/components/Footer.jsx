import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white/80 backdrop-blur-md border-t border-border mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-8 w-8 text-primary animate-float" />
              <div>
                <h3 className="text-xl font-bold text-primary">Fird AI</h3>
                <p className="text-sm text-muted-foreground">Court Management System</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing court management with AI-powered solutions. 
              Streamline case management, enhance decision-making, and improve 
              judicial efficiency with our comprehensive platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="hover-lift">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              <Button variant="outline" size="sm" className="hover-lift">
                <Phone className="h-4 w-4 mr-2" />
                Support
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Dashboard',
                'Case Management',
                'AI Assistant',
                'Judge Bot',
                'Appointments'
              ].map((link) => (
                <li key={link}>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-primary transition-all-smooth"
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Addis Abeba, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+251 90 537 2683</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@firdai.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Fird AI. All rights reserved. Powered by advanced AI technology.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Button>
            <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
              Security
            </Button>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

