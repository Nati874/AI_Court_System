import React from 'react'
import { motion } from 'framer-motion'
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Calendar,
  FileText,
  Gavel,
  Flag,
  Filter,
  Search
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'

const TrackProgress = () => {
  const deadlines = [
    {
      id: 1,
      task: 'File Motion to Dismiss',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      dueDate: '2024-01-15',
      daysRemaining: 3,
      priority: 'High',
      status: 'Pending',
      type: 'Filing'
    },
    {
      id: 2,
      task: 'Discovery Response',
      case: 'ABC Corp Contract Dispute',
      caseId: 'CASE-2024-003',
      dueDate: '2024-01-18',
      daysRemaining: 6,
      priority: 'High',
      status: 'In Progress',
      type: 'Discovery'
    },
    {
      id: 3,
      task: 'Deposition Preparation',
      case: 'Estate of Williams',
      caseId: 'CASE-2024-002',
      dueDate: '2024-01-22',
      daysRemaining: 10,
      priority: 'Medium',
      status: 'Not Started',
      type: 'Preparation'
    }
  ]

  const courtOrders = [
    {
      id: 1,
      title: 'Order for Discovery',
      case: 'Smith vs. Johnson',
      judge: 'Hon. Sarah Mitchell',
      issueDate: '2024-01-05',
      dueDate: '2024-01-20',
      status: 'Active',
      compliance: 'On Track'
    },
    {
      id: 2,
      title: 'Temporary Restraining Order',
      case: 'ABC Corp Contract Dispute',
      judge: 'Hon. Robert Chen',
      issueDate: '2024-01-03',
      dueDate: '2024-01-17',
      status: 'Active',
      compliance: 'Urgent'
    }
  ]

  const milestones = [
    {
      id: 1,
      title: 'Case Filing',
      case: 'Smith vs. Johnson',
      completedDate: '2023-12-15',
      status: 'Completed',
      progress: 100
    },
    {
      id: 2,
      title: 'Initial Discovery',
      case: 'Smith vs. Johnson',
      targetDate: '2024-01-20',
      status: 'In Progress',
      progress: 75
    },
    {
      id: 3,
      title: 'Expert Witness Designation',
      case: 'ABC Corp Contract Dispute',
      targetDate: '2024-02-01',
      status: 'Upcoming',
      progress: 25
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      case 'Not Started': return 'bg-gray-100 text-gray-800'
      case 'Urgent': return 'bg-red-100 text-red-800'
      case 'On Track': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'destructive'
      case 'Medium': return 'default'
      case 'Low': return 'secondary'
      default: return 'secondary'
    }
  }

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
            <h1 className="text-3xl font-bold text-gray-900">Track Case Progress</h1>
            <p className="text-gray-600 mt-1">Monitor deadlines, court orders, and procedural milestones</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Calendar View
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search cases, deadlines, or court orders..."
            className="pl-10"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="deadlines" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="deadlines" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Monitor Deadlines
            </TabsTrigger>
            <TabsTrigger value="court-orders" className="flex items-center gap-2">
              <Gavel className="h-4 w-4" />
              Court Orders
            </TabsTrigger>
            <TabsTrigger value="milestones" className="flex items-center gap-2">
              <Flag className="h-4 w-4" />
              Procedural Milestones
            </TabsTrigger>
          </TabsList>

          {/* Deadlines Tab */}
          <TabsContent value="deadlines" className="space-y-4">
            <div className="grid gap-4">
              {deadlines.map((deadline, index) => (
                <motion.div
                  key={deadline.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{deadline.task}</h3>
                            <Badge variant={getPriorityColor(deadline.priority)}>
                              {deadline.priority}
                            </Badge>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(deadline.status)}`}>
                              {deadline.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-1">{deadline.case}</p>
                          <p className="text-sm text-gray-500">Case ID: {deadline.caseId}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Calendar className="h-4 w-4" />
                              Due: {deadline.dueDate}
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Clock className="h-4 w-4" />
                              <span className={deadline.daysRemaining <= 5 ? 'text-red-600 font-medium' : 'text-gray-600'}>
                                {deadline.daysRemaining} days remaining
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            Mark Complete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Court Orders Tab */}
          <TabsContent value="court-orders" className="space-y-4">
            <div className="grid gap-4">
              {courtOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{order.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.compliance)}`}>
                              {order.compliance}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-1">{order.case}</p>
                          <p className="text-sm text-gray-500 mb-3">Presiding Judge: {order.judge}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Calendar className="h-4 w-4" />
                              Issued: {order.issueDate}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Clock className="h-4 w-4" />
                              Due: {order.dueDate}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            View Order
                          </Button>
                          <Button size="sm" variant="outline">
                            Update Compliance
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Milestones Tab */}
          <TabsContent value="milestones" className="space-y-4">
            <div className="grid gap-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(milestone.status)}`}>
                              {milestone.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{milestone.case}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            {milestone.completedDate ? (
                              <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                Completed: {milestone.completedDate}
                              </div>
                            ) : (
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Target: {milestone.targetDate}
                              </div>
                            )}
                          </div>
                        </div>
                        <Button size="sm">
                          View Details
                        </Button>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{milestone.progress}%</span>
                        </div>
                        <Progress value={milestone.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

export default TrackProgress

