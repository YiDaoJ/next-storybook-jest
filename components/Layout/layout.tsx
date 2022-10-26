import { css } from "@emotion/react";
import { FC } from "react";
import { Nav } from "./nav";
import styled from "@emotion/styled";

export const Layout: FC = ({ children }) => {
  return (
    <div className="layout" css={wrapLayout}>
      <Nav />
      <StyledMain className="main">{children}</StyledMain>
    </div>
  );
};

const wrapLayout = css`
  width: 100%;
  height: 100%;
  padding: 1rem 4rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledMain = styled.main`
  height: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
`;
