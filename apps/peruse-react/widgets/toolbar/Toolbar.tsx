import React from "react"

import styles from "./Toolbar.module.scss"

import { Button, Select } from "../../components"

export const Toolbar = () => {

    return (
        <div className="is-flex is-justify-content-space-between">
            <Select label="Books" options={["Books", "Highlights"]}/>
            <Button title="Upload" onClick={()=>{}}>
            <div className={`${styles['button-icon']} fas fa-arrow-up`}></div>
            </Button>
        </div>
    )
}