import { NavigationIndependentTree } from '@react-navigation/native'
import { Routes } from './pages/routes'

export default function App(){
  return(
    <NavigationIndependentTree>
      <Routes/>
    </NavigationIndependentTree>
  )
}