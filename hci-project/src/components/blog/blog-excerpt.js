import React from "react"
import { Link } from "gatsby"

export default ({ posts }) => {
  const postsList = posts.map(({ post }) => {
    const { id, excerpt } = post
    const { title, date, slug } = post.frontmatter
    return (
      <section key={id} >
        <h4>
          <Link to={`public_pages/blog/${slug}`}>
            {title}
          </Link>
        </h4>
        <span>{date}</span>
        <p>{excerpt}</p>
      </section>
    )
  })

  return postsList
}