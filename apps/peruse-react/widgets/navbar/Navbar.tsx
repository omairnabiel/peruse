import React, { useState } from "react"

import { IconButton, Input, Logo } from "../../components"

import styles from "./Navbar.module.scss"

export const Navbar = () => {
    const actionButtons = [
        {
            name: "notifications",
            onClickHandler: ()=> {}
        },
        {
            name: "bolt",
            onClickHandler: ()=> {}

        },
        {
            name: "account_circle",
            onClickHandler: ()=> {} 

        }
]
const [search, setSearch] = useState("")

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
}
return (
    <nav className="is-flex is-align-items-center is-justify-content-space-between">
            <Logo/>
            <div className={`${styles[`container`]} is-align-items-center`}>
            <Input
                value={search}
                placeholder="Quick Find"
                type="text"
                size="medium"
                iconName="search"
                handleChange={handleChange} />
        </div>

        {/* Action Buttons */}
        <div>
        {
        actionButtons.map(button => {
            return (
            <span key={button.name} className="ml-4 is-clickable">
            <IconButton key={button.name} name={button.name} size={1.5} onClickHandler={button.onClickHandler}/>
            </span>
            )
        })
    }
        </div>
    </nav>
    )
}