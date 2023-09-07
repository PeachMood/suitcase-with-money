import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom"

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};
