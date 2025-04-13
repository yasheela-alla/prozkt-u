"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function DateRangePicker() {
  return (
    <Button variant="outline" className="h-9 rounded-md gap-2 pr-3 pl-3 border bg-background">
      <Calendar className="h-4 w-4" />
      <span className="text-sm font-normal">Jan 20, 2023 - Feb 09, 2023</span>
    </Button>
  );
}
