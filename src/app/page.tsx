"use client";

import { useState } from "react";
import { Task, tasks as initialTasks, users } from "@/lib/data";
import { DashboardStats } from "@/components/DashboardStats";
import { MonthlyOverviewChart } from "@/components/MonthlyOverviewChart";
import { RecentSales } from "@/components/RecentSales";
import { NavBar } from "@/components/NavBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectOverviewChart } from "@/components/ProjectOverviewChart";
import { TaskDistributionChart } from "@/components/TaskDistributionChart";
import { TeamMembersActivity } from "@/components/TeamMembersActivity";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <div className="container px-4 py-6 mx-auto flex-1">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <DashboardStats />

            <MonthlyOverviewChart />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RecentSales />
              <TeamMembersActivity />
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="p-4 rounded-lg border bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5">
                <h3 className="text-2xl font-bold mb-6">Analytics Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProjectOverviewChart />
                  <TaskDistributionChart />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 p-6 rounded-lg border bg-muted/5 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-bold text-primary">{tasks.length}</span>
                  <span className="text-sm text-muted-foreground mt-2">Total Tasks</span>
                </div>

                <div className="col-span-1 p-6 rounded-lg border bg-muted/5 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-bold text-primary">
                    {tasks.filter(task => task.status.id === 'done').length}
                  </span>
                  <span className="text-sm text-muted-foreground mt-2">Completed Tasks</span>
                </div>

                <div className="col-span-1 p-6 rounded-lg border bg-muted/5 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-bold text-primary">
                    {tasks.filter(task => task.status.id === 'in-progress').length}
                  </span>
                  <span className="text-sm text-muted-foreground mt-2">In Progress</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div className="text-center p-12">
              <h3 className="text-xl font-medium">Reports Coming Soon</h3>
              <p className="text-muted-foreground mt-2">This section is under development.</p>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <div className="text-center p-12">
              <h3 className="text-xl font-medium">Notifications Coming Soon</h3>
              <p className="text-muted-foreground mt-2">This section is under development.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
