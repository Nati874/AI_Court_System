import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  FileText, 
  DollarSign, 
  Calendar, 
  AlertTriangle, 
  TrendingUp, 
  Clock,
  CheckCircle,
  XCircle,
  Plus
} from 'lucide-react'

const Dashboard = () => {
  const activeCases = [
    {
      id: 'CASE-001',
      title: 'Smith vs. Johnson Contract Dispute',
      status: 'In Progress',
      priority: 'High',
      nextDeadline: '2024-08-20',
      progress: 65
    },
    {
      id: 'CASE-002',
      title: 'Property Settlement - Davis Estate',
      status: 'Discovery',
      priority: 'Medium',
      nextDeadline: '2024-08-25',
      progress: 40
    },
    {
      id: 'CASE-003',
      title: 'Employment Termination - Tech Corp',
      status: 'Filing',
      priority: 'Low',
      nextDeadline: '2024-09-01',
      progress: 20
    }
  ]

  const upcomingDeadlines = [
    {
      case: 'CASE-001',
      task: 'Submit discovery documents',
      date: '2024-08-20',
      daysLeft: 6,
      priority: 'High'
    },
    {
      case: 'CASE-002',
      task: 'Deposition scheduling',
      date: '2024-08-25',
      daysLeft: 11,
      priority: 'Medium'
    },
    {
      case: 'CASE-004',
      task: 'Court hearing preparation',
      date: '2024-08-30',
      daysLeft: 16,
      priority: 'High'
    }
  ]

  const billingData = {
    totalBilled: 45750,
    totalPaid: 32500,
    outstanding: 13250,
    thisMonth: 8900
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Discovery': return 'bg-purple-100 text-purple-800'
      case 'Filing': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's an overview of your legal cases.</p>
        </div>
        </motion.div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Case
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Billed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${billingData.totalBilled.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${billingData.outstanding.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              -5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Next in 6 days
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Cases */}
        <Card>
          <CardHeader>
            <CardTitle>Active Cases</CardTitle>
            <CardDescription>
              Track the progress of your ongoing legal cases
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeCases.map((case_) => (
              <div key={case_.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{case_.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">Case ID: {case_.id}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getPriorityColor(case_.priority)}>
                      {case_.priority}
                    </Badge>
                    <Badge className={getStatusColor(case_.status)}>
                      {case_.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>{case_.progress}%</span>
                  </div>
                  <Progress value={case_.progress} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">Next deadline:</span>
                  <span className="font-medium">{case_.nextDeadline}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>
              Important dates and tasks requiring attention
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{deadline.task}</h4>
                    <p className="text-xs text-gray-500">Case: {deadline.case}</p>
                  </div>
                  <Badge className={getPriorityColor(deadline.priority)}>
                    {deadline.priority}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-xs text-gray-600">
                    <Calendar className="h-3 w-3 mr-1" />
                    {deadline.date}
                  </div>
                  <div className="flex items-center text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    <span className={deadline.daysLeft <= 7 ? 'text-red-600 font-medium' : 'text-gray-600'}>
                      {deadline.daysLeft} days left
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Billing Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Analysis</CardTitle>
          <CardDescription>
            Financial overview and payment status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Paid</span>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">
                ${billingData.totalPaid.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">
                {((billingData.totalPaid / billingData.totalBilled) * 100).toFixed(1)}% of total billed
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Outstanding</span>
                <XCircle className="h-4 w-4 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-red-600">
                ${billingData.outstanding.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">
                {((billingData.outstanding / billingData.totalBilled) * 100).toFixed(1)}% of total billed
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">This Month</span>
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600">
                ${billingData.thisMonth.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">
                Current month billing
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
        </motion.div>
  )
}

export default Dashboard

