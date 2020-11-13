/** @jsx jsx */
import { Link } from "gatsby"

import { Box, Heading } from "@theme-ui/components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { jsx } from "theme-ui"

const PodcastPage = () => (
  <Layout>
    <SEO title="bits & pieces" />
    <Box
      sx={{
        variant: "contentWrap",
        marginTop: [2, 4, 6],
      }}
    >
      <Heading as="h1">bits & pieces</Heading>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Box>
  </Layout>
)

export default PodcastPage
