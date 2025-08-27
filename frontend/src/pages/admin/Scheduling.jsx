import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Clock, Users, Building2 } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

const Scheduling = () => {
  const [date, setDate] = React.useState(new Date());

  const courtrooms = ['Courtroom 1', 'Courtroom 2', 'Courtroom 3'];
  const judges = ['Judge Smith', 'Judge Lee', 'Judge Davis'];
  const attorneys = ['Attorney Jones', 'Attorney Brown', 'Attorney Green'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
      <h1 className="text-3xl font-bold text-foreground">Scheduling Management</h1>
      <p className="text-muted-foreground">Efficiently manage hearing dates, courtroom availability, and coordinate calendars for all parties</p>
      </div>

      {/* Set Hearing Dates Section */}
                <div className="grid grid-cols-2 gap-4">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><CalendarIcon className="h-5 w-5" /><span>Set Hearing Dates</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Case ID" />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Input type="time" placeholder="Hearing Time" />
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Courtroom" /></SelectTrigger>
            <SelectContent>
              {courtrooms.map(room => <SelectItem key={room} value={room}>{room}</SelectItem>)}
            </SelectContent>
          </Select>
          <Button className="w-full">Schedule Hearing</Button>
        </CardContent>
      </Card>

      {/* Manage Courtroom Availability Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Building2 className="h-5 w-5" /><span>Manage Courtroom Availability</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Courtroom" /></SelectTrigger>
            <SelectContent>
              {courtrooms.map(room => <SelectItem key={room} value={room}>{room}</SelectItem>)}
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Set Availability Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="unavailable">Unavailable</SelectItem>
              <SelectItem value="maintenance">Under Maintenance</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Update Courtroom Status</Button>
        </CardContent>
      </Card>
      </div>

      {/* Coordinate Calendars Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Users className="h-5 w-5" /><span>Coordinate Calendars</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Judge" /></SelectTrigger>
            <SelectContent>
              {judges.map(judge => <SelectItem key={judge} value={judge}>{judge}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Attorney" /></SelectTrigger>
            <SelectContent>
              {attorneys.map(attorney => <SelectItem key={attorney} value={attorney}>{attorney}</SelectItem>)}
            </SelectContent>
          </Select>
          <Button className="w-full">View Combined Calendar</Button>
          <p className="text-sm text-muted-foreground">Integrate and view schedules for judges, attorneys, and other relevant parties to avoid conflicts.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Scheduling;


