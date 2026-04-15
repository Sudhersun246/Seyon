import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "./Footer";

export function Layout(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primary-500 z-10 relative text-center text-white py-2">🚧 Work in progress: Sections and content will continue to evolve and update.</div>
      <Header />

      <main className="flex-1" id="main-content" style={{ overflowX: 'clip' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
