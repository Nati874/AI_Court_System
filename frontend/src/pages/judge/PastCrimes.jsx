import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Calendar, User, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const PastCrimes = () => {
  const crimes = [
    { id: 1, type: 'Theft', location: 'Downtown', date: '2024-01-10', severity: 'Medium', status: 'Resolved' },
    { id: 2, type: 'Assault', location: 'Park Avenue', date: '2024-01-08', severity: 'High', status: 'Under Investigation' },
    { id: 3, type: 'Vandalism', location: 'Main Street', date: '2024-01-05', severity: 'Low', status: 'Resolved' }
  ]

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Past Crime Records</h1>
        <p className="text-muted-foreground">Historical crime data and records</p>
      </motion.div>

      <div className="grid gap-4">
        {crimes.map((crime, index) => (
          <motion.div
            key={crime.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{crime.type}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {crime.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {crime.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={
                      crime.severity === 'High' ? 'bg-red-100 text-red-800' :
                      crime.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }>
                      {crime.severity}
                    </Badge>
                    <Badge variant="outline">{crime.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PastCrimes

