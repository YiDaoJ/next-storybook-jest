import Link from "next/link";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/fruit">
          <a>Fruit</a>
        </Link>
      </li>
      <li>
        <Link href="/framework">
          <a>Framework</a>
        </Link>
      </li>
    </ul>
  );
};
