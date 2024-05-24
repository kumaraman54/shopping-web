import Nav from "./components/Nav"
import { Outlet } from "react-router-dom"

function App() {
 
  return (
    <>
    <Nav></Nav>
    <div className="layout">
      <Outlet></Outlet>
     </div>
    </>
  )
}

export default App
