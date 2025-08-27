import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Menu, 
  X, 
  Scale, 
  BookOpen,
  User, 
  LogOut, 
  Bell,
  Search,
  ArrowLeftCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import firdLogo from '../assets/fird-ai-logo.png'

const Navbar = ({ sidebarOpen, setSidebarOpen, isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin, isAttorney, setIsAttorney, isClient, setIsClient, isJudge, setIsJudge }) => {
  const navigate = useNavigate()

  const handleLegalDocs = async(e) => {
    e.preventDefault()
    window.open("/legal-docs", "_blank")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setIsAdmin(false)
    setIsAttorney(false)
    setIsClient(false)
    setIsJudge(false)
    setSidebarOpen(false)
    navigate('/')
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Menu */}
          <div className="flex items-center space-x-4">
            {isAuthenticated && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="hover-lift"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
            
            {location.pathname == "/login" || location.pathname == "/signup" ? (
              <Link to="/" className="flex items-center space-x-3 cursor-pointer custLink">
                <img 
                  src={firdLogo} 
                  alt="Fird AI" 
                  className="h-10 w-10 animate-float hover:cursor-pointer"
                />
                <div className="flex flex-col hover:cursor-pointer">
                  <span className="text-xl font-bold text-primary hover:cursor-pointer">Fird AI</span>
                  <span className="text-xs text-muted-foreground hover:cursor-pointer">Court Management</span>
                </div>
              </Link>
            ) : (
              <Link className="flex items-center space-x-3">
                <img 
                  src={firdLogo} 
                  alt="Fird AI" 
                  className="h-10 w-10 animate-float"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary">Fird AI</span>
                  <span className="text-xs text-muted-foreground">Court Management</span>
                </div>
              </Link>
            )}
          </div>

          {/* Center - Search (only when authenticated) */}
          {isAuthenticated && (
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search cases, documents, or users..."
                  className="pl-10 bg-white/50 border-border focus:bg-white transition-all-smooth"
                />
              </div>
            </div>
          )}

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button onClick={handleLegalDocs} variant="ghost" size="sm" className="hover-lift">
                  <BookOpen className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="sm" className="hover-lift">
                  <Bell className="h-5 w-5" />
                </Button>

                <div className="flex items-center space-x-2">
                  {isAdmin ? (
                    <Button variant="ghost" size="sm" onClick={() => navigate('/admin/profile')} className="hover-lift">
                      <User className="h-5 w-5" />
                    </Button>
                  ) : isAttorney ? (
                    <Button variant="ghost" size="sm" onClick={() => navigate('/attorney/profile')} className="hover-lift">
                      <User className="h-5 w-5" />
                    </Button>
                  ) : isClient ? (
                    <Button variant="ghost" size="sm" onClick={() => navigate('/client/profile')} className="hover-lift">
                      <User className="h-5 w-5" />
                    </Button>
                  ) : isJudge && (
                    <Button variant="ghost" size="sm" onClick={() => navigate('/judge/profile')} className="hover-lift">
                      <User className="h-5 w-5" />
                    </Button>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleLogout}
                    className="hover-lift text-destructive hover:text-destructive"
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate('/login')}
                  className="hover-lift"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => navigate('/signup')}
                  className="hover-lift"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

