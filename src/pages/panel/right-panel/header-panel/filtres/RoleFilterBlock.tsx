import {useFilters} from "../../../../../features/panel/useFilters.ts";
import FilterItem from "./FilterItem.tsx";
import {useLayoutEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {offerGroupRoles} from "../../../../../features/panel/offer/types.ts";


const RoleFilterBlock = () => {
    const { activeItems, toggleFilter } = useFilters("roles");
    const [searchParams, setSearchParams] = useSearchParams();

    useLayoutEffect(() => {
        if (!searchParams.has("roles")) {
            searchParams.set("roles", offerGroupRoles.join(","));
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams]);

    return (
        <div>
            <p>Роли:</p>
            {offerGroupRoles.map((role) => (
                <FilterItem
                    key={role}
                    text={role}
                    isActive={activeItems.includes(role)}
                    onClick={() => toggleFilter(role)}
                />
            ))}
        </div>
    );
};

export default RoleFilterBlock;
