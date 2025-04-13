"use client";

import { useState } from "react";
import { TaskBoard } from "@/components/TaskBoard";
import { TaskForm } from "@/components/TaskForm";
import { StatusFilter } from "@/components/StatusFilter";

export default function TasksPage() {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            View and manage all your tasks by status.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <StatusFilter
            selectedStatus={selectedStatus}
            onFilterChange={setSelectedStatus}
          />
          <TaskForm />
        </div>
      </div>

      <TaskBoard statusFilter={selectedStatus} />
    </div>
  );
}
