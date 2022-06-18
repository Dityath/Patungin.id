import React from "react";

export const Hamburger = (): JSX.Element => (
  <svg
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17H21M1 9H21M1 1H21"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NoPic = (): JSX.Element => (
  <svg
    width="56"
    height="45"
    viewBox="0 0 56 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M54 0H2C0.89375 0 0 0.914062 0 2.04545V42.9545C0 44.0859 0.89375 45 2 45H54C55.1063 45 56 44.0859 56 42.9545V2.04545C56 0.914062 55.1063 0 54 0ZM17.125 9.20455C19.3312 9.20455 21.125 11.0391 21.125 13.2955C21.125 15.5518 19.3312 17.3864 17.125 17.3864C14.9187 17.3864 13.125 15.5518 13.125 13.2955C13.125 11.0391 14.9187 9.20455 17.125 9.20455ZM49.2438 37.1442C49.1527 37.2224 49.0377 37.2654 48.9188 37.2656H7.075C6.8 37.2656 6.575 37.0355 6.575 36.7543C6.575 36.6328 6.61875 36.5178 6.69375 36.4219L17.3375 23.5099C17.5125 23.2926 17.8313 23.267 18.0438 23.446C18.0625 23.4652 18.0875 23.4844 18.1063 23.5099L24.3188 31.0526L34.2 19.0675C34.375 18.8501 34.6937 18.8246 34.9062 19.0035C34.925 19.0227 34.95 19.0419 34.9688 19.0675L49.3187 36.4283C49.4812 36.6392 49.4563 36.9652 49.2438 37.1442Z"
      fill="#777777"
      fillOpacity="0.69"
    />
  </svg>
);

export const EditIcon = (): JSX.Element => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.316 4.00887C10.5208 3.80412 10.6334 3.5322 10.6334 3.24295C10.6334 2.9537 10.5208 2.68179 10.316 2.47704L9.45692 1.61795C9.25217 1.4132 8.98025 1.30054 8.691 1.30054C8.40175 1.30054 8.12983 1.4132 7.92563 1.61741L2.16663 7.35854V9.75H4.557L10.316 4.00887ZM8.691 2.38387L9.55063 3.24241L8.68938 4.10041L7.83029 3.24187L8.691 2.38387ZM3.24996 8.66666V7.80812L7.06329 4.0067L7.92238 4.86579L4.10958 8.66666H3.24996ZM2.16663 10.8333H10.8333V11.9167H2.16663V10.8333Z"
      fill="black"
    />
  </svg>
);

export const TrashIcon = (): JSX.Element => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.625 1.17H3.5C3.56875 1.17 3.625 1.1115 3.625 1.04V1.17H8.375V1.04C8.375 1.1115 8.43125 1.17 8.5 1.17H8.375V2.34H9.5V1.04C9.5 0.466375 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.466375 2.5 1.04V2.34H3.625V1.17ZM11.5 2.34H0.5C0.223437 2.34 0 2.57237 0 2.86V3.38C0 3.4515 0.05625 3.51 0.125 3.51H1.06875L1.45469 12.0087C1.47969 12.5629 1.92031 13 2.45312 13H9.54688C10.0813 13 10.5203 12.5645 10.5453 12.0087L10.9312 3.51H11.875C11.9438 3.51 12 3.4515 12 3.38V2.86C12 2.57237 11.7766 2.34 11.5 2.34ZM9.42656 11.83H2.57344L2.19531 3.51H9.80469L9.42656 11.83Z"
      fill="black"
    />
  </svg>
);

export const ItemsAddingIcon = {
  minus: (): JSX.Element => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill="#003049" />
      <path
        d="M5.1944 8.5H11.8055"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  plus: (): JSX.Element => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill="#003049" />
      <path
        d="M8.5 5.19446V11.8056"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.1944 8.5H11.8055"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export const AddItemIcon = (): JSX.Element => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 1.35714C13.9786 1.35714 17.6429 5.02143 17.6429 9.5C17.6429 13.9786 13.9786 17.6429 9.5 17.6429C5.02143 17.6429 1.35714 13.9786 1.35714 9.5C1.35714 5.02143 5.02143 1.35714 9.5 1.35714ZM9.5 0C4.275 0 0 4.275 0 9.5C0 14.725 4.275 19 9.5 19C14.725 19 19 14.725 19 9.5C19 4.275 14.725 0 9.5 0Z"
      fill="black"
      fillOpacity="0.61"
    />
    <path
      d="M15 8.8125H10.1875V4H8.8125V8.8125H4V10.1875H8.8125V15H10.1875V10.1875H15V8.8125Z"
      fill="black"
      fillOpacity="0.61"
    />
  </svg>
);
