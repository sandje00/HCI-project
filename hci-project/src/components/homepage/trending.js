/** @jsx jsx */

import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from 'react-carousel'

require("react-carousel/lib/carousel.css")

const Trending = () => {
    const data = useStaticQuery(graphql`
        query Trending {
            allTrendingJson {
                edges {
                    node {
                        id
                        title
                        image {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const trending = data.allTrendingJson.edges
}

export default Trending
