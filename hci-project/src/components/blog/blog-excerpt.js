import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

export default ({ posts }) => {
  const postsList = posts.map(({ post }) => {
    const { id, excerpt } = post
    const { title, date, slug, image } = post.frontmatter
    return (
      <section key={id} >
        <Image fixed={image.childImageSharp.fixed}/>
        <h4>{title}</h4>
        <span>{date}</span>
        <p>{excerpt}</p>
        <button>
          <Link to={`public_pages/blog/${slug}`}>
            More
          </Link>
        </button>
      </section>
    )
  })

  return postsList
}