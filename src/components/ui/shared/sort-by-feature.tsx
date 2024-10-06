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

interface Props {
  className?: string;
  title: string;
}

export const SortByFeature: React.FC<Props> = ({ className, title }) => {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-[#201E21] rounded-[7.56px] py-[16.5px] px-[12px] max-h-[43px]">
          <Title size="sm" color={TitleColor.grey} text={title} />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-[2px]">
          <FilterCheckbox text={"Variant 1"} value={"Variant 1"} />
          <FilterCheckbox text={"Variant 2"} value={"Variant 2"} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
