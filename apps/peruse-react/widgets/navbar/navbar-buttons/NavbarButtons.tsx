import React from "react"
import { IconButton } from "../../../components"

export default function ActionButtons(){
    const buttonTypes = [
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
    return (
        <div>
        {buttonTypes.map(button => {
            return (
            <span key={button.name} className="ml-4 is-clickable">
            <IconButton key={button.name} name={button.name} size={1.5} onClickHandler={button.onClickHandler}/>
            </span>
            )
        })
    }
        </div>
    )
}