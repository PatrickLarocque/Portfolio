import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Shirt Customizer">
      <Container>
        <Title>
          Shirt Customizer <Badge>2022</Badge>
        </Title>
        <P>
          Allows users to customizer 3D rendered apparel items in real-time. 
          Create and personalize your designs and patterns using generative AI. This project
          was concieved shortly after the launch of Open AI's DALL-E 2, during a conversation
          about the future of product showcases opened up by generative AI.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://shirtcustomizer.netlify.app/">
                shirtcustomizer.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/PatrickLarocque/ShirtCustomizer">
            Github <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Browser based</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Three.js, OpenAI API</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/customizer_showcase.jpg" alt="Shirt Customizer" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'