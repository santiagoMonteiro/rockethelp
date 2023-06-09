import { Text, useTheme } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface FilterProps extends TouchableOpacityProps {
  title: string
  isActive?: boolean
  type: 'open' | 'closed'
}

export function Filter({ title, isActive = false, type, ...rest }: FilterProps) {
  const { colors } = useTheme()

  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300]

  return (
    <TouchableOpacity
      {...rest}
      style={{
        borderWidth: isActive ? 1 : 0,
        borderColor: colorType,
        backgroundColor: colors.gray[600],
        flex: 1,
        padding: 10,
        borderRadius: 4
      }}
      activeOpacity={0.6}
    >
      <Text
        color={isActive ? colorType : 'gray.300'}
        fontSize='xs'
        textTransform='uppercase'
        textAlign='center'
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
