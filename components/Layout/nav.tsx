import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";
import { useRouter } from "next/router";

export const Nav: FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <StyledList>
      <StyledItem selected={pathname === "/"}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </StyledItem>
      <StyledItem selected={pathname === "/fruit"}>
        <Link href="/fruit">
          <a>Fruit</a>
        </Link>
      </StyledItem>
      <StyledItem selected={pathname === "/framework"}>
        <Link href="/framework">
          <a>Framework</a>
        </Link>
      </StyledItem>
    </StyledList>
  );
};

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
  padding: 0;
`;

const StyledItem = styled.li<{ selected: boolean }>`
  list-style: none;
  display: inline-block;
  font-size: 1.1rem;
  line-height: 1.5rem;
  letter-spacing: 0.011875rem;
  font-family: Verdana, Arial, sans-serif;

  a {
    text-decoration: none;
    transition: all 0.3s ease;
    color: ${({ selected }) => (selected ? "#e00" : "#151515")};

    :hover {
      color: #e00;
    }
  }
`;
