"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TaskCategory = {
  label: string;
  count: number;
  color: string;
};

const taskDistribution: TaskCategory[] = [
  { label: "Design", count: 35, color: "bg-blue-500" },
  { label: "Development", count: 45, color: "bg-purple-500" },
  { label: "Research", count: 15, color: "bg-emerald-500" },
  { label: "Planning", count: 5, color: "bg-amber-500" },
];

export function TaskDistributionChart() {
  const total = taskDistribution.reduce((acc, item) => acc + item.count, 0);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Task Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="h-4 w-full flex rounded-full overflow-hidden">
            {taskDistribution.map((category, index) => {
              const width = Math.round((category.count / total) * 100);
              return (
                <div
                  key={index}
                  className={cn("h-full", category.color)}
                  style={{ width: `${width}%` }}
                />
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {taskDistribution.map((category, index) => {
            const percentage = Math.round((category.count / total) * 100);
            return (
              <div key={index} className="flex items-center space-x-2">
                <div className={cn("w-3 h-3 rounded-full", category.color)} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{category.label}</p>
                  <p className="text-xs text-muted-foreground">{percentage}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
