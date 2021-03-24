import React from "react"
import { Button } from "../../components"

export const Toolbar = () => {
    
    const buttons = [
        {
            title: "Books",
            onClick: () => { }
        },
        {
            title: "Highlights",
            onClick: () => { }
        }
    ]

    return (
        <div className="is-flex">
            {
                buttons.map(({ title, onClick }) => 
                    <div className="mr-3">
                        <Button title={title} onClick={onClick} />
                    </div>
                )
            }
        </div>
    )
}