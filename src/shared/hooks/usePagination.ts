import { useEffect, useMemo, useState } from "react";
import { useFetching } from "./useFetching";
import PostService from "../api/PostService";

export const usePagination = <T>(url: string) => {
    const [data, setData] = useState<T[]>([]);
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrev, setHasPrev] = useState(false);

    const [fetchData, isLoading] = useFetching(async (url: string, page: number) => {
        const response = await PostService.getAll(url, page);
        setData(response.data.results);
        setHasNext(!!response.data.next);
        setHasPrev(!!response.data.previous);
    });

    const cachedData = useMemo(() => data, [data])

    useEffect(() => {
        fetchData(url, page);
    }, [url, page]);

    return { data: cachedData, page, setPage, hasNext, hasPrev, isLoading };
};