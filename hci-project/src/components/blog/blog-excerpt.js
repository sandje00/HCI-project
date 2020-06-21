/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { navigate } from "@reach/router"
import { useWindowWidth } from "@react-hook/window-size"
import Image from "gatsby-image"

export default ({ posts }) => {
  const postsList = posts.map(({ post }) => {
    const { id, excerpt } = post
    const { title, slug, image } = post.frontmatter

    const handleMoreClick = () => {
      navigate(`/blog/${slug}`)
    }

    let width = useWindowWidth()
    let condition = width < 826

    return (
      <Flex 
        key={id}
        sx={{
          flexDirection: condition ? "column" : "row",
          justifyContent: "space-around",
          alignItems: condition ? "stretch" : "center",
          mt: "50px",
          ml: condition ? "20px" : "0px"
        }}
      >
        {condition &&
          <Box>
            <h3>{title}</h3>
          </Box>
        }
        <Box>
          <Image 
            fixed={image.childImageSharp.fixed}
            sx={{ mr: "10px" }}
          />
        </Box>
        <Box sx={{
          flexShrink: "100"
        }}>
          {!condition &&
            <h4 sx={{ mb: "10px" }}>
              {title}
            </h4>
          }
          <p sx={{ 
            maxWidth: condition ? "300px" : "500px",
            textAlign: "justify"
          }}>
            {excerpt}
          </p>
        </Box>
        <Box>
          <button
            onClick={handleMoreClick}
            sx={{
              backgroundColor: "accent",
              borderRadius: "10px",
              borderStyle: "none",
              height: "40px",
              width: "100px",
              textAlign: "center",
              cursor: "pointer"
            }}
          >
            More
          </button>
        </Box>
      </Flex>
    )
  })

  return postsList
}