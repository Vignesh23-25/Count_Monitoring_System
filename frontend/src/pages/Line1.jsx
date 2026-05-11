
// import StepCard from "../components/stepCard";
// import KpiSummary from "../components/KpiSummary";
// import Graph from "../components/Graph";

// const mockSteps = [
//   {
//     stepId: 1,
//     stepName: "Cutting Table",
//     todayCount: 120,
//     avgActualTime: 140,
//     standardTime: 120,
//     efficiency: 95.7,
//   },
//   {
//     stepId: 2,
//     stepName: "Drilling Table",
//     todayCount: 95,
//     avgActualTime: 160,
//     standardTime: 150,
//     efficiency: 93.8,
//   },
//   {
//     stepId: 3,
//     stepName: "Polishing Table",
//     todayCount: 70,
//     avgActualTime: 210,
//     standardTime: 180,
//     efficiency: 85.7,
//   },
//   {
//     stepId: 4,
//     stepName: "Stitching Table",
//     todayCount: 110,
//     avgActualTime: 150,
//     standardTime: 130,
//     efficiency: 92.4,
//   },
//   {
//     stepId: 5,
//     stepName: "Accessory Table",
//     todayCount: 130,
//     avgActualTime: 120,
//     standardTime: 110,
//     efficiency: 97.1,
//   },
//   {
//     stepId: 6,
//     stepName: "QC Inspection",
//     todayCount: 125,
//     avgActualTime: 135,
//     standardTime: 120,
//     efficiency: 94.2,
//   },
//   {
//     stepId: 7,
//     stepName: "Packaging",
//     todayCount: 120,
//     avgActualTime: 140,
//     standardTime: 130,
//     efficiency: 92.0,
//   },
// ];

// const Line1 = () => {
//   return (
//     <div className="space-y-12">

//       {/* Page Header */}
//       <div>
//         <h1 className="text-2xl font-bold text-slate-100">
//           Production Line 1
//         </h1>
//         <p className="text-sm text-slate-400 mt-1">
//           Live performance overview of all stations
//         </p>
//       </div>

//       {/* KPI Summary */}
//       <KpiSummary steps={mockSteps} />

//       {/* Step Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {mockSteps.map((step) => (
//           <StepCard key={step.stepId} step={step} />
//         ))}
//       </div>

//       {/* Analytics */}
//       <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 shadow-lg">
//         <h2 className="text-xl font-semibold text-slate-100 mb-1">
//           Production Analysis
//         </h2>
//         <p className="text-sm text-slate-400 mb-6">
//           Expected vs actual output comparison
//         </p>

//         <Graph steps={mockSteps} />
//       </div>

//     </div>
//   );
// };

// export default Line1;

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import StepCard from "../components/stepCard";
import KpiSummary from "../components/KpiSummary";
import Graph from "../components/Graph";

const socket = io("http://localhost:3000");

const mockSteps = [
  {
    stepId: 1,
    stepName: "Cutting",
    todayCount: 120,
    avgActualTime: 140,
    standardTime: 120,
    efficiency: 95.7,
  },
  {
    stepId: 2,
    stepName: "Drilling",
    todayCount: 95,
    avgActualTime: 160,
    standardTime: 150,
    efficiency: 93.8,
  },
  {
    stepId: 3,
    stepName: "Polishing",
    todayCount: 70,
    avgActualTime: 210,
    standardTime: 180,
    efficiency: 85.7,
  },
  {
    stepId: 4,
    stepName: "Stitching",
    todayCount: 110,
    avgActualTime: 150,
    standardTime: 130,
    efficiency: 92.4,
  },
  {
    stepId: 5,
    stepName: "Accessory",
    todayCount: 130,
    avgActualTime: 120,
    standardTime: 110,
    efficiency: 97.1,
  },
  {
    stepId: 6,
    stepName: "QC",
    todayCount: 125,
    avgActualTime: 135,
    standardTime: 120,
    efficiency: 94.2,
  },
  {
    stepId: 7,
    stepName: "Packaging",
    todayCount: 118,
    avgActualTime: 145,
    standardTime: 130,
    efficiency: 90.8,
  },
  {
    stepId: 8,
    stepName: "Monitoring",
    todayCount: 130,
    avgActualTime: 120,
    standardTime: 110,
    efficiency: 97.1,
  },
  {
    stepId: 9,
    stepName: "QC second",
    todayCount: 125,
    avgActualTime: 135,
    standardTime: 120,
    efficiency: 94.2,
  },
  {
    stepId: 10,
    stepName: "Tag attachment",
    todayCount: 130,
    avgActualTime: 120,
    standardTime: 110,
    efficiency: 97.1,
  },
  {
    stepId: 11,
    stepName: "Packaging",
    todayCount: 125,
    avgActualTime: 135,
    standardTime: 120,
    efficiency: 94.2,
  },
];

const Line1 = () => {
  const [steps, setSteps] = useState(mockSteps);

  useEffect(() => {
    socket.on("data", (incomingData) => {
      console.log("Real-time data received:", incomingData);
      
      // Update the matching station in the state
      setSteps((prevSteps) =>
        prevSteps.map((step) => {
          // Check if incomingData station matches stepName (case-insensitive)
          if (incomingData.station && step.stepName.toLowerCase().includes(incomingData.station.split("_")[0].toLowerCase())) {
            return {
              ...step,
              todayCount: incomingData.count || step.todayCount,
              efficiency: incomingData.efficiency || step.efficiency,
              avgActualTime: incomingData.actual_rate ? (60 / incomingData.actual_rate) * 60 : step.avgActualTime // rough conversion
            };
          }
          return step;
        })
      );
    });

    return () => {
      socket.off("data");
    };
  }, []);

  return (
    <div className="space-y-6">
      
      <div>
        <h1 className="text-2xl font-bold text-slate-100">
          Production Line 1
        </h1>
        <p className="text-sm text-slate-400">
          High-density operational overview
        </p>
      </div>

      
      <KpiSummary steps={steps} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

        <div className="lg:col-span-4">
          <div
            className="
              grid grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              xl:grid-cols-5
              2xl:grid-cols-6
              gap-3
            "
          >
            {steps.map((step) => (
              <StepCard key={step.stepId} step={step} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-[#0F172A] border border-white/10 rounded-lg p-3 h-full">

            <h2 className="text-xs font-semibold text-slate-200 mb-2">
              System Messages
            </h2>

            <div className="space-y-2 text-[10px] text-slate-400">

              <div className="bg-white/5 border border-white/10 rounded-md p-2">
                ⚠️ Polishing efficiency below 86%
              </div>

              <div className="bg-white/5 border border-white/10 rounded-md p-2">
                ⏱ Drilling avg time increasing
              </div>

              <div className="bg-white/5 border border-white/10 rounded-md p-2">
                ✅ Accessory table stable
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="bg-[#0F172A] border border-white/10 rounded-lg p-4">

        <h2 className="text-sm font-semibold text-slate-200 mb-1">
          Output Comparison
        </h2>
        <p className="text-[11px] text-slate-400 mb-3">
          Expected vs actual production
        </p>

        <div className="h-[300px]">
          <Graph steps={steps} />
        </div>

      </div>

    </div>
  );
};

export default Line1;


