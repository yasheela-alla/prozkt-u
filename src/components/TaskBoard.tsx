'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from '@/components/ui/kanban';
import type { DragEndEvent } from '@dnd-kit/core';
import { Task, taskStatuses, tasks } from '@/lib/data';

interface TaskBoardProps {
  statusFilter?: string | null;
}

export function TaskBoard({ statusFilter }: TaskBoardProps = {}) {
  const [tasksList, setTasksList] = useState(tasks);
  const [filteredStatus, setFilteredStatus] = useState<string | null>(statusFilter || null);

  // Update filtered status when statusFilter prop changes
  useEffect(() => {
    if (statusFilter !== undefined) {
      setFilteredStatus(statusFilter);
    }
  }, [statusFilter]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const status = taskStatuses.find((status) => status.id === over.id);

    if (!status) {
      return;
    }

    setTasksList(
      tasksList.map((task) => {
        if (task.id === active.id) {
          return { ...task, status };
        }

        return task;
      })
    );
  };

  // If a status filter is applied, only show that column
  const displayStatuses = filteredStatus
    ? taskStatuses.filter(status => status.id === filteredStatus)
    : taskStatuses;

  return (
    <div className="flex-1 p-4 overflow-auto">
      <KanbanProvider onDragEnd={handleDragEnd}>
        {displayStatuses.map((status) => (
          <KanbanBoard key={status.id} id={status.id}>
            <KanbanHeader name={status.name} color={status.color} />
            <KanbanCards>
              {tasksList
                .filter((task) => task.status.id === status.id)
                .map((task, index) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    index={index}
                    statusId={status.id}
                  />
                ))}
            </KanbanCards>
          </KanbanBoard>
        ))}
      </KanbanProvider>
    </div>
  );
}

interface TaskCardProps {
  task: Task;
  index: number;
  statusId: string;
}

const TaskCard = ({ task, index, statusId }: TaskCardProps) => {
  // Priority colors
  const priorityColors = {
    Low: "bg-blue-100 text-blue-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-orange-100 text-orange-800",
    Critical: "bg-red-100 text-red-800"
  };

  return (
    <KanbanCard
      id={task.id}
      name={task.name}
      parent={statusId}
      index={index}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-sm">{task.name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {task.description}
            </p>
          </div>
          {task.assignee && (
            <Avatar className="h-6 w-6 shrink-0">
              <AvatarImage src={task.assignee.image} alt={task.assignee.name} />
              <AvatarFallback>
                {task.assignee.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
            {task.project && (
              <span className="text-xs text-muted-foreground">
                {task.project.name}
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {format(task.endAt, 'MMM d')}
          </span>
        </div>
      </div>
    </KanbanCard>
  );
};
