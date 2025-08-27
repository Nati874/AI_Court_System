import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LegalDocuments from './pages/LegalDocuments'
import Settings from './pages/Settings'

import AdminDashboard from './pages/admin/Dashboard'
import AdminCaseManagement from './pages/admin/CaseManagement'
import AdminScheduling from './pages/admin/Scheduling'
import AdminDocumentHandling from './pages/admin/DocumentHandling'
import AdminUserAccessControl from './pages/admin/UserAccessControl'
import AdminSecurityOversight from './pages/admin/SecurityOversight'
import AdminMessages from './pages/admin/Messages'
import AdminConfigurations from './pages/admin/Configurations'
import AdminProfile from './pages/admin/Profile'

import AttorneyDashboard from './pages/attorney/Dashboard'
import AttorneyTrackProgress from './pages/attorney/TrackProgress'
import AttorneyAssignedCases from './pages/attorney/AssignedCases'
import AttorneyScheduling from './pages/attorney/Scheduling'
import AttorneyDocumentHandling from './pages/attorney/DocumentHandling'
import AttorneyReporting from './pages/attorney/Reporting'
import AttorneyMessages from './pages/attorney/Messages'
import AttorneyAuditTrails from './pages/attorney/AuditTrails'
import AttorneyProfile from './pages/attorney/Profile'

import ClientDashboard from './pages/client/Dashboard'
import ClientCaseManagement from './pages/client/CaseManagement'
import ClientInitiation from './pages/client/Initiation'
import ClientCompliance from './pages/client/Compliance'
import ClientScheduling from './pages/client/Scheduling'
import ClientJudgementHistory from './pages/client/JudgementHistory'
import ClientMessages from './pages/client/Messages'
import ClientPayments from './pages/client/Payments'
import ClientProfile from './pages/client/Profile'

