import { Input } from '@chakra-ui/react';
import React from 'react';

const Search = () => {
  return (
    <Input
      mt={4}
      borderRadius="0"
      placeholder="Search notes..."
      height="50px"
      _hover={{ bg: 'gray.500' }}
      _focus={{ bg: 'gray.500' }}
      textColor="white"
    />
  );
};

export default Search;
