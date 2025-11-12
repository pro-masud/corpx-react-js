import { Outlet } from "react-router-dom";
import FooterOne from "./FooterOne";
import HeaderTwo from "./HeaderTwo";

const LayoutTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Outlet />
      </main>
      <FooterOne />
    </>
  );
};

export default LayoutTwo;
