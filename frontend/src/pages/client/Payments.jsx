import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  CreditCard, 
  DollarSign, 
  Download, 
  Calendar, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Receipt,
  TrendingUp,
  FileText,
  Plus
} from 'lucide-react'

const Payments = () => {
  const [selectedPayment, setSelectedPayment] = useState(null)

  const outstandingPayments = [
    {
      id: 1,
      type: 'Court Filing Fee',
      case: 'CASE-001',
      amount: 450,
      dueDate: '2024-08-25',
      description: 'Motion to dismiss filing fee',
      status: 'overdue',
      daysOverdue: 2
    },
    {
      id: 2,
      type: 'Attorney Fees',
      case: 'CASE-002',
      amount: 2500,
      dueDate: '2024-08-30',
      description: 'Legal representation - July billing',
      status: 'due',
      daysLeft: 16
    },
    {
      id: 3,
      type: 'Settlement Payment',
      case: 'CASE-003',
      amount: 15000,
      dueDate: '2024-09-15',
      description: 'Agreed settlement amount',
      status: 'upcoming',
      daysLeft: 32
    },
    {
      id: 4,
      type: 'Expert Witness Fee',
      case: 'CASE-001',
      amount: 750,
      dueDate: '2024-08-28',
      description: 'Technical expert consultation',
      status: 'due',
      daysLeft: 14
    }
  ]

  const paymentHistory = [
    {
      id: 1,
      date: '2024-08-10',
      type: 'Court Filing Fee',
      case: 'CASE-002',
      amount: 350,
      method: 'Credit Card',
      status: 'completed',
      receiptId: 'RCP-001'
    },
    {
      id: 2,
      date: '2024-08-05',
      type: 'Attorney Fees',
      case: 'CASE-001',
      amount: 3200,
      method: 'Bank Transfer',
      status: 'completed',
      receiptId: 'RCP-002'
    },
    {
      id: 3,
      date: '2024-07-28',
      type: 'Document Service Fee',
      case: 'CASE-003',
      amount: 125,
      method: 'Credit Card',
      status: 'completed',
      receiptId: 'RCP-003'
    },
    {
      id: 4,
      date: '2024-07-20',
      type: 'Court Reporter Fee',
      case: 'CASE-002',
      amount: 450,
      method: 'Check',
      status: 'completed',
      receiptId: 'RCP-004'
    }
  ]

  const billingAnalytics = {
    totalBilled: 45750,
    totalPaid: 32500,
    outstanding: 13250,
    thisMonth: 8900,
    lastMonth: 6750,
    averageMonthly: 7825
  }

  const financialObligations = [
    {
      id: 1,
      case: 'CASE-001',
      totalAmount: 8500,
      paidAmount: 5200,
      remainingAmount: 3300,
      nextPayment: '2024-08-25',
      paymentPlan: true
    },
    {
      id: 2,
      case: 'CASE-002',
      totalAmount: 12000,
      paidAmount: 9500,
      remainingAmount: 2500,
      nextPayment: '2024-08-30',
      paymentPlan: false
    },
    {
      id: 3,
      case: 'CASE-003',
      totalAmount: 25000,
      paidAmount: 10000,
      remainingAmount: 15000,
      nextPayment: '2024-09-15',
      paymentPlan: true
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'bg-red-100 text-red-800'
      case 'due': return 'bg-yellow-100 text-yellow-800'
      case 'upcoming': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'overdue': return <AlertTriangle className="h-4 w-4" />
      case 'due': return <Clock className="h-4 w-4" />
      case 'upcoming': return <Calendar className="h-4 w-4" />
      case 'completed': return <CheckCircle className="h-4 w-4" />
      default: return <Clock className="h-4 w-4" />
    }
  }

  const calculateProgress = (paid, total) => {
    return (paid / total) * 100
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Payments & Billing</h1>
        <p className="text-gray-600 mt-1">Manage payments, view billing history, and track financial obligations.</p>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Billed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${billingAnalytics.totalBilled.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              All time billing
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${billingAnalytics.totalPaid.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {((billingAnalytics.totalPaid / billingAnalytics.totalBilled) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${billingAnalytics.outstanding.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Requires payment
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">${billingAnalytics.thisMonth.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +{(((billingAnalytics.thisMonth - billingAnalytics.lastMonth) / billingAnalytics.lastMonth) * 100).toFixed(1)}% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="outstanding" className="space-y-6">
        <TabsList>
          <TabsTrigger value="outstanding">Outstanding Payments</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="obligations">Financial Obligations</TabsTrigger>
          <TabsTrigger value="make-payment">Make Payment</TabsTrigger>
        </TabsList>

        {/* Outstanding Payments Tab */}
        <TabsContent value="outstanding">
          <Card>
            <CardHeader>
              <CardTitle>Outstanding Payments</CardTitle>
              <CardDescription>
                Payments that require immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {outstandingPayments.map(payment => (
                  <div key={payment.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{payment.type}</h4>
                          <Badge className={getStatusColor(payment.status)}>
                            {getStatusIcon(payment.status)}
                            <span className="ml-1">
                              {payment.status === 'overdue' 
                                ? `${payment.daysOverdue} days overdue`
                                : payment.status === 'due'
                                ? `Due in ${payment.daysLeft} days`
                                : `${payment.daysLeft} days left`
                              }
                            </span>
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{payment.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Case: {payment.case}</span>
                          <span>Due: {payment.dueDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">${payment.amount.toLocaleString()}</div>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm">
                            <CreditCard className="h-4 w-4 mr-2" />
                            Pay Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment History Tab */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>
                Record of all completed payments and transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentHistory.map(payment => (
                  <div key={payment.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{payment.type}</h4>
                          <Badge className={getStatusColor(payment.status)}>
                            {getStatusIcon(payment.status)}
                            <span className="ml-1">{payment.status}</span>
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Date:</span> {payment.date}
                          </div>
                          <div>
                            <span className="font-medium">Method:</span> {payment.method}
                          </div>
                          <div>
                            <span className="font-medium">Case:</span> {payment.case}
                          </div>
                          <div>
                            <span className="font-medium">Receipt:</span> {payment.receiptId}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">${payment.amount.toLocaleString()}</div>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Download className="h-4 w-4 mr-2" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Obligations Tab */}
        <TabsContent value="obligations">
          <Card>
            <CardHeader>
              <CardTitle>Financial Obligations by Case</CardTitle>
              <CardDescription>
                Track financial obligations and payment progress for each case
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {financialObligations.map(obligation => {
                  const progress = calculateProgress(obligation.paidAmount, obligation.totalAmount)
                  return (
                    <div key={obligation.id} className="border rounded-lg p-4 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg">{obligation.case}</h4>
                          {obligation.paymentPlan && (
                            <Badge variant="outline" className="mt-1">
                              Payment Plan Active
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Total Amount</div>
                          <div className="text-xl font-bold">${obligation.totalAmount.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-sm text-gray-600">Paid</div>
                          <div className="text-lg font-semibold text-green-600">
                            ${obligation.paidAmount.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                          <div className="text-sm text-gray-600">Remaining</div>
                          <div className="text-lg font-semibold text-red-600">
                            ${obligation.remainingAmount.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm text-gray-600">Next Payment</div>
                          <div className="text-lg font-semibold text-blue-600">
                            {obligation.nextPayment}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Payment Progress</span>
                          <span>{progress.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Make Payment Tab */}
        <TabsContent value="make-payment">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Make a Payment</CardTitle>
                <CardDescription>
                  Pay fines, fees, or settlements electronically
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="paymentType">Payment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="court-fee">Court Filing Fee</SelectItem>
                      <SelectItem value="attorney-fee">Attorney Fees</SelectItem>
                      <SelectItem value="settlement">Settlement Payment</SelectItem>
                      <SelectItem value="fine">Fine or Penalty</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="associatedCase">Associated Case</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="case-001">CASE-001: Smith vs. Johnson</SelectItem>
                      <SelectItem value="case-002">CASE-002: Davis Estate</SelectItem>
                      <SelectItem value="case-003">CASE-003: Employment Case</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount">Payment Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="Payment description"
                  />
                </div>

                <div>
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="debit-card">Debit Card</SelectItem>
                      <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common payment and billing actions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Receipt className="h-4 w-4 mr-2" />
                  Download All Receipts
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Billing Report
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Set Payment Reminders
                </Button>

                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Setup Payment Plan
                </Button>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Payment Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Outstanding Payments:</span>
                      <span className="font-medium">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Outstanding:</span>
                      <span className="font-medium text-red-600">
                        ${outstandingPayments.reduce((sum, p) => sum + p.amount, 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next Due Date:</span>
                      <span className="font-medium">Aug 25, 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Payments

