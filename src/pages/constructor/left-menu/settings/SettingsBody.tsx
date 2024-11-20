import useConstructor from "../../../../features/constructor/useConstructor.ts";
import styles from "./settingsBody.module.css";
import { constructorSettingsInputs } from "../../../../features/constructor/constructorSettings.ts";

const SettingsBody = () => {
    const { getSelectedBlock, updateSelectedBlockField} = useConstructor();
    const selectedBlock = getSelectedBlock();

    if (!selectedBlock) {return <div className={styles.empty}>Блок не выбран</div>;}

    const entries = Object.entries(selectedBlock.settings);

    return (
        <div className={styles.settingsBody}>
            {entries.map(([key, value]) => {
                const Component = constructorSettingsInputs[key];

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
        </div>
    );
};

export default SettingsBody;
