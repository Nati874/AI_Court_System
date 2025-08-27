import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Scale, 
  Gavel, 
  FileText, 
  Brain, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BookOpen,
  Search
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const JudgeBot = () => {
  const [selectedCase, setSelectedCase] = useState(null)
  const [analysisResults, setAnalysisResults] = useState(null)

  const pendingCases = [
    {
      id: 1,
      title: 'Smith vs. Johnson',
      type: 'Civil',
      priority: 'High',
      description: 'Contract dispute regarding property sale agreement',
      evidence: ['Contract documents', 'Email correspondence', 'Property valuation'],
      deadline: '2024-01-15'
    },
    {
      id: 2,
      title: 'State vs. Williams',
      type: 'Criminal',
      priority: 'High',
      description: 'Theft charges with multiple counts',
      evidence: ['Security footage', 'Witness statements', 'Police report'],
      deadline: '2024-01-18'
    },
    {
      id: 3,
      title: 'Brown Custody Case',
      type: 'Family',
      priority: 'Medium',
      description: 'Child custody and support arrangement',
      evidence: ['Financial records', 'Home evaluation', 'Character references'],
      deadline: '2024-01-20'
    }
  ]

  const legalPrecedents = [
    {
      case: 'Johnson v. State (2019)',
      relevance: 95,
      summary: 'Similar contract dispute with property valuation issues'
    },
    {
      case: 'Miller v. Davis (2020)',
      relevance: 87,
      summary: 'Precedent for breach of contract remedies'
    },
    {
      case: 'Wilson v. Thompson (2018)',
      relevance: 82,
      summary: 'Property sale agreement interpretation'
    }
  ]

  const handleAnalyzeCase = (caseItem) => {
    setSelectedCase(caseItem)
    setAnalysisResults({
      confidence: 85,
      recommendation: 'Favor Plaintiff',
      reasoning: 'Based on contract law precedents and evidence presented, the plaintiff has a strong case for breach of contract.',
      riskFactors: [
        'Incomplete documentation',
        'Potential counter-claims'
      ],
      suggestedActions: [
        'Request additional financial records',
        'Schedule mediation session',
        'Review property inspection reports'
      ]
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
          <h1 className="text-3xl font-bold text-foreground">Judge Decision Bot</h1>
          <p className="text-muted-foreground">AI-powered decision support system for judicial proceedings</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-blue-100 text-blue-800">
            <Brain className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Cases */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gavel className="h-5 w-5 mr-2" />
                Pending Cases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingCases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedCase?.id === caseItem.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => handleAnalyzeCase(caseItem)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm">{caseItem.title}</h4>
                        <Badge 
                          variant={caseItem.priority === 'High' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {caseItem.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{caseItem.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{caseItem.type}</span>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {caseItem.deadline}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Analysis Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          {selectedCase ? (
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-5 w-5 mr-2" />
                  Case Analysis: {selectedCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="analysis" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                    <TabsTrigger value="precedents">Precedents</TabsTrigger>
                    <TabsTrigger value="evidence">Evidence</TabsTrigger>
                  </TabsList>

                  <TabsContent value="analysis" className="space-y-4">
                    {analysisResults && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        {/* Confidence Score */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Confidence Score</span>
                            <span className="text-sm text-muted-foreground">{analysisResults.confidence}%</span>
                          </div>
                          <Progress value={analysisResults.confidence} className="h-2" />
                        </div>

                        {/* Recommendation */}
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center mb-2">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                            <span className="font-medium text-green-800">Recommendation</span>
                          </div>
                          <p className="text-green-700 text-sm">{analysisResults.recommendation}</p>
                        </div>

                        {/* Reasoning */}
                        <div className="space-y-2">
                          <h4 className="font-medium">Legal Reasoning</h4>
                          <p className="text-sm text-muted-foreground">{analysisResults.reasoning}</p>
                        </div>

                        {/* Risk Factors */}
                        <div className="space-y-2">
                          <h4 className="font-medium flex items-center">
                            <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                            Risk Factors
                          </h4>
                          <ul className="space-y-1">
                            {analysisResults.riskFactors.map((risk, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                                {risk}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Suggested Actions */}
                        <div className="space-y-2">
                          <h4 className="font-medium">Suggested Actions</h4>
                          <ul className="space-y-1">
                            {analysisResults.suggestedActions.map((action, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </TabsContent>

                  <TabsContent value="precedents" className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-medium flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Relevant Legal Precedents
                      </h4>
                      {legalPrecedents.map((precedent, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium text-sm">{precedent.case}</h5>
                            <Badge variant="outline" className="text-xs">
                              {precedent.relevance}% match
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{precedent.summary}</p>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="evidence" className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-medium flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Evidence Review
                      </h4>
                      {selectedCase.evidence.map((evidence, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{evidence}</span>
                            <Badge variant="outline" className="text-xs">
                              Reviewed
                            </Badge>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full">
              <CardContent className="p-8 text-center">
                <Scale className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Select a Case for Analysis</h3>
                <p className="text-muted-foreground">
                  Choose a pending case from the left panel to begin AI-powered legal analysis
                </p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default JudgeBot
