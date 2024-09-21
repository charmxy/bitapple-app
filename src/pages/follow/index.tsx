import React, { useState, type FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";

import "./index.css";

const Follow: FC = () => {
  const navigate = useNavigate();

  const tasks = [
    {
      title: "Connect Wallets",
      subtitle: "Sign In to Begin",
      icon: "/images/follow/wallets.png",
      status: 2
    },
    {
      title: "Follow X",
      subtitle: "Earn 100 Reward Points",
      icon: "/images/follow/twitter.png",
      status: 1
    },
    {
      title: "Join  Telegram",
      subtitle: "Earn 100 Reward Points",
      icon: "/images/follow/telegram.png",
      status: 1
    }
  ];

  const TaskBox: React.FC<{ item: any }> = ({ item }) => {
    const fllowTag =
      item.status == 1
        ? {
            title: "To-Do",
            icon: "/images/follow/to-do.png",
            classText: "to-do-tag"
          }
        : {
            title: "Done",
            icon: "/images/follow/done.png",
            classText: "done-tag"
          };

    return (
      <div className="task-warp flex flex-col gap-[21px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[12px]">
            <span className="text-[20px] font-[700] leading-[20px] text-[#FFFFFF]">
              {item.title}
            </span>
            <span className="text-[14px] font-[400] leading-[17px] text-[#FFFFFF80]">
              {item.subtitle}
            </span>
          </div>
          <img className="w-[51px] h-[49px]" src={item.icon} alt="fllow" />
        </div>
        <div className="flex justify-between items-center">
          {item.status == 1 ? (
            <Button className="follow-btn">
              <span className="text-[12px] font-[700] leading-[24px] text-center">
                Follow
              </span>
            </Button>
          ) : (
            <div></div>
          )}
          <div
            className={`fllow-tag flex justify-start items-center gap-[8px] ${fllowTag.classText}`}
          >
            <img
              className="w-[14px] h-[14px]"
              src={fllowTag.icon}
              alt="fllow"
            />
            <span
              className={`text-[12px] font-[510] leading-[14px] text-center`}
            >
              {fllowTag.title}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-[168px]">
      <div className="flex flex-col items-center gap-[80px]">
        <div className="w-full text-[48px] font-[760] leading-[57px] tracking-[-1px] text-[#FF8C19] text-center">
          Registration Invitation
        </div>

        <div className="w-[590px] flex flex-col items-center gap-[26px]">
          {tasks.map((item, index) => (
            <TaskBox key={index} item={item} />
          ))}
          <div className="w-full text-right">
            <Button
              className="skip-btn"
              onClick={() => {
                navigate("/launchpad");
              }}
            >
              <span className="text-[20px] font-[590] leading-[24px] text-center text-[#FFFFFF]">
                Skip For Now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
