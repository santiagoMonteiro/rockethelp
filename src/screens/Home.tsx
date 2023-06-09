import { useState } from 'react'
import {
  FlatList,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
  useTheme,
} from 'native-base'
import Logo from '../assets/logo_secondary.svg'
import { SignOut } from 'phosphor-react-native'
import { Filter } from '../components/Filter'

export function Home() {
  const [statusSelected, setStatusSelected] = useState<0 | 1>(0)
  const [orders, setOrders] = useState([
    {
      id: '123',
      patrimony: '123456',
      when: '18/07/2022 às 10:00',
      status: 'open',
    },
  ])

  const { colors } = useTheme()

  return (
    <VStack flex='1' pb='6' bg='gray.700'>
      <HStack
        w='full'
        justifyContent='space-between'
        alignItems='center'
        bg='gray.600'
        pt='12'
        pb='5'
        px='6'
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex='1' px='6'>
        <HStack
          w='full'
          mt='8'
          mb='4'
          justifyContent='space-between'
          alignItems='center'
        >
          <Heading color='gray.100'>Meus chamados</Heading>
          <Text color='gray.200'>3</Text>
        </HStack>

        <HStack space='3' mb='8'>
          <Filter
            type='open'
            title='em andamento'
            onPress={() => setStatusSelected(0)}
            isActive={statusSelected === 0}
          />
          <Filter
            type='closed'
            title='finalizados'
            onPress={() => setStatusSelected(1)}
            isActive={statusSelected === 1}
          />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text color='white'>{item.patrimony}</Text>}
        />
      </VStack>
    </VStack>
  )
}
