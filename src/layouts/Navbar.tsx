import { type FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const location = useLocation();

  const [value, setValue] = useState(1);
  useEffect(() => {
    location.pathname.indexOf("leaderboard") > -1
      ? setValue(0)
      : location.pathname.indexOf("community") > -1
      ? setValue(2)
      : setValue(1);
  }, [location]);

  const HeaderBox: React.FC<{ currentVal: number }> = ({ currentVal }) => {
    let headerBox = <></>;
    switch (currentVal) {
      case 0:
        headerBox = <div className="header-text">Leaderboard</div>;
        break;
      case 1:
        headerBox = (
          <div className="points-warp">
            <img
              className="w-[24px] h-[24px]"
              src={"/images/earn/coins.svg"}
              alt="coins"
            />
            <div className="total-points-text"></div>
          </div>
        );
        break;
      case 2:
        headerBox = <div className="header-text">Community</div>;
        break;
    }
    return headerBox;
  };

  return (
    <div className="w-full fixed top-0 left-0 z-10 bg-[#FFF2D0] h-[129px]">
      <div className="w-full h-[60px]"></div>
      <div className="w-full flex justify-between items-center h-[46px]">
        <HeaderBox currentVal={value} />
        <div className="service-warp">
          <div className="service-text">T2EARN</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
