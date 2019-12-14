/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "theme-ui"
import theme from "./base-theme.js"
import { Flex, Box, Image, Text, Heading } from "rebass"

import "./reset.css"
import "./styles.scss"

import BrandIcon from "../../static/svgs/logo_bc-main.inline.svg"
import SquareBrandIcon from "../../static/svgs/logo_bc-main-square.inline.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <div className="main-logo">
        <BrandIcon></BrandIcon>
      </div>
      <main>{children}</main>
      <footer>
        <Flex
          sx={{ backgroundColor: "tertiary", color: "#fff" }}
          fontFamily="body"
          fontWeight="body"
          flexWrap="wrap"
        >
          <Box p={[3, 5]} width={[1 / 2, 1 / 3]} style={{ textAlign: "left" }}>
            © {new Date().getFullYear()} booncon oy
            <br />
            VAT: FI24323170
          </Box>
          <Box
            p={[3, 5]}
            width={[1 / 2, 1 / 3]}
            style={{ textAlign: "center" }}
          >
            <Box sx={{ maxWidth: ["48px", "60px"], margin: "0 auto 0" }}>
              <SquareBrandIcon></SquareBrandIcon>
            </Box>
            <Text fontSize={[1, 2, 3]} color="white" textAlign="center">
              Working with friends.
            </Text>
          </Box>
          <Box
            p={[3, 5]}
            width={[1 / 2, 1 / 3]}
            sx={{ textAlign: ["left", "right"] }}
          >
            <a
              href="//facebook.com/booncon"
              target="_blank"
              rel="noopener noreferrer"
            >
              fb.com/booncon
            </a>
            <br />
            <a
              href="//twitter.com/booncon"
              target="_blank"
              rel="noopener noreferrer"
            >
              @booncon
            </a>
            <br />
            <a href="/privacy">Privacy Policy</a>
          </Box>
          <Box width={[1 / 2, 1]} sx={{ paddingTop: [3, 0], paddingBottom: 4 }}>
            <Image
              sx={{ maxWidth: [60, 100], margin: "0 auto" }}
              src="/images/SV_AA_LOGO_booncon_oy_EN_394547_web.jpg"
              alt="Asiakastieto AA Certificate"
            />
          </Box>
        </Flex>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
