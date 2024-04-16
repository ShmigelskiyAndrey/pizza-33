import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

export const UnderlineIcon = (props: Props) => {
  return (
    <svg
      width="91"
      height="5"
      viewBox="0 0 91 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="91" height="5" rx="2.5" fill="#FF9D57" />
    </svg>
  );
};
