import './App.css'
// 1. import `ChakraProvider` component
import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './components/appContext'
import MainRoutes from './routes'
import { createLocalStorage, getAllLocalStorage } from './services/localStore'

export default function App() {

  !getAllLocalStorage() && createLocalStorage()

  // 2. Wrap ChakraProvider at the root of your app
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
            < MainRoutes />
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}