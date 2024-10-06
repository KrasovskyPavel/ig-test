import clsx from "clsx";
import React from "react";

type TitleSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export enum TitleColor {
  white = "text-white",
  grey = "text-[#FFFFFF99]",
}

interface Props {
  size?: TitleSize;
  className?: string;
  color?: TitleColor;
  text: string;
}

export const Title: React.FC<Props> = ({
  text,
  size = "sm",
  color = TitleColor.white,
  className,
}) => {
  const mapTagBySize = {
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
    "2xl": "h1",
  } as const;

  const mapClassNameBySize = {
    xs: "text-[13px]",
    sm: "text-[14px]",
    md: "text-[15.12px]",
    lg: "text-[16px]",
    xl: "text-[18px]",
    "2xl": "text-[20px]",
  } as const;

  return React.createElement(
    mapTagBySize[size],
    { className: clsx(mapClassNameBySize[size], color, className) },
    text
  );
};
