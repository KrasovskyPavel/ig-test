import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export interface QueryParams {
  rtpMin: number | null;
  rtpMax: number | null;
  volatilityMin: number | null;
  volatilityMax: number | null;
  roiMin: number | null;
  roiMax: number | null;
  evMin: number | null;
  evMax: number | null;
  selectedThemes: Set<string>;
  selectedProviders: Set<string>;
  searchValue: string | null;
}

export const useQueryParams = (): QueryParams => {
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState<QueryParams>({
    rtpMin: null,
    rtpMax: null,
    volatilityMin: null,
    volatilityMax: null,
    roiMin: null,
    roiMax: null,
    evMin: null,
    evMax: null,
    selectedThemes: new Set<string>(),
    selectedProviders: new Set<string>(),
    searchValue: null,
  });

  useEffect(() => {
    const rtpMin = searchParams.get("rtpMin") ? parseInt(searchParams.get("rtpMin")!) : null;
    const rtpMax = searchParams.get("rtpMax") ? parseInt(searchParams.get("rtpMax")!) : null;
    const volatilityMin = searchParams.get("volatilityMin")
      ? parseInt(searchParams.get("volatilityMin")!)
      : null;
    const volatilityMax = searchParams.get("volatilityMax")
      ? parseInt(searchParams.get("volatilityMax")!)
      : null;
    const roiMin = searchParams.get("roiMin") ? parseInt(searchParams.get("roiMin")!) : null;
    const roiMax = searchParams.get("roiMax") ? parseInt(searchParams.get("roiMax")!) : null;
    const evMin = searchParams.get("evMin") ? parseInt(searchParams.get("evMin")!) : null;
    const evMax = searchParams.get("evMax") ? parseInt(searchParams.get("evMax")!) : null;

    const selectedThemes = new Set(
      searchParams.get("themes") ? searchParams.get("themes")!.split(",") : []
    );
    const selectedProviders = new Set(
      searchParams.get("providers") ? searchParams.get("providers")!.split(",") : []
    );

    const searchValue = searchParams.get("search");

    setQueryParams({
      rtpMin,
      rtpMax,
      volatilityMin,
      volatilityMax,
      roiMin,
      roiMax,
      evMin,
      evMax,
      selectedThemes,
      selectedProviders,
      searchValue,
    });
  }, [searchParams]);

  return queryParams;
};

export default useQueryParams;
