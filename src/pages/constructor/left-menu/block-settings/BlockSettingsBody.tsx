import useConstructor from "../../../../features/constructor/useConstructor.ts";
import { constructorBlockSettingsInputs } from "../../../../features/constructor/constructorSettings.ts";
import SideContentMenuBody from "../side-content-menu-body/SideContentMenuBody.tsx";

const BlockSettingsBody = () => {
    const { getSelectedBlock, updateSelectedBlockField} = useConstructor();
    const selectedBlock = getSelectedBlock();

    if (!selectedBlock) return <SideContentMenuBody/>;

    const entries = Object.entries(selectedBlock.settings);

    return (
        <SideContentMenuBody>
            {entries.map(([key, value]) => {
                const Component = constructorBlockSettingsInputs[key];

                if (Component) {
                    return (
                        <Component
                            key={key}
                            label={key}
                            value={value}
                            onChange={(newValue: string) =>
                                updateSelectedBlockField(key, newValue)
                            }
                        />
                    );
                }
                return null;
            })}
        </SideContentMenuBody>
    );
};

export default BlockSettingsBody;
