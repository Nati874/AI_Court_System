import React from 'react'
import { motion } from 'framer-motion'
import { 
  Eye, 
  FileText, 
  User, 
  Calendar,
  Clock,
  Filter,
  Search,
  Download,
  RefreshCw,
  Shield,
  Activity
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const AuditTrails = () => {
  const auditLogs = [
    {
      id: 1,
      timestamp: '2024-01-12 14:30:25',
      user: 'John Attorney',
      action: 'Document Upload',
      resource: 'Motion to Dismiss - Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Uploaded motion_to_dismiss.pdf (2.3MB)'
    },
    {
      id: 2,
      timestamp: '2024-01-12 13:45:12',
      user: 'John Attorney',
      action: 'Case Status Update',
      resource: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Changed status from "Filing" to "Discovery"'
    },
    {
      id: 3,
      timestamp: '2024-01-12 11:20:08',
      user: 'System',
      action: 'Deadline Reminder',
      resource: 'Discovery Response Due',
      caseId: 'CASE-2024-003',
      ipAddress: 'System',
      status: 'Automated',
      details: 'Email notification sent to john.attorney@lawfirm.com'
    },
    {
      id: 4,
      timestamp: '2024-01-12 10:15:33',
      user: 'John Attorney',
      action: 'Document Access',
      resource: 'Contract Agreement - ABC Corp',
      caseId: 'CASE-2024-003',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Viewed contract_agreement.pdf'
    },
    {
      id: 5,
      timestamp: '2024-01-12 09:30:45',
      user: 'Jane Paralegal',
      action: 'Calendar Update',
      resource: 'Deposition Schedule',
      caseId: 'CASE-2024-002',
      ipAddress: '192.168.1.105',
      status: 'Success',
      details: 'Scheduled deposition for 2024-01-25 at 2:00 PM'
    },
    {
      id: 6,
      timestamp: '2024-01-11 16:45:22',
      user: 'John Attorney',
      action: 'Client Communication',
      resource: 'Email to Client',
      caseId: 'CASE-2024-001',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Sent case update email to client@email.com'
    },
    {
      id: 7,
      timestamp: '2024-01-11 15:20:18',
      user: 'System',
      action: 'Security Alert',
      resource: 'Failed Login Attempt',
      caseId: 'N/A',
      ipAddress: '203.0.113.42',
      status: 'Failed',
      details: 'Multiple failed login attempts detected'
    },
    {
      id: 8,
      timestamp: '2024-01-11 14:10:55',
      user: 'John Attorney',
      action: 'Report Generation',
      resource: 'Monthly Case Summary',
      caseId: 'Multiple',
      ipAddress: '192.168.1.100',
      status: 'Success',
      details: 'Generated monthly report for December 2023'
    }
  ]

  const getActionIcon = (action) => {
    switch (action) {
      case 'Document Upload': return <FileText className="h-4 w-4" />
      case 'Document Access': return <Eye className="h-4 w-4" />
      case 'Case Status Update': return <RefreshCw className="h-4 w-4" />
      case 'Calendar Update': return <Calendar className="h-4 w-4" />
      case 'Client Communication': return <User className="h-4 w-4" />
      case 'Security Alert': return <Shield className="h-4 w-4" />
      case 'Report Generation': return <Activity className="h-4 w-4" />
      default: return <Activity className="h-4 w-4" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Success': return 'bg-green-100 text-green-800'
      case 'Failed': return 'bg-red-100 text-red-800'
      case 'Automated': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const stats = [
    {
      title: 'Total Activities',
      value: '1,247',
      change: '+12% from last week',
      icon: Activity,
      color: 'text-blue-600'
    },
    {
      title: 'Document Actions',
      value: '342',
      change: '+8% from last week',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      title: 'Security Events',
      value: '23',
      change: '-15% from last week',
      icon: Shield,
      color: 'text-orange-600'
    },
    {
      title: 'System Actions',
      value: '156',
      change: '+5% from last week',
      icon: RefreshCw,
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
            <h1 className="text-3xl font-bold text-gray-900">Audit Trails</h1>
            <p className="text-gray-600 mt-1">View and monitor all system activities and user actions</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Logs
            </Button>
            <Button>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
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

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter Audit Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search logs..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Action Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="document">Document Actions</SelectItem>
                  <SelectItem value="case">Case Updates</SelectItem>
                  <SelectItem value="security">Security Events</SelectItem>
                  <SelectItem value="system">System Actions</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="User" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="john">John Attorney</SelectItem>
                  <SelectItem value="jane">Jane Paralegal</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Audit Logs Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Activity Log
              </CardTitle>
              <CardDescription>Detailed record of all system activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Resource</TableHead>
                      <TableHead>Case ID</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLogs.map((log, index) => (
                      <motion.tr
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50"
                      >
                        <TableCell className="font-mono text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            {log.timestamp}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-400" />
                            {log.user}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getActionIcon(log.action)}
                            {log.action}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs truncate">
                          {log.resource}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{log.caseId}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                            {log.status}
                          </span>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-600">
                  Showing 1-8 of 1,247 entries
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AuditTrails

