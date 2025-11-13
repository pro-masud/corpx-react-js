import { Outlet } from "react-router-dom";
import FooterOne from "./FooterOne";
import HeaderFour from "./HeaderFour";

const LayoutFour = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Outlet />
      </main>
      <FooterOne />
    </>
  );
};

export default LayoutFour;
