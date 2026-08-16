import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="absolute left-[8%] top-4 -z-10 size-72 rounded-full bg-fuchsia-600/30 blur-[120px]" />
        <div className="absolute right-[5%] top-32 -z-10 size-80 rounded-full bg-cyan-400/20 blur-[140px]" />
        <div className="mx-auto max-w-6xl text-center">
          <p className="mx-auto mb-6 w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-black tracking-[0.2em] text-cyan-200">THE BMB LEARNING UNIVERSE</p>
          <h1 className="font-black leading-[0.9] tracking-tighter text-white">Learn now.<br /><span className="animate-darken inline-block whitespace-nowrap font-black">Baad Mein Bataunga.</span></h1>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">A flamboyant launchpad for builders who want sharp skills, strong projects, and a little more swagger in every line of code.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/cohort" className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-7 py-4 font-black text-white shadow-xl shadow-fuchsia-950/60 transition hover:-translate-y-1 hover:shadow-fuchsia-500/30">Explore cohorts →</Link>
            <Link to="/product" className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-black transition hover:bg-white/10">See what we build</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-3 sm:px-8">
        {[["01", "Web Development", "From pixel-perfect interfaces to full-stack confidence."], ["02", "DSA", "Turn problem-solving into your competitive edge."], ["03", "AI / ML", "Build for the future with practical intelligence."]].map(([number, title, copy]) => (
          <article key={number} className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/50 hover:shadow-2xl hover:shadow-fuchsia-950/50">
            <p className="text-sm font-black text-cyan-300">{number}</p><h2 className="mt-10 text-2xl font-black">{title}</h2><p className="mt-3 leading-6 text-white/55">{copy}</p><Link to="/cohort" className="mt-6 inline-block text-sm font-black text-fuchsia-300 transition group-hover:translate-x-1">Get started →</Link>
          </article>
        ))}
      </section>
    </main>
  );
};
export default Home;
