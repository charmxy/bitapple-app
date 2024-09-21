import { type FC, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Navbar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {}, [location]);

  const navBars = [
    { name: "Launchpad", url: "/" },
    { name: "Marketplace", url: "/marketplace" },
    { name: "Swap", url: "/swap" },
    { name: "Stake", url: "/stake" }
  ];

  const showHeaderBox = useMemo(
    () => ["/welcome", "/", "/follow"].includes(location.pathname),
    [location.pathname]
  );

  const HeaderBox: React.FC = () => {
    return (
      <>
        <div className="flex justify-start items-center gap-[6px] cursor-pointer">
          <img src={"/images/layout/logo.png"} alt="" />
          <span className="text-[30px] font-semibold leading-[59px] tracking-[.02em] gradient-text">
            BitApple
          </span>
        </div>
      </>
    );
  };

  const NavbarBox: React.FC = () => {
    return (
      <div>
        <div className="w-[945px] flex flex-row items-center gap-[40px]">
          <div className="flex justify-start items-center gap-[6px]">
            <img
              className="w-[32px] h-[32px] cursor-pointer"
              src={"/images/header/logo.png"}
              alt="logo"
            />
            <span className="text-[20px] font-[870] leading-[32px] tracking-[.04em] text-[#FF8C19] cursor-pointer">
              BitApple
            </span>
          </div>
          <div className="flex flex-row gap-[60px]">
            {navBars.map((item, index) => (
              <span
                key={index}
                className="text-[16px] font-[500] leading-[19px] tracking-[.04em] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate(`${item.url}`)}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full fixed top-0 left-0 z-10 h-[88px] px-[96px] py-[28px]">
      {showHeaderBox ? <HeaderBox /> : <NavbarBox />}
    </div>
  );
};

export default Navbar;
