import { Box } from '@chakra-ui/react';
import React from 'react';
import Notes from './components/Notes';
import Header from './components/Header';
import Search from './components/Search';
import TextArea from './components/TextArea';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const App = () => {
  return (
    <PerfectScrollbar
      style={{
        backgroundColor: '#0b141d',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box
        m="auto"
        mt="10"
        p="4"
        borderRadius="lg"
        boxShadow="md"
        width="100%"
        maxWidth="500px"
        overflow="hidden"
      >
        <Header />
        <Search />
        <TextArea />
        <Notes />
      </Box>
    </PerfectScrollbar>
  );
};

export default App;
