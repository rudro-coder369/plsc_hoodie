export default function RagDayPage() {
  const commonItems = [
    { id: "01", title: "Cinematographer", detail: "Full event cinematic video coverage" },
    { id: "02", title: "Photographer", detail: "Professional candid & group photography" },
    { id: "03", title: "Rag Wall", detail: "Custom batch memory & signature wall" },
    { id: "04", title: "Batch Banner", detail: "Large-format official batch banner" },
    { id: "05", title: "Batch Flag", detail: "Custom printed batch flag" },
    { id: "06", title: "Smoke Grenade", detail: "Color smoke bombs for group shots" },
    { id: "07", title: "Biriyani Packet", detail: "Freshly prepared meal box for all" },
    { id: "08", title: "Website Cost", detail: "Dedicated batch website & hosting" },
  ];

  const boysItems = [
    { id: "01", title: "White T-Shirt", note: "Classic plain white tee" },
    { id: "02", title: "Polo T-Shirt", note: "Smart collared batch polo" },
    { id: "03", title: "Key Chain", note: "Custom batch edition" },
    { id: "04", title: "Bag", note: "Minimalist carry bag" },
    { id: "05", title: "Sun Glasses", note: "Event-ready shades" },
    { id: "06", title: "Marker", note: "For rag wall & shirt signing" },
  ];

  const girlsItems = [
    { id: "01", title: "Bag", note: "Minimalist carry bag" },
    {
      id: "02",
      title: "White Semi-Long Shirt",
      note: "Batch name on back, school logo on front",
    },
    { id: "03", title: "Key Chain", note: "Custom batch edition" },
    { id: "04", title: "Bag Badge", note: "Custom pin-on batch badge" },
    { id: "05", title: "Marker", note: "For rag wall & shirt signing" },
    { id: "06", title: "Sunglass", note: "Event-ready shades" },
  ];

  return (
    <section id="rag-day" className="w-full py-16 px-6 border-b border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            Package Details
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
            Rag Day Package
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
            Everything included in the official batch Rag Day celebration—common essentials, boys&apos; kit, and girls&apos; kit.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 border-b border-neutral-900 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Common Things
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              08 Items
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commonItems.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 rounded-2xl p-5 transition-colors"
              >
                <span className="block text-[11px] font-mono text-neutral-500 mb-2">
                  {item.id}
                </span>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-900">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                  Individual Kit
                </span>
                <h2 className="text-2xl font-bold text-white mt-0.5">Boys</h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-black border border-neutral-800 text-xs font-mono text-neutral-400">
                06 Items
              </span>
            </div>

            <div className="space-y-3">
              {boysItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-black/60 border border-neutral-900 hover:border-neutral-800 transition-colors"
                >
                  <span className="text-xs font-mono text-neutral-500 pt-0.5">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-900">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">
                  Individual Kit
                </span>
                <h2 className="text-2xl font-bold text-white mt-0.5">Girls</h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-black border border-neutral-800 text-xs font-mono text-neutral-400">
                06 Items
              </span>
            </div>

            <div className="space-y-3">
              {girlsItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-black/60 border border-neutral-900 hover:border-neutral-800 transition-colors"
                >
                  <span className="text-xs font-mono text-neutral-500 pt-0.5">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}