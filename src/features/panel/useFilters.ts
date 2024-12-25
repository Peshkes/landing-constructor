import { useSearchParams } from "react-router-dom";

export const useFilters = (type: string) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const activeItems = searchParams.get(type)?.split(",") || [];

    const toggleFilter = (value: string) => {
        const isActive = activeItems.includes(value);
        const updatedFilters = isActive
            ? activeItems.filter((item) => item !== value)
            : [...activeItems, value];

        if (updatedFilters.length > 0)
            searchParams.set(type, updatedFilters.join(","));
        else
            searchParams.delete(type);

        setSearchParams(searchParams);
    };

    return { activeItems, toggleFilter };
};
