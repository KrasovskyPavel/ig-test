import React from "react";
import { RangeSlider } from "../range-slider";
import { Title, TitleColor } from "../title";
import { useFilterSlots } from "@/hooks/useFilterSlots";

interface Props {
  className?: string;
}

export const SortByRangeCharacteristics: React.FC<Props> = ({ className }) => {
  const { ranges, handleRangeChange } = useFilterSlots();

  return (
    <div className={className}>
      {/* RTP Range Slider */}
      <div className="mb-1">
        <Title size="sm" className="mb-[7px]" color={TitleColor.grey} text="RTP" />
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={ranges.rtp}
          onValueChange={(values) => handleRangeChange("rtp", values)}
        />
        <div className="flex justify-between">
          <span className="text-[12px] font-medium text-[#FFFFFF99]">{ranges.rtp[0]}%</span>
          <span className="text-[12px] font-medium text-[#FFFFFF99]">{ranges.rtp[1]}%</span>
        </div>
      </div>

      {/* Volatility Range Slider */}
      <div className="mb-1">
        <Title size="sm" className="mb-[7px]" color={TitleColor.grey} text="Volatility" />
        <RangeSlider
          min={0}
          max={500}
          step={1}
          value={ranges.volatility}
          onValueChange={(values) => handleRangeChange("volatility", values)}
        />
        <div className="flex justify-between">
          <span className="text-[12px] font-medium text-[#FFFFFF99]">{ranges.volatility[0]}</span>
          <span className="text-[12px] font-medium text-[#FFFFFF99]">{ranges.volatility[1]}</span>
        </div>
      </div>

      {/* ROI Range Slider */}
      <div className="mb-1">
        <Title size="sm" className="mb-[7px]" color={TitleColor.grey} text="ROI" />
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={ranges.roi}
          onValueChange={(values) => handleRangeChange("roi", values)}
        />
        <div className="flex justify-between">
          <span className="text-[12px] font-medium text-[#FFFFFF99]">{ranges.roi[0]}%</span>
          <span className="text-[12px] font-medium text-[#FFFFFF99]">{ranges.roi[1]}%</span>
        </div>
      </div>

      {/* EV Range Slider */}
      <div className="mb-6">
        <Title size="sm" className="mb-[7px]" color={TitleColor.grey} text="EV" />
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={ranges.ev}
          onValueChange={(values) => handleRangeChange("ev", values)}
        />
        <div className="flex justify-between">
          <span className="text-[12px] font-medium text-[#FFFFFF99]">{ranges.ev[0]}%</span>
          <span className="text-[12px] font-medium text-[#FFFFFF99]">{ranges.ev[1]}%</span>
        </div>
      </div>
    </div>
  );
};
