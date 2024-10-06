import { useFetchFilters } from "@/hooks";
import { Title } from "../title";
import { SortByTheme } from "./sort-by-theme";
import { SlotByMultiplierFrequency } from "./slot-by-multiplier-frequency";
import { SortByProvider } from "./sort-by-provider";
import { SortByFeature } from "./sort-by-feature";
import { GroupVariants, Variant } from "./group-variants";
import { useState } from "react";
import { SortByRangeCharacteristics } from "./sort-by-range-characteristics";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const [filter, setFilter] = useState<Variant["value"]>("SLOT");
  const { themes, providers, loading } = useFetchFilters();

  return (
    <div className={className}>
      <Title size="2xl" text="FILTER BY" />

      <GroupVariants
        className="my-[24px]"
        items={[{ value: "SLOT" }, { value: "BONUSBUY" }]}
        onClick={(value) => setFilter(value)}
        value={filter}
      />

      {filter === "SLOT" ? (
        <>
          <div className="flex flex-col gap-[23px]">
            <SortByRangeCharacteristics />
          </div>

          <div className="flex flex-col gap-[21px]">
            <Title size="lg" text="SORT BY THEME" />
            <SortByTheme className="flex flex-wrap gap-2" themes={themes} loading={loading} />
          </div>

          <div className="flex flex-col gap-[14px] mt-6">
            <SlotByMultiplierFrequency title="Slot by Multiplier Frequency" />
            <SortByProvider providers={providers} title="Sort by Provider" />
            <SortByFeature title="Sort by Feature" />
          </div>
        </>
      ) : (
        <>
          <Title size="lg" text="SORT BY BONUSBUY" />
          <Title size="sm" text="some content..." />
        </>
      )}
    </div>
  );
};
