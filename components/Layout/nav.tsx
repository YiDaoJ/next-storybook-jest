import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

const routes: { path: string; title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/fruit", title: "Fruit" },
  { path: "/framework", title: "Framework" },
];

export const Nav: FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <ul
      className={clsx(
        "navigation__list",
        " flex flex-row justify-start gap-8",
        "list-none  p-0"
      )}
    >
      {routes.map((route, index) => (
        <li
          key={index}
          className={clsx("navigation__item", "inline-block list-none")}
        >
          <Link href={route.path}>
            <a
              className={clsx(
                "no-underline transition-colors",
                "hover:text-red",
                pathname === route.path
                  ? "text-danger dark:text-warning"
                  : "text-black dark:text-silver"
              )}
            >
              {route.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
