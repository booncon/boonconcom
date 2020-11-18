/** @jsx jsx */
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Flex,
  Grid,
  Box,
  Text,
  Heading,
  Image,
  Link,
  AspectRatio,
} from "@theme-ui/components"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { Link as GatsbyLink } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

import { Waypoint } from "react-waypoint"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const queryData = useStaticQuery(graphql`
    query getQueryData {
      allInstaNode(limit: 3, sort: { fields: timestamp, order: DESC }) {
        edges {
          node {
            localFile {
              uid
              childImageSharp {
                fixed(
                  width: 502
                  height: 502
                  duotone: { highlight: "#ffffff", shadow: "#3b454f" }
                ) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
      staticMap {
        childFile {
          childImageSharp {
            fluid(
              maxWidth: 1600
              quality: 83
              duotone: { highlight: "#ffffff", shadow: "#3b454f" }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      hero: file(relativePath: { eq: "office-work-b+w.jpeg" }) {
        childImageSharp {
          fluid(
            quality: 85
            maxWidth: 1920
            duotone: { highlight: "#ffffff", shadow: "#3b454f" }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      workWithUs: file(relativePath: { eq: "laptops-blurred.jpg" }) {
        childImageSharp {
          fluid(
            quality: 83
            maxWidth: 1920
            duotone: { highlight: "#cccccc", shadow: "#3b454f" }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      luki: file(relativePath: { eq: "luki.jpg" }) {
        childImageSharp {
          fluid(
            quality: 83
            maxWidth: 500
            duotone: { highlight: "#ffffff", shadow: "#3b454f" }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tobi: file(relativePath: { eq: "tobi.jpg" }) {
        childImageSharp {
          fluid(
            quality: 83
            maxWidth: 500
            duotone: { highlight: "#ffffff", shadow: "#3b454f" }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const instagram = queryData.allInstaNode.edges

  return (
    <Layout>
      <SEO title="Working with friends." />
      <BackgroundImage
        Tag={`header`}
        fluid={queryData.hero.childImageSharp.fluid}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: ["70vh", "100vh"],
          zIndex: -1,
          animation: "fadeIn 2s ease-in-out",
          "@keyframes fadeIn": {
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          },
        }}
      >
        <Heading
          as="h1"
          id="home"
          sx={{
            variant: "text.heading",
            fontSize: [4, 5, 6],
            animation: "colorChange 2s ease-in-out",
            color: "#fff",
            "@keyframes colorChange": {
              "0%": {
                color: "secondary",
              },
              "100%": {
                color: "#fff",
              },
            },
          }}
        >
          Working with friends.
        </Heading>
      </BackgroundImage>
      <Box
        sx={{
          variant: "contentWrap",
        }}
      >
        <Grid
          as="section"
          gap={3}
          sx={{
            padding: [3, 4],
            gridTemplateColumns: ["1fr", "2fr 1fr"],
            marginBottom: [-3, -4],
          }}
        >
          <Box
            sx={{
              padding: [3, 4],
              backgroundColor: "#fff",
              marginTop: ["-10vh", "-13rem"],
            }}
          >
            <Text sx={{ fontSize: [2, 3, 4], marginTop: [1, -2] }}>
              We are booncon, we are changing the way people experience work. As
              the lines between life and work are blurring, it’s important for
              everybody to love what they are doing. We are on a mission to make
              work lovable.
            </Text>
            <br />
            <Text sx={{ fontSize: [1, 2, 3] }}>
              {/* <Waypoint
                onEnter={({ previousPosition, currentPosition, event }) => {
                  console.log(previousPosition)
                }}
              /> */}
              Experiences from our work and cooperations with different
              companies have proven we are on the right track. Work is not a job
              and working with friends is awesome. booncon is all about learning
              from each other and sharing experiences.
              <br />
              <br />
              We are creating and investing in startups to keep up with their
              everchanging working methods. This insight we use to provide
              advisory services to companies.
              <br />
              Over the years we have learned that the right company culture is
              necessary to enable digital transformation.
              <br />
              This way employees can grow into more responsible roles which
              saves unneccesary management hierarchies.
              <br />
              <br />
              We strongly believe in mixing people from different backgrounds
              and blending startup ideology with the power of established
              companies.
            </Text>
          </Box>
          <Box>
            <AspectRatio ratio={1 / 1}>
              <Img
                fixed={instagram[0].node.localFile.childImageSharp.fixed}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </AspectRatio>
          </Box>
        </Grid>
        <Grid
          gap={3}
          sx={{
            padding: [3, 4],
            gridTemplateColumns: "1fr",
          }}
          id="team"
        >
          <Box
            sx={{
              padding: [3, 4],
            }}
          >
            <Heading sx={{ fontSize: [3, 4, 5] }}>
              We met a long time ago in a place far, far away…
            </Heading>
            <Text sx={{ fontSize: [2, 3, 4] }}>
              …and couldn't be happier working together. Our different
              backgrounds enable us to work efficiently on a wide array of
              projects.
            </Text>
            <Grid
              as="section"
              gap={3}
              sx={{
                gridTemplateColumns: ["1fr", "3fr 1fr"],
              }}
            >
              <Box>
                <Text sx={{ fontSize: [1, 2, 3] }}>
                  <br />
                  Since we founded this company in Helsinki in 2011 we have
                  worked on many of them. From co-founding the digital agency{" "}
                  <Link
                    href="https://pixels.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixels Helsinki
                  </Link>{" "}
                  to launching the interactive children's book publisher{" "}
                  <Link
                    href="https://tinytinbox.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tiny Tin Box
                  </Link>{" "}
                  to creating the co-working concept{" "}
                  <Link
                    href="https://friendzone.space"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Friendzone
                  </Link>{" "}
                  to co-founding{" "}
                  <Link
                    href="https://www.selectam.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SelectAM
                  </Link>{" "}
                  and many years of advising{" "}
                  <Link
                    href="https://www.torggler.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Torggler
                  </Link>
                  .<br />
                  We are business builders and love coming up with new concepts.
                </Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid
          as="section"
          gap={3}
          sx={{
            padding: [3, 4],
            marginTop: [-4, -5],
            gridTemplateColumns: ["1fr", "1fr 1fr"],
          }}
        >
          <Box p={[3, 4]}>
            <Flex sx={{ alignItems: "center", marginBottom: 3 }}>
              <Img
                sx={{
                  variant: "avatar",
                }}
                fluid={queryData.tobi.childImageSharp.fluid}
                alt="Portrait Tobi"
              />
              <Box>
                <Heading sx={{ fontSize: [2, 3, 4] }}>Tobias Johannes</Heading>
                <Heading
                  sx={{ fontSize: [1, 2, 3], fontWeight: 200, marginTop: 1 }}
                >
                  Master Planner
                </Heading>
              </Box>
            </Flex>
            <Text sx={{ fontSize: [1, 2, 3] }}>
              Tobias has a degree in International Business and years of
              practical experience in the fields of change management and
              corporate restructuring. In tough situations he keeps a level head
              and takes bold decisions empowering people to become change
              initiators.
              <br />
              His passion lies in transforming ideas into working concepts and
              business plans.
              <br />
              In his spare time he enjoys laughing at silly things on the web,
              playing board games and keeping tabs on what's going on around the
              globe.
            </Text>
            <Link
              sx={{ fontSize: [3, 4], marginTop: [1, 2], float: "right" }}
              href="https://www.twitter.com/metzelfetz"
            >
              @metzelfetz
            </Link>
          </Box>
          <Box p={[3, 4]}>
            <Flex sx={{ alignItems: "center", marginBottom: 3 }}>
              <Img
                sx={{
                  variant: "avatar",
                }}
                fluid={queryData.luki.childImageSharp.fluid}
                alt="Portrait Luki"
              />
              <Box>
                <Heading sx={{ fontSize: [2, 3, 4] }}>
                  Lukas Jakob Hafner
                </Heading>
                <Heading
                  sx={{ fontSize: [1, 2, 3], fontWeight: 200, marginTop: 1 }}
                >
                  Master Maker
                </Heading>
              </Box>
            </Flex>
            <Text sx={{ fontSize: [1, 2, 3] }}>
              Lukas has an educational background in technology and design. Over
              ten years of working within these two disciplines have helped him
              to create a unique toolset for analysing complex processes and
              implementing holistic user-centred solutions.
              <br />
              He is passionate about developing corporate culture and solving
              technological challenges.
              <br />
              When he is not working or tinkering he is probably trying out new
              gadgets, throwing frisbees, cooking or working on his next batch
              of craft-beer.
            </Text>
            <Link
              sx={{ fontSize: [3, 4], marginTop: [1, 2], float: "right" }}
              href="https://www.twitter.com/saftsaak"
            >
              @saftsaak
            </Link>
          </Box>
        </Grid>
        <Grid
          gap={3}
          sx={{
            padding: [3, 4],
            marginTop: [-4, -5],
            gridTemplateColumns: ["1fr 1fr", "1fr 1fr 1fr 1fr"],
          }}
        >
          <Box sx={{ variant: "factBox" }}>
            <Box className="fancy-number">
              {new Intl.NumberFormat().format(3177)}
            </Box>
            pizzas eaten
          </Box>
          <Box sx={{ variant: "factBox" }}>
            <Box className="fancy-number">5</Box>
            languages spoken
          </Box>
          <Box sx={{ variant: "factBox" }}>
            <Box className="fancy-number">
              {new Date().getFullYear() - 2001}
            </Box>
            years of being friends
          </Box>
          <Box sx={{ variant: "factBox" }}>
            <Box className="fancy-number">57</Box>
            board games owned
          </Box>
        </Grid>
      </Box>
      <BackgroundImage
        Tag={`section`}
        id="work"
        fluid={queryData.workWithUs.childImageSharp.fluid}
        sx={{
          py: [4, 5],
          paddingBottom: [4, 6],
          color: "#fff",
          textShadow: "0 0 3px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Flex variant="contentWrap" flexWrap="wrap">
          <Grid
            gap={3}
            sx={{
              padding: [3, 4],
              gridTemplateColumns: ["1fr", "1fr 2fr"],
            }}
          >
            <Box
              sx={{
                display: ["none", "block"],
              }}
            >
              <Box sx={{ boxShadow: "0 0 8px 2px rgba(0, 0, 0, 0.05)" }}>
                <AspectRatio ratio={1 / 1}>
                  <Img
                    fixed={instagram[1].node.localFile.childImageSharp.fixed}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </AspectRatio>
              </Box>
            </Box>
            <Box px={[3, 4]}>
              <Heading as="h2" sx={{ fontSize: [3, 4, 5] }}>
                Let's work together!
              </Heading>
              <br />
              <Text sx={{ fontSize: [1, 2, 3] }}>
                Speaking several languages and work experience throughout Europe
                helps us understand different cultures and make us a great
                asset.
                <br />
                Over the years we have worked as advisors for different
                companies in our respective fields and helped with their digital
                transformation.
                <br />
                <br />
                We want to empower as many companies as possible to create
                better work environments. Therefore we focus on kicking off
                change projects but rely on specialised partners when it comes
                to their implementation.
                <br />
                We do this by collaborating with your decision makers in
                efficient workshops and create a final report and action plan
                for you to follow.
              </Text>
            </Box>
          </Grid>
        </Flex>
        <Flex variant="contentWrap" flexWrap="wrap" sx={{ px: [3, 4] }}>
          <Box sx={{ width: "100%" }}>
            <Box px={[3, 4]}>
              <Heading as="h2">We can help you with the following:</Heading>
            </Box>
            <Grid
              gap={3}
              sx={{
                padding: [3, 4],
                gridTemplateColumns: ["1fr", "1fr 1fr 1fr"],
                fontSize: [2, 3],
              }}
            >
              <Box>
                <Heading as="h3" sx={{ marginBottom: [1, 2] }}>
                  Strategy Audit
                </Heading>
                We are analysing your current business model to rate how it
                supports your future plans. We also evaluate your strategic
                potential through digitalisation and service based income
                models. Furthermore we define critial KPIs to measure progress
                towards your goals.
              </Box>
              <Box>
                <Heading as="h3" sx={{ marginBottom: [1, 2] }}>
                  Culture & Working Methods
                </Heading>
                We are diving into you organisation to evaluate the current
                corporate culture and wellbeing of your employees. We use our
                experience from working with startups to introduce new tools and
                working methods to empower your digital transformation.
              </Box>
              <Box>
                <Heading as="h3" sx={{ marginBottom: [1, 2] }}>
                  Tech Audit
                </Heading>
                We are looking at your IT department and the different systems
                your company is using and rate how well they support your future
                growth plans. This includes looking at core systems like ERP,
                PIM & PLM as well as your website, intranet and other supporting
                systems.
              </Box>
            </Grid>
          </Box>
        </Flex>
        <Flex
          variant="contentWrap"
          flexWrap="wrap"
          sx={{ justifyContent: "center", px: [3, 4] }}
        >
          <Text sx={{ mx: [3, 4], alignSelf: "center", fontSize: [3, 4, 5] }}>
            Interested? Drop us a line, your{" "}
            <Link href="mailto:hello@booncon.com?subject=Hi booncon!">
              email
            </Link>{" "}
            is gonna make our day!
          </Text>
        </Flex>
      </BackgroundImage>
      <Flex as="section" variant="contentWrap" flexWrap="wrap" id="loop">
        <Grid
          gap={3}
          sx={{
            padding: [3, 4],
            gridTemplateColumns: ["1fr", "1.111fr 1fr"],
          }}
        >
          <Box p={[3, 4]}>
            <Heading as="h2" sx={{ fontSize: [3, 4, 5], marginBottom: [3, 4] }}>
              Stay in the loop:
            </Heading>
            <Flex
              sx={{
                flexFlow: ["row nowrap", "column wrap"],
                maxHeight: ["auto", "200px", "300px"],
                margin: -2,
              }}
            >
              <GatsbyLink
                sx={{ variant: "linkBox" }}
                className="big"
                to="/podcast"
              >
                <Tippy
                  content='Listen to our podcast "bits &amp; pieces"'
                  offset={[0, 20]}
                >
                  <img
                    src={"images/bp.jpg"}
                    alt="Logo podcast bits &amp; pieces"
                  />
                </Tippy>
              </GatsbyLink>
              <a
                sx={{ variant: "linkBox" }}
                href="//instagram.com/booncon"
                rel="noreferrer"
                target="_blank"
              >
                <Tippy content="See our life on Instagram" offset={[0, 14]}>
                  <img src={"svgs/instagram.svg"} alt="Logo instagram" />
                </Tippy>
              </a>
              <a
                sx={{ variant: "linkBox" }}
                href="//linkedin.com/company/booncon"
                rel="noreferrer"
                target="_blank"
              >
                <Tippy content="Connect with us on LinkedIn" offset={[0, 14]}>
                  <img src={"svgs/linked_in.svg"} alt="Logo LinkedIn" />
                </Tippy>
              </a>
              <a
                sx={{ variant: "linkBox" }}
                href="//twitter.com/booncon"
                rel="noreferrer"
                target="_blank"
              >
                <Tippy content="Follow us on Twitter" offset={[0, 14]}>
                  <img src={"svgs/twitter.svg"} alt="Logo twitter" />
                </Tippy>
              </a>
              <a
                sx={{ variant: "linkBox" }}
                href="//facebook.com/booncon"
                rel="noreferrer"
                target="_blank"
              >
                <Tippy content="Check us out on Facebook" offset={[0, 14]}>
                  <img src={"svgs/facebook.svg"} alt="Logo facebook" />
                </Tippy>
              </a>
            </Flex>
          </Box>
          <Box
            p={[3, 4]}
            sx={{
              display: ["none", "block"],
              marginTop: -6,
              backgroundColor: "#fff",
              zIndex: 3,
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Img
                fixed={instagram[2].node.localFile.childImageSharp.fixed}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </AspectRatio>
          </Box>
        </Grid>
      </Flex>
      <Box as="section" bg="quaternary" color="#fff" id="contact">
        <Grid
          gap={3}
          sx={{
            gridTemplateColumns: ["1fr", "1fr 1fr"],
          }}
        >
          <Flex sx={{ justifyContent: "stretch" }}>
            <BackgroundImage
              Tag={`div`}
              fluid={queryData.staticMap.childFile.childImageSharp.fluid}
              sx={{
                width: "100%",
                height: "100%",
                minHeight: [222, 420],
              }}
            ></BackgroundImage>
          </Flex>
          <Flex
            sx={{
              my: [4, 5],
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ maxWidth: ["100%", "80%", "50%"], px: [4, 0], py: [2, 0] }}
            >
              <Heading
                as="h2"
                sx={{
                  fontSize: [4, 5],
                  fontFamily: "body",
                  textTransform: "uppercase",
                  marginBottom: [2, 3],
                }}
              >
                Get in touch.
              </Heading>
              <Text sx={{ fontSize: [3, 4], marginBottom: [2, 3] }}>
                We would love to hear from you and work on something together!
              </Text>
              <Grid
                gap={3}
                sx={{
                  gridTemplateColumns: ["1fr", "1fr 1fr"],
                  fontSize: [2, 2, 3],
                }}
              >
                <address>
                  booncon oy
                  <br />
                  Suvilahdenkatu 4 B 42
                  <br />
                  c/o Hafner
                  <br />
                  00500 Helsinki, FI
                </address>
                <address>
                  +358 45 8980609
                  <br />
                  <Link href="mailto:hello@booncon.com?subject=Hi booncon!">
                    hello@booncon.com
                  </Link>
                </address>
              </Grid>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </Layout>
  )
}

export default IndexPage
