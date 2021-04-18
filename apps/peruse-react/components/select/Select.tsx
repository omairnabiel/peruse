import React, { useState, useRef, useEffect } from "react"
import { Button } from "../index"
import { Option } from "../../common/types"
import styles from "./Select.module.scss"


interface Props {
    label: string;
    options: Option[];
    handleChange: Function
    isMulti?: boolean;
    hasIconLeft?: boolean;
    iconLeftName?: string;
    isSearchable?: boolean;
}

export const Select = ({ label, options, handleChange, hasIconLeft, iconLeftName, isMulti, isSearchable }: Props) => {
    let [isOpen, setIsOpen] = useState(false)
    let [selected, setSelected] = useState("")
    let selectRef = useRef(null)

    const selectClickHandler = () => {
        setIsOpen(!isOpen)
    }

    const optionClickHandler = (option: Option) => {
        setIsOpen(false)
        setSelected(option.label)
        handleChange(option)
    }

    const isOutsideClick = (event: MouseEvent) => {
        const clickedElement = (selectRef.current as any)
        if (!clickedElement?.contains(event.target)) setIsOpen(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", isOutsideClick)

        return () => document.removeEventListener("mousedown", isOutsideClick)
    }, [])


    return (
        <div ref={selectRef} className={styles.container}>
            <Button title={selected || label} onClick={selectClickHandler} hasIconLeft={hasIconLeft} iconLeftName={iconLeftName} hasIconRight={true} iconRightName="expand_more" />
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