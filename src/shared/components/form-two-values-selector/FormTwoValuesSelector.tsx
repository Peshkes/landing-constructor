import styles from './formTwoValuesSelector.module.css'
import Checkbox from "../../ui/checkbox/Checkbox.tsx";

type Props = {
    falseValue: string
    trueValue: string
    onChange: (value: boolean) => void
    value: boolean
}

const FormTwoValuesSelector = ({falseValue, trueValue, onChange, value}: Props) => {
    return (
        <div className={styles.container}>
            <p>{falseValue}</p>
            <Checkbox value={value} onChange={onChange}/>
            <p>{trueValue}</p>
        </div>
    )
}
export default FormTwoValuesSelector
