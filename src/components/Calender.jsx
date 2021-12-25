import { Box } from '@chakra-ui/layout';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function Calender() {
  const colourTheme = {
    background: 'transparent',
    text: '#5299d3',
    grade4: '#266192',
    grade2: '#5299D3',
    grade3: '#3288c3',
    grade1: '#8bbce2',
    grade0: '#eff5fb',
  };
  return (
    <Box maxW="7xl" px={{ base: 2, sm: 12, lg: 8, md: 17, xl: 12 }}>
      <GitHubCalendar
        username="dev-alchemist"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      ></GitHubCalendar>
    </Box>
  );
}

export default Calender;
