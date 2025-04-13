"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { users } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ActivityStatus = "online" | "idle" | "offline";

type MemberActivity = {
  user: typeof users[0];
  status: ActivityStatus;
  lastActive: string;
  tasksCompleted: number;
};

const teamActivity: MemberActivity[] = [
  {
    user: users[0],
    status: "online",
    lastActive: "Just now",
    tasksCompleted: 12
  },
  {
    user: users[1],
    status: "online",
    lastActive: "5 min ago",
    tasksCompleted: 8
  },
  {
    user: users[2],
    status: "idle",
    lastActive: "25 min ago",
    tasksCompleted: 5
  },
  {
    user: users[3],
    status: "offline",
    lastActive: "2 hours ago",
    tasksCompleted: 3
  },
  {
    user: users[4],
    status: "offline",
    lastActive: "1 day ago",
    tasksCompleted: 7
  },
];

export function TeamMembersActivity() {
  const getStatusColor = (status: ActivityStatus) => {
    switch (status) {
      case "online": return "bg-emerald-500";
      case "idle": return "bg-amber-500";
      case "offline": return "bg-gray-400";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Team Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {teamActivity.map((member, index) => (
            <motion.div
              key={member.user.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={member.user.image} alt={member.user.name} />
                    <AvatarFallback>{member.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div
                    className={cn(
                      "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background",
                      getStatusColor(member.status)
                    )}
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-medium">{member.user.name}</span>
                  <span className="text-xs text-muted-foreground">{member.user.role}</span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-xs font-medium">{member.lastActive}</span>
                <span className="text-xs text-muted-foreground">{member.tasksCompleted} tasks completed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
