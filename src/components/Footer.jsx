import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  // Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

// import LogoImg from '../assets/logo.svg';

export default function Footer() {
  return (
    <Box mt="6">
      {/* <Container
        as={Stack}
        maxW={'7xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Image alt="logo" htmlWidth="47px" htmlHeight="48px" src={LogoImg} />
        <Stack direction={'row'} spacing={6}>
          <Link href={'/about'}>About</Link>
          <Link href={'/projects'}>Projects</Link>
          <Link href={'/contact'}>Contact</Link>
        </Stack>
      </Container> */}

      <Box borderTopWidth={1} borderStyle={'solid'}>
        <Container
          as={Stack}
          maxW={'7xl'}
          py={2}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2021 Steve Waweru</Text>
          <ButtonGroup direction={'row'} spacing={6}>
            <Link
              aria-label="Checkout my github profile"
              target="_blank"
              href={'https://github.com/Dev-Alchemist'}
              rel="noopener"
            >
              <IconButton
                variant="outline"
                isRound="true"
                aria-label="Checkout my github profile"
              >
                <FaGithub />
              </IconButton>
            </Link>
            <Link
              aria-label="Connect with me on linkedin "
              rel="noopener"
              target="_blank"
              href={'https://www.linkedin.com/in/steve-waweru/'}
            >
              <IconButton
                variant="outline"
                aria-label="Connect with me on linkedin "
                isRound="true"
              >
                <FaLinkedin />
              </IconButton>
            </Link>
            {/* <Link
              aria-label="Checkout my Codepen"
              rel="noopener"
              target="_blank"
              href={'https://codepen.io/nitch193/'}
            >
              <IconButton
                aria-label="Checkout Codepen"
                variant="outline"
                isRound="true"
              >
                <FaCodepen />
              </IconButton>
            </Link> */}
          </ButtonGroup>
        </Container>
      </Box>
    </Box>
  );
}
