import {useFilters} from "../../../../../features/panel/useFilters.ts";
import FilterItem from "./FilterItem.tsx";
import {useEffect, useLayoutEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {offerGroupRoles} from "../../../../../features/panel/offer/types.ts";
import useAuthentication from "../../../../../features/authentication/useAuthentication.ts";


const RoleFilterBlock = ({onChange}: { onChange: (user_id: string, filters: string[]) => void }) => {
    const user_id = useAuthentication(state => state.user!._id);
    const { activeItems, toggleFilter } = useFilters("roles");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        onChange(user_id, activeItems);
    }, [activeItems, onChange, user_id]);

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
