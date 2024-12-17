import { ComponentType } from "react";

export type RouteProps = {
  path: string;
  component: ComponentType<any>;
};

export const Route: React.FC<RouteProps> = ({ component: Component }) => {
  return <Component />;
};
