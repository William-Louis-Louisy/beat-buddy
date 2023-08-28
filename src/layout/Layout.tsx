import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="bg-back text-txt h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden flex flex-col items-center pt-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
