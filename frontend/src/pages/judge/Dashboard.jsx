import React from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { 
  Scale, 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp, 
  TrendingDown,
  Clock,
  CheckCircle,
  AlertTriangle,
  Gavel
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Dashboard = () => {
  // Sample data for charts
  const caseData = [
    { month: 'Jan', cases: 45, resolved: 38 },
    { month: 'Feb', cases: 52, resolved: 41 },
    { month: 'Mar', cases: 48, resolved: 45 },
    { month: 'Apr', cases: 61, resolved: 52 },
    { month: 'May', cases: 55, resolved: 48 },
    { month: 'Jun', cases: 67, resolved: 59 }
  ]

  const caseTypeData = [
    { name: 'Civil', value: 35, color: '#3b82f6' },
    { name: 'Criminal', value: 28, color: '#ef4444' },
    { name: 'Family', value: 22, color: '#10b981' },
    { name: 'Traffic', value: 15, color: '#f59e0b' }
  ]

  const recentActivity = [
    { id: 1, action: 'New case filed', case: 'CV-2024-001', time: '2 hours ago', type: 'new' },
    { id: 2, action: 'Hearing scheduled', case: 'CR-2024-045', time: '4 hours ago', type: 'schedule' },
    { id: 3, action: 'Case resolved', case: 'FM-2024-023', time: '6 hours ago', type: 'resolved' },
    { id: 4, action: 'Document uploaded', case: 'CV-2024-012', time: '8 hours ago', type: 'document' },
    { id: 5, action: 'AI summary generated', case: 'CR-2024-067', time: '1 day ago', type: 'ai' }
  ]

  const stats = [
    {
      title: 'Total Cases',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: Scale,
      color: 'text-blue-600'
    },
    {
      title: 'Active Cases',
      value: '342',
      change: '+8%',
      trend: 'up',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      title: 'Resolved Cases',
      value: '905',
      change: '+15%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-purple-600'
    },
    {
      title: 'Pending Hearings',
      value: '28',
      change: '-5%',
      trend: 'down',
      icon: Calendar,
      color: 'text-orange-600'
    }
  ]

  const upcomingHearings = [
    { id: 1, case: 'CV-2024-001', title: 'Smith vs. Johnson', time: '10:00 AM', date: 'Today' },
    { id: 2, case: 'CR-2024-045', title: 'State vs. Williams', time: '2:30 PM', date: 'Today' },
    { id: 3, case: 'FM-2024-023', title: 'Custody Hearing', time: '9:00 AM', date: 'Tomorrow' },
    { id: 4, case: 'CV-2024-012', title: 'Contract Dispute', time: '11:30 AM', date: 'Tomorrow' }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your court management overview</p>
        </div>
        <Button className="hover-lift">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Hearing
        </Button>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <div className="flex items-center mt-1">
                        {stat.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                        )}
                        <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">vs last month</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Case Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="">
            <CardHeader>
              <CardTitle>Case Trends</CardTitle>
              <CardDescription>Monthly case filing and resolution trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={caseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cases" fill="#3b82f6" name="Filed Cases" />
                  <Bar dataKey="resolved" fill="#10b981" name="Resolved Cases" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Case Types */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="">
            <CardHeader>
              <CardTitle>Case Distribution</CardTitle>
              <CardDescription>Cases by type this month</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={caseTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {caseTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity & Upcoming Hearings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system activities and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-all-smooth">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'new' ? 'bg-blue-500' :
                      activity.type === 'schedule' ? 'bg-orange-500' :
                      activity.type === 'resolved' ? 'bg-green-500' :
                      activity.type === 'document' ? 'bg-purple-500' :
                      'bg-pink-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">Case: {activity.case}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Hearings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="">
            <CardHeader>
              <CardTitle>Upcoming Hearings</CardTitle>
              <CardDescription>Scheduled court hearings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingHearings.map((hearing) => (
                  <div key={hearing.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-all-smooth">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                        <Gavel className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{hearing.title}</p>
                        <p className="text-xs text-muted-foreground">Case: {hearing.case}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={hearing.date === 'Today' ? 'default' : 'secondary'}>
                        {hearing.date}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{hearing.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard

