import React from 'react';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CalendarEvent } from '../../types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { X, Trash2 } from 'lucide-react';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  start: yup.string().required('Start date is required'),
  end: yup.string().required('End date is required'),
  description: yup.string().optional(),
  type: yup.string().oneOf(['meeting', 'call', 'task', 'deadline', 'email', 'other']).required(),
  priority: yup.string().oneOf(['low', 'medium', 'high']).required(),
});

type EventFormData = {
  title: string;
  start: string;
  end: string;
  description?: string;
  type: 'meeting' | 'call' | 'task' | 'deadline' | 'email' | 'other';
  priority: 'low' | 'medium' | 'high';
};

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: CalendarEvent | null;
  onSave: (data: Partial<CalendarEvent>) => void;
  onDelete: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  event,
  onSave,
  onDelete,
}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormData>({
    resolver: yupResolver(schema) as Resolver<EventFormData>,
    defaultValues: event ? {
      title: event.title,
      start: event.start,
      end: event.end,
      description: event.description || '',
      type: event.type,
      priority: event.priority,
    } : {
      title: '',
      start: '',
      end: '',
      description: '',
      type: 'meeting',
      priority: 'medium',
    },
  });

  React.useEffect(() => {
    if (event) {
      reset({
        title: event.title,
        start: event.start,
        end: event.end,
        description: event.description || '',
        type: event.type,
        priority: event.priority,
      });
    } else {
      reset({
        title: '',
        start: '',
        end: '',
        description: '',
        type: 'meeting',
        priority: 'medium',
      });
    }
  }, [event, reset]);

  if (!isOpen) return null;

  const onSubmit: SubmitHandler<EventFormData> = (data) => {
    onSave(data);
    reset();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{event ? 'Edit Event' : 'Add Event'}</CardTitle>
            <div className="flex items-center gap-2">
              {event && (
                <Button variant="ghost" size="icon" onClick={onDelete}>
                  <Trash2 size={16} />
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X size={16} />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <Input {...register('title')} />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Type</label>
              <select
                {...register('type')}
                className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md"
              >
                <option value="meeting">Meeting</option>
                <option value="call">Call</option>
                <option value="task">Task</option>
                <option value="deadline">Deadline</option>
                <option value="email">Email</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Priority</label>
              <select
                {...register('priority')}
                className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Start</label>
                <Input type="datetime-local" {...register('start')} />
                {errors.start && (
                  <p className="text-sm text-red-500">{errors.start.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium">End</label>
                <Input type="datetime-local" {...register('end')} />
                {errors.end && (
                  <p className="text-sm text-red-500">{errors.end.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                {...register('description')}
                className="w-full min-h-[80px] px-3 py-2 text-sm border border-input bg-background rounded-md resize-none"
                placeholder="Event description..."
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                {event ? 'Update' : 'Create'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
