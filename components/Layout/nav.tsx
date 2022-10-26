import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

export const Nav: FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <ul className="list-none flex flex-row justify-start p-0 gap-8">
      <li className={clsx({ selected: pathname === "/" })}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={clsx({ selected: pathname === "/fruit" })}>
        <Link href="/fruit">
          <a>Fruit</a>
        </Link>
      </li>
      <li className={clsx({ selected: pathname === "/framework" })}>
        <Link href="/framework">
          <a>Framework</a>
        </Link>
      </li>
    </ul>
  );
};

// const StyledItem = styled.li<{ selected: boolean }>`
//   list-style: none;
//   display: inline-block;
//   font-size: 1.1rem;
//   line-height: 1.5rem;
//   letter-spacing: 0.011875rem;
//   font-family: Verdana, Arial, sans-serif;

//   a {
//     text-decoration: none;
//     transition: all 0.3s ease;
//     color: ${({ selected }) => (selected ? "#e00" : "#151515")};

//     :hover {
//       color: #e00;
//     }
//   }
// `;
