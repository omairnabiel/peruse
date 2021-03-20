import React from "react"
import Icon from "../../../components/icon-button/IconButton"

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
            <span className="ml-4 is-clickable">
            <Icon name={button.name} size={1.5} onClickHandler={button.onClickHandler}/>
            </span>
            )
        })
    }
        </div>
    )
}