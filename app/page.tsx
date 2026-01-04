export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section>
        <h1 className="text-4xl font-bold text-accent mb-8">About</h1>
        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
          👋 Hey there! I'm Charles, a developer focused on building modern web experiences.
          I love crafting software that looks great and is easy to maintain.
        </p>
        {/* Placeholder for the image from your screenshot */}
        <div className="w-full h-64 bg-zinc-800 rounded-2xl overflow-hidden border border-white/10 relative">
          <div className="absolute inset-0 flex items-center justify-center text-zinc-500">
            [Your Image Here]
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Experience</h2>
          <button className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm transition">Resume</button>
        </div>
        
        <div className="space-y-8">
          <ExperienceItem 
            company="Example Tech Inc" 
            role="Frontend Engineer" 
            date="May 2024 — Present" 
          />
          <ExperienceItem 
            company="Startup Studio" 
            role="Junior Developer" 
            date="Sep 2022 — Apr 2024" 
          />
        </div>
      </section>

      {/* Activity Section (Music/Movies) */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActivityCard title="LAST PLAYED" item="Eras of Us" sub="Fletcher" />
          <ActivityCard title="READING" item="Make It Stick" sub="15.85%" />
        </div>
      </section>
    </div>
  )
}

function ExperienceItem({ company, role, date }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10"></div>
      <div className="flex-1">
        <h3 className="font-bold underline decoration-zinc-600">{company}</h3>
        <p className="text-zinc-400 text-sm">{role}</p>
      </div>
      <div className="text-zinc-500 text-sm">{date}</div>
    </div>
  )
}

function ActivityCard({ title, item, sub }: any) {
  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
      <p className="text-[10px] font-bold text-zinc-500 mb-2 uppercase tracking-widest">{title}</p>
      <div className="flex gap-3">
        <div className="w-12 h-12 bg-zinc-800 rounded"></div>
        <div>
          <p className="font-bold text-sm underline">{item}</p>
          <p className="text-xs text-zinc-400">{sub}</p>
        </div>
      </div>
    </div>
  )
}