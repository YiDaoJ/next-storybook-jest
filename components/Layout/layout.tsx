import { FC } from "react";
import { Nav } from "./nav";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <div>
        <span>Layout - Navigation</span>
        <Nav />
      </div>
      <div>{children}</div>
    </>
  );
};
