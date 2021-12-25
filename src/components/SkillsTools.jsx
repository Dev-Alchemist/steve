import {
  FaReact,
  FaAndroid,
  FaJs,
  FaNodeJs,
  FaGit,
  FaCuttlefish,
  FaLinux,
} from 'react-icons/fa';
import {
  SiVisualstudiocode,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMongodb,
  SiKotlin,
  SiFlutter,
} from 'react-icons/si';
import { Box, Heading, SimpleGrid, Icon } from '@chakra-ui/react';
import Calender from './Calender';

export default function SkillsTools() {
  return (
    <Box p={8} maxW="7xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        textAlign={'center'}
        fontSize={'3xl'}
        py={10}
        fontWeight={'bold'}
      >
        A Few of My Tech Skills
      </Heading>
      <SimpleGrid minChildWidth="150px" spacing={{ base: 5, lg: 8 }}>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={FaJs} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={FaAndroid} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={FaCuttlefish} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={FaReact} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={FaNodeJs} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={SiHtml5} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={SiCss3} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={FaGit} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={SiFlutter} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={SiMongodb} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={SiFirebase} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={SiPostman} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={SiVisualstudiocode} w={20} h={20} />
        </Box>
        <Box
          p={8}
          display="flex"
          justifyContent="center"
          border={'2px solid #5299d3'}
          rounded={'lg'}
          _hover={{ boxShadow: '2px 2px 30px 2px #c0fdfb' }}
        >
          <Icon as={SiKotlin} w={20} h={20} />
        </Box>
      </SimpleGrid>
      <Heading
        textAlign={'center'}
        fontSize={'3xl'}
        py={10}
        fontWeight={'bold'}
      >
        My Github Activity
      </Heading>
      <Calender />
    </Box>
  );
}
