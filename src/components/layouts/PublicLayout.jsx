// src/components/PublicLayout.jsx
import { Header, Footer } from "../navigation";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet /> {/* Aqui entram as páginas públicas */}
      </main>
      <Footer />
    </>
  );
}

export default PublicLayout;
