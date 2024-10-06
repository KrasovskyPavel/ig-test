import React from "react";
import { useFilterSlots } from "@/hooks";
import { Themes } from "@/hooks/useFetchFilters";
import { Button } from "../button";
import { Skeleton } from "../skeleton";

interface Props {
  className?: string;
  loading?: boolean;
  themes: Themes;
}

export const SortByTheme: React.FC<Props> = ({ className, themes, loading }) => {
  const { selectedThemes, toggleTheme } = useFilterSlots();

  const [showMore, setShowMore] = React.useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedThemes: Themes = showMore ? themes : themes.slice(0, 9);

  if (loading) {
    return (
      <div className={className}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-[35px] w-[90px] rounded-[90px] bg-[#ffffff10]" />
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {displayedThemes.map((theme) => (
        <Button
          className={selectedThemes.has(theme) ? "bg-[#ffffff3b]" : ""}
          onClick={() => toggleTheme(theme)}
          variant="theme"
          key={theme}
        >
          {theme}
        </Button>
      ))}

      {themes.length > 9 && (
        <Button className="text-[#64EB6A]" variant="theme" onClick={handleToggleShowMore}>
          {showMore ? "Hide" : "More"}
        </Button>
      )}
    </div>
  );
};
