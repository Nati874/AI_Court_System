import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, ScrollText, TrendingUp, Clock, FileText, Scale, DollarSign, Users, Gavel, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
      <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
      <p className="text-muted-foreground">A comprehensive overview of court system performance, key metrics, and reporting tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Monitoring Card */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Performance Monitoring</CardTitle>
            <BarChart2 className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-md font-medium">Efficiency Metrics</p>
                <Progress value={75} className="w-[100%] mt-1" />
                <p className="text-sm text-muted-foreground">75% cases processed on time.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-md font-medium">Identify Delays</p>
                <p className="text-sm text-muted-foreground">Average delay: 2 days (down from 5 last month).</p>
              </div>
            </div>
            <Separator />
            <Button variant="outline" className="w-full">View Detailed Performance</Button>
          </CardContent>
        </Card>

        {/* Generate Reports Card */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Generate Reports</CardTitle>
            <ScrollText className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-purple-600" />
              <p className="text-md font-medium">Caseload Statistics</p>
            </div>
            <div className="flex items-center space-x-3">
              <Gavel className="h-5 w-5 text-orange-600" />
              <p className="text-md font-medium">Hearing Outcomes</p>
            </div>
            <div className="flex items-center space-x-3">
              <CalendarDays className="h-5 w-5 text-red-600" />
              <p className="text-md font-medium">Pending Cases</p>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="h-5 w-5 text-green-600" />
              <p className="text-md font-medium">Financial Reports</p>
            </div>
            <Separator />
            <Button className="w-full">Generate New Report</Button>
          </CardContent>
        </Card>

        {/* Quick Stats Card (New) */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">Quick Stats</CardTitle>
            <Users className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-md font-medium">Active Cases:</p>
              <span className="text-2xl font-bold text-foreground">1,245</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-md font-medium">Judges Online:</p>
              <span className="text-2xl font-bold text-foreground">12</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-md font-medium">Documents Uploaded Today:</p>
              <span className="text-2xl font-bold text-foreground">348</span>
            </div>
            <Separator />
            <p className="text-sm text-muted-foreground">Real-time data for quick insights.</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section (New) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Recent Activity</h2>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-green-500">•</span>
                <p className="text-md">Case #2023-0123 updated by Judge Smith. <span className="text-muted-foreground text-sm">5 minutes ago</span></p>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">•</span>
                <p className="text-md">New user account created: Clerk Johnson. <span className="text-muted-foreground text-sm">1 hour ago</span></p>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500">•</span>
                <p className="text-md">Hearing scheduled for Case #2023-0456. <span className="text-muted-foreground text-sm">3 hours ago</span></p>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-500">•</span>
                <p className="text-md">Document 


uploaded for Case #2023-0789. <span className="text-muted-foreground text-sm">Yesterday</span></p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </motion.div>
  );
};

export default Dashboard;


