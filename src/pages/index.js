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

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const instagram = useStaticQuery(graphql`
    query getInstaPics {
      allInstaNode {
        edges {
          node {
            localFile {
              uid
              childImageSharp {
                fixed(width: 500, height: 500) {
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
    }
  `).allInstaNode.edges.reverse()

  return (
    <Layout>
      <SEO title="Working with friends." />
      <Box
        as="header"
        className="hero-img"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: ["70vh", "100vh"],
        }}
      >
        <Heading
          as="h1"
          sx={{ variant: "text.heading", fontSize: [4, 5, 6] }}
          className="hero-title"
        >
          Working with friends.
        </Heading>
      </Box>

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
            gridTemplateColumns: "2fr 1fr",
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
              {/* mehr menschlich weil mehr verantwortung von jedem
              digitalisation to transform their culture and working efficiency. */}
            </Text>
          </Box>
          <Box>
            <Link
              href="https://www.instagram.com/p/BfyB5J8HHsW/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AspectRatio ratio={1 / 1}>
                <Img
                  fixed={instagram[0].node.localFile.childImageSharp.fixed}
                  sx={{
                    objectFit: "cover",
                  }}
                />
              </AspectRatio>
            </Link>
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
                gridTemplateColumns: "3fr 1fr",
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
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Box p={[3, 4]}>
            <Image
              variant="avatar"
              src="/images/tobi-square.jpg"
              alt="Portrait Tobi"
            />
            <Heading sx={{ fontSize: [2, 3, 4] }}>Tobias Johannes</Heading>
            <Heading
              sx={{ fontSize: [1, 2, 3], fontWeight: 200, marginTop: 1 }}
            >
              Master Planner
            </Heading>
            <br />
            <Text sx={{ fontSize: [1, 2, 3] }}>
              Tobias has years of practical experience in the fields of change management and corporate restructuring. Starting from strategy development he is used to taking bold decisions and seeing their execution through. Furthermore he negotiated several M&A projects.
              <br />
              His passion lies in transforming ideas into working concepts and
              business plans.
              <br />
              In his spare time he enjoys laughing at silly things on the web,
              playing board games and keeping tabs on what's going on around the
              globe.
            </Text>
            <Link
              fontSize={[3, 4, 5]}
              href="https://www.twitter.com/metzelfetz"
            >
              @metzelfetz
            </Link>
          </Box>
          <Box p={[3, 4]}>
            <Image
              variant="avatar"
              src="/images/luki-square.jpg"
              alt="Portrait Luki"
            />
            <Heading sx={{ fontSize: [2, 3, 4] }}>Lukas Jakob Hafner</Heading>
            <Heading
              sx={{ fontSize: [1, 2, 3], fontWeight: 200, marginTop: 1 }}
            >
              Master Maker
            </Heading>
            <br />
            <Text sx={{ fontSize: [1, 2, 3] }}>
              Lukas has a strong background in technology mixed with a degree in
              design. His analytical thinking helps him to get to the bottom of
              challenges and his excessive news-reading helps him to always know
              something about everything.
              <br />
              He is passionate about creating great user experiences and adores
              simplicity.
              <br />
              When he is not working or tinkering he is probably busy trying out
              new gadgets, playing basketball, throwing frisbees, cooking or
              working on the next batch of craft-beer.
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
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
      <Box
        as="section"
        bg="primary"
        color="#fff"
        sx={{ py: [4, 5], paddingBottom: [4, 6] }}
      >
        <Flex variant="contentWrap" flexWrap="wrap">
          <Grid
            gap={3}
            sx={{
              padding: [3, 4],
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <Box>
              <Link
                href="https://www.instagram.com/p/BfyB5J8HHsW/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AspectRatio ratio={1 / 1}>
                  <Img
                    fixed={instagram[1].node.localFile.childImageSharp.fixed}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                </AspectRatio>
              </Link>
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
        <Flex variant="contentWrap" flexWrap="wrap">
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
          sx={{ justifyContent: "center" }}
        >
          <Text sx={{ mx: [3, 4], alignSelf: "center", fontSize: [3, 4, 5] }}>
            Interested? Drop us a line, your{" "}
            <Link href="mailto:hello@booncon.com">email</Link> is going to make
            our day!
          </Text>
        </Flex>
      </Box>
      <Flex as="section" variant="contentWrap" flexWrap="wrap">
        <Grid
          gap={3}
          sx={{
            padding: [3, 4],
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Box p={[3, 4]}>
            <Heading as="h2" sx={{ fontSize: [3, 4, 5], marginBottom: [3, 4] }}>
              Stay in the loop:
            </Heading>
            <Flex>
              <a
                sx={{ width: "20%" }}
                href="podcast"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title='Listen to our podcast "bits &amp; pieces"'
              >
                <img
                  src="https://booncon.com/app/themes/bc-new/assets/images/logos/bp.jpg"
                  alt="Logo podcast bits &amp; pieces"
                  scale="0"
                />
              </a>
              <a
                sx={{ width: "20%" }}
                href="//instagram.com/booncon"
                rel="noreferrer"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="See our life on Instagram"
              >
                <img
                  src="https://booncon.com/app/themes/bc-new/assets/images/logos/instagram.svg"
                  alt="Logo instagram"
                  scale="0"
                />
              </a>
              <a
                sx={{ width: "20%" }}
                href="//linkedin.com/company/booncon"
                rel="noreferrer"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Connect with us on LinkedIn"
              >
                <img
                  src="https://booncon.com/app/themes/bc-new/assets/images/logos/linked_in.svg"
                  alt="Logo LinkedIn"
                  scale="0"
                />
              </a>
              <a
                sx={{ width: "20%" }}
                href="//twitter.com/booncon"
                rel="noreferrer"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Follow us on Twitter"
              >
                <img
                  src="https://booncon.com/app/themes/bc-new/assets/images/logos/twitter.svg"
                  alt="Logo twitter"
                  scale="0"
                />
              </a>
              <a
                sx={{ width: "20%" }}
                href="//facebook.com/booncon"
                rel="noreferrer"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Check us out on Facebook"
              >
                <img
                  src="https://booncon.com/app/themes/bc-new/assets/images/logos/facebook.svg"
                  alt="Logo facebook"
                  scale="0"
                />
              </a>
            </Flex>
          </Box>
          <Box p={[3, 4]} sx={{ marginTop: [0, -6], backgroundColor: "#fff" }}>
            <Link
              href="https://www.instagram.com/p/BfyB5J8HHsW/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AspectRatio ratio={1 / 1}>
                <Img
                  fixed={instagram[2].node.localFile.childImageSharp.fixed}
                  sx={{
                    objectFit: "cover",
                  }}
                />
              </AspectRatio>
            </Link>
          </Box>
        </Grid>
      </Flex>
      <Box
        as="section"
        bg="primary"
        color="#fff"
        sx={{ py: [4, 5], paddingBottom: [4, 6] }}
      >
        <Flex variant="contentWrap" flexWrap="wrap">
          <Grid
            gap={3}
            sx={{
              padding: [3, 4],
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Box>
              <Link
                href="https://www.instagram.com/p/BfyB5J8HHsW/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AspectRatio ratio={1 / 1}>
                  <Img
                    fixed={instagram[3].node.localFile.childImageSharp.fixed}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                </AspectRatio>
              </Link>
            </Box>
            <Box px={[3, 4]} py={0}>
              <Box>
                <Heading as="h2">Get in touch.</Heading>
                <Text>
                  We would love to hear from you and work on something together!
                </Text>
                <address>
                  <strong>booncon oy</strong>
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
                  <a href="mailto:hello@booncon.com">hello@booncon.com</a>
                </address>
              </Box>
            </Box>
          </Grid>
        </Flex>
      </Box>
    </Layout>
  )
}

export default IndexPage
