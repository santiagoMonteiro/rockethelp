import React from 'react'
import { Heading, Button as NativeBaseButton, IButtonProps } from 'native-base'

interface ButtonProps extends IButtonProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      bg='green.700'
      h='14'
      fontSize='sm'
      rounded='sm'
      _pressed={{
        bg: 'green.500',
      }}
      {...rest}
    >
      <Heading color='white' fontSize='sm'>
        {title}
      </Heading>
    </NativeBaseButton>
  )
}
