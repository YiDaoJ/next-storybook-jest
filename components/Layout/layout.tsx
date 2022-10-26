import { FC } from "react";
import { Nav } from "./nav";

export const Layout: FC = ({ children }) => {
  return (
    <div className="layout w-full h-full py-4 px-16 flex flex-col justify-start">
      <Nav />
      <main className="main h-full p-32 flex flex-col justify-center items-center flex-initial">
        {children}
      </main>
    </div>
  );
};

// const StyledMain = styled.main`
//   height: 100%;
//   padding: 2rem;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   flex: 1;
// `;
