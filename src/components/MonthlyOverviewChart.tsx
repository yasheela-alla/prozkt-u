import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

// Sample data
const monthlyData = [
  { month: "Jan", value: 4500, expenses: 3200 },
  { month: "Feb", value: 2000, expenses: 1800 },
  { month: "Mar", value: 4400, expenses: 3000 },
  { month: "Apr", value: 5500, expenses: 3800 },
  { month: "May", value: 1200, expenses: 1100 },
  { month: "Jun", value: 3500, expenses: 2900 },
  { month: "Jul", value: 3000, expenses: 2600 },
  { month: "Aug", value: 1200, expenses: 1000 },
  { month: "Sep", value: 4300, expenses: 3700 },
  { month: "Oct", value: 1000, expenses: 900 },
  { month: "Nov", value: 2000, expenses: 1500 },
  { month: "Dec", value: 4800, expenses: 3900 },
];

// Format currency for tooltip
const formatCurrency = (value) => {
  return `$${value.toLocaleString()}`;
};

export default function MonthlyOverviewChart() {
  const [chartType, setChartType] = useState("bar");
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-md p-2 shadow-md">
          <p className="font-medium">{label}</p>
          <p className="text-primary">Revenue: {formatCurrency(payload[0].value)}</p>
          <p className="text-amber-500">Expenses: {formatCurrency(payload[1]?.value || 0)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium">Overview</CardTitle>
          <div className="flex space-x-2">
            <button 
              onClick={() => setChartType("bar")} 
              className={`px-3 py-1 text-xs rounded-md ${chartType === "bar" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              Bar
            </button>
            <button 
              onClick={() => setChartType("line")} 
              className={`px-3 py-1 text-xs rounded-md ${chartType === "line" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              Line
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name="Revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Expenses" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="value" name="Revenue" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