import JudgeDashboard from './pages/judge/Dashboard'
import JudgeCaseManagement from './pages/judge/CaseManagement'
import JudgeViewCases from './pages/judge/ViewCases'
import JudgePastCrimes from './pages/judge/PastCrimes'
import JudgeMessages from './pages/judge/Messages'
import JudgeAppointments from './pages/judge/Appointments'
import JudgeAIAssistant from './pages/judge/AIAssistant'
import JudgeBot from './pages/judge/JudgeBot'
import JudgeSummarizer from './pages/judge/Summarizer'
import JudgeProfile from './pages/judge/Profile'

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [isAdmin, setIsAdmin] = React.useState(false)
  const [isAttorney, setIsAttorney] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)
  const [isJudge, setIsJudge] = React.useState(false)
  const [isSettings, setIsSettings] = React.useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-animated">
        {/* Navigation */}
        <Navbar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}

          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          isAttorney={isAttorney}
          setIsAttorney={setIsAttorney}
          isClient={isClient}
          setIsClient={setIsClient}
          isJudge={isJudge}
          setIsJudge={setIsJudge}
        />
        
        <div className="flex">
          {/* Sidebar */}
          {isAuthenticated && (
            <Sidebar 
              isOpen={sidebarOpen} 
              setIsOpen={setSidebarOpen}

              isAdmin={isAdmin}
              setIsAdmin={setIsAdmin}
              isAttorney={isAttorney}
              setIsAttorney={setIsAttorney}
              isClient={isClient}
              setIsClient={setIsClient}
              isJudge={isJudge}
              setIsJudge={setIsJudge}
              isSettings={isSettings}
              setIsSettings={setIsSettings}
            />
          )}
          
          {/* Main Content */}
          <main className={`flex-1 transition-all-smooth ${
            isAuthenticated && sidebarOpen ? 'ml-64' : ''
          }`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated}
                  setIsAdmin={setIsAdmin}
                  setIsAttorney={setIsAttorney}
                  setIsClient={setIsClient}
                  setIsJudge={setIsJudge} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/legal-docs" element={<LegalDocuments />} />
                
                {/* Protected Routes */}
                {isAuthenticated && isAdmin ? (
                  <>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/case-management" element={<AdminCaseManagement />} />
                    <Route path="/admin/scheduling" element={<AdminScheduling />} />
                    <Route path="/admin/document-handling" element={<AdminDocumentHandling />} />
                    <Route path="/admin/user-access-control" element={<AdminUserAccessControl />} />
                    <Route path="/admin/security-oversight" element={<AdminSecurityOversight />} />
                    <Route path="/admin/messages" element={<AdminMessages />} />
                    <Route path="/admin/configurations" element={<AdminConfigurations />} />
                    <Route path="/admin/profile" element={<AdminProfile />} />
                    <Route path="/settings" element={<Settings setIsSettings={setIsSettings} />} />
                  </>
                ) : isAuthenticated && isAttorney ? (
                  <>
                    <Route path="/attorney/dashboard" element={<AttorneyDashboard />} />
                    <Route path="/attorney/track-progress" element={<AttorneyTrackProgress />} />
                    <Route path="/attorney/assigned-cases" element={<AttorneyAssignedCases />} />
                    <Route path="/attorney/scheduling" element={<AttorneyScheduling />} />
                    <Route path="/attorney/document-handling" element={<AttorneyDocumentHandling />} />
                    <Route path="/attorney/reporting" element={<AttorneyReporting />} />
                    <Route path="/attorney/messages" element={<AttorneyMessages />} />
                    <Route path="/attorney/audit-trails" element={<AttorneyAuditTrails />} />
                    <Route path="/attorney/profile" element={<AttorneyProfile />} />
                    <Route path="/settings" element={<Settings setIsSettings={setIsSettings} />} />
                  </>
                ) : isAuthenticated && isClient ? (
                  <>
                    <Route path="/client/dashboard" element={<ClientDashboard />} />
                    <Route path="/client/case-management" element={<ClientCaseManagement />} />
                    <Route path="/client/initiation" element={<ClientInitiation />} />
                    <Route path="/client/compliance" element={<ClientCompliance />} />
                    <Route path="/client/scheduling" element={<ClientScheduling />} />
                    <Route path="/client/judgement-history" element={<ClientJudgementHistory />} />
                    <Route path="/client/messages" element={<ClientMessages />} />
                    <Route path="/client/payments" element={<ClientPayments />} />
                    <Route path="/client/profile" element={<ClientProfile />} />
                    <Route path="/settings" element={<Settings setIsSettings={setIsSettings} />} />
                  </>
                ) : isAuthenticated && isJudge ? (
                  <>
                    <Route path="/judge/dashboard" element={<JudgeDashboard />} />
                    <Route path="/judge/case-management" element={<JudgeCaseManagement />} />
                    <Route path="/judge/view-cases" element={<JudgeViewCases />} />
                    <Route path="/judge/past-crimes" element={<JudgePastCrimes />} />
                    <Route path="/judge/messages" element={<JudgeMessages />} />
                    <Route path="/judge/appointments" element={<JudgeAppointments />} />
                    <Route path="/judge/ai-assistant" element={<JudgeAIAssistant />} />
                    <Route path="/judge/judge-bot" element={<JudgeBot />} />
                    <Route path="/judge/summarizer" element={<JudgeSummarizer />} />
                    <Route path="/judge/profile" element={<JudgeProfile />} />
                    <Route path="/settings" element={<Settings setIsSettings={setIsSettings} />} />
                  </>
                ) : (
                  <Route path="*" element={<Login 
                    setIsAuthenticated={setIsAuthenticated}
                    setIsAdmin={setIsAdmin}
                    setIsAttorney={setIsAttorney}
                    setIsClient={setIsClient}
                    setIsJudge={setIsJudge}
                  />}
                  />
                )}
              </Routes>
            </motion.div>
          </main>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App

