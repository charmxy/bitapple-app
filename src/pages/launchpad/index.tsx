import React, { useState, type FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { CountdownProps } from "antd";
import { Statistic, Progress, Button } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

const Launchpad: FC = () => {
  const { Countdown } = Statistic;

  const [actionVal, setActionVal] = useState<string>("All");
  const actions = ["All", "Ongoing", "Upcoming", "Closed"];

  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  const onFinish: CountdownProps["onFinish"] = () => {
    console.log("finished!");
  };

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
      image: "/images/launchpad/image.png",
      status: 1,
      arbiturmName: "Arbitrum",
      arbiturmIcon: "/images/launchpad/arbitrum.png"
    },
    {
      title: "Imps by SuperNfty",
      image: "/images/launchpad/image2.png",
      status: 2,
      arbiturmName: "Arbitrum",
      arbiturmIcon: "/images/launchpad/arbitrum.png"
    },
    {
      title: "Imps by SuperNfty",
      image: "/images/launchpad/image3.png",
      status: 3,
      arbiturmName: "Arbitrum",
      arbiturmIcon: "/images/launchpad/arbitrum.png"
    }
  ];

  const CardBox: React.FC<{ item: any }> = ({ item }) => {
    const launchpadTag =
      item.status == 1
        ? { title: "Upcoming", classText: "upcoming-tag" }
        : item.status == 2
        ? { title: "Ongoing", classText: "ongoing-tag" }
        : { title: "Closed", classText: "closed-tag" };

    return (
      <div className="card-warp w-full flex flex-row gap-[21px]">
        <img
          className="w-[450px] h-[450px] rounded-[8px]"
          src={item.image}
          alt="image"
        />

        <div className="w-full flex flex-col items-center gap-[32px]">
          <div className="w-full flex flex-col gap-[16px]">
            <span className="text-[32px] font-[760] leading-[38px] tracking-[-1px] text-[#FFFFFF]">
              {item.title}
            </span>
            <div className="w-full flex justify-start items-center gap-[37px]">
              <div
                className={`launchpad-tag flex justify-start items-center gap-[8px] ${launchpadTag.classText}`}
              >
                <span className="w-[8px] h-[8px] rounded-full ellipse"></span>
                <span
                  className={`text-[14px] font-[400] leading-[14px] tracking-[.04em] text-center`}
                >
                  {launchpadTag.title}
                </span>
              </div>
              <div className="flex justify-start items-center gap-[8px]">
                <img
                  className="w-[24px] h-[24px]"
                  src={item.arbiturmIcon}
                  alt="arbiturm"
                />
                <span className="text-[14px] font-[400] leading-[18px] text-[#C7C8CC]">
                  {item.arbiturmName}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-[19px]">
            <div className="w-full flex justify-between items-center h-[64px] rounded-[8px] px-[24px] bg-[#FFFFFF1A]">
              <div className="flex justify-start items-center gap-[4px]">
                <img
                  className="w-[24px] h-[24px]"
                  src={"/images/launchpad/assets.png"}
                  alt="assets"
                />
                <span className="text-[16px] font-[400] leading-[19px] text-[#C7C8CC]">
                  {"Assets"}
                </span>
              </div>
              <div className="flex justify-start items-center gap-[6px]">
                <img
                  className="w-[30px] h-[25px]"
                  src={"/images/launchpad/cake.png"}
                  alt="assets"
                />
                <span className="text-[18px] font-[400] leading-[21px] text-[#FFFFFF]">
                  {"CAKE"}
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center h-[64px] rounded-[8px] px-[24px] bg-[#FFFFFF1A]">
              <div className="flex justify-start items-center gap-[4px]">
                <img
                  className="w-[24px] h-[24px]"
                  src={"/images/launchpad/percent.png"}
                  alt="percent"
                />
                <span className="text-[16px] font-[400] leading-[19px] text-[#C7C8CC]">
                  {"Profits APR"}
                </span>
              </div>
              <span className="text-[18px] font-[400] leading-[21px] text-[#FFFFFF]">
                3%
              </span>
            </div>
          </div>
          <div className="w-full">
            {item.status == 1 ? (
              <Countdown
                value={deadline}
                onFinish={onFinish}
                valueStyle={{
                  fontSize: "96px",
                  color: "#FFFFFF",
                  fontWeight: "700",
                  lineHeight: "145px"
                }}
              />
            ) : item.status == 2 ? (
              <div className="w-full flex flex-col items-center gap-[14px]">
                <div className="w-full flex justify-between items-center">
                  <span className="text-[14px] font-[400] leading-[17px] text-[#C7C8CC]">
                    Supply
                  </span>
                  <span className="text-[14px] font-[400] leading-[17px] text-[#C7C8CC]">{`60000/8000`}</span>
                </div>
                <Progress
                  percent={50}
                  showInfo={false}
                  strokeColor={"#FF8C19"}
                  trailColor={"#FFF5CE"}
                />
              </div>
            ) : (
              <div className="w-full flex justify-between items-center gap-[19px]">
                <div className="w-full h-[208px] flex flex-row items-center justify-center px-[24px] rounded-[8px] px-[24px] bg-[#FFFFFF1A]">
                  <div className="flex flex-col text-center gap-[20px]">
                    <span className="text-[32px] font-[700] leading-[38px] tracking-[-1px] text-[#494900]">
                      {"0.26ETH"}
                    </span>
                    <span className="text-[14px] font-[274] leading-[18px] text-[#494900]">
                      FLoor Price
                    </span>
                  </div>
                </div>
                <div className="w-full h-[208px] flex flex-row items-center justify-center px-[24px] rounded-[8px] px-[24px] bg-[#FFFFFF1A]">
                  <div className="flex flex-col text-center gap-[20px]">
                    <span className="text-[32px] font-[700] leading-[38px] tracking-[-1px] text-[#494900]">
                      {"12ETH"}
                    </span>
                    <span className="text-[14px] font-[274] leading-[18px] text-[#494900]">
                      7D Volume
                    </span>
                  </div>
                </div>
              </div>
            )}
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
      </div>
    </div>
  );
};

export default Launchpad;
