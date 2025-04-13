"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type MonthData = {
  month: string;
  value: number;
};

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Sample data - these values are just for demonstration
const monthlyData: MonthData[] = [
  { month: "Jan", value: 4500 },
  { month: "Feb", value: 2000 },
  { month: "Mar", value: 4400 },
  { month: "Apr", value: 5500 },
  { month: "May", value: 1200 },
  { month: "Jun", value: 3500 },
  { month: "Jul", value: 3000 },
  { month: "Aug", value: 1200 },
  { month: "Sep", value: 4300 },
  { month: "Oct", value: 1000 },
  { month: "Nov", value: 2000 },
  { month: "Dec", value: 4800 },
];

export function MonthlyOverviewChart() {
  const maxValue = Math.max(...monthlyData.map(data => data.value));

  return (
    <Card className="col-span-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <div className="flex flex-col h-full">
            <div className="flex flex-col justify-between h-[280px] mb-2">
              {[6000, 4500, 3000, 1500, 0].map((value, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-xs text-muted-foreground w-12">${value}</span>
                  <div className="flex-1 border-b border-border/30 border-dashed h-0"></div>
                </div>
              ))}
            </div>

            <div className="flex items-end h-[280px] gap-1 mt-2">
              {monthlyData.map((data, index) => {
                const heightPercentage = (data.value / maxValue) * 100;
                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-full flex justify-center">
                      <div
                        className="w-5/6 bg-primary rounded-sm transition-all duration-300 hover:opacity-80"
                        style={{ height: `${heightPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
