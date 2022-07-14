import { BrowserRouter, Route, Routes } from "react-router-dom"
import Employeepage from './pages/Employeepage'
import Salarypage from "./pages/Salarypage"
import "./styles/index.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Salarypage />} />
        <Route path="/employee" element={<Employeepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
