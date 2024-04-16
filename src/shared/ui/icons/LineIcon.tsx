import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

export const LineIcon = (props: Props) => {
  return (
    <svg
      width="1039"
      height="2"
      viewBox="0 0 1039 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.873047"
        y1="1.0332"
        x2="1038.13"
        y2="1.0332"
        stroke="#1A1009"
      />
    </svg>
  );
};
