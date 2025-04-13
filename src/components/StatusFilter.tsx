"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { taskStatuses } from "@/lib/data";
import { useId } from "react";

function StatusDot({ className }: { className?: string }) {
  return (
    <svg
      width="8"
      height="8"
      fill="currentColor"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

interface StatusFilterProps {
  onFilterChange?: (statusId: string | null) => void;
  selectedStatus?: string | null;
}

export function StatusFilter({ onFilterChange, selectedStatus }: StatusFilterProps) {
  const id = useId();

  const handleStatusChange = (value: string) => {
    if (value === "all") {
      onFilterChange?.(null);
    } else {
      onFilterChange?.(value);
    }
  };

  return (
    <div className="space-y-2 min-w-[200px]">
      <Label htmlFor={id}>Status filter</Label>
      <Select
        defaultValue={selectedStatus || "all"}
        onValueChange={handleStatusChange}
      >
        <SelectTrigger
          id={id}
          className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
        >
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent className="[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
          <SelectItem value="all">
            <span className="flex items-center gap-2">
              <span className="truncate">All Statuses</span>
            </span>
          </SelectItem>
          {taskStatuses.map((status) => (
            <SelectItem key={status.id} value={status.id}>
              <span className="flex items-center gap-2">
                <StatusDot style={{ color: status.color }} />
                <span className="truncate">{status.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
