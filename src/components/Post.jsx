import { Avatar, Box, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import ptBrStrings from 'react-timeago/lib/language-strings/pt-br'

export const Post = ({ user: { id, name, username }, createAt, text }) => {
  const formatter = buildFormatter(ptBrStrings)

  return (
    <Flex
      flexDir="row"
      pt="5"
      px="4"
      pb="4"
      borderBottom="solid"
      borderBottomColor="gray.200"
      borderBottomWidth="1px"
    >
      <Avatar name={name} src="/images/peter.svg" />
      <Box ml="2">
        <HStack spacing="1">
          <Link to={`/profile/${id}`}>
            <Text
              fontStyle="normal"
              fontWeight="bold"
              fontSize="14px"
              lineHeight="19px"
              color="gray.600"
              wordBreak="break-word"
            >
              {name}
            </Text>
          </Link>
          <Text
            fontStyle="normal"
            fontWeight="300"
            fontSize="12px"
            lineHeight="17px"
            color="gray.600"
            wordBreak="break-word"
          >
            {`@${username}`}
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="300"
            fontSize="12px"
            lineHeight="17px"
            color="gray.600"
            wordBreak="break-word"
          >
            {'•'}
          </Text>
          <Text
            fontStyle="normal"
            fontWeight="300"
            fontSize="12px"
            lineHeight="17px"
            color="gray.600"
            wordBreak="break-word"
          >
            <TimeAgo date={new Date(createAt)} formatter={formatter} />
          </Text>
        </HStack>
        <Text
          fontStyle="normal"
          fontWeight="400"
          fontSize="14px"
          lineHeight="18px"
          color="#141619"
          wordBreak="break-word"
        >
          {text}
        </Text>
      </Box>
    </Flex>
  )
}
