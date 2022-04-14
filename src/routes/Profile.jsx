import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import ptBrStrings from 'react-timeago/lib/language-strings/pt-br'
import { Post } from '../components/Post'
import { getFromStorage } from '../services/auth'
import { getUserPosts } from '../services/posts'
import { getUserInfo } from '../services/users'

export const Profile = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const { userId } = useParams()

  const formatter = buildFormatter(ptBrStrings)

  const { data, isLoading, isError } = useQuery(
    ['userInfo', userId],
    () =>
      getUserInfo({
        userId: !userId ? getFromStorage('user')?.id : userId,
      }),
    {
      onError: (error) => {
        const { name, message, status } = error.toJSON()
        if (status === 401) {
          navigate('/login')
        }
        toast({
          title: name,
          description: message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      },
    }
  )

  const {
    data: Posts,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching: postsIsFetching,
  } = useInfiniteQuery(
    ['userFeed', userId],
    ({ pageParam }) =>
      getUserPosts({
        user_id: !userId ? getFromStorage('user')?.id : userId,
        page: pageParam,
      }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length === lastPage.data.totalPages) {
          return undefined
        }
        return pages.length + 1
      },
      onError: (error) => {
        const { name, message, status } = error.toJSON()
        if (status === 401) {
          navigate('/login')
        }
        toast({
          title: name,
          description: message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      },
    }
  )

  if (isLoading)
    return (
      <Flex
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="cyan.400"
          size="xl"
        />
      </Flex>
    )

  if (isError) return <h1>Error ao acessar usuário</h1>

  return (
    <Flex flexDir="column">
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="flex-start"
        gap="50px"
      >
        <Avatar
          mt="8"
          ml="4"
          size="lg"
          name={data.data.user.name}
          src="/images/peter.svg"
        />

        <Flex flexDir="column" alignItems="center" marginTop="20px">
          <Text
            as="h1"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="22"
            lineHeight="30px"
          >
            {data.data.user.name}
          </Text>
          <Text fontSize="16" lineHeight="22px" color="#687684">
            {`@${data.data.user.username}`}
          </Text>
        </Flex>
      </Flex>
      <HStack px="4" boxShadow="md" marginTop="50px">
        <Box
          px="2"
          pb="1"
          borderBottom="solid"
          borderBottomWidth="1"
          borderBottomColor="cyan.400"
        >
          <Text>Petposts</Text>
        </Box>
      </HStack>
      {error && <h1>Não foi possivel carregars os posts</h1>}
      {!!Posts && (
        <InfiniteScroll
          dataLength={Posts.pages.length * 10}
          hasMore={hasNextPage}
          next={fetchNextPage}
        >
          {Posts.pages
            .map((posts) => posts.data.posts.map((post_data) => post_data))
            .reduce((acc, arr) => [...acc, ...arr], [])
            .map((post_data) => (
              <Post
                key={post_data.id}
                user={post_data.user}
                text={post_data.text}
                createAt={post_data.createAt}
              />
            ))}
        </InfiniteScroll>
      )}
      {postsIsFetching && (
        <Flex
          width="100%"
          height="6rem"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="cyan.400"
            size="xl"
          />
        </Flex>
      )}
    </Flex>
  )
}
