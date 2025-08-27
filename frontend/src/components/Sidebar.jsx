import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  ChevronRight,
  Users,
  Eye,
  Upload,
  Clock,
  TrendingUp,
  AlertCircle,
  Gavel,
  BarChart3,
  CreditCard,
  ChevronDown,
  Shield,
  Bot,
  ShieldCheck,
  ScrollText
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const Sidebar = ({ isOpen, setIsOpen, isAdmin, setIsAdmin, isAttorney, setIsAttorney, isClient, setIsClient, isJudge, setIsJudge, isSettings, setIsSettings }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSettings = async (e) => {
    e.preventDefault()
    setIsSettings(true)
    navigate("/settings")
  }

  const judgeMenuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/judge/dashboard',
      description: 'Overview & Analytics'
    },
    {
      title: 'Case Management',
      icon: FolderOpen,
      path: '/judge/case-management',
      description: 'Manage Cases'
    },
    {
      title: 'View Cases',
      icon: Eye,
      path: '/judge/view-cases',
      description: 'Browse All Cases'
    },
    {
      title: 'Past Crimes',
      icon: Clock,
      path: '/judge/past-crimes',
      description: 'Criminal Records'
    },
    {
      title: 'Messages',
      icon: MessageSquare,
      path: '/judge/messages',
      description: 'User Communications'
    },
    {
      title: 'Appointments',
      icon: Calendar,
      path: '/judge/appointments',
      description: 'Schedule & Manage'
    },
    {
      title: 'AI Assistant',
      icon: Bot,
      path: '/judge/ai-assistant',
      description: 'Legal AI Helper'
    },
    {
      title: 'Judge Bot',
      icon: Gavel,
      path: '/judge/judge-bot',
      description: 'Decision Support'
    },
    {
      title: 'Summarizer',
      icon: FileText,
      path: '/judge/summarizer',
      description: 'Document Summary'
    }
  ]

  const adminMenuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard',
      description: 'Overview & Reports'
    },
    {
      title: 'Case Management',
      icon: FolderOpen,
      path: '/admin/case-management',
      description: 'Monitor & Manage Cases'
    },
    {
      title: 'Scheduling',
      icon: Calendar,
      path: '/admin/scheduling',
      description: 'Manage Courtroom Calenders'
    },
    {
      title: 'Document Handling',
      icon: FileText,
      path: '/admin/document-handling',
      description: 'Organize Documentations'
    },
    {
      title: 'User Access Control',
      icon: Users,
      path: '/admin/user-access-control',
      description: 'Access Over Accounts'
    },
    {
      title: 'Security Oversight',
      icon: ShieldCheck,
      path: '/admin/security-oversight',
      description: 'Enforce & Monitor Policies'
    },
    {
      title: 'Messages',
      icon: MessageSquare,
      path: '/admin/messages',
      description: 'User Communications'
    },
    {
      title: 'Configurations',
      icon: ScrollText,
      path: '/admin/configurations',
      description: 'Customize Workflows'
    }
  ]

  const attorneyMenuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/attorney/dashboard',
      description: 'Case Progresses & Logs'
    },
    {
      title: 'Track Case Progress',
      icon: TrendingUp,
      path: '/attorney/track-progress',
      description: 'Monitor Deadlines & Milestones'
    },
    {
      title: 'Assigned Cases',
      icon: FolderOpen,
      path: '/attorney/assigned-cases',
      description: 'Details & Updates'
    },
    {
      title: 'Scheduling',
      icon: Calendar,
      path: '/attorney/scheduling',
      description: 'Manage Date Integrations'
    },
    {
      title: 'Document Handling',
      icon: FileText,
      path: '/attorney/document-handling',
      description: 'Manage Documentations'
    },
    {
      title: 'Reporting',
      icon: BarChart3,
      path: '/attorney/reporting',
      description: 'Generate Reports & Summaries'
    },
    {
      title: 'Messages',
      icon: MessageSquare,
      path: '/attorney/messages',
      description: 'User Communications'
    },
    {
      title: 'Audit Trails',
      icon: Clock,
      path: '/attorney/audit-trails',
      description: 'View Activity Logs'
    }
  ]

  const clientMenuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/client/dashboard',
      description: 'General Logs & Court Analysis'
    },
    {
      title: 'Case Management',
      icon: FolderOpen,
      path: '/client/case-management',
      description: 'Onboard Case Organizations'
    },
    {
      title: 'Initiation & Filing',
      icon: FileText,
      path: '/client/initiation',
      description: 'New Case Documentation'
    },
    {
      title: 'Compliance & Documentation',
      icon: Shield,
      path: '/client/compliance',
      description: 'Court Orders & Deadlines'
    },
    {
      title: 'Scheduling',
      icon: Calendar,
      path: '/client/scheduling',
      description: 'Appointments & Consultations'
    },
    {
      title: 'Judgement History',
      icon: Clock,
      path: '/client/judgement-history',
      description: 'Review Completed Cases'
    },
    {
      title: 'Messages',
      icon: MessageSquare,
      path: '/client/messages',
      description: 'User Communication'
    },
    {
      title: 'Payments & Billing',
      icon: CreditCard,
      path: '/client/payments',
      description: 'Payment History & Log'
    }
  ]

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: -320,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  }

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      opacity: 0,
      x: -20
    }
  }

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white/90 backdrop-blur-md border-r border-border z-50 overflow-y-auto"
      >
        <div className="p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            {isAdmin ? (
              <><h2 className="text-lg font-semibold text-foreground mb-1">Admin Navigation</h2>
              <p className="text-sm text-muted-foreground">Manage court system administration</p></>
            ) : isAttorney ? (
              <><h2 className="text-lg font-semibold text-foreground mb-1">Attorney Navigation</h2>
              <p className="text-sm text-muted-foreground">Manage your legal practice</p></>
            ) : isClient ? (
              <><h2 className="text-lg font-semibold text-foreground mb-1">Client Navigation</h2>
              <p className="text-sm text-muted-foreground">Manage your court system</p></>
            ) : isJudge && (
              <><h2 className="text-lg font-semibold text-foreground mb-1">Judge Navigation</h2>
              <p className="text-sm text-muted-foreground">Manage your court system</p></>
            )}
          </motion.div>

          {isAdmin ? (
            <nav className="space-y-2">
              {adminMenuItems.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path

                return (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={item.path}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={`w-full justify-start h-auto p-3 hover-lift ${
                          isActive 
                            ? 'bg-primary text-primary-foreground shadow-md' 
                            : 'hover:bg-accent'
                        }`}
                      >
                        <div className="flex items-center w-full">
                          <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                          <div className="flex-1 text-left">
                            <div className={`font-medium ${isActive ? 'text-primary-foreground' : 'text-foreground'}`}>
                              {item.title}
                            </div>
                            <div className={`text-xs ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                              {item.description}
                            </div>
                          </div>
                          {isActive && (
                            <ChevronRight className="h-4 w-4 text-primary-foreground" />
                          )}
                        </div>
                      </Button>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          ) : isJudge ? (
            <nav className="space-y-2">
              {judgeMenuItems.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path

                return (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={item.path}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={`w-full justify-start h-auto p-3 hover-lift ${
                          isActive 
                            ? 'bg-primary text-primary-foreground shadow-md' 
                            : 'hover:bg-accent'
                        }`}
                      >
                        <div className="flex items-center w-full">
                          <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                          <div className="flex-1 text-left">
                            <div className={`font-medium ${isActive ? 'text-primary-foreground' : 'text-foreground'}`}>
                              {item.title}
                            </div>
                            <div className={`text-xs ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                              {item.description}
                            </div>
                          </div>
                          {isActive && (
                            <ChevronRight className="h-4 w-4 text-primary-foreground" />
                          )}
                        </div>
                      </Button>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          ) : isAttorney ? (
            <nav className="space-y-2">
              {attorneyMenuItems.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path

                return (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={item.path}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={`w-full justify-start h-auto p-3 hover-lift ${
                          isActive 
                            ? 'bg-primary text-primary-foreground shadow-md' 
                            : 'hover:bg-accent'
                        }`}
                      >
                        <div className="flex items-center w-full">
                          <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                          <div className="flex-1 text-left">
                            <div className={`font-medium ${isActive ? 'text-primary-foreground' : 'text-foreground'}`}>
                              {item.title}
                            </div>
                            <div className={`text-xs ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                              {item.description}
                            </div>
                          </div>
                          {isActive && (
                            <ChevronRight className="h-4 w-4 text-primary-foreground" />
                          )}
                        </div>
                      </Button>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          ) : isClient && (
            <nav className="space-y-2">
              {clientMenuItems.map((item, index) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path

                return (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={item.path}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={`w-full justify-start h-auto p-3 hover-lift ${
                          isActive 
                            ? 'bg-primary text-primary-foreground shadow-md' 
                            : 'hover:bg-accent'
                        }`}
                      >
                        <div className="flex items-center w-full">
                          <Icon className={`h-5 w-5 mr-3 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                          <div className="flex-1 text-left">
                            <div className={`font-medium ${isActive ? 'text-primary-foreground' : 'text-foreground'}`}>
                              {item.title}
                            </div>
                            <div className={`text-xs ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                              {item.description}
                            </div>
                          </div>
                          {isActive && (
                            <ChevronRight className="h-4 w-4 text-primary-foreground" />
                          )}
                        </div>
                      </Button>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t border-border"
            >
                <Link onClick={handleSettings}>
                  <Button variant="ghost" className="w-full justify-start hover-lift bg-accent">
                    <Settings className="h-5 w-5 mr-3 text-muted-foreground" />
                    <span className="text-foreground">Settings</span>
                  </Button>
                </Link>
            </motion.div>
        </div>
      </motion.aside>
    </>
  )
}

export default Sidebar

