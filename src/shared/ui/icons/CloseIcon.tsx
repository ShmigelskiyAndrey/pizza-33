import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

export const CloseIcon = (props: Props) => {
  return (
    <svg
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 0.5L14 13.5M27 26.5L14 13.5M14 13.5L27 0.5M14 13.5L1 26.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
