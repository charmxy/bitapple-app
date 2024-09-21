import React, { useState, type FC, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

const Footer: FC = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (
    _event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (location.pathname.indexOf("leaderboard") > -1) {
      setValue(0);
    } else if (location.pathname.indexOf("community") > -1) {
      setValue(2);
    } else {
      setValue(1);
    }
  }, [location]);

  return (
    <>
      <footer className="w-full fixed bottom-[0px] left-[0px] h-[269px]">
        <div className="absolute bottom-[0px] w-full h-[269px] flex items-center  bg-[url('/images/layout/footer-bg.png')] bg-cover bg-center"></div>
      </footer>
    </>
  );
};

export default Footer;
