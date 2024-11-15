import React from "react"
import { StatusBar } from "expo-status-bar"
import { SignIn } from "@/screens/SignIn"

export default function App() {
  return (
    <>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <SignIn />
    </>
  )
}
