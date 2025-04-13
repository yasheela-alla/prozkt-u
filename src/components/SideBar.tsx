"use client";

import { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedLogo } from "./AnimatedLogo";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  Calendar,
  BarChart,
  Settings,
  Package,
  Clock,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";

export function SideBarNav() {
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      label: "Tasks",
      href: "/tasks",
      icon: ClipboardList,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: Package,
    },
    {
      label: "Team",
      href: "/team",
      icon: Users,
    },
    {
      label: "Calendar",
      href: "/calendar",
      icon: Calendar,
    },
    {
      label: "Time Tracking",
      href: "/time-tracking",
      icon: Clock,
    },
    {
      label: "Reports",
      href: "/reports",
      icon: BarChart,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <Sidebar
      open={open}
      setOpen={setOpen}
      animate={true}
      className={cn(
        "border-r transition-all duration-300 ease-in-out",
        open ? "min-w-[240px] w-[240px]" : "min-w-[70px] w-[70px]"
      )}
    >
      <SidebarBody className="justify-between">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className={cn(
            "flex items-center p-4",
            open ? "justify-between" : "justify-center"
          )}>
            <AnimatedLogo open={open} showText={open} />
            {open && (
              <button
                onClick={() => setOpen(!open)}
                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <ChevronRight
                  className="h-4 w-4 transition-transform duration-300 rotate-180"
                />
              </button>
            )}
          </div>

          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="mx-auto mb-4 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronRight
                className="h-4 w-4 transition-transform duration-300"
              />
            </button>
          )}

          <div className="mt-4 flex flex-col gap-1 px-2">
            {links.map((link, idx) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={cn(
                    "flex items-center rounded-md text-sm font-medium transition-colors",
                    open ? "px-3 py-2 justify-start" : "p-2 justify-center",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-neutral-700 dark:text-neutral-200"
                  )}
                >
                  <Icon className={cn(
                    "flex-shrink-0",
                    open ? "h-5 w-5 mr-3" : "h-5 w-5"
                  )} />

                  {open && (
                    <span className="whitespace-nowrap overflow-hidden">
                      {link.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
