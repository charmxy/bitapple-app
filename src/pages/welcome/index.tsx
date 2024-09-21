import React, { useState, type FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, message } from "antd";
import type { GetProps } from "antd";

import "./index.css";

type OTPProps = GetProps<typeof Input.OTP>;

const Welcome: FC = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const onChange: OTPProps["onChange"] = val => {
    if (val == "12345678") {
      setIsValid(true);
      ///follow
    } else {
      messageApi.open({
        type: "error",
        content: "Invalid invitation code",
        className: "custom-message",
        duration: 3,
        style: {
          marginTop: "80vh"
        }
      });
    }
    console.log("onChange:", isValid);
  };

  const connectWallet = () => {
    navigate("/follow");
  };

  const sharedProps: OTPProps = { onChange };

  return (
    <div className="py-[258px]">
      <div className="flex flex-col gap-[35px]">
        <div className="w-full text-[180px] font-[1000] leading-[182px] tracking-[.02em] text-[#FF8C19] text-center">
          Welcome
        </div>
        <div className="w-full text-[24px] font-[510] leading-[40px] text-[#FFFFFF] text-center">
          <p>
            Thank you for your interest and support in BitApple! As one of our
            earliest users, you will
          </p>
          <p>
            have the opportunity to get early access to our innovative Web3
            applications.
          </p>
        </div>
        <div className="w-full text-center invitation-input">
          <Input.OTP length={8} {...sharedProps} />
        </div>
        <div className="w-full text-center">
          <Button
            className="connect-btn"
            disabled={!isValid}
            onClick={connectWallet}
          >
            <span className="text-[24px] font-[700] leading-[24px] text-center">
              Connect Wallet
            </span>
          </Button>
        </div>
      </div>
      {contextHolder}
    </div>
  );
};

export default Welcome;
