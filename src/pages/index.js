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
import BackgroundImage from "gatsby-background-image"

import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const queryData = useStaticQuery(graphql`
    query getQueryData {
      allInstaNode {
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
              maxWidth: 1200
              duotone: { highlight: "#ffffff", shadow: "#3b454f" }
            ) {
              # or fixed
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      desktop: file(relativePath: { eq: "office-work-b+w.jpeg" }) {
        childImageSharp {
          fluid(
            quality: 88
            maxWidth: 1920
            duotone: { highlight: "#ffffff", shadow: "#3b454f" }
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const instagram = queryData.allInstaNode.edges.reverse()

  return (
    <Layout>
      <SEO title="Working with friends." />
      <BackgroundImage
        Tag={`header`}
        fluid={queryData.desktop.childImageSharp.fluid}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: ["70vh", "100vh"],
          zIndex: -1,
        }}
      >
        <Heading
          as="h1"
          sx={{ variant: "text.heading", fontSize: [4, 5, 6] }}
          className="hero-title"
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
              …and today we couldn't be happier working together. Our different
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
              <Image
                variant="avatar"
                src="/images/tobi-square.jpg"
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
              Master Planner Tobias is an entrepreneur at heart, always bustling
              with new ways of doing things. Having worked closely with all
              functions of companies in different sectors truly makes him a
              business allrounder – be it marketing or finance.
              <br />
              His passion lies in transforming ideas into working concepts and
              business plans.
              <br />
              In his spare time he enjoys laughing at silly things on the web,
              playing board games, keeping tabs on what's going on around the
              globe and practising martial arts.
            </Text>
            <Link
              fontSize={[3, 4, 5]}
              href="https://www.twitter.com/metzelfetz"
            >
              @metzelfetz
            </Link>
          </Box>
          <Box p={[3, 4]}>
            <Flex sx={{ alignItems: "center", marginBottom: 3 }}>
              <Image
                variant="avatar"
                src="/images/luki-square.jpg"
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
              ten years of working in the crossover of these two disciplines
              have helped him to create a unique toolset for analysing complex
              processes and implementing holistic user-centred solutions.
              <br />
              He is passionate about creating great user experiences and adores
              simplicity.
              <br />
              When he is not working or tinkering he is probably trying out new
              gadgets, throwing frisbees, cooking or working on his next batch
              of craft-beer.
            </Text>
            <Link fontSize={[3, 4, 5]} href="https://www.twitter.com/saftsaak">
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
              {new Intl.NumberFormat().format(1147)}
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
        fluid={queryData.desktop.childImageSharp.fluid}
        sx={{
          py: [4, 5],
          paddingBottom: [4, 6],
          zIndex: -1,
          color: "#fff",
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
            <Box sx={{ display: ["none", "block"] }}>
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
            <Box px={[3, 4]} py={0}>
              <Heading as="h2" sx={{ fontSize: [3, 4, 5] }}>
                Let's work together!
              </Heading>
              <br />
              <Text sx={{ fontSize: [1, 2, 3] }}>
                Over the last years we have worked as advisors for different
                companies in our respective fields and helped with the
                improvement of work methods and the creation of better work
                environments.
                <br />
                We love to dive into challenging projects and meet interesting
                people. Our latest projects included working in the building
                sector, the field of international law, exploring the upcoming
                omnichannel revolution in the retail sector and experimenting
                with apps and education.
                <br />
                <br />
                Speaking several languages and work experience throughout Europe
                make us a great asset in every project.
              </Text>
            </Box>
          </Grid>
        </Flex>
        <Flex variant="contentWrap" flexWrap="wrap" sx={{ px: [3, 4] }}>
          <Box p={[3, 4]}>
            <Heading as="h3">We are awesome in:</Heading>
            <ul>
              <li>evaluating and analysing existing products</li>
              <li>developing ideas into concepts</li>
              <li>writing business plans</li>
              <li>building prototypes</li>
              <li>consulting in brand development</li>
              <li>teaching project management</li>
              <li>refining work methods &amp; environments</li>
              <li>being happy</li>
            </ul>
          </Box>
        </Flex>
        <Flex
          variant="contentWrap"
          flexWrap="wrap"
          sx={{ justifyContent: "center", px: [3, 4] }}
        >
          <Text sx={{ mx: [3, 4], alignSelf: "center", fontSize: [3, 4, 5] }}>
            Interested? Drop us a line, your{" "}
            <Link href="mailto:hello@booncon.com">email</Link> is going to make
            our day!
          </Text>
        </Flex>
      </BackgroundImage>
      <Flex as="section" variant="contentWrap" flexWrap="wrap">
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
              <a sx={{ variant: "linkBox" }} className="big" href="podcast">
                <Tippy
                  content='Listen to our podcast "bits &amp; pieces"'
                  offset={[0, 20]}
                >
                  <img
                    src="https://booncon.com/app/themes/bc-new/assets/images/logos/bp.jpg"
                    alt="Logo podcast bits &amp; pieces"
                  />
                </Tippy>
              </a>
              <a
                sx={{ variant: "linkBox" }}
                href="//instagram.com/booncon"
                rel="noreferrer"
                target="_blank"
              >
                <Tippy content="See our life on Instagram" offset={[0, 14]}>
                  <img
                    src="https://booncon.com/app/themes/bc-new/assets/images/logos/instagram.svg"
                    alt="Logo instagram"
                  />
                </Tippy>
              </a>
              <a
                sx={{ variant: "linkBox" }}
                href="//linkedin.com/company/booncon"
                rel="noreferrer"
                target="_blank"
              >
                <Tippy content="Connect with us on LinkedIn" offset={[0, 14]}>
                  <img
                    src="https://booncon.com/app/themes/bc-new/assets/images/logos/linked_in.svg"
                    alt="Logo LinkedIn"
                  />
                </Tippy>
              </a>
              <a
                sx={{ variant: "linkBox" }}
                href="//twitter.com/booncon"
                rel="noreferrer"
                target="_blank"
              >
                <Tippy content="Follow us on Twitter" offset={[0, 14]}>
                  <img
                    src="https://booncon.com/app/themes/bc-new/assets/images/logos/twitter.svg"
                    alt="Logo twitter"
                  />
                </Tippy>
              </a>
              <a
                sx={{ variant: "linkBox" }}
                href="//facebook.com/booncon"
                rel="noreferrer"
                target="_blank"
              >
                <Tippy content="Check us out on Facebook" offset={[0, 14]}>
                  <img
                    src="https://booncon.com/app/themes/bc-new/assets/images/logos/facebook.svg"
                    alt="Logo facebook"
                    scale="0"
                  />
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
      <Box as="section" bg="quaternary" color="#fff">
        <Grid
          gap={3}
          sx={{
            gridTemplateColumns: ["1fr", "1fr 1fr"],
          }}
        >
          <Flex sx={{ justifyContent: "stretch" }}>
            <Box sx={{ width: "100%", maxHeight: [128, 512] }}>
              <Img
                fluid={queryData.staticMap.childFile.childImageSharp.fluid}
                sx={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </Box>
          </Flex>
          <Flex
            sx={{
              my: [4, 5],
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box sx={{ maxWidth: ["100%", "50%"], px: [4, 0], py: [2, 0] }}>
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
                  fontSize: [2],
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
                  <Link href="mailto:hello@booncon.com">hello@booncon.com</Link>
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
