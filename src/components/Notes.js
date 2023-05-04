import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { CloseIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import { deleteNote } from '../redux/notes/noteSlicer';

const Notes = () => {
  const notes = useSelector((state) => state.notes.noteList);
  const dispatch = useDispatch();

  const toast = useToast();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
    toast({
      title: 'Note deleted.',
      description: 'Your note has been deleted.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    localStorage.setItem('noteList', JSON.stringify(notes));
  }, [notes]);

  return (
    <Box mt="4" width="100%" maxWidth="500px">
      <PerfectScrollbar>
        {notes.map((note) => (
          <Flex
            key={note.id}
            direction="column"
            align="flex-start"
            justify="center"
            bg={note.background}
            p="4"
            borderRadius="lg"
            boxShadow="md"
            mb="4"
          >
            <Flex justify="space-between" width="100%">
              <Text color="white" fontSize="lg" fontWeight="bold">
                {note.title}
              </Text>
              <IconButton
                bg={note.background}
                _hover={{ bg: 'red.500' }}
                aria-label="Delete note"
                icon={<CloseIcon />}
                onClick={() => handleDelete(note.id)}
              />
            </Flex>
            <Text color="white" fontSize="md">
              {note.content}
            </Text>
          </Flex>
        ))}
      </PerfectScrollbar>
    </Box>
  );
};

export default Notes;
