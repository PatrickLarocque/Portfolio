import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Stack
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello &#128075;, I&apos;m a developer based in Canada
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Patrick Larocque
          </Heading>
          <p>Digital builder ( Artist / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          After some time in academic philosophy and the insurance world, I decided
          to turn towards software development during the pandemic. My journey has
          been amazing so far. I am passionate about developer tooling, compilers and
          distributed systems. Come say hello on {' '}
          <Link as={NextLink} href="https://www.linkedin.com/in/patrick-larocque/" passHref scroll={false}>
            Linkedin
          </Link>
        </Paragraph>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center" justify="center" my={4}>
          <Button 
          as={NextLink}
          href="/works"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          width="150px"
          >
            My portfolio
          </Button>
          <Button
          as={NextLink}
          href="/works"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          width="150px"
          >
            Download CV
          </Button>
        </Stack>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          Born in Montreal, Canada
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
            Completed a BA. Hons in Philosophy with a thesis focusing on
            Phenomenology at Bishop's University.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Started a Master's Program in Philosophy at Concordia University
          and spent some time working in property and casualty insurance.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Started a degree in Computer Science, speializing in
          software engineering.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated and started working as a developer for Intact Insurance.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Philosophy, Music,{' '}
          <Link href="" target="_blank">
            Drawing
          </Link>
          , Playing Drums, Synths, Computer Sience
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @me
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @me
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @me
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Something Else Here
        </Heading>
  
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
