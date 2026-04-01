import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "./Footer";

export function Layout(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1" id="main-content" style={{ overflowX: 'clip' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
