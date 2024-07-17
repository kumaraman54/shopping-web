import Nav from "./components/Nav"
import { Outlet } from "react-router-dom"
import { OrderContextProvider } from "./context/OrderContext"

function App() {
 
  return (
    <OrderContextProvider>
    <Nav></Nav>
    <div className="layout">
      <Outlet></Outlet>
     </div>
    </OrderContextProvider>
  )
}

export default App
