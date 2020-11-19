/** @jsx jsx */
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import { Box, Heading, Text, Link, Grid } from "@theme-ui/components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SubscribeButton from "../../components/SubscribeButton"
import { jsx } from "theme-ui"
import EpisodeMeta from "../../components/EpisodeMeta"

const PodcastPage = () => {
  const queryData = useStaticQuery(graphql`
    query getPodcastData {
      allMdx(sort: { fields: frontmatter___episodeNumber, order: DESC }) {
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
          marginTop: [5, 6],
        }}
      >
        <Grid
          gap={3}
          sx={{
            padding: [3, 4],
            gridTemplateColumns: ["1fr"],
          }}
        >
          <Box px={[3, 4]}>
            <Grid
              gap={3}
              sx={{
                gridTemplateColumns: ["1fr", "2fr 1fr"],
              }}
            >
              <Box>
                <Heading as="h1" sx={{ marginBottom: [2, 3] }}>
                  bits & pieces
                </Heading>
                <Text sx={{ marginBottom: [3, 4], fontSize: [3, 4] }}>
                  A show about how to get things done & love your work.
                </Text>
              </Box>
              <Box sx={{ textAlign: "right", marginTop: [0, 2] }}>
                <SubscribeButton isSmall />
              </Box>
            </Grid>
            <iframe
              src="https://embed.podcasts.apple.com/us/podcast/bits-pieces/id967039989?itsct=podcast_box&amp;itscg=30200"
              height="450px"
              width="100%"
              //@ts-ignore
              frameBorder="0"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *;"
              //@ts-ignore
              styles="width: 100%; overflow: hidden; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; background-color: transparent; background-position: initial initial; background-repeat: initial initial;"
            ></iframe>
          </Box>
          <Box px={[3, 4]}>
            <Heading as="h2" sx={{ marginTop: [2, 3], marginBottom: [3, 4] }}>
              Episodes:
            </Heading>
            {queryData.allMdx.nodes.map((episode) => {
              return (
                <Box key={episode.id} sx={{ marginBottom: [3, 4] }}>
                  <Link
                    to={"/podcast/" + episode.slug}
                    as={GatsbyLink}
                    sx={{ marginBottom: [1, 2] }}
                  >
                    <Heading as="h3">{episode.frontmatter.title}</Heading>
                  </Link>
                  <EpisodeMeta frontmatter={episode.frontmatter} />
                </Box>
              )
            })}
            <br />
            <SubscribeButton />
          </Box>
        </Grid>
      </Box>
    </Layout>
  )
}

export default PodcastPage
