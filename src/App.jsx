import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from './pages/Home';
import Create from './pages/Create';
import PostDetail from './pages/PostDetail';
import PostForm from './Components/PostForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/create" element = {<Create/>}></Route>
        <Route path = "/posts/:id" element = {<PostDetail/>}></Route>
       </Routes>
      </div>
    </>
  )
}

export default App
