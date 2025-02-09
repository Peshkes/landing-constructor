import {useFilters} from "../../../../../features/panel/useFilters.ts";
import FilterItem from "./FilterItem.tsx";
import {useSearchParams} from "react-router-dom";
import {useLayoutEffect} from "react";
import {offerStatuses} from "../../../../../features/panel/offer/types.ts";

const StatusFilterBlock = () => {
    const { activeItems, toggleFilter } = useFilters("statuses");
    const [searchParams, setSearchParams] = useSearchParams();

    useLayoutEffect(() => {
        if (!searchParams.has("statuses")) {
            const defaultStatuses = offerStatuses.filter((status) => status !== "archived").join(",");
            searchParams.set("statuses", defaultStatuses);
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams]);

    return (
        <div>
            <p>Статусы:</p>
            {offerStatuses.map((status) => (
                <FilterItem
                    key={status}
                    text={status}
                    isActive={activeItems.includes(status)}
                    onClick={() => toggleFilter(status)}
                />
            ))}
        </div>
    );
};

export default StatusFilterBlock;
