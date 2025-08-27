import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Calendar } from '@/components/ui/calendar1'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Plus, 
  Video, 
  MapPin, 
  Phone,
  Bell,
  Users,
  Edit,
  Trash2,
  AlertCircle
} from 'lucide-react'

const Scheduling = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showNewAppointment, setShowNewAppointment] = useState(false)

  const upcomingAppointments = [
    {
      id: 1,
      title: 'Client Consultation - Smith Case',
      type: 'consultation',
      date: '2024-08-20',
      time: '10:00 AM',
      duration: '1 hour',
      location: 'Law Office - Conference Room A',
      attendees: ['Sarah Johnson (Attorney)', 'John Smith (Client)'],
      case: 'CASE-001',
      status: 'confirmed',
      meetingType: 'in-person'
    },
    {
      id: 2,
      title: 'Court Hearing - Property Dispute',
      type: 'hearing',
      date: '2024-08-25',
      time: '2:00 PM',
      duration: '2 hours',
      location: 'Superior Court - Room 205',
      attendees: ['Judge Williams', 'Sarah Johnson', 'Opposing Counsel'],
      case: 'CASE-002',
      status: 'confirmed',
      meetingType: 'in-person'
    },
    {
      id: 3,
      title: 'Deposition - Witness Interview',
      type: 'deposition',
      date: '2024-08-22',
      time: '9:30 AM',
      duration: '3 hours',
      location: 'Virtual Meeting',
      attendees: ['Michael Davis', 'Court Reporter', 'Witness'],
      case: 'CASE-001',
      status: 'pending',
      meetingType: 'virtual'
    },
    {
      id: 4,
      title: 'Settlement Conference',
      type: 'conference',
      date: '2024-08-28',
      time: '1:00 PM',
      duration: '2 hours',
      location: 'Mediation Center',
      attendees: ['Mediator', 'Both Parties', 'Legal Representatives'],
      case: 'CASE-003',
      status: 'tentative',
      meetingType: 'in-person'
    }
  ]

  const calendarAlerts = [
    {
      id: 1,
      title: 'Court Hearing Reminder',
      message: 'Your court hearing is scheduled for tomorrow at 2:00 PM',
      time: '24 hours before',
      type: 'reminder'
    },
    {
      id: 2,
      title: 'Document Deadline',
      message: 'Discovery documents due in 3 days',
      time: '3 days before',
      type: 'deadline'
    },
    {
      id: 3,
      title: 'Client Meeting',
      message: 'Consultation with John Smith in 2 hours',
      time: '2 hours before',
      type: 'reminder'
    }
  ]

  const getAppointmentTypeColor = (type) => {
    switch (type) {
      case 'consultation': return 'bg-blue-100 text-blue-800'
      case 'hearing': return 'bg-red-100 text-red-800'
      case 'deposition': return 'bg-purple-100 text-purple-800'
      case 'conference': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'tentative': return 'bg-orange-100 text-orange-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getMeetingIcon = (type) => {
    switch (type) {
      case 'virtual': return <Video className="h-4 w-4" />
      case 'phone': return <Phone className="h-4 w-4" />
      default: return <MapPin className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Scheduling</h1>
          <p className="text-gray-600 mt-1">Schedule appointments, consultations, and manage your calendar.</p>
        </div>
        <Button onClick={() => setShowNewAppointment(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Appointment
        </Button>
      </div>

      <Tabs defaultValue="calendar" className="space-y-6">
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="alerts">Calendar Alerts</TabsTrigger>
        </TabsList>

        {/* Calendar View Tab */}
        <TabsContent value="calendar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>
                  Select a date to view appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="double"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Daily Schedule */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>
                  Schedule for {selectedDate?.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardTitle>
                <CardDescription>
                  Your appointments and meetings for the selected day
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments
                    .filter(apt => apt.date === selectedDate?.toISOString().split('T')[0])
                    .map(appointment => (
                      <div key={appointment.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold">{appointment.title}</h4>
                              <Badge className={getAppointmentTypeColor(appointment.type)}>
                                {appointment.type}
                              </Badge>
                              <Badge className={getStatusColor(appointment.status)}>
                                {appointment.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span>{appointment.time} ({appointment.duration})</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                {getMeetingIcon(appointment.meetingType)}
                                <span>{appointment.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span>Attendees: {appointment.attendees.join(', ')}</span>
                          </div>
                          <Badge variant="outline">
                            {appointment.case}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  
                  {upcomingAppointments.filter(apt => apt.date === selectedDate?.toISOString().split('T')[0]).length === 0 && (
                    <div className="text-center py-8">
                      <CalendarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No appointments scheduled for this day</p>
                      <Button className="mt-4" onClick={() => setShowNewAppointment(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Schedule Appointment
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Appointments Tab */}
        <TabsContent value="appointments">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>
                  Your scheduled meetings and consultations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-sm">{appointment.title}</h4>
                          <Badge className={getAppointmentTypeColor(appointment.type)}>
                            {appointment.type}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-xs text-gray-600">
                          <div className="flex items-center space-x-2">
                            <CalendarIcon className="h-3 w-3" />
                            <span>{appointment.date} at {appointment.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getMeetingIcon(appointment.meetingType)}
                            <span>{appointment.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        {appointment.case}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* New Appointment Form */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule New Appointment</CardTitle>
                <CardDescription>
                  Create a new appointment or consultation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="appointmentTitle">Appointment Title</Label>
                  <Input
                    id="appointmentTitle"
                    placeholder="Enter appointment title"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="appointmentType">Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="hearing">Court Hearing</SelectItem>
                        <SelectItem value="deposition">Deposition</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="meeting">Meeting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="associatedCase">Associated Case</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="case-001">CASE-001: Smith vs. Johnson</SelectItem>
                        <SelectItem value="case-002">CASE-002: Davis Estate</SelectItem>
                        <SelectItem value="case-003">CASE-003: Employment Case</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="appointmentDate">Date</Label>
                    <Input
                      id="appointmentDate"
                      type="date"
                    />
                  </div>

                  <div>
                    <Label htmlFor="appointmentTime">Time</Label>
                    <Input
                      id="appointmentTime"
                      type="time"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30min">30 minutes</SelectItem>
                      <SelectItem value="1hour">1 hour</SelectItem>
                      <SelectItem value="1.5hours">1.5 hours</SelectItem>
                      <SelectItem value="2hours">2 hours</SelectItem>
                      <SelectItem value="3hours">3 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="meetingType">Meeting Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select meeting type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="in-person">In Person</SelectItem>
                      <SelectItem value="virtual">Virtual Meeting</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter location or meeting link"
                  />
                </div>

                <div>
                  <Label htmlFor="attendees">Attendees</Label>
                  <Textarea
                    id="attendees"
                    placeholder="List attendees (one per line)"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Additional notes or agenda items"
                    rows={3}
                  />
                </div>

                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Calendar Alerts Tab */}
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Calendar Alerts</CardTitle>
              <CardDescription>
                Manage your appointment reminders and deadline notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {calendarAlerts.map(alert => (
                  <div key={alert.id} className="border rounded-lg p-4 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {alert.type === 'reminder' ? (
                        <Bell className="h-5 w-5 text-blue-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-orange-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{alert.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-2">Alert time: {alert.time}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Alert
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Scheduling

