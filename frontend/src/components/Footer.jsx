// const Footer = () => {
//   return (
//     <footer className="w-full border-t bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">

//         {/* Left */}
//         <p className="text-sm text-gray-600">
//           🏭 K.H Exports Dashboard
//           <span className="mx-2 text-gray-300">•</span>
//           <span className="text-green-600 font-medium">
//             System Online
//           </span>
//         </p>

//         {/* Right */}
//         <p className="text-xs text-gray-400">
//           © {new Date().getFullYear()} Production Monitoring System
//         </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] border-t border-white/10">
      <div className="max-w-full px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <span className="font-medium text-slate-300">
            🏭 K.H Exports Dashboard
          </span>

          <span className="hidden md:inline text-slate-600">•</span>

          <span className="flex items-center gap-2 text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            System Online
          </span>
        </div>

        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Production Monitoring System
        </div>

      </div>
    </footer>
  );
};

export default Footer;
