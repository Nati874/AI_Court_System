import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, PlusCircle, Edit, Archive, UserPlus, Clock } from 'lucide-react';
import { 
  Plus, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Trash2,
  Calendar,
  User,
  FileText,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import { CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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

      {/* Create/Add Cases Section */}
                <div className="grid grid-cols-2 gap-4">
      {/* Update Cases Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Edit className="h-5 w-5" /><span>Update Existing Cases</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input placeholder="Search by Case ID or Title" className="flex-1" />
            <Button><Search className="h-4 w-4" /></Button>
          </div>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Case to Update" /></SelectTrigger>
            <SelectContent>
              {cases.map(c => <SelectItem key={c.id} value={c.id}>{c.title} ({c.id})</SelectItem>)}
            </SelectContent>
          </Select>
          <Input placeholder="New Status" />
          <Button className="w-full">Update Case Status</Button>
        </CardContent>
      </Card>

      {/* Archive Records Section */}
      <div className="flex items-center">
        <div className='w-full'>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Archive className="h-5 w-5" /><span>Archive Records</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Case to Archive" /></SelectTrigger>
            <SelectContent>
              {cases.filter(c => c.status !== 'Archived').map(c => <SelectItem key={c.id} value={c.id}>{c.title} ({c.id})</SelectItem>)}
            </SelectContent>
          </Select>
          <Button variant="destructive" className="w-full bg-orange-800">Archive Selected Case</Button>
        </CardContent>
        </div>
      </div>
      </div>

      {/* Assign Cases & Monitor Progress */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><UserPlus className="h-5 w-5" /><span>Assign Cases & Monitor Progress</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Case" /></SelectTrigger>
            <SelectContent>
              {cases.map(c => <SelectItem key={c.id} value={c.id}>{c.title} ({c.id})</SelectItem>)}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Assign to Judge/Attorney" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="judge_smith">Judge Smith</SelectItem>
              <SelectItem value="attorney_jones">Attorney Jones</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Assign Case</Button>

          <h3 className="text-xl font-semibold mt-6 mb-4">Case Progress & Deadlines</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cases.map(c => (
                <TableRow key={c.id}>
                  <TableCell>{c.id}</TableCell>
                  <TableCell>{c.title}</TableCell>
                  <TableCell>{c.status}</TableCell>
                  <TableCell>{c.assignedTo}</TableCell>
                  <TableCell className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>{c.deadline}</span></TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">View Progress</Button>
                    <Button variant="destructive" size="sm"><Archive className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default CaseManagement