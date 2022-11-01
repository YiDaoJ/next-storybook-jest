import clsx from "clsx";
import { FC } from "react";
import { Nav } from "./nav";

export const Layout: FC = ({ children }) => {
  return (
    <div
      className={clsx(
        "layout",
        "flex flex-col justify-start py-4 px-16",
        "h-full w-full py-4 px-16",
        "bg-silver dark:bg-dark"
      )}
    >
      <Nav />
      <main
        className={clsx(
          "main",
          "flex  flex-initial flex-col items-center justify-center ",
          "h-full p-32"
        )}
      >
        {children}
      </main>
    </div>
  );
};
