import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Upload, FolderOpen, Tag, Lock, Search } from 'lucide-react';

const DocumentHandling = () => {
  const documents = [
    { id: 'DOC-001', name: 'Case 2023-001 Filing', category: 'Filings', access: 'Restricted', uploadedBy: 'Clerk A', uploadDate: '2025-11-01' },
    { id: 'DOC-002', name: 'Order for Hearing 2023-002', category: 'Orders', access: 'Public', uploadedBy: 'Judge B', uploadDate: '2025-10-28' },
    { id: 'DOC-003', name: 'Transcript of Witness Testimony', category: 'Transcripts', access: 'Confidential', uploadedBy: 'Clerk C', uploadDate: '2025-11-05' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-8"
    >
      <div>
      <h1 className="text-3xl font-bold text-foreground">Document Handling</h1>
      <p className="text-muted-foreground">Manage all legal documents, ensuring proper categorization and access control</p>
      </div>

      {/* Upload Legal Documents Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Upload className="h-5 w-5" /><span>Upload Legal Documents</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="file" />
          <Input placeholder="Document Title" />
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="filings">Filings</SelectItem>
              <SelectItem value="orders">Orders</SelectItem>
              <SelectItem value="transcripts">Transcripts</SelectItem>
              <SelectItem value="evidence">Evidence</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Upload Document</Button>
        </CardContent>
      </Card>

      {/* Manage Legal Documents Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><FolderOpen className="h-5 w-5" /><span>Manage Legal Documents</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input placeholder="Search by Document Name or ID" className="flex-1" />
            <Button><Search className="h-4 w-4" /></Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Access</TableHead>
                <TableHead>Uploaded By</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map(doc => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.id}</TableCell>
                  <TableCell>{doc.name}</TableCell>
                  <TableCell>{doc.category}</TableCell>
                  <TableCell>{doc.access}</TableCell>
                  <TableCell>{doc.uploadedBy}</TableCell>
                  <TableCell>{doc.uploadDate}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="secondary" size="sm">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Ensure Proper Categorization Section */}
                <div className="grid grid-cols-2 gap-4">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Tag className="h-5 w-5" /><span>Ensure Proper Categorization</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Document to Recategorize" /></SelectTrigger>
            <SelectContent>
              {documents.map(doc => <SelectItem key={doc.id} value={doc.id}>{doc.name} ({doc.id})</SelectItem>)}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="New Category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="filings">Filings</SelectItem>
              <SelectItem value="orders">Orders</SelectItem>
              <SelectItem value="transcripts">Transcripts</SelectItem>
              <SelectItem value="evidence">Evidence</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Recategorize Document</Button>
        </CardContent>
      </Card>

      {/* Access Control Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2"><Lock className="h-5 w-5" /><span>Access Control</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Select Document for Access Control" /></SelectTrigger>
            <SelectContent>
              {documents.map(doc => <SelectItem key={doc.id} value={doc.id}>{doc.name} ({doc.id})</SelectItem>)}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full"><SelectValue placeholder="Set Access Level" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="restricted">Restricted</SelectItem>
              <SelectItem value="confidential">Confidential</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">Update Access Level</Button>
        </CardContent>
      </Card>
      </div>
    </motion.div>
  );
};

export default DocumentHandling;


