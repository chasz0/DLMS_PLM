import './App.css'
import Header from './header.tsx'
import Menu from './left_menu.tsx'
import Navigation from './nav.tsx'
import MainScreen from './right_menu.tsx'

function App() {

  return (
    <>
      <Header />
      <Navigation />
      <div className="article">
        <Menu />
        <MainScreen />
      </div>
      
      <br />
      <br />
    </>
  )
}

export default App
