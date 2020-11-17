/** @jsx jsx */

import { jsx } from "theme-ui"
import { Box, Heading, Text, Link } from "@theme-ui/components"
import Layout from "./layout"
import SEO from "./seo"

const PodcastTemplate = ({ children, pageContext }) => {
  const { title, subtitle, publicationDate } = pageContext.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <Box
        sx={{
          variant: "contentWrap",
          marginTop: [2, 4, 6],
          p: {
            marginBottom: [2, 3],
          },
        }}
      >
        <Heading as="h1">{title}</Heading>
        <br />
        <Heading as="h2" sx={{ marginBottom: [2, 3] }}>
          Shownotes:
        </Heading>
        {children}
      </Box>
    </Layout>
  )
}

export default PodcastTemplate
