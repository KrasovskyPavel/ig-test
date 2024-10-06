import { useSet } from "react-use";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface ReturnProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  selectedThemes: Set<string>;
  toggleTheme: (theme: string) => void;
  selectedProviders: Set<string>;
  toggleProviders: (provider: string) => void;
  slotByMultFrequency: Set<string>;
  toggleSlotByMultFrequency: (frequency: string) => void;
  ranges: {
    rtp: number[];
    volatility: number[];
    roi: number[];
    ev: number[];
  };
  handleRangeChange: (key: string, values: number[]) => void;
}

export const useFilterSlots = (): ReturnProps => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState(query.get("search") || "");

  const [selectedThemes, { toggle: toggleTheme }] = useSet(
    new Set<string>(query.get("themes")?.split(",") || [])
  );
  const [selectedProviders, { toggle: toggleProviders }] = useSet(
    new Set<string>(query.get("providers")?.split(",") || [])
  );
  const [slotByMultFrequency, { toggle: toggleSlotByMultFrequency }] = useSet(new Set<string>());

  const [ranges, setRanges] = useState({
    rtp: [Number(query.get("rtpMin") || 0), Number(query.get("rtpMax") || 100)],
    volatility: [
      Number(query.get("volatilityMin") || 0),
      Number(query.get("volatilityMax") || 500),
    ],
    roi: [Number(query.get("roiMin") || 0), Number(query.get("roiMax") || 100)],
    ev: [Number(query.get("evMin") || 0), Number(query.get("evMax") || 100)],
  });

  const updateFiltersInURL = () => {
    query.delete("themes");
    query.delete("providers");
    query.delete("search");

    if (selectedThemes.size > 0) {
      query.set("themes", Array.from(selectedThemes).join(","));
    }

    if (selectedProviders.size > 0) {
      query.set("providers", Array.from(selectedProviders).join(","));
    }

    if (searchValue) {
      query.set("search", searchValue);
    }

    navigate(`?${query.toString()}`, { replace: true });
  };

  const updateURL = (key: string, min: number, max: number) => {
    query.set(`${key}Min`, min.toString());
    query.set(`${key}Max`, max.toString());
    navigate(`?${query.toString()}`, { replace: true });
  };

  const handleRangeChange = (key: string, values: number[]) => {
    setRanges((prev) => ({
      ...prev,
      [key]: values,
    }));
    updateURL(key, values[0], values[1]);
  };

  useEffect(() => {
    updateFiltersInURL();
  }, [selectedThemes, selectedProviders, searchValue]);

  return {
    searchValue,
    setSearchValue,
    selectedThemes,
    toggleTheme,
    selectedProviders,
    toggleProviders,
    slotByMultFrequency,
    toggleSlotByMultFrequency,
    ranges,
    handleRangeChange,
  };
};
