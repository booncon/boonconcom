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
          marginTop: [2, 4],
        }}
      >
        <Heading as="h1" sx={{ marginBottom: [2, 3] }}>
          bits & pieces
        </Heading>
        {/* <Heading as="h2" sx={{ marginBottom: [2, 3] }}>
          Latest Episodes:
        </Heading> */}
        <Grid
          gap={4}
          sx={{
            gridTemplateColumns: ["1fr", "1fr 1fr"],
          }}
        >
          {queryData.allMdx.nodes.reverse().map((episode) => {
            return (
              <Box key={episode.id} sx={{ marginBottom: [3, 4] }}>
                <Link
                  to={"/podcast/" + episode.slug}
                  as={GatsbyLink}
                  sx={{ marginBottom: [1, 2] }}
                >
                  <Heading as="h3">
                    {episode.frontmatter.title} – {episode.frontmatter.subtitle}
                  </Heading>
                </Link>
                <Text>
                  Date: {formatDate(episode.frontmatter.publicationDate)}
                  &nbsp;&nbsp;&nbsp;&nbsp; Duration:{" "}
                  {formatDurationNicely(episode.frontmatter.duration)}
                  &nbsp;&nbsp;&nbsp;&nbsp; Season: {episode.frontmatter.season}
                  &nbsp;&nbsp;&nbsp;&nbsp; Episode:{" "}
                  {episode.frontmatter.episodeNumber}
                  &nbsp;&nbsp;&nbsp;&nbsp; Tags:{" "}
                  {episode.frontmatter.categories.join(", ")}
                </Text>
                <Text sx={{ marginTop: [1, 2], fontSize: [2, 3] }}>
                  {episode.frontmatter.excerpt}
                </Text>
              </Box>
            )
          })}
        </Grid>
        <br />
        <br />
        <SubscribeButton
          imageUrl="https://booncon-blahh.s3-eu-west-1.amazonaws.com/bp-cover-shaded.jpg"
          title="bits & pieces"
          feedUrl="http://booncon.com/pocast-rss-feed.xml"
          itunesLink="https://podcasts.apple.com/us/podcast/bits-pieces/"
        />
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
