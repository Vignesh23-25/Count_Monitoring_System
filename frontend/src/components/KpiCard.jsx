// const KpiCard = ({ label, value, subtext, color }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-1">
//       <p className="text-xs text-gray-500 uppercase tracking-wide">
//         {label}
//       </p>
//       <p className={`text-2xl font-bold ${color}`}>
//         {value}
//       </p>
//       {subtext && (
//         <p className="text-xs text-gray-400">
//           {subtext}
//         </p>
//       )}
//     </div>
//   );
// };

// export default KpiCard;


const KpiCard = ({ label, value, subtext, color }) => {
  return (
    <div
      className="
        bg-[#111827]/90 backdrop-blur
        border border-white/10
        rounded-2xl
        p-5
        shadow-md
        hover:shadow-lg hover:-translate-y-0.5
        transition-all duration-300
      "
    >
      <p className="text-xs uppercase tracking-widest text-slate-400">
        {label}
      </p>


      <p className={`mt-2 text-3xl font-bold ${color}`}>
        {value}
      </p>

      {subtext && (
        <p className="mt-1 text-xs text-slate-500">
          {subtext}
        </p>
      )}
    </div>
  );
};

export default KpiCard;
