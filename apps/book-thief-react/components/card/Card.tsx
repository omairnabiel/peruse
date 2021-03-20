import React from "react"


interface Props {
    imagePath: string;
    content: string;

}

export default function Card({ imagePath, content }: Props) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    {content}
                    <br />
                </div>
            </div>
        </div>
    )
}