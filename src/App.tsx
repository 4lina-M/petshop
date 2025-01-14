// import { useState } from 'react'
import "./App.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlinePets } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
          top: "0",
          left: "0",
        }}
      >
        <span
          onClick={() => {
            window.location.href = "/";
          }}
          className="classSpanPaw"
          style={{
            cursor: "pointer",
          }}
        >
          <MdOutlinePets size="39px" />
        </span>
        <h1
          onClick={() => {
            window.location.href = "/";
          }}
          className="classTitle"
          style={{
            cursor: "pointer",
            paddingRight: "70px",
          }}
        >
          PETS FATE
        </h1>

        <input
          className="classInputSearch"
          type="text"
          placeholder="Buscar..."
        />
        <button className="classButtonSearch">
          <ImSearch size="26px" />
        </button>
        <button
          className="hoverButton"
          onClick={() => {
            window.location.href = "/AboutUs";
          }}
        >
          Sobre nosotros
        </button>
        <button className="hoverButton">Nueva mercancía</button>
        <button className="hoverButton">Contacto</button>
        <button className="classButtonCart">
          <HiOutlineShoppingCart size="35px" />
        </button>
        <button className="classButtonUser">A</button>
      </div>
    </>
  );
}
function Presentation() {
  return (
    <div>
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
          // marginTop: "100px",
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
      <Shop></Shop>
    </div>
  );
}

function Articulos() {
  const [articulos] = useState([]);
  return (
    <>
      {articulos.map((articulo: any) => {
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
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className="aboutUsImage"
        style={{
          height: "100%",
          width: "55%",
          position: "static",
        }}
      ></div>
      <div
        style={{
          width: "50%",
          height: "100%",
          alignContent: "center",
          margin: "0px 100px 0px 100px",
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            color: "#f8990a",
            fontFamily: "Helvetica",
            letterSpacing: "1.5px",
            fontWeight: "bold",
          }}
        >
          Sobre nosotros
        </h1>
        <span
          style={{
            fontSize: "25px",
            color: "#f8990a",
            fontFamily: "Helvetica",
            letterSpacing: "1.5px",
          }}
        >
          Pets Fate es tu aliado para el cuidado de mascotas. Ofrecemos una
          amplia variedad de productos de alta calidad para perros, gatos y
          otros animales, con entrega rápida y segura en todo el país. Nuestra
          misión es brindarte la mejor experiencia de compra, para que puedas
          consentir a tu mascota sin complicaciones. Consulta a nuestros
          expertos y descubre por qué Pets Fate es la tienda online favorita de
          los amantes de las mascotas
        </span>
      </div>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            height: "100vh",
            width: "100vw",
          }}
        >
          <Bar></Bar>
          <Routes>
            <Route path="/" element={<Presentation />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
