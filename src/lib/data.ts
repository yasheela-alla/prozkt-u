import { format, addDays, subDays, startOfMonth, endOfMonth, addMonths, subMonths } from 'date-fns';

export type Status = {
  id: string;
  name: string;
  color: string;
};

export type Task = {
  id: string;
  name: string;
  description?: string;
  startAt: Date;
  endAt: Date;
  status: Status;
  assignee?: User;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  project?: Project;
  tags?: string[];
};

export type User = {
  id: string;
  name: string;
  image: string;
  email?: string;
  role?: string;
  username?: string;
};

export type Project = {
  id: string;
  name: string;
  description?: string;
  startAt?: Date;
  endAt?: Date;
  owner?: User;
  team?: User[];
};

// Define statuses
export const taskStatuses: Status[] = [
  { id: "todo", name: "To Do", color: "#6B7280" },
  { id: "in-progress", name: "In Progress", color: "#F59E0B" },
  { id: "review", name: "Review", color: "#8B5CF6" },
  { id: "done", name: "Done", color: "#10B981" }
];

// Sample users
export const users: User[] = [
  {
    id: "1",
    name: "Yasheela Alla",
    username: "yasheela",
    image: "https://api.dicebear.com/7.x/micah/svg?seed=1&earrings=variant03&eyes=variant10&hair=bob&mouth=laughing",
    email: "yasheela@prozkt.dev",
    role: "Project Lead"
  },
  {
    id: "2",
    name: "Bob Smith",
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=2",
    email: "bob@example.com",
    role: "Developer"
  },
  {
    id: "3",
    name: "Charlie Brown",
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=3",
    email: "charlie@example.com",
    role: "Designer"
  },
  {
    id: "4",
    name: "Diana Prince",
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=4",
    email: "diana@example.com",
    role: "Product Owner"
  },
  {
    id: "5",
    name: "Ethan Hunt",
    image: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=5",
    email: "ethan@example.com",
    role: "Developer"
  }
];

// Sample projects
export const projects: Project[] = [
  {
    id: "1",
    name: "Website Redesign",
    description: "Complete overhaul of the company website",
    startAt: startOfMonth(subMonths(new Date(), 1)),
    endAt: endOfMonth(addMonths(new Date(), 2)),
    owner: users[0],
    team: [users[0], users[1], users[2], users[3]]
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "Creating a new mobile app for customers",
    startAt: startOfMonth(new Date()),
    endAt: endOfMonth(addMonths(new Date(), 3)),
    owner: users[0],
    team: [users[0], users[1], users[4]]
  },
  {
    id: "3",
    name: "CRM Integration",
    description: "Integrating our systems with the new CRM",
    startAt: startOfMonth(addMonths(new Date(), 1)),
    endAt: endOfMonth(addMonths(new Date(), 2)),
    owner: users[3],
    team: [users[1], users[3], users[4]]
  }
];

// Generate sample tasks
const today = new Date();

