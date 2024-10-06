import { useEffect, useState } from "react";

export type Themes = string[];

export type Providers = string[];

export interface RangeCharacteristics {
  type: "float" | "number" | "string";
  sign: string | null;
}

export interface Characteristics {
  rtp: RangeCharacteristics;
  volatility: RangeCharacteristics;
  bonus_freq: RangeCharacteristics;
  roi: RangeCharacteristics;
  ev: RangeCharacteristics;
}

export const useFetchFilters = () => {
  const [themes, setThemes] = useState<Themes>([]);
  const [providers, setProviders] = useState<Providers>([]);
  const [rangeCharacteristics, setRangeCharacteristics] = useState<Characteristics | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchFilters() {
      try {
        setLoading(true);

        // fetch themes
        const themesResponse = await fetch("https://n1partners.net.ru/api/temp/themes");
        const themesData: Themes = await themesResponse.json();
        setThemes(themesData);

        // fetch providers
        const providersResponse = await fetch("https://n1partners.net.ru/api/temp/providers");
        const providersData: Providers = await providersResponse.json();
        setProviders(providersData);

        // fetch rangeCharacteristics
        const characteristicsResponse = await fetch("https://n1partners.net.ru/api/temp/chars");
        const characteristicsData: Characteristics = await characteristicsResponse.json();
        setRangeCharacteristics(characteristicsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchFilters();
  }, []);

  return {
    themes,
    providers,
    rangeCharacteristics,
    loading,
  };
};
