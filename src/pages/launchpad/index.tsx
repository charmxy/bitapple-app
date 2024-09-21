import React, { useState, type FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Button } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

const Launchpad: FC = () => {
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

  const [actionVal, setActionVal] = useState<string>("All");
  const actions = ["All", "Ongoing", "Upcoming", "Closed"];

  const banners = [
    {
      image: "/images/banner/banner.png"
    },
    {
      image: "/images/banner/banner.png"
    }
  ];

  const list = [
    {
      title: "Imps by SuperNfty",
      image: "/images/launchpad/image.png"
    }
  ];

  const CardBox: React.FC<{ item: any }> = ({ item }) => {
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
      <div className="card-warp w-full flex flex-row gap-[21px]">
        <img
          className="w-[450px] h-[450px] rounded-[8px]"
          src={item.image}
          alt="image"
        />

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[12px]">
            <span className="text-[20px] font-[700] leading-[20px] text-[#FFFFFF]">
              {item.title}
            </span>
            <span className="text-[14px] font-[400] leading-[17px] text-[#FFFFFF80]">
              {item.subtitle}
            </span>
          </div>
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

  const SwiperBox: React.FC = () => {
    const pagination = {
      clickable: true,
      renderBullet: function (index: number, className: string) {
        console.log(className);
        return `<span class="${className}"></span>`;
      }
    };
    return (
      <div className="swiper-warp">
        <Swiper
          className="main-swiper"
          pagination={pagination}
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index}>
              <img className="w-full h-[520px]" src={item.image} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <div className="py-[88px]">
      <SwiperBox />
      <div className="flex flex-col items-center gap-[80px] py-[82px] px-[264px]">
        <div className="w-full flex flex-row gap-[12px]">
          {actions.map(item => (
            <div
              key={item}
              className={`top-action-item ${
                item == actionVal ? "top-action-item-active" : ""
              }`}
              onClick={() => {
                setActionVal(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-[64px]">
          {list.map((item, index) => (
            <CardBox key={index} item={item} />
          ))}
        </div>

        <div className="w-full text-[48px] font-[760] leading-[57px] tracking-[-1px] text-[#FF8C19] text-center">
          Registration Invitation
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
