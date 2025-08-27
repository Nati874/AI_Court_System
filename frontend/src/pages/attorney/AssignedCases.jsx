import React from 'react'
import { motion } from 'framer-motion'
import { 
  FolderOpen, 
  Eye, 
  Calendar,
  Clock,
  User,
  FileText,
  AlertCircle,
  CheckCircle,
  Filter,
  Search,
  Plus,
  MoreVertical
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'

const AssignedCases = () => {
  const cases = [
    {
      id: 'CASE-2024-001',
      title: 'Smith vs. Johnson',
      type: 'Civil Litigation',
      client: 'Robert Smith',
      status: 'Discovery',
      priority: 'High',
      assignedDate: '2023-12-15',
      lastUpdate: '2024-01-12',
      nextDeadline: '2024-01-15',
      progress: 65,
      description: 'Personal injury case involving automobile accident',
      estimatedValue: '$250,000',
      attorney: 'John Attorney',
      paralegal: 'Jane Paralegal'
    },
    {
      id: 'CASE-2024-002',
      title: 'Estate of Williams',
      type: 'Probate',
      client: 'Williams Family',
      status: 'Filing',
      priority: 'Medium',
      assignedDate: '2024-01-05',
      lastUpdate: '2024-01-11',
      nextDeadline: '2024-01-22',
      progress: 30,
      description: 'Estate administration and will probate',
      estimatedValue: '$500,000',
      attorney: 'John Attorney',
      paralegal: 'Mike Assistant'
    },
    {
      id: 'CASE-2024-003',
      title: 'ABC Corp Contract Dispute',
      type: 'Commercial',
      client: 'ABC Corporation',
      status: 'Negotiation',
      priority: 'High',
      assignedDate: '2024-01-08',
      lastUpdate: '2024-01-12',
      nextDeadline: '2024-01-18',
      progress: 45,
      description: 'Breach of contract dispute over software licensing',
      estimatedValue: '$1,200,000',
      attorney: 'John Attorney',
      paralegal: 'Jane Paralegal'
    },
    {
      id: 'CASE-2024-004',
      title: 'Thompson Divorce',
      type: 'Family Law',
      client: 'Sarah Thompson',
      status: 'Mediation',
      priority: 'Medium',
      assignedDate: '2023-11-20',
      lastUpdate: '2024-01-10',
      nextDeadline: '2024-01-25',
      progress: 80,
      description: 'Divorce proceedings with child custody considerations',
      estimatedValue: 'N/A',
      attorney: 'John Attorney',
      paralegal: 'Jane Paralegal'
    },
    {
      id: 'CASE-2024-005',
      title: 'XYZ Inc. Merger',
      type: 'Corporate',
      client: 'XYZ Inc.',
      status: 'Due Diligence',
      priority: 'Low',
      assignedDate: '2024-01-10',
      lastUpdate: '2024-01-12',
      nextDeadline: '2024-02-01',
      progress: 20,
      description: 'Corporate merger and acquisition legal support',
      estimatedValue: '$50,000,000',
      attorney: 'John Attorney',
      paralegal: 'Mike Assistant'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Discovery': return 'bg-blue-100 text-blue-800'
      case 'Filing': return 'bg-yellow-100 text-yellow-800'
      case 'Negotiation': return 'bg-purple-100 text-purple-800'
      case 'Mediation': return 'bg-green-100 text-green-800'
      case 'Due Diligence': return 'bg-orange-100 text-orange-800'
      case 'Completed': return 'bg-green-100 text-green-800'
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

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 50) return 'bg-blue-500'
    if (progress >= 25) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const stats = [
    {
      title: 'Total Cases',
      value: '12',
      change: '+2 this month',
      icon: FolderOpen,
      color: 'text-blue-600'
    },
    {
      title: 'Active Cases',
      value: '8',
      change: '4 in discovery',
      icon: Eye,
      color: 'text-green-600'
    },
    {
      title: 'Pending Deadlines',
      value: '5',
      change: '2 due this week',
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      title: 'Completed This Month',
      value: '3',
      change: '+1 from last month',
      icon: CheckCircle,
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
            <h1 className="text-3xl font-bold text-gray-900">Assigned Cases</h1>
            <p className="text-gray-600 mt-1">View and manage your assigned legal cases</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Case
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

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search cases..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Case Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="civil">Civil Litigation</SelectItem>
                  <SelectItem value="criminal">Criminal</SelectItem>
                  <SelectItem value="family">Family Law</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="probate">Probate</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="discovery">Discovery</SelectItem>
                  <SelectItem value="filing">Filing</SelectItem>
                  <SelectItem value="negotiation">Negotiation</SelectItem>
                  <SelectItem value="mediation">Mediation</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Cases Grid */}
        <div className="grid gap-6">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{case_.title}</h3>
                        <Badge variant={getPriorityColor(case_.priority)}>
                          {case_.priority}
                        </Badge>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                          {case_.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{case_.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Case ID: {case_.id}</span>
                        <span>•</span>
                        <span>{case_.type}</span>
                        <span>•</span>
                        <span>Client: {case_.client}</span>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Case</DropdownMenuItem>
                        <DropdownMenuItem>Update Status</DropdownMenuItem>
                        <DropdownMenuItem>Generate Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Case Progress</span>
                      <span className="font-medium">{case_.progress}%</span>
                    </div>
                    <Progress value={case_.progress} className="h-2" />
                  </div>

                  {/* Case Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Assigned Date</p>
                      <p className="text-sm font-medium">{case_.assignedDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Last Update</p>
                      <p className="text-sm font-medium">{case_.lastUpdate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Next Deadline</p>
                      <p className="text-sm font-medium text-orange-600">{case_.nextDeadline}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Est. Value</p>
                      <p className="text-sm font-medium">{case_.estimatedValue}</p>
                    </div>
                  </div>

                  {/* Team Information */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>Attorney: {case_.attorney}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>Paralegal: {case_.paralegal}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule
                      </Button>
                      <Button size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing 1-5 of 12 cases
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AssignedCases

