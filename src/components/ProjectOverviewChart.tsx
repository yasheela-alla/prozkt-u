"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Types for project data
type ProjectData = {
  name: string;
  completion: number;
  color: string;
};

// Sample project data
const projects: ProjectData[] = [
  { name: "Website Redesign", completion: 75, color: "bg-blue-500" },
  { name: "Mobile App Development", completion: 45, color: "bg-purple-500" },
  { name: "CRM Integration", completion: 30, color: "bg-orange-500" },
  { name: "API Development", completion: 90, color: "bg-emerald-500" },
  { name: "Marketing Dashboard", completion: 60, color: "bg-rose-500" },
];

export function ProjectOverviewChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Project Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{project.name}</span>
                <span className="text-sm text-muted-foreground">{project.completion}%</span>
              </div>
              <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className={cn("h-full rounded-full", project.color)}
                  initial={{ width: 0 }}
                  animate={{ width: `${project.completion}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
