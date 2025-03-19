import { useState, useCallback } from "react";

export const useFetching = (callback: (...args: any[]) => Promise<void>) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetching = useCallback(async (...args: any[]) => {
    setIsLoading(true);
    try {
      await callback(...args);
    } finally {
      setIsLoading(false);
    }
  }, [callback]);

  return [fetching, isLoading] as const;
};