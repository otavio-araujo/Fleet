import React, { useState } from "react"
import backgroundImage from "@/assets/background.png"

import { Container, Title, Slogan } from "./styles"
import { Button } from "@/components/Button"
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { Alert } from "react-native"

GoogleSignin.configure({
  scopes: ["email", "profile"],
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
})

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true)
      const { idToken } = await GoogleSignin.signIn()
      if (idToken) {
      } else {
        Alert.alert("Google Login", "Não foi possível conectar a conta Google")
        setIsAuthenticating(false)
      }
    } catch (error) {
      console.log(error)
      setIsAuthenticating(false)
      Alert.alert("Google Login", "Não foi possível conectar a conta Google")
    }
  }
  return (
    <Container source={backgroundImage}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button
        label="Entrar com Google"
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />
    </Container>
  )
}
