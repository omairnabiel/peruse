import React, { useState, useRef, useEffect } from "react"
import { Button } from "../index"
import styles from "./Select.module.scss"


interface Option {
    label: string;
    value: string | null;
}
interface Props {
    label: string;
    options: Option[];
    handleChange: Function
    isMulti?: boolean;
    isSearchable?: boolean;
}

export const Select = ({ label, options, handleChange, isMulti, isSearchable }: Props) => {
    let [isOpen, setIsOpen] = useState(false)
    let [selected, setSelected] = useState("")
    let selectRef = useRef(null)

    const selectClickHandler = () => {
        setIsOpen(!isOpen)
    }

    const optionClickHandler = (option: Option) => {
        setIsOpen(false)
        setSelected(option.label)
        handleChange(option.value)
    }

    const isOutsideClick = (event: MouseEvent) => {
        const clickedElement = (selectRef.current as any)
        if (!clickedElement?.contains(event.target)) setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", isOutsideClick)

        return () => document.removeEventListener("mousedown", isOutsideClick)
    },[])


    return (
        <div ref={selectRef} className={styles.container}>
            <Button title={selected || label} onClick={selectClickHandler} hasIcon={true} iconName="expand_more"/>
            <div className={`${styles['menu']}`} style={{ display: isOpen ? 'block' : 'none' }}>
                {
                    options &&
                    options.map(option => (
                        <div key={option.value} className={`${styles['menu-item']}`} onClick={() => optionClickHandler(option)}>
                            {option.label}
                        </div>)
                    )
                }
            </div>
        </div>
    )
}