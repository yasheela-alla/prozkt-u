"use client";

import { projects } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          View and manage all your projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                <p>
                  {project.startAt && (
                    <>Start: {format(project.startAt, "PPP")}</>
                  )}
                </p>
                <p>
                  {project.endAt && (
                    <>Deadline: {format(project.endAt, "PPP")}</>
                  )}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                {project.owner && (
                  <div className="flex items-center gap-2">
                    <span>Owner:</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={project.owner.image} alt={project.owner.name} />
                      <AvatarFallback>{project.owner.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{project.owner.name}</span>
                  </div>
                )}
              </div>
              {project.team && (
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member) => (
                    <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                  {project.team.length > 3 && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs">
                      +{project.team.length - 3}
                    </div>
                  )}
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
