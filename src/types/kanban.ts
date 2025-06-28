export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee?: string;
  assigneeAvatar?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  customerId?: string;
  estimatedHours?: number;
  actualHours?: number;
  attachments?: {
    id: string;
    name: string;
    url: string;
    type: string;
  }[];
  comments?: {
    id: string;
    text: string;
    author: string;
    createdAt: string;
  }[];
  checklist?: {
    id: string;
    text: string;
    completed: boolean;
  }[];
}

export interface KanbanColumn {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  color: string;
  limit?: number;
  order: number;
}

export interface TaskFormData {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee?: string;
  dueDate?: string;
  tags?: string[];
  customerId?: string;
  estimatedHours?: number;
}

export interface KanbanState {
  tasks: Task[];
  columns: KanbanColumn[];
  loading: boolean;
  error: string | null;
  selectedTask: Task | null;
  filters: {
    assignee?: string[];
    priority?: string[];
    tags?: string[];
    dueDate?: {
      start: string;
      end: string;
    };
  };
}

export interface DragResult {
  draggableId: string;
  type: string;
  source: {
    droppableId: string;
    index: number;
  };
  destination?: {
    droppableId: string;
    index: number;
  } | null;
  reason: 'DROP' | 'CANCEL';
}
