import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Box } from '@chakra-ui/react'
import Login from './components/login'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
     <Login/>
    </ChakraProvider>
  )
}