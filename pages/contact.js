import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'


const ContactMe = () => (
  <Layout title="Contact Me">
    <Box padding="5rem">
      <form>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" placeholder="Your Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" placeholder="Your Email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" placeholder="Your Message" />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Send
          </Button>
        </VStack>
      </form>
    </Box>
  </Layout>
)

export default ContactMe
export { getServerSideProps } from '../components/chakra'
