export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  value: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: string;
  createdAt: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  description?: string;
  type: 'meeting' | 'call' | 'task' | 'deadline';
}

export interface SalesData {
  month: string;
  sales: number;
  revenue: number;
  customers: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'sales' | 'support';
  avatar?: string;
}

export interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
}
