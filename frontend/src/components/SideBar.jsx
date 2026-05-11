// import { NavLink } from "react-router-dom";

// const SideBar = () => {
//   return (
//     <aside className="w-64 bg-white border-r shadow-sm">
//       <div className="p-6">
//         <p className="text-xs font-semibold text-gray-400 mb-4">
//           PRODUCTION LINES
//         </p>

//         <nav className="flex flex-col gap-2">
//           {[
//             { to: "/line1", label: "Production Line 1" },
//             { to: "/line2", label: "Production Line 2" },
//             { to: "/line3", label: "Production Line 3" },
//             { to: "/line4", label: "Production Line 4" },
//             { to: "/line5", label: "Production Line 5" },
//           ].map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               className={({ isActive }) =>
//                 `px-4 py-2 rounded-lg text-sm font-medium transition
//                  ${
//                    isActive
//                      ? "bg-blue-600 text-white shadow"
//                      : "text-gray-700 hover:bg-gray-100"
//                  }`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default SideBar;


import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-64 bg-[#0F172A] border-r border-white/10 flex-shrink-0">

      <div className="px-6 py-5 border-b border-white/10">
        <p className="text-xs font-semibold text-slate-400 tracking-widest">
          PRODUCTION LINES
        </p>
      </div>

      <nav className="p-4 flex flex-col gap-2">
        {[
          { to: "/line1", label: "Production Line 1" },
          { to: "/line2", label: "Production Line 2" },
          { to: "/line3", label: "Production Line 3" },
          { to: "/line4", label: "Production Line 4" },
          { to: "/line5", label: "Production Line 5" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `
              px-4 py-3 rounded-xl text-sm font-medium transition-all
              ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }
              `
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
};

export default SideBar;
