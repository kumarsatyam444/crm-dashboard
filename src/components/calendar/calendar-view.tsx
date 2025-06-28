import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { addEvent, updateEvent, deleteEvent } from '../../store/slices/calendarSlice';
import { CalendarEvent } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { EventModal } from './event-modal';

export const CalendarView: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.calendar.events);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateSelect = (selectInfo: any) => {
    setSelectedDate(selectInfo.startStr);
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleEventClick = (clickInfo: any) => {
    const event = events.find(e => e.id === clickInfo.event.id);
    if (event) {
      setSelectedEvent(event);
      setIsModalOpen(true);
    }
  };

  const handleEventDrop = (dropInfo: any) => {
    const event = events.find(e => e.id === dropInfo.event.id);
    if (event) {
      const updatedEvent: CalendarEvent = {
        ...event,
        start: dropInfo.event.startStr,
        end: dropInfo.event.endStr || dropInfo.event.startStr,
        updatedAt: new Date().toISOString(),
      };
      dispatch(updateEvent(updatedEvent));
    }
  };

  const handleSaveEvent = (eventData: Partial<CalendarEvent>) => {
    if (selectedEvent) {
      const updatedEvent: CalendarEvent = {
        ...selectedEvent,
        ...eventData,
        updatedAt: new Date().toISOString(),
      };
      dispatch(updateEvent(updatedEvent));
    } else {
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        title: eventData.title || '',
        start: eventData.start || selectedDate,
        end: eventData.end || selectedDate,
        description: eventData.description || '',
        type: eventData.type || 'meeting',
        priority: eventData.priority || 'medium',
        status: 'scheduled',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      dispatch(addEvent(newEvent));
    }
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      dispatch(deleteEvent(selectedEvent.id));
      setIsModalOpen(false);
      setSelectedEvent(null);
    }
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Calendar</CardTitle>
            <Button onClick={() => {
              setSelectedDate(new Date().toISOString().split('T')[0]);
              setSelectedEvent(null);
              setIsModalOpen(true);
            }}>
              <Plus size={16} className="mr-2" />
              Add Event
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={events.map(event => ({
              id: event.id,
              title: event.title,
              start: event.start,
              end: event.end,
              backgroundColor: getEventColor(event.type),
              borderColor: getEventColor(event.type),
            }))}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventDrop={handleEventDrop}
            height="auto"
          />
        </CardContent>
      </Card>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={selectedEvent}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
};

const getEventColor = (type: string) => {
  switch (type) {
    case 'meeting': return '#3b82f6';
    case 'call': return '#10b981';
    case 'task': return '#f59e0b';
    case 'deadline': return '#ef4444';
    case 'email': return '#8b5cf6';
    case 'other': return '#6b7280';
    default: return '#6b7280';
  }
};
