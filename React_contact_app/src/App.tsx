import React, { FunctionComponent } from "react";
import "../src/style/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Channel from "./pages/Channel";


const App:FunctionComponent = () =>  {
 

  return ( 
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Channel></Channel>}></Route>
        <Route path="*" element={<Channel></Channel>}></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App;

