import { cn } from "@/lib/utils";
import React from "react";

export type Variant = {
  value: string;
};

interface Props {
  items: readonly Variant[];
  onClick?: (value: string) => void;
  value?: Variant["value"];
  className?: string;
}

export const GroupVariants: React.FC<Props> = ({ items, onClick, className, value }) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between bg-[#010003] rounded-3xl p-[3px] select-none "
      )}
    >
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => {
            onClick?.(item.value);
          }}
          className={cn(
            "flex items-center justify-center cursor-pointer text-[#FFFFFF99] h-[36.59px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
            {
              "bg-[#302D31] shadow text-[#E7F0F0]": item.value === value,
            }
          )}
        >
          {item.value}
        </button>
      ))}
    </div>
  );
};
