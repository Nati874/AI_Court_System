import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit, 
  Trash2,
  Calendar,
  User,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const CaseManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterType, setFilterType] = useState('all')
  const [isNewCaseOpen, setIsNewCaseOpen] = useState(false)

  const [newCase, setNewCase] = useState({
    title: '',
    type: '',
    plaintiff: '',
    defendant: '',
    description: '',
    priority: 'medium'
  })

  // Sample case data
  const cases = [
    {
      id: 'CV-2024-001',
      title: 'Smith vs. Johnson',
      type: 'Civil',
      status: 'active',
      priority: 'high',
      plaintiff: 'John Smith',
      defendant: 'Jane Johnson',
      judge: 'Hon. Robert Wilson',
      nextHearing: '2024-01-15',
      createdDate: '2024-01-01',
      description: 'Contract dispute regarding property sale agreement'
    },
    {
      id: 'CR-2024-045',
      title: 'State vs. Williams',
      type: 'Criminal',
      status: 'pending',
      priority: 'high',
      plaintiff: 'State of California',
      defendant: 'Michael Williams',
      judge: 'Hon. Sarah Davis',
      nextHearing: '2024-01-18',
      createdDate: '2024-01-03',
      description: 'Theft charges with multiple counts'
    },
    {
      id: 'FM-2024-023',
      title: 'Brown Custody Case',
      type: 'Family',
      status: 'resolved',
      priority: 'medium',
      plaintiff: 'Lisa Brown',
      defendant: 'Mark Brown',
      judge: 'Hon. Jennifer Lee',
      nextHearing: null,
      createdDate: '2023-12-15',
      description: 'Child custody and support arrangement'
    },
    {
      id: 'TR-2024-067',
      title: 'Traffic Violation - Garcia',
      type: 'Traffic',
      status: 'active',
      priority: 'low',
      plaintiff: 'State of California',
      defendant: 'Carlos Garcia',
      judge: 'Hon. David Kim',
      nextHearing: '2024-01-20',
      createdDate: '2024-01-05',
      description: 'Speeding violation and reckless driving'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-orange-100 text-orange-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredCases = cases.filter(caseItem => {
    const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || caseItem.status === filterStatus
    const matchesType = filterType === 'all' || caseItem.type === filterType
    
    return matchesSearch && matchesStatus && matchesType
  })

  const handleNewCaseSubmit = (e) => {
    e.preventDefault()
    // Handle new case creation
    console.log('New case:', newCase)
    setIsNewCaseOpen(false)
    setNewCase({
      title: '',
      type: '',
      plaintiff: '',
      defendant: '',
      description: '',
      priority: 'medium'
    })
  }

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
          <h1 className="text-3xl font-bold text-foreground">Case Management</h1>
          <p className="text-muted-foreground">Manage and track all court cases</p>
        </div>
        
        <Dialog open={isNewCaseOpen} onOpenChange={setIsNewCaseOpen}>
          <DialogTrigger asChild>
            <Button className="hover-lift">
              <Plus className="h-4 w-4 mr-2" />
              New Case
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Case</DialogTitle>
              <DialogDescription>
                Enter the details for the new court case
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleNewCaseSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Case Title</Label>
                  <Input
                    id="title"
                    value={newCase.title}
                    onChange={(e) => setNewCase({...newCase, title: e.target.value})}
                    placeholder="Enter case title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="type">Case Type</Label>
                  <Select onValueChange={(value) => setNewCase({...newCase, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="civil">Civil</SelectItem>
                      <SelectItem value="criminal">Criminal</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="traffic">Traffic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="plaintiff">Plaintiff</Label>
                  <Input
                    id="plaintiff"
                    value={newCase.plaintiff}
                    onChange={(e) => setNewCase({...newCase, plaintiff: e.target.value})}
                    placeholder="Enter plaintiff name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="defendant">Defendant</Label>
                  <Input
                    id="defendant"
                    value={newCase.defendant}
                    onChange={(e) => setNewCase({...newCase, defendant: e.target.value})}
                    placeholder="Enter defendant name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select onValueChange={(value) => setNewCase({...newCase, priority: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newCase.description}
                  onChange={(e) => setNewCase({...newCase, description: e.target.value})}
                  placeholder="Enter case description"
                  rows={3}
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsNewCaseOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create Case</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search cases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Civil">Civil</SelectItem>
            <SelectItem value="Criminal">Criminal</SelectItem>
            <SelectItem value="Family">Family</SelectItem>
            <SelectItem value="Traffic">Traffic</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCases.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover-lift h-full">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {caseItem.id}
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Case
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Case
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="flex gap-2 mt-2">
                  <Badge className={getStatusColor(caseItem.status)}>
                    {caseItem.status}
                  </Badge>
                  <Badge className={getPriorityColor(caseItem.priority)}>
                    {caseItem.priority}
                  </Badge>
                  <Badge variant="outline">{caseItem.type}</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Plaintiff:</span>
                    <span className="ml-1 font-medium">{caseItem.plaintiff}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Defendant:</span>
                    <span className="ml-1 font-medium">{caseItem.defendant}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">Judge:</span>
                    <span className="ml-1 font-medium">{caseItem.judge}</span>
                  </div>
                </div>
                
                {caseItem.nextHearing && (
                  <div className="flex items-center text-sm p-2 bg-accent/50 rounded-lg">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-muted-foreground">Next Hearing:</span>
                    <span className="ml-1 font-medium">{caseItem.nextHearing}</span>
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {caseItem.description}
                </p>
                
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-xs text-muted-foreground">
                    Created: {caseItem.createdDate}
                  </span>
                  <Button size="sm" variant="outline" className="hover-lift">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12"
        >
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No cases found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search criteria or create a new case.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default CaseManagement

