/** @jsx jsx */
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import { Box, Heading, Text, Link, Grid } from "@theme-ui/components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SubscribeButton from "../../components/SubscribeButton"
import { jsx } from "theme-ui"

export const formatDurationNicely = (seconds: number) => {
  var date = new Date(0)
  date.setSeconds(seconds) // specify value for SECONDS here
  return date.toISOString().substr(11, 8)
}

export const formatDate = function (timestamp: string) {
  // Create a date object from the timestamp
  var date = new Date(timestamp)

  // Create a list of names for the months
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // return a formatted date
  return (
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  )
}

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
          marginTop: [2, 4],
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
            <Heading as="h1" sx={{ marginBottom: [2, 3] }}>
              bits & pieces
            </Heading>
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
              Shownotes & Comments:
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
                  <Text>
                    Season: <b>{episode.frontmatter.season}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;Episode:{" "}
                    <b>{episode.frontmatter.episodeNumber}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;Date:{" "}
                    <b>{formatDate(episode.frontmatter.publicationDate)}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp; Duration:{" "}
                    <b>{formatDurationNicely(episode.frontmatter.duration)}</b>
                    <br />
                    Tags: <b>{episode.frontmatter.categories.join(", ")}</b>
                  </Text>
                  <Text sx={{ marginTop: [1, 2], fontSize: [2, 3] }}>
                    {episode.frontmatter.excerpt}
                  </Text>
                </Box>
              )
            })}
            <br />
            <SubscribeButton />
            <br />
            <br />
            <Link to="/" sx={{ fontSize: [2, 3, 4] }} as={GatsbyLink}>
              Go back to the homepage
            </Link>
          </Box>
        </Grid>
      </Box>
    </Layout>
  )
}

export default PodcastPage
