import { ReactNode } from "react";
import Header from "@/components/Header"; // your navbar

const MainLayout = ({ children }: { children: ReactNode }) => {

  return (

    <>
      {/* FIXED NAVBAR */}
      <Header />

      {/* SPACER SAME HEIGHT AS NAVBAR */}
      <div className="h-24"></div>

      {/* PAGE CONTENT */}
      <div className="min-h-screen">

        {children}

      </div>

    </>

  );

};

export default MainLayout;
