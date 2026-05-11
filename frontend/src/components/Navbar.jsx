// // const Navbar = () => {
// //   return (
// //     <nav className="w-full bg-white border-b shadow-sm">
// //       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

// //         <div className="flex items-center gap-3">
// //           <span className="text-2xl">🏭</span>
// //           <div>
// //             <p className="text-4xl font-bold text-gray-800">
// //               K.H Exports 
// //             </p>
            
// //           </div>
// //         </div>

// //         <div className="hidden md:block">
// //           <p className="text-sm font-medium text-gray-600">
// //             Factory Dashboard
// //             <p>Last update: 10:42:18</p>
// //           </p>
// //         </div>

// //         <div className="flex items-center gap-3">
// //           <span className="flex items-center gap-2 text-sm text-green-600">
// //             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
// //             Live
// //           </span>
// //         </div>
        
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white border-b shadow-sm">
//       <div className="max-w-full px-8 h-14 flex items-center justify-between">

//         {/* Left: Brand */}
//         <div className="flex items-center gap-3">
//           <span className="text-xl">🏭</span>
//           <span className="text-xl font-semibold text-gray-800">
//             K.H Exports
//           </span>
//         </div>

//         {/* Center: Context */}
//         <div className="hidden md:block">
//           <span className="text-sm font-medium text-gray-500 tracking-wide">
//             Factory Production Dashboard
//           </span>
//         </div>

//         {/* Right: System status */}
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//           <span className="text-sm font-medium text-green-600">
//             Live
//           </span>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full bg-[#0F172A]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-full px-8 h-14 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <span className="text-xl">🏭</span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-200">
              K.H Exports
            </span>
            <span className="text-xs text-slate-400">
              Production Dashboard
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs text-slate-400">
          <span>Live Monitoring</span>
          <span className="text-slate-600">•</span>
          <span>Last Update: {time}</span>
        </div>


        <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          System Online
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

