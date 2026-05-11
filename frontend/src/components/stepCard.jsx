
// const StepCard = ({ step }) => {
//   const efficiency = step.efficiency;

//   const barColor =
//     efficiency >= 95
//       ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
//       : efficiency >= 85
//       ? "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]"
//       : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]";

//   return (
//     <div className="
//       bg-[#111827]/90 border border-white/10
//       rounded-xl p-4
//       hover:shadow-md transition
//     ">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h3 className="text-sm font-semibold text-slate-200">
//           {step.stepName}
//         </h3>
//         <span className="text-[10px] text-slate-500 uppercase">
//           Station
//         </span>
//       </div>

//       {/* Main number */}
//       <p className="mt-2 text-xl font-bold text-white">
//         {step.todayCount}
//       </p>
//       <p className="text-[11px] text-slate-400">
//         Products today
//       </p>

//       {/* Times */}
//       <div className="mt-2 flex justify-between text-[11px] text-slate-400">
//         <span>Std: {step.standardTime}s</span>
//         <span>Avg: {step.avgActualTime}s</span>
//       </div>

//       {/* Efficiency bar */}
//       <div className="mt-3">
//         <div className="flex justify-between text-[10px] mb-1">
//           <span className="text-slate-400">Efficiency</span>
//           <span className="text-slate-300 font-medium">
//             {efficiency.toFixed(1)}%
//           </span>
//         </div>
//         <div className="w-full bg-white/10 rounded-full h-2">
//           <div
//             className={`h-2 rounded-full ${barColor}`}
//             style={{ width: `${Math.min(efficiency, 100)}%` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepCard;

const StepCard = ({ step }) => {
  const efficiency = step.efficiency;

  const barColor =
    efficiency >= 95
      ? "bg-emerald-500"
      : efficiency >= 85
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <div className="
      bg-[#111827]/90 border border-white/10
      rounded-md px-2 py-2
      transition
    ">
      
      <div className="flex justify-between items-center">
        <h3 className="text-[11px] font-medium text-slate-200 truncate max-w-[80%]">
          {step.stepName}
        </h3>
        <span className="text-[8px] text-slate-500">
          ST
        </span>
      </div>

      
      <div className="flex justify-between items-end mt-[2px]">
        <span className="text-base font-semibold text-white">
          {step.todayCount}
        </span>
        <span className="text-[9px] text-slate-400">
          pcs
        </span>
      </div>

      
      <div className="flex justify-between text-[9px] text-slate-400 mt-[2px]">
        <span>{step.standardTime}s</span>
        <span>{step.avgActualTime}s</span>
      </div>

     
      <div className="mt-[4px]">
        <div className="flex justify-between text-[8px] mb-[1px]">
          <span className="text-slate-400">Eff</span>
          <span className="text-slate-300">
            {efficiency.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1">
          <div
            className={`h-1 rounded-full ${barColor}`}
            style={{ width: `${Math.min(efficiency, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepCard;