export const tasks: Task[] = [
  {
    id: "1",
    name: "Design Homepage Mockup",
    description: "Create initial mockups for the new homepage design",
    startAt: subDays(today, 10),
    endAt: addDays(today, 5),
    status: taskStatuses[1], // In Progress
    assignee: users[2], // Charlie (Designer)
    priority: "High",
    project: projects[0], // Website Redesign
    tags: ["design", "homepage"]
  },
  {
    id: "2",
    name: "Backend API Implementation",
    description: "Implement the required RESTful APIs for the mobile app",
    startAt: subDays(today, 15),
    endAt: addDays(today, 10),
    status: taskStatuses[1], // In Progress
    assignee: users[1], // Bob (Developer)
    priority: "Critical",
    project: projects[1], // Mobile App
    tags: ["api", "backend"]
  },
  {
    id: "3",
    name: "Database Schema Design",
    description: "Design the database schema for the new CRM integration",
    startAt: addDays(today, 5),
    endAt: addDays(today, 15),
    status: taskStatuses[0], // To Do
    assignee: users[4], // Ethan (Developer)
    priority: "Medium",
    project: projects[2], // CRM Integration
    tags: ["database", "schema"]
  },
  {
    id: "4",
    name: "User Testing",
    description: "Conduct user testing sessions for the redesigned website",
    startAt: addDays(today, 20),
    endAt: addDays(today, 25),
    status: taskStatuses[0], // To Do
    assignee: users[0], // Alice (PM)
    priority: "Medium",
    project: projects[0], // Website Redesign
    tags: ["testing", "user-research"]
  },
  {
    id: "5",
    name: "Mobile UI Implementation",
    description: "Implement the UI components for the mobile app",
    startAt: subDays(today, 5),
    endAt: addDays(today, 10),
    status: taskStatuses[1], // In Progress
    assignee: users[2], // Charlie (Designer)
    priority: "High",
    project: projects[1], // Mobile App
    tags: ["ui", "mobile"]
  },
  {
    id: "6",
    name: "Code Review",
    description: "Review the code for the API implementation",
    startAt: addDays(today, 5),
    endAt: addDays(today, 7),
    status: taskStatuses[2], // Review
    assignee: users[4], // Ethan (Developer)
    priority: "High",
    project: projects[1], // Mobile App
    tags: ["code-review", "api"]
  },
  {
    id: "7",
    name: "Deployment Planning",
    description: "Plan the deployment strategy for the website",
    startAt: subDays(today, 3),
    endAt: addDays(today, 2),
    status: taskStatuses[1], // In Progress
    assignee: users[1], // Bob (Developer)
    priority: "Medium",
    project: projects[0], // Website Redesign
    tags: ["deployment", "ops"]
  },
  {
    id: "8",
    name: "Documentation",
    description: "Create documentation for the API endpoints",
    startAt: subDays(today, 20),
    endAt: subDays(today, 5),
    status: taskStatuses[3], // Done
    assignee: users[1], // Bob (Developer)
    priority: "Low",
    project: projects[1], // Mobile App
    tags: ["documentation", "api"]
  },
  {
    id: "9",
    name: "CRM Data Migration",
    description: "Plan and execute the data migration to the new CRM",
    startAt: addDays(today, 15),
    endAt: addDays(today, 30),
    status: taskStatuses[0], // To Do
    assignee: users[3], // Diana (Product Owner)
    priority: "Critical",
    project: projects[2], // CRM Integration
    tags: ["data", "migration"]
  },
  {
    id: "10",
    name: "SEO Optimization",
    description: "Optimize the website content for SEO",
    startAt: subDays(today, 10),
    endAt: subDays(today, 2),
    status: taskStatuses[3], // Done
    assignee: users[0], // Alice (PM)
    priority: "Medium",
    project: projects[0], // Website Redesign
    tags: ["seo", "content"]
  },
  {
    id: "11",
    name: "Responsive Design Testing",
    description: "Test the website on various devices and screen sizes",
    startAt: addDays(today, 1),
    endAt: addDays(today, 5),
    status: taskStatuses[0], // To Do
    assignee: users[2], // Charlie (Designer)
    priority: "High",
    project: projects[0], // Website Redesign
    tags: ["testing", "responsive"]
  },
  {
    id: "12",
    name: "Payment Gateway Integration",
    description: "Integrate the payment gateway with the mobile app",
    startAt: addDays(today, 5),
    endAt: addDays(today, 15),
    status: taskStatuses[0], // To Do
    assignee: users[1], // Bob (Developer)
    priority: "Critical",
    project: projects[1], // Mobile App
    tags: ["payment", "integration"]
  }
];

// Helper functions
export function getTasksByStatus(statusId: string): Task[] {
  return tasks.filter(task => task.status.id === statusId);
}

export function getTasksByProject(projectId: string): Task[] {
  return tasks.filter(task => task.project?.id === projectId);
}

export function getTasksByAssignee(userId: string): Task[] {
  return tasks.filter(task => task.assignee?.id === userId);
}
