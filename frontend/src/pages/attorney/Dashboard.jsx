import React from 'react'
import { motion } from 'framer-motion'
import { 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  Calendar,
  FileText,
  Users,
  TrendingUp,
  Bell
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Cases',
      value: '12',
      change: '+2 from last month',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Pending Deadlines',
      value: '5',
      change: '3 due this week',
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      title: 'Completed Tasks',
      value: '28',
      change: '+8 this week',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Client Meetings',
      value: '7',
      change: '2 scheduled today',
      icon: Users,
      color: 'text-purple-600'
    }
  ]

  const recentCases = [
    {
      id: 'CASE-2024-001',
      title: 'Smith vs. Johnson',
      type: 'Civil Litigation',
      status: 'Discovery',
      deadline: '2024-01-15',
      priority: 'High'
    },
    {
      id: 'CASE-2024-002',
      title: 'Estate of Williams',
      type: 'Probate',
      status: 'Filing',
      deadline: '2024-01-20',
      priority: 'Medium'
    },
    {
      id: 'CASE-2024-003',
      title: 'ABC Corp Contract Dispute',
      type: 'Commercial',
      status: 'Negotiation',
      deadline: '2024-01-25',
      priority: 'High'
    }
  ]

  const upcomingDeadlines = [
    {
      task: 'File Motion to Dismiss',
      case: 'Smith vs. Johnson',
      date: '2024-01-15',
      daysLeft: 3
    },
    {
      task: 'Discovery Response',
      case: 'ABC Corp Contract',
      date: '2024-01-18',
      daysLeft: 6
    },
    {
      task: 'Deposition Prep',
      case: 'Estate of Williams',
      date: '2024-01-22',
      daysLeft: 10
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Attorney Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your practice overview</p>
          </div>
          <Button className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            View All Alerts
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </CardTitle>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Cases */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Recent Cases
                </CardTitle>
                <CardDescription>Your most recently updated cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentCases.map((case_, index) => (
                  <div key={case_.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900">{case_.title}</h4>
                        <Badge variant={case_.priority === 'High' ? 'destructive' : 'secondary'}>
                          {case_.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{case_.type} • {case_.status}</p>
                      <p className="text-xs text-gray-500">Due: {case_.deadline}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Deadlines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Upcoming Deadlines
                </CardTitle>
                <CardDescription>Tasks requiring your attention</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{deadline.task}</h4>
                      <p className="text-sm text-gray-600">{deadline.case}</p>
                      <p className="text-xs text-gray-500">Due: {deadline.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={deadline.daysLeft <= 5 ? 'destructive' : 'secondary'}>
                        {deadline.daysLeft} days
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Case Progress Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Case Progress Overview
              </CardTitle>
              <CardDescription>Track your case milestones and completion rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Discovery Phase</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-gray-500">3 of 4 cases completed</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Filing & Motions</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-gray-500">6 of 10 filings submitted</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Client Communications</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <p className="text-xs text-gray-500">18 of 20 clients updated</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used tools and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                  <FileText className="h-6 w-6" />
                  <span className="text-sm">New Case</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  <span className="text-sm">Schedule Hearing</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                  <FileText className="h-6 w-6" />
                  <span className="text-sm">Upload Document</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                  <Users className="h-6 w-6" />
                  <span className="text-sm">Client Report</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Dashboard

