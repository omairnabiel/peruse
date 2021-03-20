import React from "react"

import Logo from "../../components/logo/Logo"
import SearchInput from "./navbar-search/NavbarSearch"
import ActionButtons from "./navbar-buttons/NavbarButtons"

export default function Navbar() {
return (
    <nav className="container is-flex is-align-items-center is-justify-content-space-between">
            <Logo/>
            <SearchInput/>
            <ActionButtons/>
    </nav>
    )
}