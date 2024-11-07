import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TelaProprietario from './proprietario/telaProprietario'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'






function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<TelaProprietario />} />
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
