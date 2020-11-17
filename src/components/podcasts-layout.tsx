/** @jsx jsx */

import { jsx } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { Box, Heading, Text, Link } from "@theme-ui/components"
import Layout from "./layout"
import SEO from "./seo"
import SubscribeButton from "./SubscribeButton"

const PodcastTemplate = ({ children, pageContext }) => {
  const { title, subtitle, publicationDate } = pageContext.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <Box
        sx={{
          variant: "contentWrap",
          marginTop: [2, 4],
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
        <Box sx={{ my: [3, 4] }}>
          <SubscribeButton
            imageUrl="https://booncon-blahh.s3-eu-west-1.amazonaws.com/bp-cover-shaded.jpg"
            title="bits & pieces"
            feedUrl="http://booncon.com/pocast-rss-feed.xml"
            itunesLink="https://podcasts.apple.com/us/podcast/bits-pieces/"
          />
        </Box>
        <Link
          to="/podcast"
          sx={{ fontSize: [2, 3, 4], marginBottom: [2, 3] }}
          as={GatsbyLink}
        >
          Check out our other episodes..
        </Link>
      </Box>
    </Layout>
  )
}

export default PodcastTemplate
