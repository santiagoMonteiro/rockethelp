import { useState } from 'react'
import { Heading, ScrollView, VStack, View, Icon, useTheme } from 'native-base'
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
    <View bg='gray.600' minHeight='full'>
      <ScrollView bg='gray.600'>
        <VStack flex='1' px='8' pt='24' alignItems='center'>
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
          <Button title='Entrar' w='full' onPress={handleSignIn} />
        </VStack>
      </ScrollView>
    </View>
  )
}
