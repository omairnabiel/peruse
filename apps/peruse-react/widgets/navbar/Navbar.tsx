import React from "react"

import { Logo } from "../../components"

import SearchInput from "./navbar-search/NavbarSearch"
import ActionButtons from "./navbar-buttons/NavbarButtons"

export const Navbar = () => {
return (
    <nav className="is-flex is-align-items-center is-justify-content-space-between">
            <Logo/>
            <SearchInput/>
            <ActionButtons/>
    </nav>
    )
}