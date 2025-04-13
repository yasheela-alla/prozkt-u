"use client";

import { ArrowUp, DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeText: string;
  icon: React.ReactNode;
  positive?: boolean;
}

const StatCard = ({ title, value, change, changeText, icon, positive = true }: StatCardProps) => (
  <Card>
    <CardContent className="py-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <div className="flex items-center gap-1 mt-1">
            <span className={cn(
              "text-xs font-medium",
              positive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
            )}>
              {change}
            </span>
            <span className="text-xs text-muted-foreground">{changeText}</span>
          </div>
        </div>
        <div className="p-2">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        change="+20.1%"
        changeText="from last month"
        icon={<DollarSign className="h-5 w-5 text-muted-foreground" />}
      />

      <StatCard
        title="Subscriptions"
        value="+2350"
        change="+180.1%"
        changeText="from last month"
        icon={<Users className="h-5 w-5 text-muted-foreground" />}
      />

      <StatCard
        title="Sales"
        value="+12,234"
        change="+19%"
        changeText="from last month"
        icon={<CreditCard className="h-5 w-5 text-muted-foreground" />}
      />

      <StatCard
        title="Active Now"
        value="+573"
        change="+201"
        changeText="since last hour"
        icon={<Activity className="h-5 w-5 text-muted-foreground" />}
      />
    </div>
  );
}
