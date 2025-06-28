export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  allDay?: boolean;
  color?: string;
  type: 'meeting' | 'call' | 'email' | 'task' | 'deadline' | 'other';
  attendees?: string[];
  location?: string;
  customerId?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
  createdAt: string;
  updatedAt: string;
  reminders?: {
    type: 'email' | 'popup' | 'sms';
    minutes: number;
  }[];
}

export interface CalendarEventFormData {
  title: string;
  description?: string;
  start: string;
  end: string;
  allDay?: boolean;
  type: 'meeting' | 'call' | 'email' | 'task' | 'deadline' | 'other';
  attendees?: string[];
  location?: string;
  customerId?: string;
  priority: 'low' | 'medium' | 'high';
  reminders?: {
    type: 'email' | 'popup' | 'sms';
    minutes: number;
  }[];
}

export interface CalendarView {
  type: 'month' | 'week' | 'day' | 'agenda';
  date: string;
}

export interface CalendarState {
  events: CalendarEvent[];
  loading: boolean;
  error: string | null;
  selectedEvent: CalendarEvent | null;
  view: CalendarView;
  filters: {
    type?: string[];
    priority?: string[];
    status?: string[];
  };
}
