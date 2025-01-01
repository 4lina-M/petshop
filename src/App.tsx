// import { useState } from 'react'
import './App.css'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";


function Bar(){
  return (
    <><div style={
      {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor:"#465675",
        width: "100vw",
        color: "#ff8306",
        position: "fixed",
        top:"0",
        left:"0",
      }
    }>
      <span className='classSpanPaw'><MdOutlinePets size="39px"/></span>
      <h1 className='classTitle'>PETS FATE</h1>
      <div style={
        {
          width:"15%",
          
        }
      }></div>
      <input className='classInputSearch' placeholder='Buscar artículos'></input>
      <button className='hoverButton'>Sobre nosotros</button>
      <button className='hoverButton'>Nueva mercancía</button>
      <button className='hoverButton'>Contacto</button>
      <button className='classButtonCart'><HiOutlineShoppingCart size="25px"/></button>
      <button className='classButtonUser'>A</button>
  </div>
  </>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div style={
        {
          height: "100vw",
          width: "100vw"
        }
      }>
        <Bar></Bar>
      </div>
    </>
  )
}

export default App
