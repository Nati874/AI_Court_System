import React from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  FileText, 
  Image,
  File,
  Send,
  Eye,
  Edit,
  Trash2,
  Download,
  Filter,
  Search,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'

const DocumentHandling = () => {
  const documents = [
    {
      id: 1,
      name: 'Motion_to_Dismiss.pdf',
      type: 'Pleading',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      uploadDate: '2024-01-12',
      size: '2.3 MB',
      status: 'Submitted',
      submittedDate: '2024-01-12',
      format: 'PDF',
      uploadedBy: 'John Attorney'
    },
    {
      id: 2,
      name: 'Contract_Agreement.pdf',
      type: 'Evidence',
      case: 'ABC Corp Contract Dispute',
      caseId: 'CASE-2024-003',
      uploadDate: '2024-01-11',
      size: '1.8 MB',
      status: 'Uploaded',
      submittedDate: null,
      format: 'PDF',
      uploadedBy: 'Jane Paralegal'
    },
    {
      id: 3,
      name: 'Witness_Statement.docx',
      type: 'Evidence',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      uploadDate: '2024-01-10',
      size: '456 KB',
      status: 'Draft',
      submittedDate: null,
      format: 'DOCX',
      uploadedBy: 'John Attorney'
    },
    {
      id: 4,
      name: 'Medical_Records.pdf',
      type: 'Evidence',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      uploadDate: '2024-01-09',
      size: '5.2 MB',
      status: 'Submitted',
      submittedDate: '2024-01-10',
      format: 'PDF',
      uploadedBy: 'Jane Paralegal'
    },
    {
      id: 5,
      name: 'Discovery_Response.pdf',
      type: 'Motion',
      case: 'ABC Corp Contract Dispute',
      caseId: 'CASE-2024-003',
      uploadDate: '2024-01-08',
      size: '3.1 MB',
      status: 'In Review',
      submittedDate: null,
      format: 'PDF',
      uploadedBy: 'John Attorney'
    },
    {
      id: 6,
      name: 'Accident_Photos.zip',
      type: 'Evidence',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      uploadDate: '2024-01-07',
      size: '12.4 MB',
      status: 'Submitted',
      submittedDate: '2024-01-08',
      format: 'ZIP',
      uploadedBy: 'John Attorney'
    }
  ]

  const uploadCategories = [
    {
      name: 'Pleadings',
      description: 'Legal documents filed with the court',
      icon: FileText,
      acceptedFormats: ['PDF', 'DOC', 'DOCX'],
      maxSize: '10 MB',
      count: 8
    },
    {
      name: 'Motions',
      description: 'Formal requests to the court',
      icon: FileText,
      acceptedFormats: ['PDF', 'DOC', 'DOCX'],
      maxSize: '10 MB',
      count: 5
    },
    {
      name: 'Evidence',
      description: 'Supporting documents and materials',
      icon: File,
      acceptedFormats: ['PDF', 'DOC', 'DOCX', 'JPG', 'PNG', 'ZIP'],
      maxSize: '50 MB',
      count: 15
    },
    {
      name: 'Other Filings',
      description: 'Additional court documents',
      icon: FileText,
      acceptedFormats: ['PDF', 'DOC', 'DOCX', 'XLS', 'XLSX'],
      maxSize: '25 MB',
      count: 3
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Submitted': return 'bg-green-100 text-green-800'
      case 'Uploaded': return 'bg-blue-100 text-blue-800'
      case 'Draft': return 'bg-yellow-100 text-yellow-800'
      case 'In Review': return 'bg-purple-100 text-purple-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Submitted': return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'Uploaded': return <Upload className="h-4 w-4 text-blue-600" />
      case 'Draft': return <Edit className="h-4 w-4 text-yellow-600" />
      case 'In Review': return <Clock className="h-4 w-4 text-purple-600" />
      case 'Rejected': return <AlertCircle className="h-4 w-4 text-red-600" />
      default: return <File className="h-4 w-4 text-gray-600" />
    }
  }

  const getFileIcon = (format) => {
    switch (format.toLowerCase()) {
      case 'pdf': return <FileText className="h-5 w-5 text-red-500" />
      case 'doc':
      case 'docx': return <FileText className="h-5 w-5 text-blue-500" />
      case 'jpg':
      case 'png': return <Image className="h-5 w-5 text-green-500" />
      case 'zip': return <File className="h-5 w-5 text-purple-500" />
      default: return <File className="h-5 w-5 text-gray-500" />
    }
  }

  const stats = [
    {
      title: 'Total Documents',
      value: '31',
      change: '+6 this week',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Submitted',
      value: '18',
      change: '3 pending review',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'In Progress',
      value: '8',
      change: '5 drafts, 3 in review',
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      title: 'Storage Used',
      value: '2.4 GB',
      change: 'of 10 GB limit',
      icon: Upload,
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
            <h1 className="text-3xl font-bold text-gray-900">Document Handling</h1>
            <p className="text-gray-600 mt-1">Upload, submit, and manage legal documents</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Upload Document
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

        {/* Storage Usage */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Storage Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Used: 2.4 GB</span>
                <span>Available: 7.6 GB</span>
              </div>
              <Progress value={24} className="h-2" />
              <p className="text-xs text-gray-500">24% of 10 GB storage limit used</p>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Documents
            </TabsTrigger>
            <TabsTrigger value="submit" className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Submit Documents
            </TabsTrigger>
            <TabsTrigger value="manage" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Manage Files
            </TabsTrigger>
          </TabsList>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            {/* Upload Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {uploadCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                        <div className="space-y-2 text-xs text-gray-500">
                          <p>Formats: {category.acceptedFormats.join(', ')}</p>
                          <p>Max size: {category.maxSize}</p>
                          <Badge variant="secondary">{category.count} files</Badge>
                        </div>
                        <Button className="w-full mt-4" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload {category.name}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Drag & Drop Upload Area */}
            <Card>
              <CardContent className="p-8">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Drag and drop files here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    or click to browse and select files from your computer
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Select Files
                  </Button>
                  <div className="mt-4 text-xs text-gray-500">
                    <p>Supported formats: PDF, DOC, DOCX, JPG, PNG, ZIP</p>
                    <p>Maximum file size: 50 MB per file</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Submit Tab */}
          <TabsContent value="submit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Ready to Submit</CardTitle>
                <CardDescription>Documents uploaded and ready for court submission</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.filter(doc => doc.status === 'Uploaded' || doc.status === 'In Review').map((doc, index) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getFileIcon(doc.format)}
                        <div>
                          <h4 className="font-medium text-gray-900">{doc.name}</h4>
                          <p className="text-sm text-gray-600">{doc.case} • {doc.type}</p>
                          <p className="text-xs text-gray-500">Uploaded: {doc.uploadDate} • {doc.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                          {doc.status}
                        </span>
                        <Button size="sm">
                          <Send className="h-4 w-4 mr-2" />
                          Submit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Submission Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Before Submitting:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ensure all documents are properly formatted</li>
                      <li>• Verify case information is correct</li>
                      <li>• Check file names follow court naming conventions</li>
                      <li>• Confirm all required signatures are present</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Submission Process:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Documents are automatically validated</li>
                      <li>• Electronic filing receipt will be generated</li>
                      <li>• Court will confirm receipt within 24 hours</li>
                      <li>• You'll receive email notification of status</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Manage Tab */}
          <TabsContent value="manage" className="space-y-4">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search documents..."
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Document Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="pleading">Pleadings</SelectItem>
                      <SelectItem value="motion">Motions</SelectItem>
                      <SelectItem value="evidence">Evidence</SelectItem>
                      <SelectItem value="other">Other Filings</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="uploaded">Uploaded</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="review">In Review</SelectItem>
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

            {/* Documents List */}
            <div className="grid gap-4">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getFileIcon(doc.format)}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium text-gray-900">{doc.name}</h4>
                              {getStatusIcon(doc.status)}
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                                {doc.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">{doc.case} • {doc.type}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                              <span>Uploaded: {doc.uploadDate}</span>
                              <span>Size: {doc.size}</span>
                              <span>By: {doc.uploadedBy}</span>
                              {doc.submittedDate && (
                                <span>Submitted: {doc.submittedDate}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
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
                Showing 1-6 of 31 documents
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

export default DocumentHandling

