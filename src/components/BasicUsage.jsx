import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../routes'
import { useAuth } from '../context/auth-context'

function BasicUsage() {
  const auth = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      marginLeft="72px"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
      >
        <path
          d="M7.09 12.59L8.5 14L13.5 9L8.5 4L7.09 5.41L9.67 8H0V10H9.67L7.09 12.59ZM16 0H2C0.89 0 0 0.9 0 2V6H2V2H16V16H2V12H0V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
          fill="#00ACC1"
        />
        <path
          d="M7.09 12.59L8.5 14L13.5 9L8.5 4L7.09 5.41L9.67 8H0V10H9.67L7.09 12.59ZM16 0H2C0.89 0 0 0.9 0 2V6H2V2H16V16H2V12H0V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
          stroke="white"
          fill="#00ACC1"
        />
      </svg>
      <Button
        width="50px"
        onClick={onOpen}
        variant="ghost"
        border="none"
        _focus="none"
      >
        Sair
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sair desta conta?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Deseja realmente sair desta conta</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="cyan.400"
              variant="ghost"
              mr={3}
              border="solid"
              borderColor="cyan.400"
              borderRadius="10px"
              onClick={() => auth.signout()}
            >
              Sair
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default BasicUsage
