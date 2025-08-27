import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Send, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Messages = () => {
  const messages = [
    { id: 1, sender: 'Judge Wilson', message: 'Please review the case documents for tomorrow\'s hearing.', time: '2 hours ago' },
    { id: 2, sender: 'Court Clerk', message: 'New evidence has been submitted for case CV-2024-001.', time: '4 hours ago' },
    { id: 3, sender: 'Attorney Smith', message: 'Request for case postponement submitted.', time: '1 day ago' }
  ]

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground">Communication center for court personnel</p>
      </motion.div>

      <div className="grid gap-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover-lift">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold">{message.sender}</h4>
                      <span className="text-sm text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-muted-foreground mt-1">{message.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="">
        <CardHeader>
          <CardTitle>Send Message</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Type your message..." className="flex-1" />
            <Button>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Messages

