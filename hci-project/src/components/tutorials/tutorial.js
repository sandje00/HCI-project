import React from "react"
/* import Link from "gatsby" */
import Image from "gatsby-image"

const Tutorial = ({ tutorial }) => {
    const { id, 
            title, 
            image, 
            language, 
            level, 
            price } = tutorial

    return (
        <article>
            <h5>{title}</h5>
            <Image fixed={image.childImageSharp.fixed}/>
            <ul>
                <li>Language: {language}</li>
                <li>Level: {level}</li>
                <li>Price: {price}</li>
            </ul>
            <button>More</button>
        </article>
    )
}

export default Tutorial