import {useEffect, useRef, useState} from "react";
import style from "./library-menu.module.css";
import {Library} from "../../../../features/constructor/types.ts";
import LibraryType from "./library-type/LibraryType.tsx";
import LibraryItem from "./library-item/LibraryItem.tsx";
import {blocksLibrary} from "../../../../features/constructor/blockLibrary.ts";

const LibraryMenu = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<keyof Library | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const block = containerRef.current;
        const checkWidth = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setIsExpanded(entry.contentRect.width > 350);
            }
        };

        const resizeObserver = new ResizeObserver(checkWidth);
        if (block) resizeObserver.observe(block);

        return () => {
            if (block) resizeObserver.unobserve(block);
        };
    }, []);

    const selectCategory = (category: keyof Library) => setSelectedCategory(category !== selectedCategory ? category : null);

    return (
            <div ref={containerRef} className={style.container + " " + (isExpanded ? style.expandedContainer : "")}>
                <div className={(isExpanded ? style.expandedLeft : "")}>
                    {blocksLibrary.map((category) => (
                        <div key={category.title + 'block'} className={style.block}>
                            <LibraryType type={category.title} onClick={selectCategory}
                                         isActive={selectedCategory === category.title}
                                         isExtended={isExpanded} key={category.title}/>
                            {!isExpanded && selectedCategory === category.title && category.blocks.map((block) => (
                                <LibraryItem category={category.title} block_code={block.block_code} image={block.image}
                                             title={block.title} isExpanded={isExpanded}
                                             key={block.block_code} defaultSettings={block.defaultSettings}/>
                            ))}
                        </div>
                    ))}
                </div>
                {isExpanded &&
                    <div className={style.activeExtendedBlock}>
                        {selectedCategory && blocksLibrary.find(item => item.title === selectedCategory)?.blocks.map((block) => (
                            <LibraryItem category={selectedCategory as string} block_code={block.block_code} image={block.image} isExpanded={isExpanded}
                                         title={block.title} key={block.block_code + 'expanded'} defaultSettings={block.defaultSettings}/>
                        ))}
                    </div>
                }
            </div>
    );
};

export default LibraryMenu;
