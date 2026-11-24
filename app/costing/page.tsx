export default function CostingPage() {
  const ragDayItems = [
    "Cinematographer & Photographer",
    "Rag Wall, Batch Banner & Batch Flag",
    "Smoke Grenade & Marker",
    "Biriyani Packet",
    "Website Cost",
    "Boys: White T-Shirt, Polo T-Shirt, Bag, Key Chain, Sun Glasses",
    "Girls: White Semi-Long Shirt, Bag, Bag Badge, Key Chain, Sunglass",
  ];

  const afterPartyItems = [
    "Private Hall & Custom Decorations",
    "DJ Setup & Live Musician",
    "Photographer & Cinematographer",
    "Dedicated Photo Session",
    "Batch Banner",
    "Dinner",
    "Grand Celebration Cake",
  ];

  return (
    <section
      id="costing"
      className="w-full py-16 px-6 border-b border-neutral-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            Package Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
            Costing
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
            Simple, all-inclusive package pricing for both events.
          </p>
        </div>

        {/* 2 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Rag Day */}
          <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-900">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                    Package 01
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-0.5">
                    Rag Day
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-black border border-neutral-800 text-xs font-mono text-neutral-400">
                  Full Kit
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {ragDayItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total Cost */}
            <div className="pt-5 border-t border-neutral-900 flex items-baseline justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Total Cost
              </span>
              <span className="text-3xl font-extrabold tracking-tight text-white">
                ৳1,600/-
              </span>
            </div>
          </div>

          {/* Card 2: After Party */}
          <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-900">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                    Package 02
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-0.5">
                    After Party
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-black border border-neutral-800 text-xs font-mono text-neutral-400">
                  Full Event
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {afterPartyItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total Cost */}
            <div className="pt-5 border-t border-neutral-900 flex items-baseline justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Total Cost
              </span>
              <span className="text-3xl font-extrabold tracking-tight text-white">
                ৳1,000/-
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}