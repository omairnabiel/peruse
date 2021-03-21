import React, { useState} from "react"
import { Input } from "../../../components/input/Input"

import styles from "./NavbarSearch.module.scss"

export default function SearchInput() {
    const [search, setSearch] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return(
    <div className={`${styles[`container`]} is-align-items-center`}>
        <Input className={`${styles[`search-input`]}`}  value={search} handleChange={handleChange} placeholder={"Search"} type={"text"} size={"medium"} hasIconRight={true} iconRight={"search"}/>
    </div>
    )

}