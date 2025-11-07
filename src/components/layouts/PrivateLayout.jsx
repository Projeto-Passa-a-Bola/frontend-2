// src/components/PrivateLayout.jsx
import { Footer, HeaderLogado } from "../navigation";
import { Outlet } from "react-router-dom";

function PrivateLayout() {
  return (
    <>
      <HeaderLogado />
      
        <Outlet /> {/* Aqui entram as páginas privadas */}
      
      <Footer/>
    </>
  );
}

export default PrivateLayout;
