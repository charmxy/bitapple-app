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

  const RankSvg = () => {
    let fill = value === 0 ? "#F6951F" : "none";
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.24 3.55704L15.4984 0.897492L16.7568 3.55704L16.9599 3.98627H17.3846L20.2031 4.40802L18.0946 6.5271L17.8236 6.79949L17.8864 7.17859L18.379 10.1542L15.8695 8.78308L15.5081 8.58563L15.1475 8.78458L12.6237 10.1771L13.1162 7.2025L13.1785 6.82594L12.9108 6.55391L10.7988 4.40811L13.6731 3.97801L14.0689 3.91879L14.24 3.55704Z"
          stroke="#FFFBF0"
          strokeWidth="1.5"
        />
        <path
          d="M11.25 15.8212C11.25 15.1473 11.6916 14.8135 12 14.8135H18C18.3084 14.8135 18.75 15.1473 18.75 15.8212V26.3673C18.75 27.0412 18.3084 27.375 18 27.375H12C11.6916 27.375 11.25 27.0412 11.25 26.3673V15.8212ZM0.75 19.3366C0.75 18.6627 1.19164 18.3289 1.5 18.3289H7.5C7.80836 18.3289 8.25 18.6627 8.25 19.3366V26.3673C8.25 27.0412 7.80836 27.375 7.5 27.375H1.5C1.19164 27.375 0.75 27.0412 0.75 26.3673V19.3366ZM21.75 26.3673V22.852C21.75 22.178 22.1916 21.8443 22.5 21.8443H28.5C28.8084 21.8443 29.25 22.178 29.25 22.852V26.3673C29.25 27.0412 28.8084 27.375 28.5 27.375H22.5C22.1916 27.375 21.75 27.0412 21.75 26.3673Z"
          stroke="#FFFBF0"
          strokeWidth="1.5"
        />
      </svg>
    );
  };

  const FriendSvg = () => {
    return value === 2 ? (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_2245_2096" fill="white">
          <path d="M9.75 14.5C10.4394 14.5 11.1221 14.3642 11.7591 14.1004C12.396 13.8365 12.9748 13.4498 13.4623 12.9623C13.9498 12.4748 14.3365 11.896 14.6004 11.2591C14.8642 10.6221 15 9.93944 15 9.25C15 8.56056 14.8642 7.87787 14.6004 7.24091C14.3365 6.60395 13.9498 6.0252 13.4623 5.53769C12.9748 5.05018 12.396 4.66347 11.7591 4.39963C11.1221 4.1358 10.4394 4 9.75 4C8.35761 4 7.02225 4.55312 6.03769 5.53769C5.05312 6.52226 4.5 7.85761 4.5 9.25C4.5 10.6424 5.05312 11.9777 6.03769 12.9623C7.02225 13.9469 8.35761 14.5 9.75 14.5ZM18.6167 23.3888C19.5068 23.663 20.6163 23.8333 22 23.8333C29 23.8333 29 19.4583 29 19.4583C29 18.7621 28.7234 18.0945 28.2312 17.6022C27.7389 17.1099 27.0712 16.8333 26.375 16.8333H18.6097C19.2877 17.5388 19.6658 18.4798 19.6643 19.4583V20.1058L19.6608 20.2027C19.6362 20.5923 19.5761 20.9789 19.4812 21.3577C19.3006 22.0751 19.0094 22.76 18.6178 23.3877M26.0833 10.4167C26.0833 10.9529 25.9777 11.4839 25.7725 11.9793C25.5673 12.4747 25.2665 12.9248 24.8874 13.304C24.5082 13.6832 24.058 13.984 23.5626 14.1892C23.0672 14.3944 22.5362 14.5 22 14.5C21.4638 14.5 20.9328 14.3944 20.4374 14.1892C19.942 13.984 19.4918 13.6832 19.1126 13.304C18.7335 12.9248 18.4327 12.4747 18.2275 11.9793C18.0223 11.4839 17.9167 10.9529 17.9167 10.4167C17.9167 9.3337 18.3469 8.29509 19.1126 7.52931C19.8784 6.76354 20.917 6.33333 22 6.33333C23.083 6.33333 24.1216 6.76354 24.8874 7.52931C25.6531 8.29509 26.0833 9.3337 26.0833 10.4167ZM1 19.4583C1 18.7621 1.27656 18.0945 1.76884 17.6022C2.26113 17.1099 2.92881 16.8333 3.625 16.8333H15.875C16.5712 16.8333 17.2389 17.1099 17.7312 17.6022C18.2234 18.0945 18.5 18.7621 18.5 19.4583V20.0417C18.5 20.0417 18.5 26.1667 9.75 26.1667C1 26.1667 1 20.0417 1 20.0417V19.4583Z" />
        </mask>
        <path
          d="M9.75 14.5C10.4394 14.5 11.1221 14.3642 11.7591 14.1004C12.396 13.8365 12.9748 13.4498 13.4623 12.9623C13.9498 12.4748 14.3365 11.896 14.6004 11.2591C14.8642 10.6221 15 9.93944 15 9.25C15 8.56056 14.8642 7.87787 14.6004 7.24091C14.3365 6.60395 13.9498 6.0252 13.4623 5.53769C12.9748 5.05018 12.396 4.66347 11.7591 4.39963C11.1221 4.1358 10.4394 4 9.75 4C8.35761 4 7.02225 4.55312 6.03769 5.53769C5.05312 6.52226 4.5 7.85761 4.5 9.25C4.5 10.6424 5.05312 11.9777 6.03769 12.9623C7.02225 13.9469 8.35761 14.5 9.75 14.5ZM18.6167 23.3888C19.5068 23.663 20.6163 23.8333 22 23.8333C29 23.8333 29 19.4583 29 19.4583C29 18.7621 28.7234 18.0945 28.2312 17.6022C27.7389 17.1099 27.0712 16.8333 26.375 16.8333H18.6097C19.2877 17.5388 19.6658 18.4798 19.6643 19.4583V20.1058L19.6608 20.2027C19.6362 20.5923 19.5761 20.9789 19.4812 21.3577C19.3006 22.0751 19.0094 22.76 18.6178 23.3877M26.0833 10.4167C26.0833 10.9529 25.9777 11.4839 25.7725 11.9793C25.5673 12.4747 25.2665 12.9248 24.8874 13.304C24.5082 13.6832 24.058 13.984 23.5626 14.1892C23.0672 14.3944 22.5362 14.5 22 14.5C21.4638 14.5 20.9328 14.3944 20.4374 14.1892C19.942 13.984 19.4918 13.6832 19.1126 13.304C18.7335 12.9248 18.4327 12.4747 18.2275 11.9793C18.0223 11.4839 17.9167 10.9529 17.9167 10.4167C17.9167 9.3337 18.3469 8.29509 19.1126 7.52931C19.8784 6.76354 20.917 6.33333 22 6.33333C23.083 6.33333 24.1216 6.76354 24.8874 7.52931C25.6531 8.29509 26.0833 9.3337 26.0833 10.4167ZM1 19.4583C1 18.7621 1.27656 18.0945 1.76884 17.6022C2.26113 17.1099 2.92881 16.8333 3.625 16.8333H15.875C16.5712 16.8333 17.2389 17.1099 17.7312 17.6022C18.2234 18.0945 18.5 18.7621 18.5 19.4583V20.0417C18.5 20.0417 18.5 26.1667 9.75 26.1667C1 26.1667 1 20.0417 1 20.0417V19.4583Z"
          fill="#F6951F"
        />
        <path
          d="M9.75 14.5V15.5V14.5ZM15 9.25H16H15ZM9.75 4V3V4ZM4.5 9.25H3.5H4.5ZM18.6097 16.8333V15.8333H16.2616L17.8887 17.5263L18.6097 16.8333ZM19.6643 19.4583L18.6643 19.4568V19.4583H19.6643ZM19.6643 20.1058L20.6637 20.1419L20.6643 20.1239V20.1058H19.6643ZM19.6608 20.2027L20.6588 20.2657L20.6597 20.2523L20.6602 20.2388L19.6608 20.2027ZM19.4812 21.3577L20.4509 21.6017L20.4512 21.6007L19.4812 21.3577ZM26.0833 10.4167H27.0833H26.0833ZM17.9167 10.4167H18.9167H17.9167ZM9.75 15.5C10.5708 15.5 11.3835 15.3383 12.1418 15.0242L11.3764 13.1765C10.8608 13.3901 10.3081 13.5 9.75 13.5V15.5ZM12.1418 15.0242C12.9001 14.7102 13.5891 14.2498 14.1694 13.6694L12.7552 12.2552C12.3606 12.6499 11.892 12.9629 11.3764 13.1765L12.1418 15.0242ZM14.1694 13.6694C14.7498 13.0891 15.2102 12.4001 15.5242 11.6418L13.6765 10.8764C13.4629 11.392 13.1499 11.8606 12.7552 12.2552L14.1694 13.6694ZM15.5242 11.6418C15.8383 10.8835 16 10.0708 16 9.25H14C14 9.80812 13.8901 10.3608 13.6765 10.8764L15.5242 11.6418ZM16 9.25C16 8.42924 15.8383 7.61651 15.5242 6.85823L13.6765 7.6236C13.8901 8.13923 14 8.69188 14 9.25H16ZM15.5242 6.85823C15.2102 6.09994 14.7498 5.41095 14.1694 4.83058L12.7552 6.2448C13.1499 6.63945 13.4629 7.10796 13.6765 7.6236L15.5242 6.85823ZM14.1694 4.83058C13.5891 4.25022 12.9001 3.78985 12.1418 3.47575L11.3764 5.32351C11.892 5.53709 12.3606 5.85015 12.7552 6.2448L14.1694 4.83058ZM12.1418 3.47575C11.3835 3.16166 10.5708 3 9.75 3V5C10.3081 5 10.8608 5.10993 11.3764 5.32351L12.1418 3.47575ZM9.75 3C8.0924 3 6.50268 3.65848 5.33058 4.83058L6.7448 6.2448C7.54183 5.44777 8.62283 5 9.75 5V3ZM5.33058 4.83058C4.15848 6.00269 3.5 7.5924 3.5 9.25H5.5C5.5 8.12283 5.94777 7.04183 6.7448 6.2448L5.33058 4.83058ZM3.5 9.25C3.5 10.9076 4.15848 12.4973 5.33058 13.6694L6.7448 12.2552C5.94777 11.4582 5.5 10.3772 5.5 9.25H3.5ZM5.33058 13.6694C6.50268 14.8415 8.0924 15.5 9.75 15.5V13.5C8.62283 13.5 7.54183 13.0522 6.7448 12.2552L5.33058 13.6694ZM18.3223 24.3445C19.3243 24.6531 20.5354 24.8333 22 24.8333V22.8333C20.6973 22.8333 19.6893 22.6729 18.911 22.4331L18.3223 24.3445ZM22 24.8333C25.7207 24.8333 27.7946 23.6596 28.9059 22.2705C29.4462 21.5951 29.7192 20.9158 29.8569 20.3996C29.9257 20.1414 29.9614 19.9218 29.9799 19.7599C29.9891 19.6788 29.9942 19.6116 29.9969 19.5607C29.9982 19.5353 29.999 19.5138 29.9995 19.4967C29.9997 19.4881 29.9998 19.4806 29.9999 19.4742C29.9999 19.471 30 19.4681 30 19.4654C30 19.4641 30 19.4629 30 19.4617C30 19.4611 30 19.4602 30 19.4599C30 19.4591 30 19.4583 29 19.4583C28 19.4583 28 19.4576 28 19.4568C28 19.4566 28 19.4559 28 19.4554C28 19.4545 28 19.4536 28 19.4528C28 19.4512 28 19.4499 28.0001 19.4488C28.0001 19.4466 28.0001 19.4454 28.0001 19.4451C28.0001 19.4445 28.0001 19.4476 27.9997 19.4542C27.999 19.4674 27.9972 19.4943 27.9928 19.5328C27.984 19.6101 27.9649 19.7323 27.9244 19.8843C27.8433 20.1884 27.6788 20.6029 27.3441 21.0211C26.7054 21.8196 25.2793 22.8333 22 22.8333V24.8333ZM30 19.4583C30 18.4969 29.6181 17.5749 28.9383 16.8951L27.524 18.3093C27.8288 18.614 28 19.0274 28 19.4583H30ZM28.9383 16.8951C28.2584 16.2153 27.3364 15.8333 26.375 15.8333V17.8333C26.806 17.8333 27.2193 18.0045 27.524 18.3093L28.9383 16.8951ZM26.375 15.8333H18.6097V17.8333H26.375V15.8333ZM17.8887 17.5263C18.3874 18.0451 18.6654 18.7372 18.6643 19.4568L20.6643 19.4598C20.6662 18.2224 20.1881 17.0325 19.3307 16.1404L17.8887 17.5263ZM18.6643 19.4583V20.1058H20.6643V19.4583H18.6643ZM18.665 20.0697L18.6615 20.1666L20.6602 20.2388L20.6637 20.1419L18.665 20.0697ZM18.6628 20.1396C18.642 20.4685 18.5913 20.7949 18.5112 21.1146L20.4512 21.6007C20.5609 21.163 20.6304 20.7161 20.6588 20.2657L18.6628 20.1396ZM18.5114 21.1137C18.3562 21.7303 18.1059 22.3189 17.7694 22.8584L19.4663 23.9169C19.9128 23.201 20.2451 22.4199 20.4509 21.6017L18.5114 21.1137ZM25.0833 10.4167C25.0833 10.8216 25.0036 11.2225 24.8486 11.5966L26.6964 12.362C26.9518 11.7452 27.0833 11.0842 27.0833 10.4167H25.0833ZM24.8486 11.5966C24.6937 11.9707 24.4666 12.3106 24.1802 12.5969L25.5945 14.0111C26.0665 13.5391 26.4409 12.9787 26.6964 12.362L24.8486 11.5966ZM24.1802 12.5969C23.8939 12.8832 23.554 13.1103 23.1799 13.2653L23.9453 15.1131C24.562 14.8576 25.1224 14.4832 25.5945 14.0111L24.1802 12.5969ZM23.1799 13.2653C22.8059 13.4202 22.4049 13.5 22 13.5V15.5C22.6676 15.5 23.3286 15.3685 23.9453 15.1131L23.1799 13.2653ZM22 13.5C21.5951 13.5 21.1941 13.4202 20.8201 13.2653L20.0547 15.1131C20.6714 15.3685 21.3324 15.5 22 15.5V13.5ZM20.8201 13.2653C20.446 13.1103 20.1061 12.8832 19.8198 12.5969L18.4055 14.0111C18.8776 14.4832 19.438 14.8576 20.0547 15.1131L20.8201 13.2653ZM19.8198 12.5969C19.5334 12.3106 19.3063 11.9707 19.1514 11.5966L17.3036 12.362C17.5591 12.9787 17.9335 13.5391 18.4055 14.0111L19.8198 12.5969ZM19.1514 11.5966C18.9964 11.2225 18.9167 10.8216 18.9167 10.4167H16.9167C16.9167 11.0842 17.0482 11.7452 17.3036 12.362L19.1514 11.5966ZM18.9167 10.4167C18.9167 9.59892 19.2415 8.81466 19.8198 8.23642L18.4055 6.82221C17.4522 7.77552 16.9167 9.06848 16.9167 10.4167H18.9167ZM19.8198 8.23642C20.398 7.65818 21.1822 7.33333 22 7.33333V5.33333C20.6518 5.33333 19.3588 5.8689 18.4055 6.82221L19.8198 8.23642ZM22 7.33333C22.8178 7.33333 23.602 7.65818 24.1802 8.23642L25.5945 6.82221C24.6411 5.8689 23.3482 5.33333 22 5.33333V7.33333ZM24.1802 8.23642C24.7585 8.81466 25.0833 9.59892 25.0833 10.4167H27.0833C27.0833 9.06848 26.5478 7.77552 25.5945 6.82221L24.1802 8.23642ZM2 19.4583C2 19.0274 2.1712 18.614 2.47595 18.3093L1.06174 16.8951C0.381918 17.5749 0 18.4969 0 19.4583H2ZM2.47595 18.3093C2.7807 18.0045 3.19402 17.8333 3.625 17.8333V15.8333C2.66359 15.8333 1.74156 16.2153 1.06174 16.8951L2.47595 18.3093ZM3.625 17.8333H15.875V15.8333H3.625V17.8333ZM15.875 17.8333C16.306 17.8333 16.7193 18.0045 17.024 18.3093L18.4383 16.8951C17.7584 16.2153 16.8364 15.8333 15.875 15.8333V17.8333ZM17.024 18.3093C17.3288 18.614 17.5 19.0274 17.5 19.4583H19.5C19.5 18.4969 19.1181 17.5749 18.4383 16.8951L17.024 18.3093ZM17.5 19.4583V20.0417H19.5V19.4583H17.5ZM18.5 20.0417C17.5 20.0417 17.5 20.041 17.5 20.0403C17.5 20.0402 17.5 20.0395 17.5 20.0391C17.5 20.0384 17.5 20.0377 17.5 20.0372C17.5 20.036 17.5 20.0352 17.5 20.0348C17.5 20.0339 17.5 20.0344 17.5 20.0362C17.4999 20.0399 17.4997 20.0489 17.499 20.0629C17.4977 20.0909 17.4947 20.1387 17.4881 20.2033C17.4748 20.333 17.4473 20.5283 17.3905 20.7671C17.2763 21.2464 17.0478 21.8855 16.5925 22.5229C15.7189 23.746 13.8622 25.1667 9.75 25.1667V27.1667C14.3878 27.1667 16.9061 25.5248 18.22 23.6854C18.8584 22.7916 19.1768 21.8994 19.3361 21.2303C19.4159 20.8949 19.4568 20.6117 19.4777 20.4064C19.4882 20.3035 19.4938 20.2197 19.4967 20.158C19.4982 20.1272 19.499 20.1018 19.4995 20.0823C19.4997 20.0725 19.4998 20.0642 19.4999 20.0574C19.4999 20.0541 19.5 20.051 19.5 20.0484C19.5 20.0471 19.5 20.0459 19.5 20.0447C19.5 20.0442 19.5 20.0434 19.5 20.0431C19.5 20.0424 19.5 20.0417 18.5 20.0417ZM9.75 25.1667C5.63784 25.1667 3.78111 23.746 2.90748 22.5229C2.45219 21.8855 2.22366 21.2464 2.10952 20.7671C2.05267 20.5283 2.02515 20.333 2.01192 20.2033C2.00533 20.1387 2.00234 20.0909 2.001 20.0629C2.00034 20.0489 2.00009 20.0399 2 20.0362C1.99996 20.0344 1.99996 20.0339 1.99997 20.0348C1.99997 20.0352 1.99998 20.036 1.99999 20.0372C1.99999 20.0377 1.99999 20.0384 2 20.0391C2 20.0395 2 20.0402 2 20.0403C2 20.041 2 20.0417 1 20.0417C0 20.0417 2.38419e-07 20.0424 1.01328e-06 20.0431C1.49012e-06 20.0434 2.98023e-06 20.0442 4.47035e-06 20.0447C7.56979e-06 20.0459 1.25766e-05 20.0471 1.99676e-05 20.0484C3.48091e-05 20.051 5.91874e-05 20.0541 9.76324e-05 20.0574C0.000174522 20.0642 0.00030762 20.0725 0.000532389 20.0823C0.000981808 20.1018 0.00179845 20.1272 0.00326806 20.158C0.00620562 20.2197 0.0117629 20.3035 0.0222557 20.4064C0.0432062 20.6117 0.084052 20.8949 0.163913 21.2303C0.323217 21.8994 0.641555 22.7916 1.28002 23.6854C2.59389 25.5248 5.11216 27.1667 9.75 27.1667V25.1667ZM2 20.0417V19.4583H0V20.0417H2Z"
          fill="white"
          mask="url(#path-1-inside-1_2245_2096)"
        />
      </svg>
    ) : (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.3417 23.1933C17.8161 22.5615 18.16 21.8416 18.3533 21.0756C18.4125 20.8408 18.4554 20.6022 18.4816 20.3615L17.3417 23.1933ZM17.3417 23.1933C16.1586 24.7719 13.9021 26.1685 9.75073 26.1685C5.59938 26.1685 3.34286 24.7719 2.15976 23.1933C1.68574 22.5614 1.34226 21.8415 1.14935 21.0756L17.3417 23.1933ZM17.1384 20.7721C17.1944 20.5503 17.2313 20.3242 17.2487 20.0962L17.2488 20.0962L17.2494 20.0859L17.2505 20.0649L17.2513 20.051V20.0372V19.4596C17.2513 19.0949 17.1064 18.7452 16.8486 18.4873C16.5907 18.2294 16.2409 18.0845 15.8762 18.0845H3.62522C3.26053 18.0845 2.91077 18.2294 2.6529 18.4873C2.39502 18.7452 2.25015 19.0949 2.25015 19.4596V20.0372V20.0582V20.0806L2.25216 20.103L2.26266 20.2197L2.26259 20.2197L2.26345 20.2277C2.27703 20.3554 2.30388 20.5437 2.36215 20.7731C2.51438 21.377 2.78511 21.9446 3.1586 22.443L3.15898 22.4435C4.05885 23.6411 5.90382 24.9184 9.75073 24.9184C13.5975 24.9184 15.4427 23.6412 16.3415 22.4432C16.798 21.8354 17.0255 21.2271 17.1384 20.7721ZM17.1384 20.7721C17.1383 20.7726 17.1381 20.7731 17.138 20.7735L16.6533 20.6509L17.1386 20.7712C17.1385 20.7715 17.1385 20.7718 17.1384 20.7721ZM17.9846 20.3073C17.9608 20.5251 17.922 20.7409 17.8685 20.9534C17.6914 21.655 17.3764 22.3144 16.9419 22.893L16.9416 22.8934C15.8725 24.3199 13.7805 25.6685 9.75073 25.6685C5.72096 25.6685 3.62893 24.3199 2.55987 22.8934L2.55972 22.8932C2.12556 22.3145 1.81095 21.6552 1.63424 20.9536C1.56549 20.6789 1.52145 20.3986 1.50263 20.116L1.5 20.066V19.4596C1.5 18.896 1.72391 18.3554 2.12246 17.9569C2.52102 17.5583 3.06158 17.3344 3.62522 17.3344H15.8762C16.4399 17.3344 16.9804 17.5583 17.379 17.9569C17.7776 18.3554 18.0015 18.896 18.0015 19.4596V20.0767C18.0007 20.1502 17.9955 20.2235 17.9859 20.2963L17.9858 20.2963L17.9846 20.3073ZM19.6042 17.3344H26.3748C26.9384 17.3344 27.479 17.5583 27.8775 17.9569C28.2761 18.3554 28.5 18.896 28.5 19.4596V19.484L28.4985 19.5192C28.4825 19.7196 28.4464 19.9179 28.3907 20.111C28.242 20.6078 27.9872 21.0665 27.6439 21.4552L27.6427 21.4567C26.7842 22.4366 25.1358 23.335 21.9994 23.335C20.9729 23.335 20.1045 23.2379 19.3722 23.0738C19.488 22.8463 19.5921 22.6129 19.6841 22.3746C20.3264 22.5066 21.0901 22.5848 21.9994 22.5848C24.9884 22.5848 26.4021 21.7345 27.0753 20.9642C27.3469 20.6589 27.5493 20.2986 27.6686 19.9078L27.6686 19.9078L27.6704 19.9018C27.7023 19.7922 27.7259 19.6804 27.7409 19.5673L27.741 19.5673L27.7423 19.5557L27.7481 19.502L27.7514 19.4717L27.751 19.4413C27.7462 19.0798 27.5992 18.7347 27.3418 18.4808C27.0845 18.2269 26.7375 18.0845 26.3759 18.0845C26.3759 18.0845 26.3759 18.0845 26.3759 18.0845H19.9416C19.8528 17.8221 19.7393 17.5711 19.6042 17.3344ZM7.93282 4.86161C8.50917 4.62287 9.12689 4.5 9.75073 4.5C11.0106 4.5 12.2189 5.00049 13.1098 5.89137L13.4633 5.53782L13.1098 5.89137C14.0007 6.78225 14.5012 7.99054 14.5012 9.25044C14.5012 10.5103 14.0007 11.7186 13.1098 12.6095C12.2189 13.5004 11.0106 14.0009 9.75073 14.0009C9.12689 14.0009 8.50916 13.878 7.93282 13.6393C7.35647 13.4005 6.83278 13.0506 6.39166 12.6095C5.95054 12.1684 5.60063 11.6447 5.3619 11.0684C5.12317 10.492 5.00029 9.87427 5.00029 9.25044C5.00029 8.6266 5.12317 8.00887 5.3619 7.43252C5.60063 6.85617 5.95054 6.33249 6.39166 5.89137C6.83278 5.45025 7.35647 5.10034 7.93282 4.86161ZM6.05494 7.71959C5.85391 8.20493 5.75044 8.72511 5.75044 9.25044C5.75044 10.3114 6.1719 11.3289 6.9221 12.0791C7.6723 12.8293 8.68979 13.2507 9.75073 13.2507C10.8117 13.2507 11.8292 12.8293 12.5794 12.0791C13.3296 11.3289 13.751 10.3114 13.751 9.25044C13.751 8.72511 13.6476 8.20493 13.4465 7.71959C13.2455 7.23426 12.9508 6.79327 12.5794 6.4218C12.2079 6.05034 11.7669 5.75568 11.2816 5.55465C10.7962 5.35362 10.2761 5.25015 9.75073 5.25015C9.2254 5.25015 8.70522 5.35362 8.21988 5.55465C7.73455 5.75568 7.29356 6.05034 6.9221 6.4218C6.55063 6.79327 6.25598 7.23425 6.05494 7.71959ZM19.4677 7.88316C20.1398 7.21109 21.0513 6.83353 22.0018 6.83353C22.9522 6.83353 23.8637 7.21109 24.5358 7.88316C25.2079 8.55523 25.5854 9.46675 25.5854 10.4172C25.5854 11.3677 25.2079 12.2792 24.5358 12.9512C23.8637 13.6233 22.9522 14.0009 22.0018 14.0009C21.0513 14.0009 20.1398 13.6233 19.4677 12.9512C18.7956 12.2792 18.4181 11.3677 18.4181 10.4172C18.4181 9.46675 18.7956 8.55523 19.4677 7.88316ZM19.9981 8.41359C19.4668 8.94498 19.1682 9.6657 19.1682 10.4172C19.1682 11.1687 19.4668 11.8894 19.9981 12.4208C20.5295 12.9522 21.2503 13.2507 22.0018 13.2507C22.7532 13.2507 23.474 12.9522 24.0054 12.4208C24.5367 11.8894 24.8353 11.1687 24.8353 10.4172C24.8353 9.6657 24.5367 8.94498 24.0054 8.4136C23.474 7.88221 22.7532 7.58367 22.0018 7.58367C21.2503 7.58367 20.5295 7.88221 19.9981 8.41359Z"
          fill="transparent"
          stroke="#FFFBF0"
        />
      </svg>
    );
  };

  const HomeSvg = () => {
    return value === 1 ? (
      <img src={"/images/menus/home-active.svg"} alt="" />
    ) : (
      <img src={"/images/menus/home.svg"} alt="" />
    );
  };

  return (
    <>
      <footer className="w-full fixed bottom-[0px] left-[0px] h-[115px]">
        <div className="menu-warp absolute bottom-[0px] w-full h-[80px] flex items-center justify-around gap-[10px] bg-[url('/images/menus/subtract.png')] bg-cover bg-center"></div>
      </footer>
    </>
  );
};

export default Footer;
