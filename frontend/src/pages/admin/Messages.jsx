import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MessageSquare, Send, Inbox, Archive, Search } from 'lucide-react';

const Messages = () => {
  const messages = [
    { id: 'MSG-001', sender: 'Judge Smith', subject: 'Regarding Case 2023-005', date: '2025-12-01 11:00 AM', status: 'Unread' },
    { id: 'MSG-002', sender: 'Clerk Johnson', subject: 'Document Request', date: '2025-11-30 03:45 PM', status: 'Read' },
    { id: 'MSG-003', sender: 'Attorney Brown', subject: 'Hearing Schedule Change', date: '2025-11-29 09:15 AM', status: 'Read' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
      <h1 className="text-3xl font-bold text-foreground">Messages</h1>
      <p className="text-muted-foreground">Communicate securely with other courtroom live accounts</p>
      </div>

      {/* Send New Message Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Send className="h-5 w-5" /><span>Send New Message</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Recipient (e.g., Judge Smith, Clerk Department)" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Your message..." rows={5} />
          <Button className="w-full">Send Message</Button>
        </CardContent>
      </Card>

      {/* Inbox Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Inbox className="h-5 w-5" /><span>Inbox</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2 mb-4">
            <Input placeholder="Search messages" className="flex-1" />
            <Button><Search className="h-4 w-4" /></Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sender</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map(msg => (
                <TableRow key={msg.id} className={msg.status === 'Unread' ? 'font-bold' : ''}>
                  <TableCell>{msg.sender}</TableCell>
                  <TableCell>{msg.subject}</TableCell>
                  <TableCell>{msg.date}</TableCell>
                  <TableCell>{msg.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="secondary" size="sm"><Archive className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button variant="outline" className="w-full">View All Messages</Button>
        </CardContent>
      </Card>

      {/* Sent Messages Section (Placeholder) */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Send className="h-5 w-5" /><span>Sent Messages</span></CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Your sent messages will appear here.</p>
          <Button variant="outline" className="w-full mt-4">View Sent Messages</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Messages;


