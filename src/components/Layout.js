"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import RouteHandler from "./RouteHandle";
import WhatsAppButton from "./Whatsapp";

const Layout = ({ children }) => {
  const pathname = usePathname(); // Using usePathname to determine the current route

  return (
    <div className="min-h-screen "> {/* Set a minimum height and background color */}
      {pathname.startsWith("/web-hub") ? (
        <div className="flex h-screen">
          <Sidebar /> {/* Sidebar for admin routes */}
          <div className="border flex-1 overflow-auto"> {/* Main content area */}
            {children} 
          </div>
        </div>
      ) : (
        <>
        <RouteHandler>
          <div className="sticky top-0 z-40"> {/* Navbar sticky to top */}
            <Navbar />
          </div>
          <div className=" pb-10"> {/* Add padding for content */}
            {children}
          </div>
          <div>
          <Footer /> {/* Footer at the bottom */}
          </div>
          <div  className="fixed z-40 right-5  md:right-5 bottom-24 md:bottom-9">
        <WhatsAppButton className=" "/>
        </div>
        </RouteHandler>
        </>
      )}
    </div>
  );
};

export default Layout;