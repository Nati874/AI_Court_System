import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Shield, 
  FileText, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Download,
  Eye,
  Bell,
  XCircle,
  Info
} from 'lucide-react'

const Compliance = () => {
  const [checkedItems, setCheckedItems] = useState({})

  const courtOrders = [
    {
      id: 1,
      title: 'Discovery Order - Document Production',
      case: 'CASE-001',
      issuedDate: '2024-08-10',
      dueDate: '2024-08-25',
      status: 'pending',
      priority: 'high',
      description: 'Produce all documents related to the contract negotiations between parties.',
      requirements: [
        'All email communications from Jan 2024 to present',
        'Contract drafts and revisions',
        'Meeting notes and minutes',
        'Financial records related to the agreement'
      ],
      acknowledged: false
    },
    {
      id: 2,
      title: 'Temporary Restraining Order',
      case: 'CASE-002',
      issuedDate: '2024-08-05',
      dueDate: '2024-08-20',
      status: 'acknowledged',
      priority: 'urgent',
      description: 'Restraining order preventing disposal of property assets.',
      requirements: [
        'Cease all property transactions',
        'Maintain current asset status',
        'Provide weekly asset reports'
      ],
      acknowledged: true
    },
    {
      id: 3,
      title: 'Scheduling Order - Case Management',
      case: 'CASE-003',
      issuedDate: '2024-07-30',
      dueDate: '2024-09-15',
      status: 'in-progress',
      priority: 'medium',
      description: 'Case management scheduling order with discovery deadlines.',
      requirements: [
        'Complete fact discovery by September 1',
        'Expert witness disclosures by September 10',
        'Pre-trial motions by September 15'
      ],
      acknowledged: true
    }
  ]

  const deadlines = [
    {
      id: 1,
      title: 'Discovery Document Production',
      case: 'CASE-001',
      dueDate: '2024-08-25',
      daysLeft: 11,
      type: 'court-order',
      status: 'pending',
      description: 'Submit all requested documents per court order'
    },
    {
      id: 2,
      title: 'Motion to Dismiss Filing',
      case: 'CASE-002',
      dueDate: '2024-08-22',
      daysLeft: 8,
      type: 'filing',
      status: 'in-progress',
      description: 'File motion to dismiss with supporting briefs'
    },
    {
      id: 3,
      title: 'Expert Witness Disclosure',
      case: 'CASE-003',
      dueDate: '2024-09-10',
      daysLeft: 27,
      type: 'disclosure',
      status: 'pending',
      description: 'Disclose expert witnesses and their qualifications'
    },
    {
      id: 4,
      title: 'Settlement Conference Preparation',
      case: 'CASE-001',
      dueDate: '2024-08-28',
      daysLeft: 14,
      type: 'preparation',
      status: 'pending',
      description: 'Prepare settlement position and supporting documents'
    }
  ]

  const proceduralRequirements = [
    {
      id: 1,
      category: 'Filing Requirements',
      items: [
        { id: 'fr1', text: 'All pleadings must be filed electronically', completed: true },
        { id: 'fr2', text: 'Include certificate of service with all filings', completed: true },
        { id: 'fr3', text: 'Use approved formatting for all documents', completed: false },
        { id: 'fr4', text: 'Submit courtesy copies for complex motions', completed: false }
      ]
    },
    {
      id: 2,
      category: 'Discovery Compliance',
      items: [
        { id: 'dc1', text: 'Respond to discovery requests within 30 days', completed: true },
        { id: 'dc2', text: 'Provide privilege log for withheld documents', completed: false },
        { id: 'dc3', text: 'Meet and confer before filing discovery motions', completed: true },
        { id: 'dc4', text: 'Produce documents in native format when requested', completed: false }
      ]
    },
    {
      id: 3,
      category: 'Court Appearance',
      items: [
        { id: 'ca1', text: 'Arrive 15 minutes before scheduled hearing', completed: true },
        { id: 'ca2', text: 'Bring all relevant case files and exhibits', completed: true },
        { id: 'ca3', text: 'Dress appropriately for court proceedings', completed: true },
        { id: 'ca4', text: 'Have backup copies of all documents', completed: false }
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'acknowledged': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-purple-100 text-purple-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'overdue': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getDeadlineUrgency = (daysLeft) => {
    if (daysLeft < 0) return 'overdue'
    if (daysLeft <= 3) return 'urgent'
    if (daysLeft <= 7) return 'high'
    if (daysLeft <= 14) return 'medium'
    return 'low'
  }

  const handleCheckboxChange = (itemId, checked) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: checked
    }))
  }

  const calculateCategoryProgress = (items) => {
    const completed = items.filter(item => 
      checkedItems[item.id] !== undefined ? checkedItems[item.id] : item.completed
    ).length
    return (completed / items.length) * 100
  }

  return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Compliance & Documentation</h1>
        <p className="text-gray-600 mt-1">Review court orders, track deadlines, and ensure procedural compliance.</p>
      </div>
      </motion.div>

      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList>
          <TabsTrigger value="orders">Court Orders</TabsTrigger>
          <TabsTrigger value="deadlines">Deadlines</TabsTrigger>
          <TabsTrigger value="procedures">Procedural Requirements</TabsTrigger>
        </TabsList>

        {/* Court Orders Tab */}
        <TabsContent value="orders">
          <div className="space-y-6">
            {courtOrders.map(order => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-lg">{order.title}</CardTitle>
                        <Badge className={getPriorityColor(order.priority)}>
                          {order.priority}
                        </Badge>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <CardDescription>
                        Case: {order.case} | Issued: {order.issuedDate} | Due: {order.dueDate}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Order Description</h4>
                    <p className="text-sm text-gray-600">{order.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {order.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      {order.acknowledged ? (
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-sm">Acknowledged</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 text-orange-600">
                          <AlertTriangle className="h-4 w-4" />
                          <span className="text-sm">Acknowledgment Required</span>
                        </div>
                      )}
                    </div>
                    
                    {!order.acknowledged && (
                      <Button>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Acknowledge Order
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Deadlines Tab */}
        <TabsContent value="deadlines">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>
                Important dates and deadlines requiring attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deadlines.map(deadline => {
                  const urgency = getDeadlineUrgency(deadline.daysLeft)
                  return (
                    <div key={deadline.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold">{deadline.title}</h4>
                            <Badge className={getPriorityColor(urgency)}>
                              {deadline.daysLeft < 0 ? 'Overdue' : `${deadline.daysLeft} days left`}
                            </Badge>
                            <Badge className={getStatusColor(deadline.status)}>
                              {deadline.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{deadline.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>Case: {deadline.case}</span>
                            <span>Due: {deadline.dueDate}</span>
                            <span>Type: {deadline.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {deadline.daysLeft <= 7 && (
                            <Bell className="h-4 w-4 text-orange-500" />
                          )}
                          {deadline.daysLeft < 0 ? (
                            <XCircle className="h-5 w-5 text-red-500" />
                          ) : deadline.daysLeft <= 3 ? (
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                          ) : (
                            <Clock className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4 mr-2" />
                          Set Reminder
                        </Button>
                        <Button size="sm">
                          Mark Complete
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Procedural Requirements Tab */}
        <TabsContent value="procedures">
          <div className="space-y-6">
            {proceduralRequirements.map(category => {
              const progress = calculateCategoryProgress(category.items)
              return (
                <Card key={category.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
                        <div className="w-24">
                          <Progress value={progress} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map(item => {
                        const isChecked = checkedItems[item.id] !== undefined 
                          ? checkedItems[item.id] 
                          : item.completed
                        
                        return (
                          <div key={item.id} className="flex items-center space-x-3">
                            <Checkbox
                              id={item.id}
                              checked={isChecked}
                              onCheckedChange={(checked) => handleCheckboxChange(item.id, checked)}
                            />
                            <label
                              htmlFor={item.id}
                              className={`text-sm flex-1 cursor-pointer ${
                                isChecked ? 'line-through text-gray-500' : 'text-gray-900'
                              }`}
                            >
                              {item.text}
                            </label>
                            {isChecked && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="h-5 w-5 text-blue-500" />
                  <span>Compliance Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Always review local court rules before filing any documents</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Keep detailed records of all compliance activities and deadlines</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Set calendar reminders well in advance of important deadlines</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Maintain regular communication with court clerks and opposing counsel</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Document all attempts to comply with court orders and deadlines</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </motion.div>
  )
}

export default Compliance

