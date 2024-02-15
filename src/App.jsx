import Home from "./Components/Home"
import {Routes,Route,BrowserRouter} from "react-router-dom"
import SinglePage from "./Components/SinglePage"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
    {/* <div>
      <Home/>
    </div> */}
    </>
  )
}

export default App
