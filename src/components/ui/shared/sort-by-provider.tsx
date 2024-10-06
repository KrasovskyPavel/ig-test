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
import { Providers } from "@/hooks/useFetchFilters";

interface Props {
  className?: string;
  title: string;
  providers: Providers;
}

export const SortByProvider: React.FC<Props> = ({ className, title, providers }) => {
  const { selectedProviders, toggleProviders } = useFilterSlots();

  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-[#201E21] rounded-[7.56px] py-[16.5px] px-[12px] max-h-[43px]">
          <Title size="sm" color={TitleColor.grey} text={title} />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-[2px]">
          {providers.map((provider) => (
            <FilterCheckbox
              key={provider}
              onCheckedChange={() => toggleProviders(provider)}
              checked={selectedProviders.has(provider)}
              text={provider}
              value={provider}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
