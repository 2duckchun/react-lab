import React, { ReactNode } from "react";

type LinkProps = {
  to: string;
  children: ReactNode;
};

export const Link: React.FC<LinkProps> = ({ to, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // URL 업데이트 및 커스텀 이벤트 디스패치
    window.history.pushState({}, "", to);
    window.dispatchEvent(new Event("pushstate"));
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
