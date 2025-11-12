import { Outlet } from "react-router-dom";
import FooterOne from "./FooterOne";
import HeaderThree from "./HeaderThree";

const LayoutThree = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Outlet />
      </main>
      <FooterOne />
    </>
  );
};

export default LayoutThree;
