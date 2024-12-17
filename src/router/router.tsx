import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { RouteProps } from "./route";

export type RouterProps = {
  children: ReactNode;
};

export const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("pushstate", handleLocationChange);
    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("pushstate", handleLocationChange);
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const routes = React.Children.toArray(children) as ReactElement<RouteProps>[];

  const activeRoute = routes.find((child) => child.props.path === currentPath);

  return activeRoute ? React.cloneElement(activeRoute) : null;
};
