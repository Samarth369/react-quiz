import './style/App.css'
import { BrowserRouter , Routes , Route } from "react-router-dom"
import ApicontextProvider from './context/apicontextprovider'
import Home from './Home' 
import Que from './Que'
import Score from './Score'

function App() {


  return (
    <>
    <ApicontextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Que' element={<Que />}/>
        <Route path='/Score' element={<Score />}/>
      </Routes>
      </BrowserRouter>
    </ApicontextProvider>
    </>
  )
}

export default App
