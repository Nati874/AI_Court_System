import React from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Send, 
  Search,
  Filter,
  Plus,
  Paperclip,
  Phone,
  Video,
  MoreVertical,
  Star,
  Archive,
  Trash2,
  User,
  Clock,
  CheckCircle2
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const AttorneyMessages = () => {
  const conversations = [
    {
      id: 1,
      contact: 'Robert Smith',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      lastMessage: 'Thank you for the update on the motion. When can we expect to hear back from the court?',
      timestamp: '2024-01-12 14:30',
      unreadCount: 2,
      isClient: true,
      priority: 'High',
      status: 'Active'
    },
    {
      id: 2,
      contact: 'Sarah Mitchell (Judge)',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      lastMessage: 'The hearing for the motion to dismiss has been scheduled for January 25th at 10:00 AM.',
      timestamp: '2024-01-12 11:15',
      unreadCount: 0,
      isClient: false,
      priority: 'High',
      status: 'Official'
    },
    {
      id: 3,
      contact: 'ABC Corporation Legal',
      case: 'ABC Corp Contract Dispute',
      caseId: 'CASE-2024-003',
      lastMessage: 'We have reviewed the discovery documents and would like to schedule a meeting to discuss settlement options.',
      timestamp: '2024-01-12 09:45',
      unreadCount: 1,
      isClient: true,
      priority: 'Medium',
      status: 'Active'
    },
    {
      id: 4,
      contact: 'Williams Family',
      case: 'Estate of Williams',
      caseId: 'CASE-2024-002',
      lastMessage: 'The probate documents have been filed. We should receive confirmation within 5-7 business days.',
      timestamp: '2024-01-11 16:20',
      unreadCount: 0,
      isClient: true,
      priority: 'Low',
      status: 'Active'
    },
    {
      id: 5,
      contact: 'Jane Paralegal',
      case: 'Internal',
      caseId: 'N/A',
      lastMessage: 'I have prepared the deposition questions for the ABC Corp case. Please review when you have a moment.',
      timestamp: '2024-01-11 14:10',
      unreadCount: 0,
      isClient: false,
      priority: 'Medium',
      status: 'Internal'
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'Robert Smith',
      content: 'Thank you for the update on the motion. When can we expect to hear back from the court?',
      timestamp: '2024-01-12 14:30',
      isFromMe: false,
      attachments: []
    },
    {
      id: 2,
      sender: 'John Attorney',
      content: 'Based on typical court schedules, we should expect a response within 2-3 weeks. I will keep you updated as soon as we hear anything.',
      timestamp: '2024-01-12 14:35',
      isFromMe: true,
      attachments: []
    },
    {
      id: 3,
      sender: 'Robert Smith',
      content: 'That sounds good. Also, I wanted to ask about the medical records we discussed. Have those been submitted?',
      timestamp: '2024-01-12 14:40',
      isFromMe: false,
      attachments: []
    },
    {
      id: 4,
      sender: 'John Attorney',
      content: 'Yes, all medical records have been submitted to the court as part of our evidence package. I have attached a copy of the submission receipt for your records.',
      timestamp: '2024-01-12 14:45',
      isFromMe: true,
      attachments: ['submission_receipt.pdf']
    }
  ]

  const getContactInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'destructive'
      case 'Medium': return 'default'
      case 'Low': return 'secondary'
      default: return 'secondary'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Official': return 'bg-blue-100 text-blue-800'
      case 'Internal': return 'bg-purple-100 text-purple-800'
      case 'Archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const stats = [
    {
      title: 'Active Conversations',
      value: '12',
      change: '3 new today',
      icon: MessageSquare,
      color: 'text-blue-600'
    },
    {
      title: 'Unread Messages',
      value: '5',
      change: '2 high priority',
      icon: MessageSquare,
      color: 'text-red-600'
    },
    {
      title: 'Client Communications',
      value: '8',
      change: '4 this week',
      icon: User,
      color: 'text-green-600'
    },
    {
      title: 'Response Time',
      value: '2.3h',
      change: 'Average response',
      icon: Clock,
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
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-1">Communicate with clients, court officials, and team members</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Message
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

        {/* Main Messaging Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Conversations
                </CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-0">
                <div className="space-y-1">
                  {conversations.map((conversation, index) => (
                    <motion.div
                      key={conversation.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {getContactInitials(conversation.contact)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-gray-900 truncate">
                              {conversation.contact}
                            </h4>
                            <div className="flex items-center gap-1">
                              {conversation.unreadCount > 0 && (
                                <Badge variant="destructive" className="text-xs">
                                  {conversation.unreadCount}
                                </Badge>
                              )}
                              <span className="text-xs text-gray-500">
                                {new Date(conversation.timestamp).toLocaleTimeString([], { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={getPriorityColor(conversation.priority)} className="text-xs">
                              {conversation.priority}
                            </Badge>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(conversation.status)}`}>
                              {conversation.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 truncate mb-1">
                            {conversation.lastMessage}
                          </p>
                          <p className="text-xs text-gray-500">
                            {conversation.case} {conversation.caseId !== 'N/A' && `• ${conversation.caseId}`}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Message Thread */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        RS
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">Robert Smith</h3>
                      <p className="text-sm text-gray-600">Smith vs. Johnson • CASE-2024-001</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="outline">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Star className="h-4 w-4 mr-2" />
                          Star Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Archive className="h-4 w-4 mr-2" />
                          Archive
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.isFromMe ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${
                      message.isFromMe 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-gray-100 text-gray-900'
                    } rounded-lg p-3`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium">{message.sender}</span>
                        <span className="text-xs opacity-70">
                          {new Date(message.timestamp).toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                      <p className="text-sm">{message.content}</p>
                      {message.attachments.length > 0 && (
                        <div className="mt-2 space-y-1">
                          {message.attachments.map((attachment, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs opacity-80">
                              <Paperclip className="h-3 w-3" />
                              <span>{attachment}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {message.isFromMe && (
                        <div className="flex justify-end mt-1">
                          <CheckCircle2 className="h-3 w-3 opacity-70" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <Textarea
                      placeholder="Type your message..."
                      className="min-h-[60px] resize-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" variant="outline">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used messaging tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  <span className="text-sm">New Client Message</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                  <User className="h-6 w-6" />
                  <span className="text-sm">Team Message</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                  <Archive className="h-6 w-6" />
                  <span className="text-sm">Archived Messages</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col items-center gap-2">
                  <Star className="h-6 w-6" />
                  <span className="text-sm">Starred Messages</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AttorneyMessages

