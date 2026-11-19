export default function ProductInfo() {
  const specs = [
    {
      label: "Fabric Weight",
      value: "350+ GSM Heavyweight Fleece",
      detail: "Ultra-thick construction engineered for maximum warmth & durability.",
    },
    {
      label: "Material",
      value: "100% Combed Cotton",
      detail: "Soft brushed interior with a smooth, pill-resistant outer finish.",
    },
    {
      label: "Colorway",
      value: "Plain Pure White",
      detail: "Crisp, solid minimalist white with zero fading.",
      isWhiteSwatch: true,
    },
    {
      label: "Sleeve Style",
      value: "Full Sleeve",
      detail: "Ribbed knit cuffs & hem for a clean, structured silhouette.",
    },
  ];

  const sizeChart = [
    { size: "M", chest: '40"', length: '27"', sleeve: '24"' },
    { size: "L", chest: '42"', length: '28"', sleeve: '24.5"' },
    { size: "XL", chest: '44"', length: '29"', sleeve: '25"' },
    { size: "XXL", chest: '46"', length: '30"', sleeve: '25.5"' },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            Product Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Crafted in{" "}
            <span className="text-white underline decoration-neutral-600 underline-offset-8">
              350+ GSM
            </span>{" "}
            Fleece
          </h2>
        </div>

        {/* 4 Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {specs.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                  {item.label}
                </span>
                {item.isWhiteSwatch && (
                  <span
                    title="Pure White"
                    className="w-4 h-4 rounded-full bg-white border border-neutral-600 shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                  />
                )}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                {item.value}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Size Chart Card */}
        <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Size Guide
              </h3>
              <p className="text-xs text-neutral-500">
                All measurements are in inches (Standard Regular Fit).
              </p>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-lg bg-black border border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Unit: Inches
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 text-xs uppercase tracking-wider text-neutral-400">
                  <th className="py-3.5 px-4 font-semibold">Size</th>
                  <th className="py-3.5 px-4 font-semibold">Chest</th>
                  <th className="py-3.5 px-4 font-semibold">Length</th>
                  <th className="py-3.5 px-4 font-semibold">Full Sleeve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-sm">
                {sizeChart.map((row) => (
                  <tr
                    key={row.size}
                    className="hover:bg-black/60 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-bold text-white">
                      {row.size}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-neutral-300">
                      {row.chest}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-neutral-300">
                      {row.length}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-neutral-300">
                      {row.sleeve}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}