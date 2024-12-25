import SideContentMenuBody from "../side-content-menu-body/SideContentMenuBody.tsx";
import {constructorPageSettingsInputs} from "../../../../features/constructor/constructorSettings.ts";
import useConstructor from "../../../../features/constructor/useConstructor.ts";
import {SettingsInputProps} from "../../../../shared/components/settings/SettingsInput.tsx";
import {FC} from "react";

const PageSettingsBody = () => {
    const {updateOfferSettings, offer} = useConstructor();
    const entries: [string, FC<SettingsInputProps>][] = Object.entries(constructorPageSettingsInputs);

    if (!offer) return <SideContentMenuBody/>

    return (
        <SideContentMenuBody>
            {entries.map(([key, Component]) => {

                return (
                    <Component
                        key={key}
                        label={key}
                        value={offer.settings[key] ? offer.settings[key] : ""}
                        onChange={(newValue: string) =>
                            updateOfferSettings(key, newValue)
                        }
                    />
                );
            })
            }
        </SideContentMenuBody>
    )
}
export default PageSettingsBody
