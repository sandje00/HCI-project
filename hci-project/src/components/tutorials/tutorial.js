/** @jsx jsx */ 

import { Link } from "gatsby"
import Image from "gatsby-image"
import { jsx } from "theme-ui"

const Tutorial = ({ tutorial }) => {
    const { id, 
            title, 
            image, 
            language, 
            level, 
            price } = tutorial

    return (
        <article sx={{
            width: "250px",
            height: "374px",
            mt: "50px",
            mr: "40px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            border: "1px",
            borderStyle: "solid",
            borderColor: "#cccccc"
        }}>
            <h5 sx={{
                mt: "10px",
                fontSize: "1.15em",
                display: "flex !important",
                flexDirection: "row",
                justifyContent: "center",
                textAlign: "center"                
            }}>
                {title}
            </h5>
            <Image 
                fixed={image.childImageSharp.fixed}
                sx={{
                    display: "flex !important",
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: "0 auto"
                }}
            />
            <ul sx={{
                mt: "15px",
                listStyleType: "none"
            }}>
                <li sx={{ mb: "1%" }}>Language: {language}</li>
                <li sx={{ mb: "1%" }}>Level: {level}</li>
                <li sx={{ mb: "1%" }}><b>Price: $ {price}</b></li>
            </ul>
            <button sx={{
                ml: "125px",
                mb: "10px",
                backgroundColor: "accent",
                borderRadius: "10px",
                borderStyle: "none",
                height: "40px",
                width: "100px",
                textAlign: "center"
            }}>
                <Link 
                    to={`/public_pages/tutorials/${id}`}
                    sx={{
                        color: "#000000",
                        textDecoration: "none",
                        cursor: "pointer",
                        fontSize: "20px"
                    }}
                    >
                    More
                </Link>
            </button>
        </article>
    )
}

export default Tutorial