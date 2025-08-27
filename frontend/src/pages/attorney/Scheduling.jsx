import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  Bell,
  Plus,
  Filter,
  Search,
  MapPin,
  Users,
  AlertCircle,
  CheckCircle,
  ExternalLink
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Scheduling = () => {
  const hearings = [
    {
      id: 1,
      title: 'Motion to Dismiss Hearing',
      case: 'Smith vs. Johnson',
      caseId: 'CASE-2024-001',
      date: '2024-01-25',
      time: '10:00 AM',
      duration: '2 hours',
      location: 'Courtroom 3A, Superior Court',
      judge: 'Hon. Sarah Mitchell',
      status: 'Confirmed',
      type: 'Motion Hearing',
      attendees: ['John Attorney', 'Robert Smith', 'Defense Counsel']
    },
    {
      id: 2,
      title: 'Deposition - Key Witness',
      case: 'ABC Corp Contract Dispute',
      caseId: 'CASE-2024-003',
      date: '2024-01-28',
      time: '2:00 PM',
      duration: '3 hours',
      location: 'Law Office Conference Room B',
      judge: 'N/A',
      status: 'Pending Confirmation',
      type: 'Deposition',
      attendees: ['John Attorney', 'Jane Paralegal', 'Witness', 'Court Reporter']
    },
    {
      id: 3,
      title: 'Settlement Conference',
      case: 'Thompson Divorce',
      caseId: 'CASE-2024-004',
      date: '2024-02-02',
      time: '9:00 AM',
      duration: '4 hours',
      location: 'Mediation Center',
      judge: 'Hon. Michael Rodriguez',
      status: 'Requested',
      type: 'Settlement Conference',
      attendees: ['John Attorney', 'Sarah Thompson', 'Opposing Counsel', 'Mediator']
    }
  ]

  const alerts = [
    {
      id: 1,
      type: 'deadline',
      title: 'Hearing Request Deadline',
      message: 'Request for hearing in Smith vs. Johnson must be filed by January 20, 2024',
      case: 'Smith vs. Johnson',
      priority: 'High',
      dueDate: '2024-01-20',
      isRead: false
    },
    {
      id: 2,
      type: 'confirmation',
      title: 'Hearing Confirmed',
      message: 'Motion to Dismiss hearing confirmed for January 25, 2024 at 10:00 AM',
      case: 'Smith vs. Johnson',
      priority: 'Medium',
      dueDate: '2024-01-25',
      isRead: true
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Deposition Preparation',
      message: 'Prepare questions and documents for witness deposition scheduled for January 28',
      case: 'ABC Corp Contract Dispute',
      priority: 'Medium',
      dueDate: '2024-01-28',
      isRead: false
    },
    {
      id: 4,
      type: 'calendar',
      title: 'Calendar Sync Available',
      message: 'New calendar integration with Google Calendar is now available',
      case: 'System',
      priority: 'Low',
      dueDate: null,
      isRead: false
    }
  ]

  const calendarIntegrations = [
    {
      name: 'Google Calendar',
      status: 'Connected',
      lastSync: '2024-01-12 14:30',
      events: 12
    },
    {
      name: 'Outlook Calendar',
      status: 'Not Connected',
      lastSync: null,
      events: 0
    },
    {
      name: 'Apple Calendar',
      status: 'Connected',
      lastSync: '2024-01-12 09:15',
      events: 8
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800'
      case 'Pending Confirmation': return 'bg-yellow-100 text-yellow-800'
      case 'Requested': return 'bg-blue-100 text-blue-800'
      case 'Cancelled': return 'bg-red-100 text-red-800'
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

  const getAlertIcon = (type) => {
    switch (type) {
      case 'deadline': return <AlertCircle className="h-4 w-4 text-red-500" />
      case 'confirmation': return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'reminder': return <Clock className="h-4 w-4 text-blue-500" />
      case 'calendar': return <Calendar className="h-4 w-4 text-purple-500" />
      default: return <Bell className="h-4 w-4 text-gray-500" />
    }
  }

  const stats = [
    {
      title: 'Upcoming Hearings',
      value: '8',
      change: '3 this week',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Pending Requests',
      value: '3',
      change: '2 awaiting confirmation',
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      title: 'Active Alerts',
      value: '5',
      change: '2 high priority',
      icon: Bell,
      color: 'text-red-600'
    },
    {
      title: 'Calendar Syncs',
      value: '2',
      change: 'Google & Apple connected',
      icon: ExternalLink,
      color: 'text-green-600'
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
            <h1 className="text-3xl font-bold text-gray-900">Scheduling</h1>
            <p className="text-gray-600 mt-1">Manage hearings, alerts, and calendar integrations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Request Hearing
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

        {/* Tabs */}
        <Tabs defaultValue="hearings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hearings" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Request Hearing Dates
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Receive Alerts
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Calendar Integrations
            </TabsTrigger>
          </TabsList>

          {/* Hearings Tab */}
          <TabsContent value="hearings" className="space-y-4">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search hearings..."
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Hearing Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="motion">Motion Hearing</SelectItem>
                      <SelectItem value="deposition">Deposition</SelectItem>
                      <SelectItem value="settlement">Settlement Conference</SelectItem>
                      <SelectItem value="trial">Trial</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="requested">Requested</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Hearings List */}
            <div className="grid gap-4">
              {hearings.map((hearing, index) => (
                <motion.div
                  key={hearing.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{hearing.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(hearing.status)}`}>
                              {hearing.status}
                            </span>
                            <Badge variant="outline">{hearing.type}</Badge>
                          </div>
                          <p className="text-gray-600 mb-1">{hearing.case}</p>
                          <p className="text-sm text-gray-500">Case ID: {hearing.caseId}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{hearing.date} at {hearing.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>Duration: {hearing.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{hearing.location}</span>
                        </div>
                      </div>

                      {hearing.judge !== 'N/A' && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-600">
                            <strong>Presiding Judge:</strong> {hearing.judge}
                          </p>
                        </div>
                      )}

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-600">Attendees:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {hearing.attendees.map((attendee, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {attendee}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-4">
            <div className="grid gap-4">
              {alerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`hover:shadow-lg transition-shadow ${!alert.isRead ? 'border-l-4 border-l-blue-500' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {getAlertIcon(alert.type)}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900">{alert.title}</h4>
                            <Badge variant={getPriorityColor(alert.priority)}>
                              {alert.priority}
                            </Badge>
                            {!alert.isRead && (
                              <Badge variant="secondary" className="text-xs">
                                New
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Case: {alert.case}</span>
                            {alert.dueDate && (
                              <>
                                <span>•</span>
                                <span>Due: {alert.dueDate}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {!alert.isRead && (
                            <Button size="sm" variant="outline">
                              Mark Read
                            </Button>
                          )}
                          <Button size="sm" variant="ghost">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Calendar Integrations Tab */}
          <TabsContent value="calendar" className="space-y-4">
            <div className="grid gap-4">
              {calendarIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                integration.status === 'Connected' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {integration.status}
                              </span>
                              {integration.lastSync && (
                                <span className="text-sm text-gray-500">
                                  Last sync: {integration.lastSync}
                                </span>
                              )}
                            </div>
                            {integration.status === 'Connected' && (
                              <p className="text-sm text-gray-600 mt-1">
                                {integration.events} events synchronized
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {integration.status === 'Connected' ? (
                            <>
                              <Button size="sm" variant="outline">
                                Sync Now
                              </Button>
                              <Button size="sm" variant="outline">
                                Disconnect
                              </Button>
                            </>
                          ) : (
                            <Button size="sm">
                              Connect
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Integration Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar Integration Benefits</CardTitle>
                <CardDescription>
                  Connect your calendars to automatically sync court dates and deadlines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Automatic hearing date synchronization</li>
                      <li>• Deadline reminders and notifications</li>
                      <li>• Two-way calendar updates</li>
                      <li>• Conflict detection and alerts</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Supported Platforms:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Google Calendar</li>
                      <li>• Microsoft Outlook</li>
                      <li>• Apple Calendar</li>
                      <li>• More integrations coming soon</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

export default Scheduling

