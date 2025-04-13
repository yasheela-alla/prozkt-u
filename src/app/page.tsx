"use client";

import { useState } from "react";
import { Task, tasks as initialTasks, users } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  // Use the first user as the current user for demo purposes
  const currentUser = users[0];

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser.image} alt={currentUser.name} />
                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{currentUser.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

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
