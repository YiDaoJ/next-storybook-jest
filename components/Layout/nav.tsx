import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";

export const Nav: FC = () => {
  return (
    <StyledList>
      <StyledItem>
        <Link href="/">
          <a>Home</a>
        </Link>
      </StyledItem>
      <StyledItem>
        <Link href="/fruit">
          <a>Fruit</a>
        </Link>
      </StyledItem>
      <StyledItem>
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

const StyledItem = styled.li`
  list-style: none;
  display: inline-block;
  font-size: 1.1rem;
  line-height: 1.5rem;
  letter-spacing: 0.011875rem;
  font-family: Verdana, Arial, sans-serif;

  a {
    text-decoration: none;
    transition: all 0.3s ease;
    color: #151515;

    :hover {
      color: #e00;
    }
  }
`;
