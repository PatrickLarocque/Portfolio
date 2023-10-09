import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDeskLoader from '../voxel-desk-loader'

const LazyVoxelDesk = dynamic(() => import('../voxel-desk'), {
  ssr: false,
  loading: () => <VoxelDeskLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Patrick Larocque - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDesk />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
