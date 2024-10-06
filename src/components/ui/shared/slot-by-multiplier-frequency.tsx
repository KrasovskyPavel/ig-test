import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Title, TitleColor } from "../title";
import { cn } from "@/lib/utils";
import { FilterCheckbox } from "./filter-checkbox";
import { useFilterSlots } from "@/hooks";

interface Props {
  className?: string;
  title: string;
}

export const SlotByMultiplierFrequency: React.FC<Props> = ({ className, title }) => {
  const { slotByMultFrequency, toggleSlotByMultFrequency } = useFilterSlots();

  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-[#201E21] rounded-[7.56px] py-[16.5px] px-[12px] max-h-[43px]">
          <Title size="sm" color={TitleColor.grey} text={title} />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-[2px]">
          <FilterCheckbox
            onCheckedChange={() => toggleSlotByMultFrequency("1000")}
            checked={slotByMultFrequency.has("1000")}
            text={"1000"}
            value={"1000"}
          />
          <FilterCheckbox
            onCheckedChange={() => toggleSlotByMultFrequency("10000")}
            checked={slotByMultFrequency.has("10000")}
            text={"10000"}
            value={"10000"}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
