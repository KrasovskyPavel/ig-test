import { Filters, SlotsWrapper } from "@/components/ui/shared";
import useSlotStore from "@/store/slots";
import { useEffect } from "react";

export const MainPage: React.FC = () => {
  const fetchSlots = useSlotStore((state) => state.fetchSlots);

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div className="flex gap-[22px] pt-[56px] pr-[115px] pb-[73px] pl-[102px]">
      <div className="flex-shrink-0">
        <Filters className="bg-[#171718] w-[331px] rounded-[24px] pt-[30px] px-[19px] pb-[65px]" />
      </div>
      <SlotsWrapper className="" />
    </div>
  );
};
