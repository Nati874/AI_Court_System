import React from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  FileText, 
  Users,
  Download,
  Calendar,
  Clock,
  TrendingUp,
  Filter,
  Search,
  Plus,
  Eye,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'

const Reporting = () => {
  const mandatoryReports = [
    {
      id: 1,
      title: 'Case Completion Report',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      dueDate: '2024-01-20',
      status: 'Pending',
      priority: 'High',
      description: 'Mandatory report required upon case completion',
      template: 'Standard Case Completion',
      estimatedTime: '30 minutes'
    },
    {
      id: 2,
      title: 'Monthly Activity Summary',
      case: 'All Cases',
      caseId: 'Multiple',
      dueDate: '2024-01-31',
      status: 'In Progress',
      priority: 'Medium',
      description: 'Monthly summary of all case activities and progress',
      template: 'Monthly Summary',
      estimatedTime: '45 minutes'
    },
    {
      id: 3,
      title: 'Client Billing Report',
      case: 'ABC Corp Contract Dispute',
      caseId: 'CASE-2024-003',
      dueDate: '2024-01-25',
      status: 'Draft',
      priority: 'Medium',
      description: 'Detailed billing report for client review',
      template: 'Client Billing',
      estimatedTime: '20 minutes'
    }
  ]

  const caseSummaries = [
    {
      id: 1,
      title: 'Smith vs. Johnson - Discovery Phase Summary',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      generatedDate: '2024-01-12',
      type: 'Phase Summary',
      pages: 8,
      status: 'Complete',
      downloadCount: 3
    },
    {
      id: 2,
      title: 'Estate of Williams - Probate Progress',
      case: 'Estate of Williams',
      caseId: 'CASE-2024-002',
      generatedDate: '2024-01-10',
      type: 'Progress Report',
      pages: 12,
      status: 'Complete',
      downloadCount: 1
    },
    {
      id: 3,
      title: 'ABC Corp - Contract Analysis Summary',
      case: 'ABC Corp Contract Dispute',
      caseId: 'CASE-2024-003',
      generatedDate: '2024-01-08',
      type: 'Analysis Report',
      pages: 15,
      status: 'Complete',
      downloadCount: 5
    }
  ]

  const clientReports = [
    {
      id: 1,
      title: 'Weekly Progress Update',
      client: 'Robert Smith',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      sentDate: '2024-01-12',
      type: 'Progress Update',
      status: 'Sent',
      readStatus: 'Read'
    },
    {
      id: 2,
      title: 'Discovery Phase Completion',
      client: 'ABC Corporation',
      case: 'ABC Corp Contract Dispute',
      caseId: 'CASE-2024-003',
      sentDate: '2024-01-11',
      type: 'Milestone Report',
      status: 'Sent',
      readStatus: 'Unread'
    },
    {
      id: 3,
      title: 'Estate Administration Update',
      client: 'Williams Family',
      case: 'Estate of Williams',
      caseId: 'CASE-2024-002',
      sentDate: '2024-01-09',
      type: 'Status Update',
      status: 'Draft',
      readStatus: 'N/A'
    }
  ]

  const exportOptions = [
    {
      name: 'Case Data Export',
      description: 'Export all case information and documents',
      format: 'CSV, Excel, PDF',
      lastExport: '2024-01-10',
      size: '2.3 MB'
    },
    {
      name: 'Time Tracking Export',
      description: 'Export billable hours and time entries',
      format: 'CSV, Excel',
      lastExport: '2024-01-08',
      size: '456 KB'
    },
    {
      name: 'Document Archive',
      description: 'Export all case documents and files',
      format: 'ZIP',
      lastExport: '2024-01-05',
      size: '125 MB'
    },
    {
      name: 'Client Communications',
      description: 'Export all client emails and messages',
      format: 'PDF, MBOX',
      lastExport: '2024-01-03',
      size: '8.7 MB'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Complete': return 'bg-green-100 text-green-800'
      case 'Sent': return 'bg-blue-100 text-blue-800'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800'
      case 'Draft': return 'bg-gray-100 text-gray-800'
      case 'Pending': return 'bg-orange-100 text-orange-800'
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Complete': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'Sent': return <Send className="h-4 w-4 text-blue-600" />
      case 'In Progress': return <Clock className="h-4 w-4 text-yellow-600" />
      case 'Draft': return <FileText className="h-4 w-4 text-gray-600" />
      case 'Pending': return <AlertCircle className="h-4 w-4 text-orange-600" />
      default: return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  const stats = [
    {
      title: 'Mandatory Reports',
      value: '3',
      change: '1 due this week',
      icon: AlertCircle,
      color: 'text-red-600'
    },
    {
      title: 'Case Summaries',
      value: '12',
      change: '+3 this month',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Client Reports',
      value: '8',
      change: '5 sent this week',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Data Exports',
      value: '4',
      change: 'Last: 2 days ago',
      icon: Download,
      color: 'text-purple-600'
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
            <h1 className="text-3xl font-bold text-gray-900">Reporting</h1>
            <p className="text-gray-600 mt-1">Generate reports, summaries, and export case data</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Report
            </Button>
          </div>
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

        {/* Tabs */}
        <Tabs defaultValue="mandatory" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="mandatory" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Mandatory Reports
            </TabsTrigger>
            <TabsTrigger value="summaries" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Case Summaries
            </TabsTrigger>
            <TabsTrigger value="client" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Client Reports
            </TabsTrigger>
            <TabsTrigger value="export" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Data
            </TabsTrigger>
          </TabsList>

          {/* Mandatory Reports Tab */}
          <TabsContent value="mandatory" className="space-y-4">
            <div className="grid gap-4">
              {mandatoryReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                            <Badge variant={getPriorityColor(report.priority)}>
                              {report.priority}
                            </Badge>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                              {report.status}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">{report.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Case: {report.case}</span>
                            <span>•</span>
                            <span>Template: {report.template}</span>
                            <span>•</span>
                            <span>Est. Time: {report.estimatedTime}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            Generate Report
                          </Button>
                          <Button size="sm" variant="outline">
                            View Template
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {report.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(report.status)}
                          <span className="text-sm text-gray-600">{report.status}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Case Summaries Tab */}
          <TabsContent value="summaries" className="space-y-4">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search summaries..."
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Report Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="phase">Phase Summary</SelectItem>
                      <SelectItem value="progress">Progress Report</SelectItem>
                      <SelectItem value="analysis">Analysis Report</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cases</SelectItem>
                      <SelectItem value="case-001">Smith vs. Johnson</SelectItem>
                      <SelectItem value="case-002">Estate of Williams</SelectItem>
                      <SelectItem value="case-003">ABC Corp Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {caseSummaries.map((summary, index) => (
                <motion.div
                  key={summary.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{summary.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(summary.status)}`}>
                              {summary.status}
                            </span>
                            <Badge variant="outline">{summary.type}</Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{summary.case}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Generated: {summary.generatedDate}</span>
                            <span>•</span>
                            <span>{summary.pages} pages</span>
                            <span>•</span>
                            <span>Downloaded {summary.downloadCount} times</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Client Reports Tab */}
          <TabsContent value="client" className="space-y-4">
            <div className="grid gap-4">
              {clientReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                              {report.status}
                            </span>
                            <Badge variant="outline">{report.type}</Badge>
                            {report.readStatus === 'Read' && (
                              <Badge variant="secondary" className="text-xs">
                                Read
                              </Badge>
                            )}
                            {report.readStatus === 'Unread' && (
                              <Badge variant="destructive" className="text-xs">
                                Unread
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-1">Client: {report.client}</p>
                          <p className="text-gray-600 mb-2">{report.case}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Case ID: {report.caseId}</span>
                            {report.sentDate && (
                              <>
                                <span>•</span>
                                <span>Sent: {report.sentDate}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          {report.status === 'Draft' ? (
                            <Button size="sm">
                              <Send className="h-4 w-4 mr-2" />
                              Send
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              <Send className="h-4 w-4 mr-2" />
                              Resend
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Export Data Tab */}
          <TabsContent value="export" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exportOptions.map((option, index) => (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.name}</h3>
                          <p className="text-gray-600 mb-3">{option.description}</p>
                          <div className="space-y-1 text-sm text-gray-500">
                            <p>Formats: {option.format}</p>
                            <p>Last Export: {option.lastExport}</p>
                            <p>Size: {option.size}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Export Now
                        </Button>
                        <Button variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Export Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Export Guidelines</CardTitle>
                <CardDescription>Important information about data exports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Data Security:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All exports are encrypted and password protected</li>
                      <li>• Export links expire after 24 hours</li>
                      <li>• Access is logged for audit purposes</li>
                      <li>• Sensitive data is automatically redacted</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Export Limits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Maximum 100 MB per export</li>
                      <li>• Up to 5 exports per day</li>
                      <li>• Large exports may take several minutes</li>
                      <li>• Email notification when ready</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

export default Reporting

