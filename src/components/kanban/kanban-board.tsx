import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { updateTaskStatus } from '../../store/slices/taskSlice';
import { Task } from '../../types';
import { Card, CardContent} from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, User } from 'lucide-react';

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-100 dark:bg-gray-800' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-100 dark:bg-blue-900' },
  { id: 'review', title: 'Review', color: 'bg-yellow-100 dark:bg-yellow-900' },
  { id: 'done', title: 'Done', color: 'bg-green-100 dark:bg-green-900' },
];

const TaskCard: React.FC<{ task: Task; index: number }> = ({ task, index }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      case 'urgent': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'No due date';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`mb-3 ${snapshot.isDragging ? 'rotate-2' : ''}`}
        >
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
              </div>
              {task.description && (
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {task.description}
                </p>
              )}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                {task.assignee && (
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{task.assignee}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{formatDate(task.dueDate)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export const KanbanBoard: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch(updateTaskStatus({
      id: draggableId,
      status: destination.droppableId as Task['status']
    }));
  };

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => (
            <div key={column.id} className={`rounded-lg p-4 ${column.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{column.title}</h3>
                <Badge variant="secondary">
                  {getTasksByStatus(column.id).length}
                </Badge>
              </div>
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`min-h-[200px] ${
                      snapshot.isDraggingOver ? 'bg-accent/50' : ''
                    } rounded-md transition-colors`}
                  >
                    {getTasksByStatus(column.id).map((task, index) => (
                      <TaskCard key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};
