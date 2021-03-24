import React, {useState} from "react"
import { Button } from "../index"
import styles from "./Select.module.scss"

interface Props {
    label: string;
    options: Array<string>;
    isMulti?: boolean;
    isSearchable?: boolean;
}
export const Select = ({ label, options, isMulti, isSearchable }: Props) => {
    let [isOpen, setIsOpen] = useState(false)

    const onClickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.container}>
            <Button title={label} onClick={onClickHandler}>
                <div className={`${styles['menu-button-icon']} fas fa-chevron-down`}></div>

            </Button>

            <div className={`${styles['menu']}`} style={{display: isOpen? 'block' : 'none' }}>
                    {options && options.map(option => <div className={`${styles['menu-item']}`}>{option}</div>)}
            </div>
        </div>

    )
}