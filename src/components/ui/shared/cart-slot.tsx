import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "../title";
import { Button } from "../button";
import { Slots } from "@/store/slots";

interface Props {
  className?: string;
  slot: Slots;
}

export const CartSlot: React.FC<Props> = ({ className, slot }) => {
  const { ev, volatility, bonus_freq, roi } = slot.chars;

  return (
    <div className={cn("rounded-[22.68px] overflow-hidden", className)}>
      <div className="flex flex-col h-[208px] py-[12px] px-[36px] bg-gradient-to-b from-[#48159f] to-[#171718]">
        <div className="w-fit relative right-6 bg-[#8989894D] p-[9.45px] rounded-[94.49px]">
          <Title text={slot.provider} />
        </div>

        <div className="mt-auto py-[17.59px] rounded-[18.9px] text-center bg-[#201E2180]">
          <Title size="xl" text={slot.name} />
        </div>
      </div>

      <div className="flex flex-col gap-[15.12px] h-[370px] pb-[26px] px-[36px] bg-[#171718]">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center w-[80px] h-[84px] rounded-[15.12px] bg-[#201E21]">
            <p className="text-[#64EB6A] text-[15.12px]">{ev.value}%</p>
            <p className="text-[#FFFFFF99] font-medium text-[11px] ">EV</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[80px] h-[84px] rounded-[15.12px] bg-[#201E21]">
            <p className="text-[#64EB6A] text-[15.12px]">{volatility.value}</p>
            <p className="text-[#FFFFFF99] font-medium text-[11px] ">VOLATILITY</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[80px] h-[84px] rounded-[15.12px] bg-[#201E21]">
            <p className="text-[#64EB6A] text-[15.12px]">{bonus_freq.value}</p>
            <p className="text-[#FFFFFF99] font-medium text-[11px] ">BONUS FREQ</p>
          </div>
        </div>

        <div className="flex justify-between gap-[8.5px]">
          {[
            { name: "ROI", value: roi.value },
            { name: "EV", value: "V" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between py-[16px] px-[19px] rounded-[7.56px] bg-[#201E21] w-full"
            >
              <p className="text-[#FFFFFF99] font-medium text-[14px]">{item.name}</p>
              <p className="text-[#FFFFFF] text-[14px]">
                {item.value}
                {item.name === "ROI" ? "%" : ""}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex bg-[#201E21] rounded-[7.56px] px-[18.9px] py-[10.37px]">
          <div className="w-1/2 flex items-center text-center">
            <p className="text-[#FFFFFF99] text-[13px]">Multiplier Freq.</p>
          </div>
          <div className="w-1/2 text-end">
            <p className="text-[#FFFFFF] text-[13px]">x50 000</p>
            <p className="text-[#FFFFFF] text-[13px]">17 456 456 SPINS</p>
          </div>
        </div>

        <Button size="xl" variant="play">
          PLAY
        </Button>
        <Button size="xl" variant="details">
          DETAILS
        </Button>
      </div>
    </div>
  );
};
