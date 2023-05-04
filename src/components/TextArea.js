import { Box, Button, Textarea, IconButton, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/noteSlicer';
import { nanoid } from '@reduxjs/toolkit';

const TextArea = () => {
  const [note, setNote] = useState();
  const [title, setTitle] = useState();
  const [backgrounds, setBackgrounds] = useState({
    '#FF1493': true,
    '#FFD700': false,
    '#8FBC8F': false,
  });

  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(
      addNote({
        id: nanoid(),
        title: title,
        content: note,
        background: Object.keys(backgrounds).find((color) => backgrounds[color] === true),
      })
    );
  };

  const handleClick = (color) => {
    setBackgrounds({
      ...backgrounds,
      [color]: !backgrounds[color],
    });
  };

  return (
    <Box position="relative">
      <Textarea
        my={4}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        borderRadius="0"
        placeholder="Enter your title here..."
        textColor="white"
        _hover={{ bg: 'gray.500' }}
        _focus={{ bg: 'gray.500' }}
      />
      <Textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        borderRadius="0"
        placeholder="Enter your note here..."
        height="150"
        _hover={{ bg: 'gray.500' }}
        _focus={{ bg: 'gray.500' }}
        textColor="white"
      />
      <Flex
        direction="row"
        align="center"
        width="100%"
        maxWidth="500px"
        position="absolute"
        bottom="1rem"
        left="1rem"
      >
        <IconButton
          onClick={() => handleClick('#FF1493')}
          mr="2"
          borderRadius="20"
          bg="#FF1493"
          size="xs"
          colorScheme="white"
          aria-label="Option 1"
          icon={backgrounds['#FF1493'] ? <CheckIcon /> : null}
        />
        <IconButton
          onClick={() => handleClick('#FFD700')}
          mr="2"
          borderRadius="20"
          bg="#FFD700"
          size="xs"
          colorScheme="white"
          aria-label="Option 2"
          icon={backgrounds['#FFD700'] ? <CheckIcon /> : null}
        />
        <IconButton
          onClick={() => handleClick('#8FBC8F')}
          borderRadius="20"
          bg="#8FBC8F"
          size="xs"
          colorScheme="white"
          aria-label="Option 3"
          icon={backgrounds['#8FBC8F'] ? <CheckIcon /> : null}
        />
      </Flex>

      <Button
        position="absolute"
        right="2"
        bottom="2"
        borderRadius="20"
        bg="#44C867"
        colorScheme="white"
        width="100px"
        onClick={() => handleAddNote()}
      >
        ADD
      </Button>
    </Box>
  );
};

export default TextArea;
