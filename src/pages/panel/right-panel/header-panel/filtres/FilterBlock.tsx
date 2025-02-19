import FilterItem from "./FilterItem.tsx";

export type Props<T extends string> = {
    title: string;
    items: T[];
    toggleItem: (filter: T) => void;
    activeItems: Record<T, boolean>;
};

const FilterBlock = <T extends string>({ title, toggleItem, activeItems, items }: Props<T>) => {
    return (
        <div>
            <p>{title}:</p>
            {items.map((role) => (
                <FilterItem
                    key={role}
                    text={role}
                    isActive={activeItems[role]}
                    onClick={() => toggleItem(role)}
                />
            ))}
        </div>
    );
};

export default FilterBlock;
