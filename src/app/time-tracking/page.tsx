"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { users, tasks } from "@/lib/data";

export default function TimeTrackingPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Time Tracking</h1>
          <p className="text-muted-foreground">
            Track time spent on tasks and projects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Summary</CardTitle>
            <CardDescription>Your time tracking for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Hours</span>
                <span className="text-sm">32.5 hours</span>
              </div>
              <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">
                75% of your weekly target (40 hours)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Distribution</CardTitle>
            <CardDescription>Time allocation by project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Website Redesign</span>
                <span className="text-sm">15.5 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Mobile App Development</span>
                <span className="text-sm">12.0 hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">CRM Integration</span>
                <span className="text-sm">5.0 hours</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Time Entries</CardTitle>
          <CardDescription>Your latest tracked work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tasks.slice(0, 5).map((task) => (
              <div key={task.id} className="flex items-center justify-between border-b pb-3">
                <div className="space-y-1">
                  <div className="font-medium">{task.name}</div>
                  <div className="text-sm text-muted-foreground">{task.project?.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">2.5 hours</div>
                  <div className="text-sm text-muted-foreground">Today</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
