import React from "react"
import backgroundImage from "@/assets/background.png"

import { Container, Title, Slogan } from "./styles"
import { Button } from "@/components/Button"

export function SignIn() {
  return (
    <Container source={backgroundImage}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button label="Entrar com Google" />
    </Container>
  )
}
