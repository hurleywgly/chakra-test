import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Ryan Wigley</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        px={2}
      >
        <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
        >
          <Heading mb={2}>Hey, welcome to my website</Heading>
          <Text color={colorSecondary[colorMode]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non. Arcu non odio euismod lacinia. Nunc lobortis mattis aliquam faucibus purus.</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
