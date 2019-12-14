import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box, Text, Heading, Image, Badge } from "@theme-ui/components"
import { jsx } from "theme-ui"

const IndexPage = () => (
  <Layout>
    <SEO title="Working with friends." />

    <header
      // alignItems="center"
      // justifyContent="center"
      className="hero-img"
      sx={{
        height: ["70vh", "100vh"],
      }}
    >
      <Heading textAlign="center" fontSize={[4, 6, 7]} className="hero-title">
        Working with friends.
      </Heading>
    </header>

    <Flex height={["70vh", "100vh"]}></Flex>
    <Box variant="contentWrap">
      <Flex flexWrap="wrap">
        <Box
          p={[3, 4]}
          width={[1, 8 / 12]}
          color="#333"
          bg="white"
          sx={{ marginTop: ["-10vh", "-14rem"] }}
        >
          <Text fontSize={[3, 4, 5]} style={{ marginTop: [1, 2, 1] }}>
            We are booncon, we are changing the way people experience work. As
            the lines between life and work are blurring, it’s important for
            everybody to love what they are doing. We are on a mission to make
            work lovable.
          </Text>
          <br />
          <br />
          <Text fontSize={[1, 2, 3]}>
            Since we developed this idea in 2010 a lot has happened: from
            starting this company in Helsinki over setting the base for the
            digital agency{" "}
            <a
              href="https://pixels.fi"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            We see ourselves as business builders and just love coming up with
            new concepts.
            <br />
            <br />
            Experiences from our work and cooperations with different companies
            have proven we are on the right track. Work is not a job and working
            with friends is awesome. booncon is all about learning from each
            other and sharing experiences. We strongly believe in mixing people
            from different backgrounds and blending startup ideology with the
            power of established companies.
          </Text>
        </Box>
        <Box p={[3, 4]} width={[1, 4 / 12]}>
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
      <Flex fontFamily="body" fontWeight="body" flexWrap="wrap">
        <Box p={[3, 4]} width={[1, 8 / 12]}>
          <Text
            fontSize={[2, 3, 4]}
            fontWeight="bold"
            color="white"
            bg="tertiary"
            p={[3, 4]}
            textAlign="center"
          >
            <blockquote>
              “Working with these guys has been a total blast!”
              <footer>– Stefanus Loater</footer>
            </blockquote>
          </Text>
        </Box>
        <Box p={[3, 4]} width={[1, 4 / 12]}>
          <div className="fact-box">
            <div className="fancy-number">427240</div>
            kilometers travelled
          </div>
        </Box>
        <Box p={[3, 4]} width={1}>
          <Heading fontSize={[3, 4, 5]}>
            We met a long time ago in a place far, far away…
          </Heading>
          <Text fontSize={[2, 3, 4]}>
            …and today we couldn't be happier working together. Our different
            backgrounds enable us to work very efficiently on a multitude of
            projects.
          </Text>
        </Box>
        <Box p={[3, 4]} width={[1, 1 / 2]}>
          <Image
            // sx={{ maxWidth: [60, 100], margin: "0 auto" }}
            variant="avatar"
            src="/images/tobi-square.jpg"
            alt="Portrait Tobi"
          />
          <Heading fontSize={[2, 3, 4]}>Tobias Johannes</Heading>
          <Heading fontSize={[1, 2, 3]} marginTop={1}>
            Master Planner
          </Heading>
          <br />
          <Text fontSize={[1, 2, 3]}>
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
          <Text fontSize={[3, 4, 5]}>@metzelfetz</Text>
        </Box>
        <Box p={[3, 4]} width={[1, 1 / 2]}>
          <Image
            variant="avatar"
            src="/images/luki-square.jpg"
            alt="Portrait Luki"
          />
          <Heading fontSize={[2, 3, 4]}>Lukas Jakob Hafner</Heading>
          <Heading fontSize={[1, 2, 3]} marginTop={1}>
            Master Maker
          </Heading>
          <br />
          <Text fontSize={[1, 2, 3]}>
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
          <Text fontSize={[3, 4, 5]}>@saftsaak</Text>
        </Box>
        <Box p={[3, 4]} width={[1 / 2, 1 / 4]}>
          <div className="fact-box">
            <div className="fancy-number">694</div>
            pizzas eaten
          </div>
        </Box>
        <Box p={[3, 4]} width={[1 / 2, 1 / 4]}>
          <div className="fact-box">
            <div className="fancy-number">5</div>
            languages spoken
          </div>
        </Box>
        <Box p={[3, 4]} width={[1 / 2, 1 / 4]}>
          <div className="fact-box">
            <div className="fancy-number">
              {new Date().getFullYear() - 2001}
            </div>
            years of being friends
          </div>
        </Box>
        <Box p={[3, 4]} width={[1 / 2, 1 / 4]}>
          <div className="fact-box">
            <div className="fancy-number">47</div>
            board games owned
          </div>
        </Box>
      </Flex>
    </Box>
    <Box
      bg="primary"
      color="#fff"
      sx={{ paddingTop: [4, 5], paddingBottom: [4, 5] }}
    >
      <Flex variant="contentWrap" flexWrap="wrap">
        <Box p={[3, 4]} width={[1, 4 / 12]}>
          <a href="https://www.instagram.com/p/BccjdVhHyOA/" target="_blank">
            <img
              className="il-photo__img img-responsive block-drop"
              src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/25009934_143704546286763_3326896184471060480_n.jpg?_nc_ht=scontent.cdninstagram.com&amp;oh=198c3c94d9fbe8faa982e5864a8e5688&amp;oe=5E85320E"
              alt="Instagram Image"
              data-filter="Crema"
              scale="0"
            />
          </a>
        </Box>
        <Box p={[3, 4]} width={[1, 8 / 12]}>
          <Heading fontSize={[3, 4, 5]}>Let's work together!</Heading>
          <br />
          <Text fontSize={[1, 2, 3]}>
            Over the last years we have worked as advisors for different
            companies in our respective fields and helped with the improvement
            of work methods and the creation of better work environments.
            <br />
            We love to dive into challenging projects and meet interesting
            people. Our latest projects included working in the building sector,
            the field of international law, exploring the upcoming omnichannel
            revolution in the retail sector and experimenting with apps and
            education.
            <br />
            <br />
            Speaking several languages and work experience throughout Europe
            make us a great asset in every project.
          </Text>
        </Box>
        <Box p={[3, 4]} width="1">
          <Badge>Meh</Badge>
          <Badge>Meh</Badge>
          <Badge>Meh</Badge>
          <Badge>Meh</Badge>
          <Badge>Meh</Badge>
        </Box>
      </Flex>
    </Box>
  </Layout>
)

export default IndexPage
