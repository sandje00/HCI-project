/** @jsx jsx */

import { jsx } from "theme-ui"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ItemsCarousel from "react-items-carousel"

import CarouselItem from "../tutorials/carousel-item"

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
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const trending = data.allTrendingJson.edges
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const chevronWidth = 40;

    return (
        <div sx={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                {trending.map(({ node }) => (
                    <CarouselItem key={node.id} tutorial={node}/>
                ))}
            </ItemsCarousel>
        </div>
    )
}

export default Trending
