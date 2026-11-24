export default function AfterPartyPage() {
  const storyTimeline = [
    {
      step: "01",
      time: "3:00 PM",
      title: "The First Note",
      story:
        "The hall doors open, familiar faces walk in, and the evening begins with a live song. No rush, no classes—just our batch settling into one room, letting the reality sink in that this night is ours.",
    },
    {
      step: "02",
      time: "Chapter 02",
      title: "Your Stage, Your Story",
      story:
        "A space for the voices we never got to hear enough. Whether it’s a song, a poem, a roast, or a hidden talent—this is where batchmates take the mic and leave a piece of themselves on stage.",
    },
    {
      step: "03",
      time: "Chapter 03",
      title: "Games & Unfiltered Laughter",
      story:
        "Before the lights dim, we bring out the chaos. Fun group activities, inside jokes, and friendly challenges that turn into the exact moments we’ll laugh about years from now.",
    },
    {
      step: "04",
      time: "Chapter 04",
      title: "Frames That Stay Forever",
      story:
        "Dressed in our best, standing beneath the batch banner and custom decor. Our photographers and cinematographers capture the candid hugs, the group poses, and the quiet smiles.",
    },
    {
      step: "05",
      time: "Chapter 05",
      title: "Lights Down, DJ Up",
      story:
        "The music shifts, the bass drops, and the entire hall turns into one shared dance floor. No worries about tomorrow—just pure energy, loud choruses, and everyone losing themselves in the beat.",
    },
    {
      step: "06",
      time: "Chapter 06",
      title: "One Last Dinner Together",
      story:
        "Sitting down side by side, catching our breath, and sharing a meal together. A quiet pause in the middle of the noise to look around the table and appreciate the people who made school feel like home.",
    },
    {
      step: "07",
      time: "Finale",
      title: "The Final Cut",
      story:
        "Everyone gathers around for the batch cake. One collective countdown, a thousand camera flashes, and a bittersweet goodbye to the chapter we’ll never forget.",
    },
  ];

  const experienceHighlights = [
    {
      label: "Venue",
      title: "Private Hall & Custom Decor",
      detail: "Transformed with our official batch banner and aesthetic lighting.",
    },
    {
      label: "Sound",
      title: "Live Musician & DJ Set",
      detail: "From soulful acoustic beginnings to an all-out night party.",
    },
    {
      label: "Memory",
      title: "Cinema & Photo Session",
      detail: "Dedicated photography and cinematic coverage from start to finish.",
    },
    {
      label: "Feast",
      title: "Dinner & Celebration Cake",
      detail: "A full dinner spread followed by our grand batch cake-cutting.",
    },
  ];

  return (
    <section
      id="after-party"
      className="w-full py-16 px-6 border-b border-neutral-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            3:00 PM Onwards
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            The After Party
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            One last evening under the same roof. No uniforms, no bells—just
            music, laughter, and a story we write together before we go our
            separate ways.
          </p>
        </div>

        {/* Emotional Story Timeline */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-neutral-900 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              How The Night Unfolds
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              07 Moments
            </span>
          </div>

          <div className="space-y-4">
            {storyTimeline.map((item) => (
              <div
                key={item.step}
                className="bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 rounded-2xl p-6 sm:p-7 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                    Moment {item.step}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black border border-neutral-800 text-[11px] font-mono text-neutral-300">
                    {item.time}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.story}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Waiting Inside (No Costing) */}
        <div>
          <div className="flex items-center justify-between mb-6 border-b border-neutral-900 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              What’s Waiting Inside
            </h2>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              The Setup
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experienceHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-6"
              >
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                  {item.label}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}