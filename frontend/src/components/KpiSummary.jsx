// import KpiCard from "./KpiCard";

// const KpiSummary = ({ steps }) => {
//   // Last table = completed products
// const lastStep = steps[steps.length - 1];
// const totalProducts = lastStep?.todayCount ?? 0;

// // Average efficiency (still correct)
// const avgEfficiency =
//   steps.reduce((sum, s) => sum + s.efficiency, 0) /
//   steps.length;

// // Slow tables
// const slowTables = steps.filter(
//   (s) => s.efficiency < 85
// );

// // Bottleneck
// const bottleneck = steps.reduce((min, s) =>
//   s.efficiency < min.efficiency ? s : min
// );

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       <KpiCard
//         label="Total Output"
//         value={totalProducts}
//         subtext="Completed products today"
//         color="text-gray-800"
//     />


//       <KpiCard
//         label="Avg Efficiency"
//         value={`${avgEfficiency.toFixed(1)}%`}
//         subtext="Across all tables"
//         color={
//           avgEfficiency >= 95
//             ? "text-green-600"
//             : avgEfficiency >= 85
//             ? "text-yellow-500"
//             : "text-red-500"
//         }
//       />

//       <KpiCard
//         label="Slow Tables"
//         value={slowTables.length}
//         subtext="Below 85%"
//         color={
//           slowTables.length === 0
//             ? "text-green-600"
//             : "text-red-500"
//         }
//       />

//       <KpiCard
//         label="Bottleneck"
//         value={bottleneck.stepName}
//         subtext={`${bottleneck.efficiency.toFixed(1)}% efficiency`}
//         color="text-gray-800"
//       />
//     </div>
//   );
// };

// export default KpiSummary;

import KpiCard from "./KpiCard";

const KpiSummary = ({ steps }) => {
  // Guard
  if (!steps || steps.length === 0) return null;

  /* ---------------- Calculations ---------------- */

  // Total output = last table
  const lastStep = steps[steps.length - 1];
  const totalOutput = lastStep.todayCount;

  // Average efficiency
  const avgEfficiency =
    steps.reduce((sum, s) => sum + s.efficiency, 0) /
    steps.length;

  // Slow tables (< 85%)
  const slowTables = steps.filter(
    (s) => s.efficiency < 85
  );

  // Bottleneck (lowest efficiency)
  const bottleneck = steps.reduce((min, s) =>
    s.efficiency < min.efficiency ? s : min
  );

  /* ---------------- UI ---------------- */

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <KpiCard
        label="Total Output"
        value={totalOutput}
        subtext="Completed products today"
        color="text-slate-100"
      />

      <KpiCard
        label="Avg Efficiency"
        value={`${avgEfficiency.toFixed(1)}%`}
        subtext="Across all stations"
        color={
          avgEfficiency >= 95
            ? "text-emerald-400"
            : avgEfficiency >= 85
            ? "text-yellow-400"
            : "text-red-400"
        }
      />

      <KpiCard
        label="Slow Tables"
        value={slowTables.length}
        subtext="Below 85% efficiency"
        color={
          slowTables.length === 0
            ? "text-emerald-400"
            : "text-red-400"
        }
      />

      <KpiCard
        label="Bottleneck"
        value={bottleneck.stepName}
        subtext={`${bottleneck.efficiency.toFixed(1)}% efficiency`}
        color="text-slate-100"
      />

    </div>
  );
};

export default KpiSummary;
