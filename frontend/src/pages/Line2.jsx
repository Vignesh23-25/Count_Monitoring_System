
import StepCard from "../components/stepCard";
import KpiSummary from "../components/KpiSummary";
import Graph from "../components/Graph";

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
    efficiency: 78.8,
  },
  {
    stepId: 3,
    stepName: "Polishing",
    todayCount: 70,
    avgActualTime: 210,
    standardTime: 180,
    efficiency: 15.7,
  },
  {
    stepId: 4,
    stepName: "Accessory",
    todayCount: 130,
    avgActualTime: 120,
    standardTime: 110,
    efficiency: 97.1,
  },
  {
    stepId: 5,
    stepName: "QC",
    todayCount: 125,
    avgActualTime: 135,
    standardTime: 120,
    efficiency: 94.2,
  },
  {
    stepId: 6,
    stepName: "Packaging",
    todayCount: 112,
    avgActualTime: 145,
    standardTime: 130,
    efficiency: 48,
  },
];

const Line1 = () => {
  return (
    <div className="space-y-6">


      {/* ===== Header ===== */}
      <div>
        <h1 className="text-2xl font-bold text-slate-100">
          Production Line 2
        </h1>
        <p className="text-sm text-slate-400">
          High-density operational overview
        </p>
      </div>

      {/* ===== KPI Summary ===== */}
      <KpiSummary steps={mockSteps} />

      {/* ===== Main Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

        {/* ---- Step Cards (dense grid) ---- */}
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
            {mockSteps.map((step) => (
              <StepCard key={step.stepId} step={step} />
            ))}
          </div>
        </div>

        {/* ---- Messages Panel ---- */}
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

      {/* ===== Bottom Graph ===== */}
      <div className="bg-[#0F172A] border border-white/10 rounded-lg p-4">

        <h2 className="text-sm font-semibold text-slate-200 mb-1">
          Output Comparison
        </h2>
        <p className="text-[11px] text-slate-400 mb-3">
          Expected vs actual production
        </p>

        <div className="h-[300px]">
          <Graph steps={mockSteps} />
        </div>

      </div>

    </div>
  );
};

export default Line1;

