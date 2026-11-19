interface ProductInfoProps {
  isLightTheme?: boolean;
}

export default function ProductInfo({
  isLightTheme = false,
}: ProductInfoProps) {
  const specs = [
    {
      label: "Fabric Weight",
      value: "350+ GSM Heavyweight Fleece",
      detail:
        "Ultra-thick construction engineered for maximum warmth & durability.",
    },
    {
      label: "Material",
      value: "100% Combed Cotton",
      detail:
        "Soft brushed interior with a smooth, pill-resistant outer finish.",
    },
    {
      label: "Colorway",
      value: "Plain Pure White & Jet Black",
      detail:
        "Available in two crisp, solid minimalist editions with zero fading.",
      isColorSwatch: true,
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
    <section
      className={`w-full py-20 px-6 border-t transition-colors duration-500 ${
        isLightTheme
          ? "bg-white text-black border-neutral-200"
          : "bg-black text-white border-neutral-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className={`inline-block px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest mb-3 transition-colors duration-500 ${
              isLightTheme
                ? "bg-neutral-100 border-neutral-200 text-neutral-600"
                : "bg-neutral-950 border-neutral-800 text-neutral-400"
            }`}
          >
            Product Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Crafted in{" "}
            <span
              className={`underline underline-offset-8 ${
                isLightTheme
                  ? "text-black decoration-neutral-400"
                  : "text-white decoration-neutral-600"
              }`}
            >
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
              className={`border rounded-2xl p-6 transition-colors duration-500 ${
                isLightTheme
                  ? "bg-neutral-50 border-neutral-200 hover:border-neutral-300"
                  : "bg-neutral-950 border-neutral-800/80 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                  {item.label}
                </span>
                {item.isColorSwatch && (
                  <div className="flex items-center gap-1.5">
                    <span
                      title="Pure White"
                      className="w-4 h-4 rounded-full bg-white border border-neutral-400"
                    />
                    <span
                      title="Jet Black"
                      className="w-4 h-4 rounded-full bg-black border border-neutral-600"
                    />
                  </div>
                )}
              </div>

              <h3
                className={`text-lg sm:text-xl font-bold mb-1.5 ${
                  isLightTheme ? "text-black" : "text-white"
                }`}
              >
                {item.value}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isLightTheme ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Size Chart Card */}
        <div
          className={`border rounded-2xl p-6 sm:p-8 transition-colors duration-500 ${
            isLightTheme
              ? "bg-neutral-50 border-neutral-200"
              : "bg-neutral-950 border-neutral-800/80"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3
                className={`text-lg sm:text-xl font-bold ${
                  isLightTheme ? "text-black" : "text-white"
                }`}
              >
                Size Guide
              </h3>
              <p className="text-xs text-neutral-500">
                All measurements are in inches (Standard Regular Fit).
              </p>
            </div>
            <span
              className={`self-start sm:self-auto px-3 py-1 rounded-lg border text-[11px] font-mono uppercase tracking-wider transition-colors duration-500 ${
                isLightTheme
                  ? "bg-white border-neutral-300 text-neutral-600"
                  : "bg-black border-neutral-800 text-neutral-400"
              }`}
            >
              Unit: Inches
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className={`border-b text-xs uppercase tracking-wider ${
                    isLightTheme
                      ? "border-neutral-200 text-neutral-500"
                      : "border-neutral-800 text-neutral-400"
                  }`}
                >
                  <th className="py-3.5 px-4 font-semibold">Size</th>
                  <th className="py-3.5 px-4 font-semibold">Chest</th>
                  <th className="py-3.5 px-4 font-semibold">Length</th>
                  <th className="py-3.5 px-4 font-semibold">Full Sleeve</th>
                </tr>
              </thead>
              <tbody
                className={`divide-y text-sm ${
                  isLightTheme ? "divide-neutral-200" : "divide-neutral-900"
                }`}
              >
                {sizeChart.map((row) => (
                  <tr
                    key={row.size}
                    className={`transition-colors ${
                      isLightTheme ? "hover:bg-white" : "hover:bg-black/60"
                    }`}
                  >
                    <td
                      className={`py-3.5 px-4 font-bold ${
                        isLightTheme ? "text-black" : "text-white"
                      }`}
                    >
                      {row.size}
                    </td>
                    <td
                      className={`py-3.5 px-4 font-mono ${
                        isLightTheme ? "text-neutral-700" : "text-neutral-300"
                      }`}
                    >
                      {row.chest}
                    </td>
                    <td
                      className={`py-3.5 px-4 font-mono ${
                        isLightTheme ? "text-neutral-700" : "text-neutral-300"
                      }`}
                    >
                      {row.length}
                    </td>
                    <td
                      className={`py-3.5 px-4 font-mono ${
                        isLightTheme ? "text-neutral-700" : "text-neutral-300"
                      }`}
                    >
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