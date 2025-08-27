import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Search, 
  Download, 
  ExternalLink, 
  Users, 
  HelpCircle,
  FileText,
  Scale,
  Gavel,
  MessageSquare,
  Phone,
  Mail,
  Star,
  Clock
} from 'lucide-react'

const LegalResources = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const legalGuidance = [
    {
      id: 1,
      title: 'Understanding Civil Litigation Process',
      category: 'Civil Law',
      description: 'Comprehensive guide to civil litigation procedures, timelines, and requirements.',
      type: 'guide',
      readTime: '15 min',
      rating: 4.8,
      lastUpdated: '2024-08-01'
    },
    {
      id: 2,
      title: 'Employment Law Basics',
      category: 'Employment',
      description: 'Essential information about employment rights, termination, and workplace disputes.',
      type: 'article',
      readTime: '10 min',
      rating: 4.6,
      lastUpdated: '2024-07-28'
    },
    {
      id: 3,
      title: 'Contract Law Fundamentals',
      category: 'Contract Law',
      description: 'Key principles of contract formation, interpretation, and enforcement.',
      type: 'guide',
      readTime: '20 min',
      rating: 4.9,
      lastUpdated: '2024-08-05'
    },
    {
      id: 4,
      title: 'Family Law Procedures',
      category: 'Family Law',
      description: 'Guide to divorce, custody, and family court procedures.',
      type: 'guide',
      readTime: '18 min',
      rating: 4.7,
      lastUpdated: '2024-07-30'
    }
  ]

  const legalDocuments = [
    {
      id: 1,
      title: 'Motion to Dismiss Template',
      category: 'Court Motions',
      description: 'Standard template for filing a motion to dismiss with proper formatting.',
      type: 'template',
      format: 'DOCX',
      size: '45 KB',
      downloads: 1250
    },
    {
      id: 2,
      title: 'Discovery Request Forms',
      category: 'Discovery',
      description: 'Complete set of discovery request forms including interrogatories and document requests.',
      type: 'forms',
      format: 'PDF',
      size: '120 KB',
      downloads: 890
    },
    {
      id: 3,
      title: 'Settlement Agreement Template',
      category: 'Settlements',
      description: 'Comprehensive settlement agreement template with standard clauses.',
      type: 'template',
      format: 'DOCX',
      size: '67 KB',
      downloads: 2100
    },
    {
      id: 4,
      title: 'Affidavit Forms',
      category: 'Affidavits',
      description: 'Various affidavit forms for different legal purposes.',
      type: 'forms',
      format: 'PDF',
      size: '89 KB',
      downloads: 1560
    }
  ]

  const legalAidOptions = [
    {
      id: 1,
      name: 'Legal Aid Society',
      type: 'Non-profit',
      services: ['Civil Rights', 'Housing', 'Family Law', 'Immigration'],
      contact: '(555) 123-4567',
      email: 'info@legalaid.org',
      website: 'www.legalaid.org',
      eligibility: 'Income-based',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Pro Bono Legal Services',
      type: 'Volunteer Network',
      services: ['Business Law', 'Employment', 'Contract Disputes'],
      contact: '(555) 987-6543',
      email: 'probono@lawfirm.com',
      website: 'www.probonolegal.org',
      eligibility: 'Case review required',
      rating: 4.3
    },
    {
      id: 3,
      name: 'Community Legal Clinic',
      type: 'Community Center',
      services: ['Tenant Rights', 'Consumer Protection', 'Small Claims'],
      contact: '(555) 456-7890',
      email: 'help@communitylegal.org',
      website: 'www.communitylegal.org',
      eligibility: 'Local residents',
      rating: 4.7
    }
  ]

  const legalRepresentation = [
    {
      id: 1,
      name: 'Sarah Johnson',
      firm: 'Johnson & Associates',
      specialties: ['Civil Litigation', 'Contract Law', 'Business Disputes'],
      experience: '15 years',
      rating: 4.9,
      hourlyRate: '$350',
      availability: 'Available',
      contact: '(555) 111-2222',
      email: 'sarah@johnsonlaw.com'
    },
    {
      id: 2,
      name: 'Michael Davis',
      firm: 'Davis Legal Group',
      specialties: ['Employment Law', 'Personal Injury', 'Family Law'],
      experience: '12 years',
      rating: 4.6,
      hourlyRate: '$275',
      availability: 'Limited',
      contact: '(555) 333-4444',
      email: 'mdavis@davislegal.com'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      firm: 'Rodriguez Law Firm',
      specialties: ['Criminal Defense', 'Immigration', 'Appeals'],
      experience: '18 years',
      rating: 4.8,
      hourlyRate: '$400',
      availability: 'Available',
      contact: '(555) 555-6666',
      email: 'emily@rodriguezlaw.com'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Civil Law': 'bg-blue-100 text-blue-800',
      'Employment': 'bg-green-100 text-green-800',
      'Contract Law': 'bg-purple-100 text-purple-800',
      'Family Law': 'bg-pink-100 text-pink-800',
      'Court Motions': 'bg-orange-100 text-orange-800',
      'Discovery': 'bg-teal-100 text-teal-800',
      'Settlements': 'bg-indigo-100 text-indigo-800',
      'Affidavits': 'bg-yellow-100 text-yellow-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available': return 'bg-green-100 text-green-800'
      case 'Limited': return 'bg-yellow-100 text-yellow-800'
      case 'Unavailable': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Legal Resources</h1>
        <p className="text-gray-600 mt-1">Access legal guidance, documentation, aid services, and representation.</p>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search legal resources, documents, or services..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="guidance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="guidance">Legal Guidance</TabsTrigger>
          <TabsTrigger value="documents">Documentation</TabsTrigger>
          <TabsTrigger value="aid">Legal Aid</TabsTrigger>
          <TabsTrigger value="representation">Representation</TabsTrigger>
        </TabsList>

        {/* Legal Guidance Tab */}
        <TabsContent value="guidance">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Legal Guidance Features</span>
              </CardTitle>
              <CardDescription>
                Educational resources and guides to help you understand legal processes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {legalGuidance.map(guide => (
                  <div key={guide.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{guide.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getCategoryColor(guide.category)}>
                            {guide.category}
                          </Badge>
                          <Badge variant="outline">
                            {guide.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{guide.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(guide.rating)}
                          <span className="ml-1">{guide.rating}</span>
                        </div>
                      </div>
                      <span>Updated: {guide.lastUpdated}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Guide
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documentation Tab */}
        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Legal Documentation</span>
              </CardTitle>
              <CardDescription>
                Templates, forms, and legal documents for various purposes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {legalDocuments.map(doc => (
                  <div key={doc.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{doc.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className={getCategoryColor(doc.category)}>
                            {doc.category}
                          </Badge>
                          <Badge variant="outline">
                            {doc.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>Format: {doc.format}</span>
                        <span>Size: {doc.size}</span>
                      </div>
                      <span>{doc.downloads} downloads</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Legal Aid Tab */}
        <TabsContent value="aid">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Request Legal Aid</span>
              </CardTitle>
              <CardDescription>
                Find affordable legal assistance and pro bono services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {legalAidOptions.map(aid => (
                  <div key={aid.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-lg">{aid.name}</h4>
                          <Badge variant="outline">{aid.type}</Badge>
                          <div className="flex items-center space-x-1">
                            {renderStars(aid.rating)}
                            <span className="text-sm text-gray-600 ml-1">{aid.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Eligibility: {aid.eligibility}</p>
                        
                        <div className="mb-3">
                          <h5 className="font-medium mb-2">Services Offered:</h5>
                          <div className="flex flex-wrap gap-2">
                            {aid.services.map((service, index) => (
                              <Badge key={index} variant="secondary">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>{aid.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span>{aid.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4 text-gray-500" />
                        <span>{aid.website}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contact for Aid
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Legal Representation Tab */}
        <TabsContent value="representation">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5" />
                <span>Request Legal Representation</span>
              </CardTitle>
              <CardDescription>
                Find qualified attorneys and legal representatives for your case
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {legalRepresentation.map(lawyer => (
                  <div key={lawyer.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-lg">{lawyer.name}</h4>
                          <Badge className={getAvailabilityColor(lawyer.availability)}>
                            {lawyer.availability}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            {renderStars(lawyer.rating)}
                            <span className="text-sm text-gray-600 ml-1">{lawyer.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{lawyer.firm}</p>
                        <p className="text-sm text-gray-600 mb-3">{lawyer.experience} experience</p>
                        
                        <div className="mb-3">
                          <h5 className="font-medium mb-2">Specialties:</h5>
                          <div className="flex flex-wrap gap-2">
                            {lawyer.specialties.map((specialty, index) => (
                              <Badge key={index} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">{lawyer.hourlyRate}/hr</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>{lawyer.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span>{lawyer.email}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Request Consultation
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default LegalResources

