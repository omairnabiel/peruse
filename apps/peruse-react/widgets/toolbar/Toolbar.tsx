import React from "react"

import styles from "./Toolbar.module.scss"

import { Button, Select } from "../../components"

export const Toolbar = () => {

    const options = [
        {
            label: "Books",
            value: "books"
        },
        {
            label: "Highlights",
            value: "highlights"
        }
    ]

    const bookSelectHandleChange = (selectedOption: string) => {
        console.log("Selected Option", selectedOption)
    }
    
    return (
        <div className="is-flex is-justify-content-space-between">
            <Select label="Books" options={options} handleChange={bookSelectHandleChange}/>
            <Button title="Upload" onClick={()=>{}}>
            <div className={`${styles['button-icon']} fas fa-arrow-up`}></div>
            </Button>
        </div>
    )
}