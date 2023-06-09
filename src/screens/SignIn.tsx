import { useState } from 'react'
import { Platform } from 'react-native'
import {
  Heading,
  ScrollView,
  VStack,
  Icon,
  useTheme,
  View,
  Center,
  Text,
  KeyboardAvoidingView,
} from 'native-base'

import Logo from '../assets/logo_primary.svg'
import { Envelope, Key } from 'phosphor-react-native'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme()

  function handleSignIn() {
    console.log(email, password)
  }

  return (
    <View pt='24' flex='1' bg='gray.600' px='8'>
      <KeyboardAvoidingView
        h={{
          base: '360',
          lg: 'auto',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <VStack
          flex='1'
          justifyContent='flex-end'
          alignItems='center'
          w='100%'
        >
          <Logo />

          <Heading color='gray.100' fontSize='xl' mt='20' mb='6'>
            Acesse sua conta
          </Heading>

          <Input
            placeholder='E-mail'
            InputLeftElement={
              <Icon as={<Envelope color={colors.gray[300]} />} ml='4' />
            }
            mb='4'
            onChangeText={setEmail}
          />

          <Input
            placeholder='Senha'
            InputLeftElement={
              <Icon as={<Key color={colors.gray[300]} />} ml='4' />
            }
            secureTextEntry
            mb='8'
            onChangeText={setPassword}
          />
        </VStack>
      </KeyboardAvoidingView>
      <Button title='Entrar' w='full' onPress={handleSignIn} />
    </View>
  )
}
