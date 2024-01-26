import React from 'react'
import './App.css';
import './Layout.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./Layout"
import Home from "./ReactPages/Home"
import About from "./ReactPages/About"
import Contact from "./ReactPages/Contact"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        
      </Route>
      </Routes>
      </BrowserRouter>
  )
}
// // import React from 'react'
// import Basic from './Events/Basic'

// export default function App() {
//   return (
//     <div>
//       <Basic/>
//     </div>
//   )
// }

// import React from 'react'
// import Counter from './UseState/Counter'

// export default function App() {
//   return (
//     <div><Counter/></div>
//   )
// }
// import React from 'react'
// import Counter from './UseState/Counter'

// export default function App() {
//   return (
//     <div><Counter/></div>
//   )   
// }
// import React from 'react'
// import Effect from './UseState/Effect'

// export default function App() {
//   return (
    
//     <div><Effect/></div>
//   )
// }
// import React from 'react'
// import Reducer from './UseState/Reducer'

// export default function App() {
//   return (
//     <div><Reducer/></div>
//   )
//   }
