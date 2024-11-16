import React from "react"
import backgroundImage from "@/assets/background.png"

import { Container, Title, Slogan } from "./styles"

export function SignIn() {
  return (
    <Container source={require("@/assets/background.png")}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
    </Container>
  )
}
