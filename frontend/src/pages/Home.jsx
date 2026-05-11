import React from "react";

const Home = () => {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20
                      border border-white/10 rounded-3xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-100">
          Welcome to K.H Exports
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Real-time production monitoring dashboard for tracking efficiency,
          output, and bottlenecks across all manufacturing lines.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Active Lines", value: "5", color: "text-cyan-400" },
          { label: "Total Stations", value: "32", color: "text-purple-400" },
          { label: "Avg Efficiency", value: "92.4%", color: "text-emerald-400" },
          { label: "Alerts Today", value: "2", color: "text-red-400" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-[#111827]/90 border border-white/10 rounded-2xl p-5 shadow-md"
          >
            <p className="text-xs uppercase tracking-widest text-slate-400">
              {item.label}
            </p>
            <p className={`mt-2 text-3xl font-bold ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation / Guidance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-100 mb-2">
            What you can do here
          </h2>
          <ul className="text-sm text-slate-400 space-y-2">
            <li>• Monitor real-time production output</li>
            <li>• Identify slow stations and bottlenecks</li>
            <li>• Compare expected vs actual performance</li>
            <li>• Track efficiency trends across lines</li>
          </ul>
        </div>

        <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-100 mb-2">
            Getting started
          </h2>
          <p className="text-sm text-slate-400 mb-4">
            Select a production line from the sidebar to view detailed
            performance metrics and analytics.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"].map((line) => (
              <span
                key={line}
                className="px-4 py-2 rounded-xl text-xs font-medium
                           bg-white/5 text-slate-300 border border-white/10"
              >
                {line}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Info Card */}
      <div className="bg-[#111827]/80 border border-white/10 rounded-2xl p-6 text-sm text-slate-400">
        <p>
          System Status:{" "}
          <span className="text-emerald-400 font-medium">
            Online
          </span>{" "}
          • Last sync: just now
        </p>
      </div>

    </div>
  );
};

export default Home;
