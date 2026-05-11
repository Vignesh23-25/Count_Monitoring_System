// // import React from 'react';
// // import { Chart as ChartJS } from "chart.js/auto";
// // import { Bar } from "react-chartjs-2";

// // function Graph({Step}) {
// //   return (
// //     <div>
// //       <Bar
// //       data = {{
// //         labels: Step.
// //         datasets: [Step.map((Step)=>Step.stepId),
// //             {
// //                 label: "Expected",
// //                 data: Step.map((Step)=>Step.todayCount )
// //             },
// //             {
// //                 label: "Actual",
// //                 data: Step.map((Step)=> Step.todayCount * (100 /Step.efficiency ))
// //             }
// //         ],
// //       }}
// //       /> 
// //     </div>
// //   )
// // }

// // export default Graph


// import React from "react";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar } from "react-chartjs-2";

// const Graph = ({ steps }) => {
//   // X-axis labels
//   const labels = steps.map(step => step.stepName);

//   // Chart data
//   const data = {
//     labels,
//     datasets: [
      
//       {
//         label: "Expected Output",
//         data: steps.map(
//           step => (step.todayCount * 100) / step.efficiency
//         ),
//         backgroundColor: "rgba(255, 99, 132, 0.7)",
//       },
//       {
//         label: "Actual Output",
//         data: steps.map(step => step.todayCount),
//         backgroundColor: "rgba(54, 162, 235, 0.7)",
//       },
//     ],
//   };

//   // Chart options
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) =>
//             `${context.dataset.label}: ${context.parsed.y.toFixed(0)}`,
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "Units Produced",
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: "Production Step",
//         },
//       },
//     },
//   };

//   return (
//     <div className="w-full h-[400px]">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default Graph;


import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Graph = ({ steps }) => {
  const labels = steps.map((step) => step.stepName);

  const data = {
    labels,
    datasets: [
      {
        label: "Expected Output",
        data: steps.map(
          (step) => (step.todayCount * 100) / step.efficiency
        ),
        backgroundColor: "rgba(168, 85, 247, 0.7)", // purple
        borderRadius: 8,
        barThickness: 28,
      },
      {
        label: "Actual Output",
        data: steps.map((step) => step.todayCount),
        backgroundColor: "rgba(56, 189, 248, 0.8)", // cyan
        borderRadius: 8,
        barThickness: 28,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#CBD5E1",
          font: {
            size: 12,
            weight: "500",
          },
        },
      },
      tooltip: {
        backgroundColor: "#020617",
        titleColor: "#E5E7EB",
        bodyColor: "#E5E7EB",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#94A3B8",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#94A3B8",
        },
        grid: {
          color: "rgba(255,255,255,0.05)",
        },
      },
    },
  };

  return (
    <div className="w-full h-[380px] bg-[#111827] border border-white/10 rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-slate-200 mb-4">
        Production Output Comparison
      </h3>

      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;
