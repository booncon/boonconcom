/** @jsx jsx */

import { jsx } from "theme-ui"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Text, Link, Grid } from "@theme-ui/components"
import Layout from "./layout"
import SEO from "./seo"
import SubscribeButton from "./SubscribeButton"
import { Disqus } from "gatsby-plugin-disqus"

const PodcastTemplate = ({ children, pageContext }) => {
  const {
    title,
    subtitle,
    publicationDate,
    slug,
    guid,
  } = pageContext.frontmatter

  const queryData = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          siteUrl
        }
      }
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
            slug
            iuid
          }
        }
      }
    }
  `)

  const episodeData = queryData.allMdx.nodes.filter(
    (episode) => episode.frontmatter.slug === slug
  )[0]?.frontmatter

  console.log(episodeData)

  let disqusConfig = {
    url: `${queryData.site.siteMetadata.siteUrl + slug}`,
    identifier: guid,
    title: title,
  }

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
        <Grid
          gap={3}
          sx={{
            padding: [3, 4],
            gridTemplateColumns: ["1fr"],
          }}
        >
          <Box px={[3, 4]}>
            <Heading as="h1">{title}</Heading>
            <br />
            <Box>
              {episodeData?.iuid && (
                <iframe
                  src={`https://embed.podcasts.apple.com/us/podcast/bits&pieces/id967039989?i=${episodeData.iuid}`}
                  height="175px"
                  width="100%"
                  frameBorder="0"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                  allow="autoplay *; encrypted-media *;"
                  //@ts-ignore
                  styles="width: 100%; overflow: hidden; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; background-color: transparent; background-position: initial initial; background-repeat: initial initial;"
                ></iframe>
              )}
            </Box>
            <br />
            <Heading as="h2" sx={{ marginBottom: [2, 3] }}>
              Shownotes:
            </Heading>
            {children}
            <Box sx={{ my: [3, 4] }}>
              <SubscribeButton />
            </Box>
            <Box sx={{ my: [3, 4] }}>
              {/* <CommentCount config={disqusConfig} placeholder={"..."} /> */}
              <Disqus config={disqusConfig} />
            </Box>
            <Link
              to="/podcast"
              sx={{ fontSize: [2, 3, 4], marginBottom: [2, 3] }}
              as={GatsbyLink}
            >
              Check out our other episodes..
            </Link>
          </Box>
        </Grid>
      </Box>
    </Layout>
  )
}

export default PodcastTemplate
