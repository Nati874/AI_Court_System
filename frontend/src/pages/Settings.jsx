import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Save,
  X,
  Palette,
  Bell,
  Globe,
  Lock,
  Info,
  User,
  Shield,
  Monitor,
  Volume2,
  Mail,
  Smartphone,
  Eye,
  EyeOff
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Settings = () => {
  const [preferences, setPreferences] = useState({
    // General Settings
    theme: 'system',
    language: 'en',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    
    // Notification Settings
    notifications: {
      email: true,
      push: true,
      sms: false,
      desktop: true,
      sound: true,
      caseUpdates: true,
      deadlineReminders: true,
      systemAlerts: true,
    },
    
    // Privacy Settings
    privacy: {
      profileVisibility: 'public',
      showOnlineStatus: true,
      allowDirectMessages: true,
      dataSharing: false,
    },
    
    // Security Settings
    security: {
      twoFactorAuth: false,
      passwordExpiry: 90,
      sessionTimeout: 30,
      loginAlerts: true,
    },
    
    // Display Settings
    display: {
      fontSize: 'medium',
      compactMode: false,
      showSidebar: true,
      animationsEnabled: true,
    },
  });

  useEffect(() => {
    // Load preferences from local storage on component mount
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(prevPrefs => ({ ...prevPrefs, ...parsed }));
      } catch (error) {
        console.error('Error parsing saved preferences:', error);
      }
    }
  }, []);

  const handlePreferenceChange = (category, key, value) => {
    setPreferences(prevPrefs => ({
      ...prevPrefs,
      [category]: typeof prevPrefs[category] === 'object' ? {
        ...prevPrefs[category],
        [key]: value,
      } : value,
    }));
  };

  const handleReset = () => {
    localStorage.removeItem('userPreferences');
    setPreferences({
      theme: 'system',
      language: 'en',
      timezone: 'UTC',
      dateFormat: 'MM/DD/YYYY',
      notifications: {
        email: true,
        push: true,
        sms: false,
        desktop: true,
        sound: true,
        caseUpdates: true,
        deadlineReminders: true,
        systemAlerts: true,
      },
      privacy: {
        profileVisibility: 'public',
        showOnlineStatus: true,
        allowDirectMessages: true,
        dataSharing: false,
      },
      security: {
        twoFactorAuth: false,
        passwordExpiry: 90,
        sessionTimeout: 30,
        loginAlerts: true,
      },
      display: {
        fontSize: 'medium',
        compactMode: false,
        showSidebar: true,
        animationsEnabled: true,
      },
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Customize and update your system preferences</p>
        </div>
        <Button className="hover-lift">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </motion.div>
 
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="general" className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-1">
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-1">
                <Lock className="h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="display" className="flex items-center gap-1">
                <Monitor className="h-4 w-4" />
                Display
              </TabsTrigger>
            </TabsList>

            {/* General Settings */}
            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Appearance & Localization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select
                        value={preferences.theme}
                        onValueChange={(value) => handlePreferenceChange('theme', null, value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select
                        value={preferences.language}
                        onValueChange={(value) => handlePreferenceChange('language', null, value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="it">Italian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select
                        value={preferences.timezone}
                        onValueChange={(value) => handlePreferenceChange('timezone', null, value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="UTC">UTC</SelectItem>
                          <SelectItem value="EST">Eastern Time</SelectItem>
                          <SelectItem value="PST">Pacific Time</SelectItem>
                          <SelectItem value="CST">Central Time</SelectItem>
                          <SelectItem value="MST">Mountain Time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateFormat">Date Format</Label>
                      <Select
                        value={preferences.dateFormat}
                        onValueChange={(value) => handlePreferenceChange('dateFormat', null, value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select date format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                          <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                          <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Delivery Methods</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <Label>Email Notifications</Label>
                          </div>
                          <Switch
                            checked={preferences.notifications.email}
                            onCheckedChange={(checked) => handlePreferenceChange('notifications', 'email', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4" />
                            <Label>Push Notifications</Label>
                          </div>
                          <Switch
                            checked={preferences.notifications.push}
                            onCheckedChange={(checked) => handlePreferenceChange('notifications', 'push', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4" />
                            <Label>SMS Notifications</Label>
                          </div>
                          <Switch
                            checked={preferences.notifications.sms}
                            onCheckedChange={(checked) => handlePreferenceChange('notifications', 'sms', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Monitor className="h-4 w-4" />
                            <Label>Desktop Notifications</Label>
                          </div>
                          <Switch
                            checked={preferences.notifications.desktop}
                            onCheckedChange={(checked) => handlePreferenceChange('notifications', 'desktop', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Volume2 className="h-4 w-4" />
                            <Label>Sound Alerts</Label>
                          </div>
                          <Switch
                            checked={preferences.notifications.sound}
                            onCheckedChange={(checked) => handlePreferenceChange('notifications', 'sound', checked)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium">Notification Types</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>Case Updates</Label>
                          <Switch
                            checked={preferences.notifications.caseUpdates}
                            onCheckedChange={(checked) => handlePreferenceChange('notifications', 'caseUpdates', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>Deadline Reminders</Label>
                          <Switch
                            checked={preferences.notifications.deadlineReminders}
                            onCheckedChange={(checked) => handlePreferenceChange('notifications', 'deadlineReminders', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>System Alerts</Label>
                          <Switch
                            checked={preferences.notifications.systemAlerts}
                            onCheckedChange={(checked) => handlePreferenceChange('notifications', 'systemAlerts', checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Privacy & Visibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Profile Visibility</Label>
                        <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                      </div>
                      <Select
                        value={preferences.privacy.profileVisibility}
                        onValueChange={(value) => handlePreferenceChange('privacy', 'profileVisibility', value)}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="colleagues">Colleagues Only</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Show Online Status</Label>
                        <p className="text-sm text-muted-foreground">Let others see when you're online</p>
                      </div>
                      <Switch
                        checked={preferences.privacy.showOnlineStatus}
                        onCheckedChange={(checked) => handlePreferenceChange('privacy', 'showOnlineStatus', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Allow Direct Messages</Label>
                        <p className="text-sm text-muted-foreground">Allow others to send you direct messages</p>
                      </div>
                      <Switch
                        checked={preferences.privacy.allowDirectMessages}
                        onCheckedChange={(checked) => handlePreferenceChange('privacy', 'allowDirectMessages', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Data Sharing</Label>
                        <p className="text-sm text-muted-foreground">Share anonymized usage data to improve the service</p>
                      </div>
                      <Switch
                        checked={preferences.privacy.dataSharing}
                        onCheckedChange={(checked) => handlePreferenceChange('privacy', 'dataSharing', checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Security & Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Switch
                        checked={preferences.security.twoFactorAuth}
                        onCheckedChange={(checked) => handlePreferenceChange('security', 'twoFactorAuth', checked)}
                      />
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Password Expiry (days)</Label>
                        <Input
                          type="number"
                          value={preferences.security.passwordExpiry}
                          onChange={(e) => handlePreferenceChange('security', 'passwordExpiry', parseInt(e.target.value) || 90)}
                          min="30"
                          max="365"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Session Timeout (minutes)</Label>
                        <Input
                          type="number"
                          value={preferences.security.sessionTimeout}
                          onChange={(e) => handlePreferenceChange('security', 'sessionTimeout', parseInt(e.target.value) || 30)}
                          min="5"
                          max="480"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Login Alerts</Label>
                        <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                      </div>
                      <Switch
                        checked={preferences.security.loginAlerts}
                        onCheckedChange={(checked) => handlePreferenceChange('security', 'loginAlerts', checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Display Settings */}
            <TabsContent value="display" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="h-5 w-5" />
                    Display & Interface
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Font Size</Label>
                      <Select
                        value={preferences.display.fontSize}
                        onValueChange={(value) => handlePreferenceChange('display', 'fontSize', value)}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Compact Mode</Label>
                        <p className="text-sm text-muted-foreground">Use a more compact interface layout</p>
                      </div>
                      <Switch
                        checked={preferences.display.compactMode}
                        onCheckedChange={(checked) => handlePreferenceChange('display', 'compactMode', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Show Sidebar</Label>
                        <p className="text-sm text-muted-foreground">Display the navigation sidebar by default</p>
                      </div>
                      <Switch
                        checked={preferences.display.showSidebar}
                        onCheckedChange={(checked) => handlePreferenceChange('display', 'showSidebar', checked)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Enable Animations</Label>
                        <p className="text-sm text-muted-foreground">Show smooth transitions and animations</p>
                      </div>
                      <Switch
                        checked={preferences.display.animationsEnabled}
                        onCheckedChange={(checked) => handlePreferenceChange('display', 'animationsEnabled', checked)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
      </motion.div>
        </div>
        </div>
  )
}

export default Settings

