import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SlotsWrapperHeader } from "./slots-wrapper-header";
import useSlotStore from "@/store/slots";
import { SlotsWrapperContent } from "./slots-wrapper-content";
import { useQueryParams } from "@/hooks";
import { filterSlots } from "@/lib/filterSlots";

interface Props {
  className?: string;
}

export const SlotsWrapper: React.FC<Props> = ({ className }) => {
  const { slots, isLoading } = useSlotStore((state) => state);
  const queryParams = useQueryParams();

  const [filteredSlots, setFilteredSlots] = useState(slots);

  useEffect(() => {
    const newFilteredSlots = filterSlots(slots, queryParams);

    setFilteredSlots(newFilteredSlots);
  }, [queryParams, slots]);

  return (
    <div className={cn("", className)}>
      <SlotsWrapperHeader slots={filteredSlots} className="flex gap-5" />
      <SlotsWrapperContent isLoading={isLoading} slots={filteredSlots} className="mt-[34.74px]" />
    </div>
  );
};
