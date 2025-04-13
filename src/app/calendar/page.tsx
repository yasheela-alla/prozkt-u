"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { tasks } from "@/lib/data";
import { format } from "date-fns";

export default function CalendarPage() {
  const currentMonth = format(new Date(), 'MMMM yyyy');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            Schedule and manage your tasks and events.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{currentMonth}</CardTitle>
          <CardDescription>
            View and manage your schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-medium text-sm py-2">
                {day}
              </div>
            ))}

            {/* Sample grid of days */}
            {Array.from({ length: 35 }).map((_, i) => {
              const day = i + 1;
              const hasEvents = tasks.some(task => {
                const taskDay = task.endAt.getDate();
                return taskDay === day;
              });

              return (
                <div
                  key={i}
                  className={`h-24 border rounded-md p-1 ${day <= 31 ? '' : 'opacity-50'}`}
                >
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{day <= 31 ? day : day - 31}</span>
                    {hasEvents && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                  </div>

                  {/* Show event indicators */}
                  {day <= 31 && hasEvents && (
                    <div className="mt-1">
                      {tasks
                        .filter(task => task.endAt.getDate() === day)
                        .slice(0, 2)
                        .map(task => (
                          <div
                            key={task.id}
                            className="text-xs p-1 mb-1 rounded bg-primary/10 truncate"
                          >
                            {task.name}
                          </div>
                        ))
                      }
                      {tasks.filter(task => task.endAt.getDate() === day).length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          {tasks.filter(task => task.endAt.getDate() === day).length - 2} more
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
