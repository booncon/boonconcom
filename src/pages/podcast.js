/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"

import {
  Box, Heading
} from "@theme-ui/components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { jsx } from "theme-ui"

const PodcastPage = () => (
  <Layout>
    <SEO title="bits & pieces" />
    <Box        
        sx={{
          variant: "contentWrap",
          marginTop: [2, 4, 6]
        }}
      >
    <Heading as="h1">bits & pieces</Heading>
    <p>Welcome to page 2</p>
    <iframe src="https://cdn.podlove.org/subscribe-button/button.html?id=3815&amp;language=en&amp;size=big&amp;style=filled&amp;format=cover&amp;podcastTitle=bits%2520%2526amp%253B%2520pieces&amp;podcastCover=https://booncon.com/app/cache/podlove/3f/e8d38979cb383b5a34ec1733ee8e47/bits-pieces_400x400.jpg&amp;buttonColor=%252375ad91" id="3815" class="podlove-subscribe-button-iframe" styles="border: none; display: inline-block; overflow: hidden;" height="234" width="180"></iframe>
    <Link to="/">Go back to the homepage</Link>
    </Box>
  </Layout>
)

export default PodcastPage
