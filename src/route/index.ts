import type { ComponentType } from "react";
import Welcome from "@/pages/welcome";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
}

export const routes: Route[] = [
  { path: "/", Component: Welcome },
  { path: "/welcome", Component: Welcome, title: "Welcome" }
];
