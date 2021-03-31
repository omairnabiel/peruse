import React from "react"
import { IconButton } from "../../../components"

export default function ActionButtons(){
    const buttonTypes = [
        {
            name: "bell",
            onClickHandler: ()=> {}
        },
        {
            name: "bolt",
            onClickHandler: ()=> {}

        },
        {
            name: "user-circle",
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