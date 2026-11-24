import Image from "next/image";

export default function LeadershipPage() {
  const leaders = [
    { id: "01", name: "Rifa Tasnia Rinve", image: "/images/rinve.jpg" },
    { id: "02", name: "Shakila Jahan Chaity", image: "/images/chaity.jpg" },
    { id: "03", name: "Tanha Akter", image: "/images/tanha.jpg" },
    { id: "04", name: "Tasmia Taharat Ohi", image: "/images/ohi.jpg" },
    { id: "05", name: "Zubayer Hasan", image: "/images/ratul.jpg" },
    { id: "06", name: "Tahsinul Tasin", image: "/images/tasin.jpg" },
    { id: "07", name: "Sourov Kumar Sarkar", image: "/images/sourov.jpg" },
    { id: "08", name: "Sakibur Rahman", image: "/images/sakib.jpg" },
    { id: "09", name: "Abu Sajid", image: "/images/sajid.jpg" },
    { id: "10", name: "M A Rafi", image: "/images/rafi.jpg" },
    { id: "11", name: "Zahin Sarkar", image: "/images/zahin.jpg" },
  ];

  return (
    <section
      id="leadership"
      className="w-full py-16 px-6 border-b border-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            Organizing Committee
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
            Leadership
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
            The team behind the planning, coordination, and execution of our
            batch events.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="group bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 rounded-2xl overflow-hidden transition-colors"
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-square bg-neutral-900 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="block text-[10px] font-mono text-neutral-500 mb-1">
                  {leader.id}
                </span>
                <h2 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {leader.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}