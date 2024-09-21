import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BackgroundOverlay: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <div className="bg-[#000000] min-h-screen">{children}</div>;
};

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const showFooter = useMemo(
    () => ["/welcome", "/"].includes(location.pathname),
    [location.pathname]
  );

  console.log(location.pathname);

  return (
    <>
      <BackgroundOverlay>
        <Navbar />
        <div className="z-3 relative flex flex-grow flex-col">{children}</div>
        {showFooter && <Footer />}
      </BackgroundOverlay>
    </>
  );
};

export default Layout;
