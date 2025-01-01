// import { useState } from 'react'
import './App.css'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { ImSearch } from "react-icons/im";
function Bar(){
  return (
    <><div style={
      {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor:'#126e54',
        width: "100vw",
        color: "#ff8306",
        position: "fixed",
        top:"0",
        left:"0",
      }
    }>
    {/* TODO: Convert paw into a home-page button */}
      <span className='classSpanPaw'><MdOutlinePets size="39px"/></span>
      <h1 className='classTitle'>PETS FATE</h1>
      <div style={
        {
          width:"10%",
          
        }
      }></div>
      <input className='classInputSearch' placeholder='Buscar artículos'></input>
      <button className='classButtonSearch'><ImSearch size="19px"/></button>
      <button className='hoverButton'>Sobre nosotros</button>
      <button className='hoverButton'>Nueva mercancía</button>
      <button className='hoverButton'>Contacto</button>
      <button className='classButtonCart'><HiOutlineShoppingCart size="35px"/></button>
      <button className='classButtonUser'>A</button>
  </div>
  </>
  )
}
function Presentation(){
  return(
    <div className="homeImage" style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#dfe3ec",
        color: "#ff8306",
        width: "100vw",
        height: "85vh",
        marginTop: "100px",
        backgroundAttachment: "fixed",
      }
    }>
      <h1 className='classTitleHome'>PETS FATE</h1>
      <div style={
        {
          height:"10%",
        }
      }></div>
      <h2 className='classSubtitle'>Todo lo que tu mascota necesita</h2>
    </div>
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
        <Presentation></Presentation>   
      </div>
    </>
  )
}

export default App
