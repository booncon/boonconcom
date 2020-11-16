/** @jsx jsx */
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import { Box, Heading, Text, Link } from "@theme-ui/components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { jsx } from "theme-ui"

const PodcastPage = () => {
  const queryData = useStaticQuery(graphql`
    query getPodcastData {
      allMdx {
        nodes {
          id
          slug
          frontmatter {
            title
            episodeNumber
            excerpt
            publicationDate
            season
            duration
            categories
            subtitle
            url
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="bits & pieces" />
      <Box
        sx={{
          variant: "contentWrap",
          marginTop: [2, 4, 6],
        }}
      >
        <Heading as="h1">bits & pieces</Heading>
        <br />
        <br />
        {queryData.allMdx.nodes.reverse().map((episode) => {
          return (
            <Box key={episode.id}>
              <Link to={"/podcast/" + episode.slug} as={GatsbyLink}>
                <Heading>{episode.frontmatter.title}</Heading>
              </Link>
              <Text>{episode.frontmatter.excerpt}</Text>
            </Box>
          )
        })}

        <br />
        <br />
        <Link to="/" sx={{ fontSize: [2, 3, 4] }} as={GatsbyLink}>
          Go back to the homepage
        </Link>
      </Box>
    </Layout>
  )
}

export default PodcastPage
