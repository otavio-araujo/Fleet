import { TouchableOpacityProps } from "react-native"
import { Container, Label, Loading } from "./styles"

type Props = TouchableOpacityProps & {
  label: string
  isLoading?: boolean
}

export function Button({ label, isLoading = false, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      {...rest}
      disabled={isLoading}
      style={{ opacity: isLoading ? 0.7 : 1 }}
    >
      {isLoading ? <Loading /> : <Label>{label}</Label>}
    </Container>
  )
}
