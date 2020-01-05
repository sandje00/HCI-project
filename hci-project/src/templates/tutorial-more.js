import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const TutorialMore = ({ data }) => {
    const tutorial = data.allTutorialsJson.edges[0].node
    
    return (
        <Layout>
            <Image fluid={tutorial.image.childImageSharp.fluid} />
            <h2>{tutorial.title}</h2>
            <ul>
                <li>Language: {tutorial.language}</li>
                <li>Level: {tutorial.level}</li>
                <li>Price: {tutorial.price}</li>
                <li>Rating: {tutorial.rating}</li>
            </ul>
            <h4>Summary:</h4>
            <ul>
                {tutorial.summary.map(
                    (item, index) => <li key={index}>{item}</li>
                )}
            </ul>
        </Layout>
    )
}

export default TutorialMore

export const query = graphql`
    query TutorialQuery($id: String!) {
        allTutorialsJson(filter: {
            id: {eq: $id}
        }) {
            edges {
                node {
                    id
                    title
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_tracedSVG
                            }
                        }
                    }
                    language
                    level
                    price
                    rating
                    summary
                }
            }
        }
    }
` 