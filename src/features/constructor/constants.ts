import HeaderTest from "../../shared/constructor-blocks/HeaderTest.tsx";
import {Library} from "./types.ts";
import {getRandomImageURL} from "../../shared/functions.ts";

export const draggableTypes = {
    STRUCTURE_ITEM_TYPE: "StructureItemBlock",
    CONSTRUCTION_BLOCKS: "ConstructionBlocks",
}

export const blocksLibrary: Library = [
    {
        title: "Шапки",
        blocks: [
            {
                title: "Шапка 1",
                image: getRandomImageURL(),
                block_code: "HEAD-TEST",
                item: HeaderTest,
                defaultSettings: {
                    title: "Заголовок",
                    backgroundColor: "#ffffff",
                    textColor: "#000000",
                    image: getRandomImageURL(),
                }
            },
            {
                title: "Шапка 2",
                image: getRandomImageURL(),
                block_code: "HEAD-TEST2",
                item: HeaderTest,
                defaultSettings: {
                    title: "Заголовок1",
                    backgroundColor: "#ff8484",
                    textColor: "#000000",
                    image: getRandomImageURL(),
                }
            },
        ]
    },
    {
        title: "Подвалы",
        blocks: [
            {
                title: "Подвал 1",
                image: getRandomImageURL(),
                block_code: "FOOT-TEST",
                item: HeaderTest,
                defaultSettings: {
                    title: "Заголовок Подвала",
                    backgroundColor: "#90ff84",
                    textColor: "#000000",
                    image: getRandomImageURL(),
                }
            },
            {
                title: "Подвал 2",
                image: getRandomImageURL(),
                block_code: "FOOT-TEST2",
                item: HeaderTest,
                defaultSettings: {
                    title: "Заголовок Подвала 2",
                    backgroundColor: "#16247c",
                    textColor: "#000000",
                    image: getRandomImageURL(),
                }
            },
        ]
    }
];
