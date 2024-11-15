import React from "react"
import { StatusBar } from "expo-status-bar"

import theme from "@/theme"
import { ThemeProvider } from "styled-components/native"

import { SignIn } from "@/screens/SignIn"

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <SignIn />
      </ThemeProvider>
    </>
  )
}
