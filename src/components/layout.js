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
import { Flex, Box, Text, Heading } from "rebass"

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
          sx={{ backgroundColor: "secondary", color: "#fff" }}
          fontFamily="body"
          fontWeight="body"
        >
          <Box p={5} width={1 / 3} style={{ textAlign: "left" }}>
            © {new Date().getFullYear()} booncon oy
            <br />
            VAT: FI24323170
            <br />
            <br />
            <img
              style={{ maxWidth: 100 }}
              src="/images/SV_AA_LOGO_booncon_oy_EN_394547_web.jpg"
              ytunnus="24323170"
              title="More Info"
              alt="Asiakastieto AA Certificate"
            />
          </Box>
          <Box p={5} width={1 / 3} style={{ textAlign: "center" }}>
            <div style={{ maxWidth: 60, margin: "0 auto 6px" }}>
              <SquareBrandIcon></SquareBrandIcon>
            </div>
            <small>Working with friends.</small>
          </Box>
          <Box p={5} width={1 / 3} style={{ textAlign: "right" }}>
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
        </Flex>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
