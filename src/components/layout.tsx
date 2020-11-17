/** @jsx jsx */

import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

import "../../static/css/reset.css"
import { jsx, Styled } from "theme-ui"
import { Flex, Box, Image, Text, Link } from "@theme-ui/components"

import Tippy from "@tippyjs/react"
import CookieConsent from "react-cookie-consent"

//@ts-ignore
import BrandIcon from "../../static/svgs/logo_bc-main.inline.svg"
//@ts-ignore
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
        <Box
          sx={{
            position: "fixed",
            left: [2, 3],
            top: [2, 3],
            zIndex: 5,
            svg: {
              height: "48px",
              "#bc-logo-main-circle-bg": {
                stroke: "#fff",
                strokeWidth: "3px",
              },
              "#bc-logo-main-text-wrap": {
                display: "none",
              },
            },
          }}
        >
          <GatsbyLink to="/">
            <BrandIcon></BrandIcon>
          </GatsbyLink>
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
            fontSize: [1, 2],
            gridTemplateColumns: ["1fr 1fr 1fr"],
          }}
        >
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            © {new Date().getFullYear()} booncon oy
            <br />
            <span sx={{ display: ["none", "inline-block"] }}>VAT:</span>{" "}
            FI24323170
            <br />
            <Link
              sx={{ marginTop: [2, 3] }}
              href="https://www.asiakastieto.fi/yritykset/fi/booncon-oy/24323170/yleiskuva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                sx={{ maxWidth: [60, 100] }}
                src={"/images/SV_LOGO_booncon_oy_EN_409937_web.jpg"}
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
              <Tippy
                offset={[0, 54]}
                content={
                  <span>
                    Happy{" "}
                    {new Date().toLocaleString("en-uk", { weekday: "long" })}{" "}
                    😃!
                  </span>
                }
              >
                <span>
                  <SquareBrandIcon></SquareBrandIcon>
                </span>
              </Tippy>
            </Box>
            <Text fontSize={[1, 2, 3]} color="white" textAlign="center">
              {data.site.siteMetadata.slogan}
            </Text>
          </Box>
          <Box
            sx={{
              textAlign: "right",
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
              sx={{ marginTop: 1 }}
            >
              @booncon
            </Link>
            <br />
            <Link to="/privacy" as={GatsbyLink} sx={{ marginTop: 1 }}>
              Privacy Policy
            </Link>
          </Box>

          <CookieConsent
            location="bottom"
            buttonText="Accept"
            enableDeclineButton
            declineButtonText="Decline"
            cookieName="gatsby-gdpr-google-analytics"
            sx={{ background: "#3b454f" }}
            buttonStyle={{
              color: "#fff",
              background: "#2A9BDA",
              fontSize: "13px",
            }}
            declineButtonStyle={{
              color: "#fff",
              background: "#677889",
              fontSize: "13px",
            }}
            expires={150}
          >
            This website uses cookies to enhance the user experience. To find
            out more, plaese read our{" "}
            <Link to="/privacy" as={GatsbyLink}>
              Privacy Policy
            </Link>
            .
          </CookieConsent>
        </Flex>
      </Flex>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
