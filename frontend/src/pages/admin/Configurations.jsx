import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Settings, Bell, Repeat, Workflow } from 'lucide-react';

const Configurations = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
      <h1 className="text-3xl font-bold text-foreground">System Configurations</h1>
      <p className="text-muted-foreground">Customize workflows, manage notifications, and set up automated alerts and reminders</p>
      </div>

      {/* Customize Workflows Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Workflow className="h-5 w-5" /><span>Customize Workflows</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-md font-medium">Case Assignment Workflow:</p>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Workflow Template" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="manual">Manual Assignment</SelectItem>
              <SelectItem value="round_robin">Round Robin</SelectItem>
              <SelectItem value="load_balanced">Load Balanced</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Save Workflow Settings</Button>

          <p className="text-md font-medium mt-6">Document Approval Process:</p>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Approval Flow" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="single_approver">Single Approver</SelectItem>
              <SelectItem value="multi_stage">Multi-Stage Approval</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Save Approval Settings</Button>
        </CardContent>
      </Card>

      {/* Notifications and Updates Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Bell className="h-5 w-5" /><span>Notifications and Updates</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications" className="text-md font-medium">Email Notifications</Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications" className="text-md font-medium">SMS Notifications</Label>
            <Switch id="sms-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="in-app-notifications" className="text-md font-medium">In-App Notifications</Label>
            <Switch id="in-app-notifications" defaultChecked />
          </div>
          <Button className="w-full">Update Notification Settings</Button>
        </CardContent>
      </Card>

      {/* Automated Alerts and Reminders Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Repeat className="h-5 w-5" /><span>Automated Alerts and Reminders</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-md font-medium">Upcoming Hearing Reminders:</p>
          <Input placeholder="Remind X days before hearing (e.g., 3)" type="number" />
          <Button className="w-full">Set Hearing Reminders</Button>

          <p className="text-md font-medium mt-6">Overdue Case Alerts:</p>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Alert Frequency" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Set Overdue Alerts</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Configurations;


