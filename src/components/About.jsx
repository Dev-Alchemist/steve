import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Image,
  Flex,
  keyframes,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import Blur from './Blur';
import aboutImg from '../assets/home.png';
import { ImPointRight } from 'react-icons/im';
import SkillsTools from './SkillsTools';

const gradient = keyframes`
    0% {background-position:0% ;}
    100% {background-position:100% ;}
  `;

const animation = `${gradient} cubic-bezier(0.59, 0.82, 0.08, 0.55) 1s infinite alternate`;
export default function About() {
  return (
    <Box id="about">
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              mb="2"
              w="full"
              paddingBottom="5px"
              bgClip="text"
              bgGradient="linear(to-r,#5299D3,#C0FDFB)"
              fontWeight="extrabold"
              bgSize="200% auto"
              animation={animation}
            >
              About Me
            </Text>
          </Heading>
          <Text fontSize="md" fontWeight={600} letterSpacing="wide">
            Hi there 👋, I am Steve from Nairobi, Kenya. I love
            working on a variety of technologies including Web Development, Mobile App Development and also conducting Quality Assurance(QA) Testing. My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.
          </Text>
          <Text fontSize="md" fontWeight={600} letterSpacing="wide">
            Apart from coding, some other activities that I love to do!
          </Text>
          <List>
            <ListItem>
              <ListIcon as={ImPointRight} />
              Playing Video Games
            </ListItem>
            <ListItem>
              <ListIcon as={ImPointRight} />
              Cooking(I'm yet to proclaim myself as a "Code Chef")
            </ListItem>
            <ListItem>
              <ListIcon as={ImPointRight} />
              Travelling
            </ListItem>
            <ListItem>
              <ListIcon as={ImPointRight} />
              Soccer & F1 fan
            </ListItem>
          </List>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'350px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              htmlWidth="1000px"
              htmlHeight="689px"
              w={'100%'}
              h={'100%'}
              src={aboutImg}
            />
          </Box>
        </Flex>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
        zIndex={-2}
      />
      <SkillsTools />
    </Box>
  );
}
