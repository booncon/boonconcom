/** @jsx jsx */

// import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./reset.css"
import { jsx, Styled } from "theme-ui"
import { Flex, Box, Image, Text, Link } from "@theme-ui/components"

import "./styles.scss"

import BrandIcon from "../../static/svgs/logo_bc-main.inline.svg"
import SquareBrandIcon from "../../static/svgs/logo_bc-main-square.inline.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteSloganQuery {
      site {
        siteMetadata {
          slogan
        }
      }
    }
  `)

  return (
    <Styled.root>
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box className="main-logo">
          <BrandIcon></BrandIcon>
        </Box>

        <Box
          as="main"
          sx={{
            width: "100%",
            flex: "1 1 auto",
          }}
        >
          {children}
        </Box>

        <Flex
          as="footer"
          sx={{
            width: "100%",
            backgroundColor: "tertiary",
            color: "#fff",
            padding: [3, 5],
            display: "grid",
            gridGap: 3,
            gridTemplateColumns: ["1fr", "1fr 1fr 1fr"],
          }}
        >
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            © {new Date().getFullYear()} booncon oy
            <br />
            VAT: FI24323170
            <br />
            <Link
              sx={{ marginTop: [2, 3] }}
              href="https://www.asiakastieto.fi/yritykset/fi/booncon-oy/24323170/yleiskuva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                sx={{ maxWidth: [60, 100] }}
                src="/images/SV_LOGO_booncon_oy_EN_409937_web.jpg"
                alt="Asiakastieto AA Certificate"
              />
            </Link>
          </Box>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Box sx={{ maxWidth: ["48px", "60px"], margin: "0 auto 0" }}>
              <SquareBrandIcon></SquareBrandIcon>
            </Box>
            <Text fontSize={[1, 2, 3]} color="white" textAlign="center">
              {data.site.siteMetadata.slogan}
            </Text>
          </Box>
          <Box
            sx={{
              textAlign: ["left", "right"],
            }}
          >
            <Link
              href="//facebook.com/booncon"
              target="_blank"
              rel="noopener noreferrer"
            >
              fb.com/booncon
            </Link>
            <br />
            <Link
              href="//twitter.com/booncon"
              target="_blank"
              rel="noopener noreferrer"
            >
              @booncon
            </Link>
            <br />
            <Link href="/privacy">Privacy Policy</Link>
          </Box>
        </Flex>
      </Flex>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
