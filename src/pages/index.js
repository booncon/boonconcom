import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box, Text, Heading } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Working with friends." />
    <Flex className="hero-img" alignItems="center" justifyContent="center">
      <Heading textAlign="center" fontSize={[6, 7]} className="hero-title">
        Working with friends.
      </Heading>
    </Flex>

    <Flex
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
      fontFamily="body"
      fontWeight="body"
    >
      <Box
        p={4}
        width={8 / 12}
        color="#333"
        bg="white"
        style={{ marginTop: "-16rem" }}
      >
        <Text fontSize={[4, 5]}>
          We are booncon, we are changing the way people experience work. As the
          lines between life and work are blurring, it’s important for everybody
          to love what they are doing. We are on a mission to make work lovable.
        </Text>
        <br />
        <br />
        <Text fontSize={[1, 2, 3]}>
          Since we developed this idea in 2010 a lot has happened: from starting
          this company in Helsinki over setting the base for the digital agency{" "}
          <a href="https://pixels.fi" target="_blank" rel="noopener noreferrer">
            Pixels
          </a>{" "}
          and launching the interactive children book publisher{" "}
          <a
            href="https://tinytinbox.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiny Tin Box
          </a>{" "}
          to creating the coworking concept{" "}
          <a
            href="https://friendzone.space"
            target="_blank"
            rel="noopener noreferrer"
          >
            Friendzone
          </a>
          .<br />
          We see ourselves as business builders and just love coming up with new
          concepts.
          <br />
          <br />
          Experiences from our work and cooperations with different companies
          have proven we are on the right track. Work is not a job and working
          with friends is awesome. booncon is all about learning from each other
          and sharing experiences. We strongly believe in mixing people from
          different backgrounds and blending startup ideology with the power of
          established companies.
        </Text>
      </Box>
      <Box p={4} width={4 / 12}>
        <a
          href="https://www.instagram.com/p/BfyB5J8HHsW/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="il-photo__img img-responsive"
            src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/28152293_172056500095967_5245117059485925376_n.jpg?_nc_ht=scontent.cdninstagram.com&amp;oh=c1664944186d43d3cd2a6ffa797ba414&amp;oe=5E879DA5"
            alt="Instagram"
            data-filter="Juno"
            scale="0"
          />
        </a>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
