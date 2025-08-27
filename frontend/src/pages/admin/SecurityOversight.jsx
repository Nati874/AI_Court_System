import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ShieldCheck, Eye, Lock, Key, AlertTriangle } from 'lucide-react';

const SecurityOversight = () => {
  const loginActivity = [
    { id: 'LOG-001', user: 'Judge Smith', timestamp: '2025-12-01 10:30 AM', ip: '192.168.1.10', status: 'Success' },
    { id: 'LOG-002', user: 'Clerk Johnson', timestamp: '2025-12-01 10:25 AM', ip: '192.168.1.12', status: 'Failed (Wrong Password)' },
    { id: 'LOG-003', user: 'Admin User', timestamp: '2025-12-01 09:00 AM', ip: '192.168.1.5', status: 'Success' },
  ];

  const auditTrails = [
    { id: 'AUD-001', user: 'Judge Smith', action: 'Updated Case 2023-001', timestamp: '2025-12-01 10:35 AM' },
    { id: 'AUD-002', user: 'Clerk Johnson', action: 'Accessed Document DOC-005', timestamp: '2025-12-01 10:20 AM' },
    { id: 'AUD-003', user: 'Admin User', action: 'Changed User Role for USR-003', timestamp: '2025-12-01 09:15 AM' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
      <h1 className="text-3xl font-bold text-foreground">Security Oversight</h1>
      <p className="text-muted-foreground">Monitor system security, audit user activities, and enforce data protection protocols</p>
      </div>

      {/* Monitor Login Activity Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Eye className="h-5 w-5" /><span>Monitor Login Activity</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input placeholder="Search by User or IP Address" className="flex-1" />
            <Button>Search</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loginActivity.map(activity => (
                <TableRow key={activity.id}>
                  <TableCell>{activity.id}</TableCell>
                  <TableCell>{activity.user}</TableCell>
                  <TableCell>{activity.timestamp}</TableCell>
                  <TableCell>{activity.ip}</TableCell>
                  <TableCell>{activity.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button variant="outline" className="w-full">View All Login Records</Button>
        </CardContent>
      </Card>

      {/* Audit Trails Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><AlertTriangle className="h-5 w-5" /><span>Audit Trails</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input placeholder="Search by User or Action" className="flex-1" />
            <Button>Search</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditTrails.map(trail => (
                <TableRow key={trail.id}>
                  <TableCell>{trail.id}</TableCell>
                  <TableCell>{trail.user}</TableCell>
                  <TableCell>{trail.action}</TableCell>
                  <TableCell>{trail.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button variant="outline" className="w-full">View All Audit Logs</Button>
        </CardContent>
      </Card>

      {/* Enforce Password Policies and Data Protection Protocols Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Lock className="h-5 w-5" /><span>Security Policies</span></CardTitle>
        </CardHeader>
                        <div className="grid grid-cols-2 gap-4">
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">Password Policies</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Minimum length: 8 characters</li>
            <li>Requires uppercase, lowercase, numbers, and symbols</li>
            <li>Password expiration: 90 days</li>
          </ul>
          <Button className="w-full">Configure Password Policy</Button>
          </CardContent>

        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold">Data Protection Protocols</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Data encryption at rest and in transit</li>
            <li>Regular data backups and disaster recovery plans</li>
            <li>Access control based on least privilege principle</li>
          </ul>
          <Button className="w-full">Review Data Protection</Button>
        </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

export default SecurityOversight;


