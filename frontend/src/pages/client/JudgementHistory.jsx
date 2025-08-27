import React, { useState } from 'react'
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
  Search,
  Download,
  Eye,
  Scale,
  User,
  Building
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'

const JudgementHistory = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterYear, setFilterYear] = useState('all')
  const [selectedJudgment, setSelectedJudgment] = useState(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  // Sample judgment history data
  const judgments = [
    {
      id: 'JDG-2024-001',
      caseId: 'CV-2024-001',
      caseTitle: 'Smith vs. Johnson Property Dispute',
      judgmentDate: '2024-01-12',
      judge: 'Hon. Robert Wilson',
      court: 'Superior Court of California',
      outcome: 'Favorable',
      type: 'Final Judgment',
      amount: '$45,000',
      summary: 'Court ruled in favor of plaintiff regarding property sale agreement breach',
      status: 'Final',
      appealDeadline: '2024-02-12',
      documents: ['Final Judgment', 'Court Order', 'Settlement Agreement'],
      keyPoints: [
        'Defendant breached contract terms',
        'Plaintiff entitled to damages',
        'Court costs awarded to plaintiff'
      ]
    },
    {
      id: 'JDG-2023-045',
      caseId: 'FM-2023-023',
      caseTitle: 'Brown Custody Case',
      judgmentDate: '2023-12-15',
      judge: 'Hon. Jennifer Lee',
      court: 'Family Court of California',
      outcome: 'Partial',
      type: 'Custody Order',
      amount: '$1,200/month',
      summary: 'Joint custody awarded with primary residence with mother',
      status: 'Final',
      appealDeadline: '2024-01-15',
      documents: ['Custody Order', 'Parenting Plan', 'Support Order'],
      keyPoints: [
        'Joint legal custody granted',
        'Primary physical custody to mother',
        'Child support established at $1,200/month'
      ]
    },
    {
      id: 'JDG-2023-067',
      caseId: 'TR-2023-067',
      caseTitle: 'Traffic Violation Appeal',
      judgmentDate: '2023-11-20',
      judge: 'Hon. David Kim',
      court: 'Municipal Court',
      outcome: 'Favorable',
      type: 'Appeal Decision',
      amount: 'Fine Reduced to $150',
      summary: 'Original speeding violation fine reduced due to mitigating circumstances',
      status: 'Final',
      appealDeadline: null,
      documents: ['Appeal Decision', 'Revised Citation'],
      keyPoints: [
        'Original fine of $500 reduced to $150',
        'No points on driving record',
        'Traffic school completion required'
      ]
    },
    {
      id: 'JDG-2023-089',
      caseId: 'CR-2023-089',
      caseTitle: 'State vs. Williams',
      judgmentDate: '2023-10-05',
      judge: 'Hon. Sarah Davis',
      court: 'Criminal Court',
      outcome: 'Unfavorable',
      type: 'Criminal Sentence',
      amount: '6 months probation',
      summary: 'Defendant found guilty of misdemeanor theft, sentenced to probation',
      status: 'Under Appeal',
      appealDeadline: '2023-11-05',
      documents: ['Criminal Judgment', 'Probation Order', 'Appeal Notice'],
      keyPoints: [
        'Guilty verdict on theft charges',
        '6 months supervised probation',
        'Community service required',
        'Appeal filed within deadline'
      ]
    }
  ]

  const getOutcomeColor = (outcome) => {
    switch (outcome) {
      case 'Favorable': return 'bg-green-100 text-green-800'
      case 'Unfavorable': return 'bg-red-100 text-red-800'
      case 'Partial': return 'bg-yellow-100 text-yellow-800'
      case 'Settled': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Final': return 'bg-gray-100 text-gray-800'
      case 'Under Appeal': return 'bg-orange-100 text-orange-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredJudgments = judgments.filter(judgment => {
    const matchesSearch = judgment.caseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         judgment.caseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         judgment.judge.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || judgment.status === filterStatus
    const matchesYear = filterYear === 'all' || judgment.judgmentDate.startsWith(filterYear)
    
    return matchesSearch && matchesStatus && matchesYear
  })

  const handleViewJudgment = (judgment) => {
    setSelectedJudgment(judgment)
    setIsDetailsOpen(true)
  }

  // Statistics for dashboard
  const totalJudgments = judgments.length
  const favorableJudgments = judgments.filter(j => j.outcome === 'Favorable').length
  const unfavorableJudgments = judgments.filter(j => j.outcome === 'Unfavorable').length
  const pendingAppeals = judgments.filter(j => j.status === 'Under Appeal').length

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
            <h1 className="text-3xl font-bold text-foreground">Judgment History</h1>
            <p className="text-muted-foreground">Review past court decisions and outcomes</p>
          </div>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Judgments</p>
                  <p className="text-2xl font-bold">{totalJudgments}</p>
                </div>
                <Scale className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Favorable</p>
                  <p className="text-2xl font-bold text-green-600">{favorableJudgments}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Unfavorable</p>
                  <p className="text-2xl font-bold text-red-600">{unfavorableJudgments}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Under Appeal</p>
                  <p className="text-2xl font-bold text-orange-600">{pendingAppeals}</p>
                </div>
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search judgments, cases, or judges..."
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
              <SelectItem value="Final">Final</SelectItem>
              <SelectItem value="Under Appeal">Under Appeal</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterYear} onValueChange={setFilterYear}>
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Judgments Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Judgment Records</CardTitle>
              <CardDescription>Complete history of court decisions and outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredJudgments.length === 0 ? (
                <div className="text-center py-12">
                  <Scale className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">No judgments found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria.
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Case</TableHead>
                      <TableHead>Judgment Date</TableHead>
                      <TableHead>Judge</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Outcome</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount/Result</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredJudgments.map((judgment) => (
                      <TableRow key={judgment.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{judgment.caseTitle}</div>
                            <div className="text-sm text-muted-foreground">{judgment.caseId}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{judgment.judgmentDate}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{judgment.judge}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{judgment.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getOutcomeColor(judgment.outcome)}>
                            {judgment.outcome}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(judgment.status)}>
                            {judgment.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">
                          {judgment.amount}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewJudgment(judgment)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Judgment Details Dialog */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedJudgment && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <span>{selectedJudgment.caseTitle}</span>
                    <Badge className={getOutcomeColor(selectedJudgment.outcome)}>
                      {selectedJudgment.outcome}
                    </Badge>
                  </DialogTitle>
                  <DialogDescription>
                    Judgment ID: {selectedJudgment.id} | Case ID: {selectedJudgment.caseId}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Court Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Court:</span>
                          <span>{selectedJudgment.court}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Judge:</span>
                          <span>{selectedJudgment.judge}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Judgment Date:</span>
                          <span>{selectedJudgment.judgmentDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <span>{selectedJudgment.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge className={getStatusColor(selectedJudgment.status)}>
                            {selectedJudgment.status}
                          </Badge>
                        </div>
                        {selectedJudgment.appealDeadline && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Appeal Deadline:</span>
                            <span>{selectedJudgment.appealDeadline}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Financial Impact</h4>
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-lg font-semibold">{selectedJudgment.amount}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Points</h4>
                      <ul className="space-y-1 text-sm">
                        {selectedJudgment.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Documents</h4>
                      <div className="space-y-2">
                        {selectedJudgment.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <div className="flex items-center space-x-2">
                              <FileText className="h-4 w-4" />
                              <span className="text-sm">{doc}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Judgment Summary</h4>
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                    {selectedJudgment.summary}
                  </p>
                </div>
                
                <div className="flex justify-end space-x-2 mt-6">
                  <Button variant="outline" onClick={() => setIsDetailsOpen(false)}>
                    Close
                  </Button>
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Judgment
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  )
}

export default JudgementHistory

