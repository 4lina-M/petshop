// import { useState } from 'react'
import "./App.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { useState } from 'react';


function Bar() {
return (
    <>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "#126e54",
          width: "100vw",
          color: "#ff8306",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      >
        <span onClick={
          () => {
            window.location.href = "/";
          }
        } className="classSpanPaw" style={
          {
            cursor: "pointer",
          }
        }><MdOutlinePets size="39px" />
        </span>
        <h1 onClick={
          () => {
            window.location.href = "/";
          }
        } className="classTitle" style={
        {
          cursor: "pointer",
          paddingRight: "70px",
        }
        }>PETS FATE</h1>
        

        <input
          className="classInputSearch"
          type="text"
          placeholder="Buscar..."
        />
        <button className="classButtonSearch">
          <ImSearch size="26px" />
        </button>
        <button className="hoverButton" onClick={
          () => {
            window.location.href = "/";
          }
        }>Sobre nosotros</button>
        <button className="hoverButton">Nueva mercancía</button>
        <button className="hoverButton">Contacto</button>
        <button className="classButtonCart">
          <HiOutlineShoppingCart size="35px" />
        </button>
        <button className="classButtonUser">A</button>
      </div>
    </>
  );}
function Presentation() {
  return (
    <div
      className="homeImage"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#dfe3ec",
        color: "#ff8306",
        width: "100vw",
        height: "100vh",
        marginTop: "100px",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="classTitleHome">PETS FATE</h1>
      <div
        style={{
          height: "10%",
        }}
      ></div>
      <h2 className="classSubtitle">Todo lo que tu mascota necesita</h2>
    </div>
  );
}


function Articulos() {
  const [articulos] = useState([]);
  return (
    <>
      {articulos.map((articulo:any) => {
        return (
          <div
            className="classArticle"
            style={{
              backgroundColor: "#ffffff",
              color: "#ff8306",
              display: "grid",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <div>
              <h1>{articulo}</h1>           
            </div>
          </div>
        );
      })}
    </>
  );
}
function Shop() {
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          height: "100px",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <h1 className="classSubtitle">Explorar</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
          color: "#ff8306",
          width: "100%",
          height: "100%",
          backgroundAttachment: "fixed",
        }}
      >
        <Articulos></Articulos>
      </div>
    </>
  );
}
function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div
        style={{
          height: "100vw",
          width: "100vw",
        }}
      > 
        <Bar></Bar>
        <Presentation></Presentation>
        <Shop></Shop>
        <AboutUs></AboutUs>
      </div>
    </>
  );
}

export default App;


