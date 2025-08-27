import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  FileText, 
  Upload, 
  DollarSign, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Plus,
  X,
  Download
} from 'lucide-react'

const CaseInitiation = () => {
  const [activeTab, setActiveTab] = useState('initiate')
  const [caseForm, setCaseForm] = useState({
    title: '',
    type: '',
    description: '',
    priority: '',
    client: '',
    opposingParty: ''
  })
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [filingFees, setFilingFees] = useState({
    courtFee: 350,
    serviceFee: 75,
    documentFee: 25
  })

  const caseTypes = [
    'Civil Litigation',
    'Criminal Defense',
    'Family Law',
    'Corporate Law',
    'Real Estate',
    'Employment Law',
    'Personal Injury',
    'Intellectual Property'
  ]

  const recentCases = [
    {
      id: 'CASE-001',
      title: 'Smith vs. Johnson Contract Dispute',
      status: 'Filed',
      filedDate: '2024-08-10',
      type: 'Civil Litigation'
    },
    {
      id: 'CASE-002',
      title: 'Property Settlement - Davis Estate',
      status: 'In Progress',
      filedDate: '2024-08-05',
      type: 'Real Estate'
    }
  ]

  const handleInputChange = (field, value) => {
    setCaseForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadDate: new Date().toISOString()
    }))
    setUploadedFiles(prev => [...prev, ...newFiles])
  }

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId))
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const totalFees = Object.values(filingFees).reduce((sum, fee) => sum + fee, 0)

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
        <h1 className="text-3xl font-bold text-gray-900">Case Initiation & Filing</h1>
        <p className="text-gray-600 mt-1">Initiate new cases, file legal documents, and manage evidence.</p>
      </div>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="initiate">Initiate Case</TabsTrigger>
          <TabsTrigger value="documents">File Documents</TabsTrigger>
          <TabsTrigger value="evidence">Upload Evidence</TabsTrigger>
          <TabsTrigger value="fees">Filing Fees</TabsTrigger>
        </TabsList>

        {/* Initiate Case Tab */}
        <TabsContent value="initiate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>New Case Information</CardTitle>
                <CardDescription>
                  Enter the basic details for your new legal case
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="caseTitle">Case Title</Label>
                  <Input
                    id="caseTitle"
                    placeholder="Enter case title"
                    value={caseForm.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="caseType">Case Type</Label>
                  <Select onValueChange={(value) => handleInputChange('type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      {caseTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select onValueChange={(value) => handleInputChange('priority', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="client">Client Name</Label>
                  <Input
                    id="client"
                    placeholder="Enter client name"
                    value={caseForm.client}
                    onChange={(e) => handleInputChange('client', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="opposingParty">Opposing Party</Label>
                  <Input
                    id="opposingParty"
                    placeholder="Enter opposing party name"
                    value={caseForm.opposingParty}
                    onChange={(e) => handleInputChange('opposingParty', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Case Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of the case"
                    rows={4}
                    value={caseForm.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Case
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Cases</CardTitle>
                <CardDescription>
                  Your recently initiated cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentCases.map(case_ => (
                  <div key={case_.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-sm">{case_.title}</h4>
                      <Badge variant={case_.status === 'Filed' ? 'default' : 'secondary'}>
                        {case_.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">Case ID: {case_.id}</p>
                    <p className="text-xs text-gray-500">Type: {case_.type}</p>
                    <p className="text-xs text-gray-500">Filed: {case_.filedDate}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* File Documents Tab */}
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>File Legal Documents</CardTitle>
              <CardDescription>
                Submit complaints, petitions, and other legal documents
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Document Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="petition">Petition</SelectItem>
                        <SelectItem value="motion">Motion</SelectItem>
                        <SelectItem value="brief">Brief</SelectItem>
                        <SelectItem value="affidavit">Affidavit</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Associated Case</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="case-001">CASE-001: Smith vs. Johnson</SelectItem>
                        <SelectItem value="case-002">CASE-002: Davis Estate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Filing Court</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select court" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="superior">Superior Court</SelectItem>
                        <SelectItem value="district">District Court</SelectItem>
                        <SelectItem value="federal">Federal Court</SelectItem>
                        <SelectItem value="appellate">Appellate Court</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Document Title</Label>
                    <Input placeholder="Enter document title" />
                  </div>

                  <div>
                    <Label>Filing Date</Label>
                    <Input type="date" />
                  </div>

                  <div>
                    <Label>Notes</Label>
                    <Textarea placeholder="Additional notes or comments" rows={3} />
                  </div>
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Upload your legal document</p>
                <p className="text-sm text-gray-500 mb-4">PDF, DOC, DOCX up to 10MB</p>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Choose File
                </Button>
              </div>

              <Button className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                File Document
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Upload Evidence Tab */}
        <TabsContent value="evidence" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Supporting Evidence</CardTitle>
              <CardDescription>
                Upload documents, images, and other evidence to support your case
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 mb-2">Drag and drop files here</p>
                <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button variant="outline" onClick={() => document.getElementById('file-upload').click()}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Files
                </Button>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">Uploaded Files ({uploadedFiles.length})</h3>
                  <div className="space-y-2">
                    {uploadedFiles.map(file => (
                      <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-gray-500" />
                          <div>
                            <p className="text-sm font-medium">{file.name}</p>
                            <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => removeFile(file.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Evidence Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contracts">Contracts</SelectItem>
                      <SelectItem value="correspondence">Correspondence</SelectItem>
                      <SelectItem value="financial">Financial Records</SelectItem>
                      <SelectItem value="photos">Photographs</SelectItem>
                      <SelectItem value="expert">Expert Reports</SelectItem>
                      <SelectItem value="witness">Witness Statements</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Associated Case</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="case-001">CASE-001: Smith vs. Johnson</SelectItem>
                      <SelectItem value="case-002">CASE-002: Davis Estate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full" disabled={uploadedFiles.length === 0}>
                <Upload className="h-4 w-4 mr-2" />
                Upload Evidence ({uploadedFiles.length} files)
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Filing Fees Tab */}
        <TabsContent value="fees" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Filing Fee Calculator</CardTitle>
                <CardDescription>
                  Calculate and pay required filing fees electronically
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Court Filing Fee</p>
                      <p className="text-sm text-gray-500">Standard court processing fee</p>
                    </div>
                    <span className="font-semibold">${filingFees.courtFee}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Service Fee</p>
                      <p className="text-sm text-gray-500">Document service and delivery</p>
                    </div>
                    <span className="font-semibold">${filingFees.serviceFee}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Document Processing Fee</p>
                      <p className="text-sm text-gray-500">Administrative processing</p>
                    </div>
                    <span className="font-semibold">${filingFees.documentFee}</span>
                  </div>

                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Amount</span>
                      <span className="text-lg font-bold text-blue-600">${totalFees}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Pay Filing Fees
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>
                  Recent filing fee payments and transactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-sm">CASE-001 Filing Fee</p>
                        <p className="text-xs text-gray-500">Paid on Aug 10, 2024</p>
                      </div>
                    </div>
                    <span className="font-semibold">$450</span>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="font-medium text-sm">CASE-002 Service Fee</p>
                        <p className="text-xs text-gray-500">Pending payment</p>
                      </div>
                    </div>
                    <span className="font-semibold">$75</span>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-sm">Motion Filing Fee</p>
                        <p className="text-xs text-gray-500">Paid on Aug 5, 2024</p>
                      </div>
                    </div>
                    <span className="font-semibold">$200</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Total Paid This Month:</span>
                    <span className="font-semibold">$650</span>
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

export default CaseInitiation

