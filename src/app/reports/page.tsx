"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { tasks, users, projects } from "@/lib/data";

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Analyze performance and track project metrics.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Tasks by Status</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="mt-4 space-y-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">To Do</span>
                  <span className="text-sm">{tasks.filter(t => t.status.id === 'todo').length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-500"
                    style={{ width: `${(tasks.filter(t => t.status.id === 'todo').length / tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">In Progress</span>
                  <span className="text-sm">{tasks.filter(t => t.status.id === 'in-progress').length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500"
                    style={{ width: `${(tasks.filter(t => t.status.id === 'in-progress').length / tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Review</span>
                  <span className="text-sm">{tasks.filter(t => t.status.id === 'review').length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500"
                    style={{ width: `${(tasks.filter(t => t.status.id === 'review').length / tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Done</span>
                  <span className="text-sm">{tasks.filter(t => t.status.id === 'done').length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: `${(tasks.filter(t => t.status.id === 'done').length / tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Task Priority Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="mt-4 space-y-2">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Low</span>
                  <span className="text-sm">{tasks.filter(t => t.priority === 'Low').length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${(tasks.filter(t => t.priority === 'Low').length / tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Medium</span>
                  <span className="text-sm">{tasks.filter(t => t.priority === 'Medium').length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: `${(tasks.filter(t => t.priority === 'Medium').length / tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">High</span>
                  <span className="text-sm">{tasks.filter(t => t.priority === 'High').length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500"
                    style={{ width: `${(tasks.filter(t => t.priority === 'High').length / tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Critical</span>
                  <span className="text-sm">{tasks.filter(t => t.priority === 'Critical').length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500"
                    style={{ width: `${(tasks.filter(t => t.priority === 'Critical').length / tasks.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Project Completion</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="mt-4 space-y-4">
              {projects.map(project => {
                const projectTasks = tasks.filter(t => t.project?.id === project.id);
                const completedTasks = projectTasks.filter(t => t.status.id === 'done').length;
                const completionPercentage = projectTasks.length ? (completedTasks / projectTasks.length) * 100 : 0;

                return (
                  <div key={project.id}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{project.name}</span>
                      <span className="text-sm">{Math.round(completionPercentage)}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${completionPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Workload</CardTitle>
          <CardDescription>Tasks assigned to each team member</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map(user => {
              const userTasks = tasks.filter(t => t.assignee?.id === user.id);
              return (
                <div key={user.id} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{user.name}</span>
                      <span className="text-sm">{userTasks.length} tasks</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${(userTasks.length / Math.max(...users.map(u => tasks.filter(t => t.assignee?.id === u.id).length))) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
