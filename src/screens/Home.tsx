import {
  Center,
  HStack,
  Heading,
  IconButton,
  KeyboardAvoidingView,
  Text,
  VStack,
} from 'native-base'
import Logo from '../assets/logo_secondary.svg'
import { Platform } from 'react-native'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Home() {
  return (
    // <VStack flex='1' pb='6' bg='gray.700'>
    //   <HStack
    //     w='full'
    //     justifyContent='space-between'
    //     alignItems='center'
    //     bg='gray.600'
    //     pt='12'
    //     pb='5'
    //     px='6'
    //   >
    //     <Logo />
    //     <IconButton />
    //   </HStack>
    // </VStack>
    <Center flex='1' bg='gray.600'>
      <KeyboardAvoidingView
        h={{
          base: '200px',
          lg: 'auto',
        }}
        bg='gray.600'
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <VStack flex='1' justifyContent='flex-end' w='100%' maxW='300'>
          <Heading mb='3'>Forgot Password</Heading>
          <Text color='muted.400'>
            Not to worry! Enter email address associated with your account and
            well send a link to reset your password.
          </Text>
          <Input placeholder='Email Address' mt='10' mb='4' />
          <Input placeholder='Email Address' mt='5' mb='4' />
          <Button title='Procceed' mb='4' />
        </VStack>
      </KeyboardAvoidingView>
    </Center>
  )
}
