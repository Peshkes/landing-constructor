import styles from "./person.module.css"

type Props = {
    name: string
    role: string
    email: string
}

const Person = ({name, role, email}: Props) => {
    return (
        <div className={styles.wrapper + " " + styles[role]}>
            <div className={styles.person}>
                <p>{name}</p>
            </div>
            <div className={styles.extendedBlock}>
                <p>Имя: {name}</p>
                <p>Роль: {role}</p>
                <p>Почта: {email}</p>
            </div>
        </div>

    )
}
export default Person
