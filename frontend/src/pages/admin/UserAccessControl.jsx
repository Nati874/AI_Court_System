import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { Alert } from '@/components/ui/alert'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { UserPlus, UserCog, Key, Search, Eye, EyeOff, Scale, Mail, Lock, UserMinus, User, Building, ArrowRight } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

const UserAccessControl = () => {
  const users = [
    { id: 'USR-001', name: 'Judge Smith', role: 'Judge', status: 'Active' },
    { id: 'USR-002', name: 'Clerk Johnson', role: 'Clerk', status: 'Active' },
    { id: 'USR-003', name: 'Attorney Brown', role: 'Attorney', status: 'Inactive' },
  ];

  const [alertMessage, setAlertMessage] = useState('');
  const [selectedUserToRemove, setSelectedUserToRemove] = useState('');
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    role: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const roles = [
    'Attorney',
    'Court Clerk',
    'Judge',
    'Police'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      setAlertMessage('Passwords do not match')
      return
    }

    if (!formData.agreeToTerms) {
      setAlertMessage('Please agree to the terms and conditions')
      return
    }

    setIsLoading(true)
    setAlertMessage("")
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      formData.firstName = ""
      formData.lastName = ""
      formData.email = ""
      formData.organization = ""
      formData.role = ""
      formData.username = ""
      formData.password = ""
      formData.confirmPassword = ""
      formData.agreeToTerms = false
      setShowPassword(false)
      setShowConfirmPassword(false)
      navigate('#existing-users')
    }, 1500)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      role: value
    }))
  }

  const handleRemoveUser = () => {
    // if (selectedUserToRemove) {
    //   setFormData(prevUsers => prevUsers.filter(user => user.id !== selectedUserToRemove));
    //   setAlertMessage(`User ${selectedUserToRemove} removed successfully.`);
    //   setSelectedUserToRemove('');
    // } else {
    //   setAlertMessage('Please select a user to remove.');
    // }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
      <h1 className="text-3xl font-bold text-foreground">User Access Control</h1>
      <p className="text-muted-foreground">Create and manage user accounts, assign roles, and define permissions within the system</p>
      </div>

      {/* Create and Manage User Accounts Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><UserPlus className="h-5 w-5" /><span>Create and Manage User Accounts</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="pl-10 transition-all-smooth focus:ring-2 focus:ring-primary"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="pl-10 transition-all-smooth focus:ring-2 focus:ring-primary"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 transition-all-smooth focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                {/* Organization */}
                <div>
                  <Label htmlFor="organization" className="text-sm font-medium">
                    Organization
                  </Label>
                  <div className="relative mt-1">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="pl-10 transition-all-smooth focus:ring-2 focus:ring-primary"
                      placeholder="Court station ID"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <Label htmlFor="role" className="text-sm font-medium">
                    Role
                  </Label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                {/* Username */}
                <div>
                  <Label htmlFor="username" className="text-sm font-medium">
                    Username
                  </Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={formData.username}
                      onChange={handleInputChange}
                      className="pl-10 transition-all-smooth focus:ring-2 focus:ring-primary"
                      placeholder="Create a username"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 transition-all-smooth focus:ring-2 focus:ring-primary"
                      placeholder="Create a password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 transition-all-smooth focus:ring-2 focus:ring-primary"
                      placeholder="Confirm your password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, agreeToTerms: checked }))
                    }
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the{' '}
                    <Button variant="link" type="button" className="p-0 h-auto text-sm">
                      Terms of Service
                    </Button>
                    {' '}and{' '}
                    <Button variant="link" type="button" className="p-0 h-auto text-sm">
                      Privacy Policy
                    </Button>
                  </Label>
                </div>

                {alertMessage && (
                  <Alert variant="destructive" className="mb-4 bg-blue-100 text-red-500 border-blue-300 whitespace-nowrap">
                    <p>{alertMessage}</p>
                  </Alert>
                )}
                <Button
                  type="submit"
                  className="w-full hover-lift"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Creating account...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Create Account</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
                </form>


          <h3 className="text-xl font-semibold mt-6 mb-4" id='existing-users'>Existing Users</h3>
          <div className="flex space-x-2 mb-4">
            <Input placeholder="Search users by name or ID" className="flex-1" />
            <Button><Search className="h-4 w-4" /></Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Assign Roles and Permissions Section */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><UserCog className="h-5 w-5" /><span>Assign Roles and Permissions</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select User" /></SelectTrigger>
            <SelectContent>
              {users.map(user => <SelectItem key={user.id} value={user.id}>{user.name}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Assign New Role" /></SelectTrigger>
            <SelectContent>
              {roles.map(role => <SelectItem key={role} value={role}>{role}</SelectItem>)}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">Define specific permissions for selected role (e.g., read-only, edit, admin access).</p>
          <Button className="w-full">Update User Role</Button>
        </CardContent>
      </Card>

        {/* Remove Account Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2"><UserMinus className="h-5 w-5" /><span>Remove User Account</span></CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Label htmlFor="removeUser">Select User to Remove</Label>
            <Select onValueChange={setSelectedUserToRemove} value={selectedUserToRemove}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select user" />
              </SelectTrigger>
              <SelectContent>
                {users.map(user => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name} ({user.role})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="destructive" className="w-full" onClick={handleRemoveUser}>
              Remove Account
            </Button>
          </CardContent>
        </Card>
        </div>
    </motion.div>
  );
};

export default UserAccessControl;


