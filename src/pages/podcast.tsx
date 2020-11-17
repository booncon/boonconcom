/** @jsx jsx */
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import { Box, Heading, Text, Link } from "@theme-ui/components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { jsx } from "theme-ui"

const formatDurationNicely = (seconds: number) => {
  var date = new Date(0)
  date.setSeconds(seconds) // specify value for SECONDS here
  return date.toISOString().substr(11, 8)
}

const formatDate = function (timestamp: string) {
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
          marginTop: [2, 4, 6],
        }}
      >
        <Heading as="h1">bits & pieces</Heading>
        <br />
        <br />
        {queryData.allMdx.nodes.reverse().map((episode) => {
          return (
            <Box key={episode.id} sx={{ marginBottom: [3, 4] }}>
              <Link
                to={"/podcast/" + episode.slug}
                as={GatsbyLink}
                sx={{ marginBottom: [1, 2] }}
              >
                <Heading as="h2">
                  {episode.frontmatter.title} – {episode.frontmatter.subtitle}
                </Heading>
              </Link>
              <Text>
                {formatDate(episode.frontmatter.publicationDate)}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {formatDurationNicely(episode.frontmatter.duration)}
              </Text>
              <Text sx={{ marginTop: [1, 2], fontSize: [2, 3] }}>
                {episode.frontmatter.excerpt}
              </Text>
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
