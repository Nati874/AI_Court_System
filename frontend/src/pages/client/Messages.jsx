import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  MessageSquare, 
  Send, 
  Paperclip, 
  Search, 
  Phone, 
  Video,
  MoreVertical,
  Clock,
  CheckCheck,
  AlertCircle,
  Plus
} from 'lucide-react'

const Messaging = () => {
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Attorney',
      lastMessage: 'I\'ve reviewed the contract documents. We need to discuss the liability clauses.',
      timestamp: '2024-08-14 10:30 AM',
      unread: 2,
      online: true,
      case: 'CASE-001'
    },
    {
      id: 2,
      name: 'Court Clerk Office',
      role: 'Court Official',
      lastMessage: 'Your hearing has been scheduled for August 25th at 2:00 PM.',
      timestamp: '2024-08-14 09:15 AM',
      unread: 0,
      online: false,
      case: 'CASE-002'
    },
    {
      id: 3,
      name: 'Michael Davis',
      role: 'Legal Representative',
      lastMessage: 'Please provide the additional documentation we discussed.',
      timestamp: '2024-08-13 04:45 PM',
      unread: 1,
      online: true,
      case: 'CASE-001'
    },
    {
      id: 4,
      name: 'Judge Chambers',
      role: 'Court Official',
      lastMessage: 'Motion hearing rescheduled to next week.',
      timestamp: '2024-08-13 02:20 PM',
      unread: 0,
      online: false,
      case: 'CASE-003'
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      content: 'Good morning! I\'ve had a chance to review the contract documents you sent over.',
      timestamp: '2024-08-14 09:00 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thank you for the quick review. What are your initial thoughts?',
      timestamp: '2024-08-14 09:15 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      content: 'Overall the contract looks solid, but I have concerns about the liability clauses in section 7. We should discuss potential modifications.',
      timestamp: '2024-08-14 09:30 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'Sarah Johnson',
      content: 'I\'ve also attached my preliminary notes for your review.',
      timestamp: '2024-08-14 09:31 AM',
      isOwn: false,
      attachment: 'contract_review_notes.pdf'
    },
    {
      id: 5,
      sender: 'You',
      content: 'Perfect, I\'ll review the notes. Can we schedule a call to discuss the liability section in detail?',
      timestamp: '2024-08-14 10:00 AM',
      isOwn: true
    },
    {
      id: 6,
      sender: 'Sarah Johnson',
      content: 'Absolutely. I\'m available this afternoon after 2 PM or tomorrow morning. What works better for you?',
      timestamp: '2024-08-14 10:30 AM',
      isOwn: false
    }
  ]

  const requestsForInfo = [
    {
      id: 1,
      from: 'Court Clerk Office',
      subject: 'Additional Documentation Required',
      message: 'Please provide proof of service for the motion filed on August 10th.',
      case: 'CASE-001',
      deadline: '2024-08-20',
      priority: 'High',
      status: 'Pending'
    },
    {
      id: 2,
      from: 'Sarah Johnson',
      subject: 'Client Information Update',
      message: 'We need updated contact information for the opposing party.',
      case: 'CASE-002',
      deadline: '2024-08-18',
      priority: 'Medium',
      status: 'Pending'
    },
    {
      id: 3,
      from: 'Judge Chambers',
      subject: 'Clarification on Motion',
      message: 'Please clarify the relief sought in your motion to dismiss.',
      case: 'CASE-003',
      deadline: '2024-08-22',
      priority: 'High',
      status: 'Responded'
    }
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('')
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-orange-100 text-orange-800'
      case 'Responded': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Messaging</h1>
        <p className="text-gray-600 mt-1">Communicate with legal representatives and court officials.</p>
      </div>

      <Tabs defaultValue="conversations" className="space-y-6">
        <TabsList>
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="requests">Information Requests</TabsTrigger>
        </TabsList>

        {/* Conversations Tab */}
        <TabsContent value="conversations">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversation List */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Conversations</CardTitle>
                  <Button size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-[400px] overflow-y-auto">
                  {conversations.map(conversation => (
                    <div
                      key={conversation.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 border-b ${
                        selectedConversation?.id === conversation.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      }`}
                      onClick={() => setSelectedConversation(conversation)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              {conversation.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.online && (
                            <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-sm truncate">{conversation.name}</p>
                              <p className="text-xs text-gray-500">{conversation.role}</p>
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                              <span className="text-xs text-gray-500">{conversation.timestamp.split(' ')[1]}</span>
                              {conversation.unread > 0 && (
                                <Badge className="bg-blue-500 text-white text-xs px-2 py-1">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {conversation.case}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="lg:col-span-2">
              {selectedConversation ? (
                <>
                  <CardHeader className="border-b">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>
                            {selectedConversation.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{selectedConversation.name}</h3>
                          <p className="text-sm text-gray-500">{selectedConversation.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Messages */}
                    <div className="h-[350px] overflow-y-auto p-4 space-y-4">
                      {messages.map(message => (
                        <div
                          key={message.id}
                          className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
                            <div
                              className={`p-3 rounded-lg ${
                                message.isOwn
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-gray-100 text-gray-900'
                              }`}
                            >
                              <p className="text-sm">{message.content}</p>
                              {message.attachment && (
                                <div className="mt-2 p-2 bg-white bg-opacity-20 rounded flex items-center space-x-2">
                                  <Paperclip className="h-4 w-4" />
                                  <span className="text-xs">{message.attachment}</span>
                                </div>
                              )}
                            </div>
                            <div className={`flex items-center mt-1 space-x-1 ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                              <Clock className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{message.timestamp.split(' ')[1]}</span>
                              {message.isOwn && <CheckCheck className="h-3 w-3 text-blue-500" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="border-t p-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Paperclip className="h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1"
                        />
                        <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </>
              ) : (
                <CardContent className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Select a conversation to start messaging</p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </TabsContent>

        {/* Information Requests Tab */}
        <TabsContent value="requests">
          <Card>
            <CardHeader>
              <CardTitle>Information Requests</CardTitle>
              <CardDescription>
                Requests for additional information or clarification from legal representatives and court officials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requestsForInfo.map(request => (
                  <div key={request.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{request.subject}</h4>
                          <Badge className={getPriorityColor(request.priority)}>
                            {request.priority}
                          </Badge>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">From: {request.from}</p>
                        <p className="text-sm">{request.message}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">
                          {request.case}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Due: {request.deadline}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {request.status === 'Pending' && (
                        <Button size="sm">
                          Respond
                        </Button>
                      )}
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

export default Messaging

