import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const Appointments = () => {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
        <p className="text-muted-foreground">Schedule and manage court appointments</p>
      </motion.div>
      <Card className="">
        <CardContent className="p-8 text-center">
          <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium">Appointment Scheduling</h3>
          <p className="text-muted-foreground">Feature coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Appointments
