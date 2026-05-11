
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import SideBar from "./components/SideBar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Line1 from "./pages/Line1";
// import Line2 from "./pages/Line2";
// import Line3 from "./pages/Line3";
// import Line4 from "./pages/Line4";
// import Line5 from "./pages/Line5";

// const App = () => {
//   return (
//     <BrowserRouter>
//       {/* App Shell */}
//       <div className="min-h-screen flex flex-col bg-[#0B1220] text-slate-200">

//         {/* Top Navbar */}
//         <Navbar />

//         {/* Main Body */}
//         <div className="flex flex-1 overflow-hidden">

//           {/* Sidebar */}
//           <SideBar />

//           {/* Page Content */}
//           <main className="flex-1 overflow-y-auto p-8 bg-[#0B1220]">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/line1" element={<Line1 />} />
//               <Route path="/line2" element={<Line2 />} />
//               <Route path="/line3" element={<Line3 />} />
//               <Route path="/line4" element={<Line4 />} />
//               <Route path="/line5" element={<Line5 />} />
//             </Routes>
//           </main>

//         </div>

//         {/* Footer */}
//         <Footer />

//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Line1 from "./pages/Line1";
import Line2 from "./pages/Line2";
import Line3 from "./pages/Line3";
import Line4 from "./pages/Line4";
import Line5 from "./pages/Line5";

const App = () => {
  return (
    <BrowserRouter>
      {/* APP SHELL */}
      <div className="h-screen flex flex-col bg-[#0B1220]">

        {/* NAVBAR (fixed height) */}
        <Navbar />

        {/* BODY */}
        <div className="flex flex-1 overflow-hidden">

          {/* SIDEBAR (fixed, no scroll) */}
          <SideBar />

          {/* ONLY SCROLLABLE AREA */}
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/line1" element={<Line1 />} />
              <Route path="/line2" element={<Line2 />} />
              <Route path="/line3" element={<Line3 />} />
              <Route path="/line4" element={<Line4 />} />
              <Route path="/line5" element={<Line5 />} />
            </Routes>
          </main>

        </div>

        {/* FOOTER (fixed) */}
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
