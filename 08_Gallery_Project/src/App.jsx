import axios from "axios";
import { useEffect, useState } from "react";
import Pictures from "./components/Pictures";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=20`);
        setUserData(response.data);
      } catch {
        setError("The gallery is taking a coffee break. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page]);

  const changePage = (nextPage) => {
    if (nextPage < 1 || nextPage === page) return;
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const visiblePages = Array.from({ length: 5 }, (_, i) => Math.max(1, page - 2) + i);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080811] text-white selection:bg-fuchsia-500 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"><div className="absolute -left-24 -top-24 size-80 rounded-full bg-fuchsia-600/25 blur-[120px]" /><div className="absolute -right-24 top-1/3 size-96 rounded-full bg-cyan-500/20 blur-[140px]" /></div>
      <header className="relative z-10 border-b border-white/10 bg-[#080811]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#gallery" className="group flex items-center gap-3" aria-label="Luma Gallery home">
            <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500 text-xl font-black text-[#080811] shadow-lg shadow-fuchsia-500/25 transition group-hover:rotate-12">✦</span>
            <span><span className="block text-lg font-black tracking-tight sm:text-xl">LUMA<span className="text-fuchsia-400">/</span>GALLERY</span><span className="hidden text-[10px] font-bold tracking-[0.24em] text-white/45 sm:block">FRAME THE EXTRAORDINARY</span></span>
          </a>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/60">20 fresh frames / page</span>
        </div>
      </header>
      <main id="gallery" className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 sm:pt-14">
        <section className="mb-10 max-w-3xl"><p className="mb-3 text-xs font-black tracking-[0.24em] text-cyan-300">CURATED FROM EVERYWHERE</p><h1 className="text-4xl font-black leading-none tracking-tight sm:text-6xl">A little louder.<br /><span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">A lot more beautiful.</span></h1><p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">A living collection of visual sparks. Open any photograph to discover the artist and the original full-size frame.</p></section>
        {isLoading && <div className="grid min-h-80 place-items-center rounded-3xl border border-white/10 bg-white/[0.03]"><div className="text-center"><div className="mx-auto size-10 animate-spin rounded-full border-4 border-fuchsia-400/20 border-t-fuchsia-400" /><p className="mt-4 text-sm font-bold text-white/60">Developing the next frame...</p></div></div>}
        {error && <div className="rounded-3xl border border-rose-400/30 bg-rose-400/10 p-8 text-center"><p className="font-bold text-rose-100">{error}</p><button onClick={() => changePage(page + 1)} className="mt-4 rounded-xl bg-rose-400 px-4 py-2 text-sm font-black text-[#16070a]">Try again</button></div>}
        {!isLoading && !error && <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">{userData.map((elem, index) => <Pictures key={elem.id} elem={elem} index={index} />)}</div>}
        <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Gallery pages">
          <button type="button" onClick={() => changePage(page - 1)} disabled={page === 1} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-black transition enabled:hover:border-cyan-300 enabled:hover:bg-cyan-300 enabled:hover:text-[#080811] disabled:cursor-not-allowed disabled:opacity-35">← <span className="hidden sm:inline">Previous</span></button>
          {visiblePages.map((number) => <button type="button" key={number} onClick={() => changePage(number)} aria-current={number === page ? "page" : undefined} className={`grid size-10 place-items-center rounded-xl text-sm font-black transition ${number === page ? "bg-gradient-to-br from-cyan-300 to-fuchsia-500 text-[#080811] shadow-lg shadow-fuchsia-500/25" : "border border-white/10 bg-white/5 text-white/65 hover:bg-white/15 hover:text-white"}`}>{number}</button>)}
          <button type="button" onClick={() => changePage(page + 1)} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-black transition hover:border-fuchsia-400 hover:bg-fuchsia-500 hover:text-white"><span className="hidden sm:inline">Next </span>→</button>
        </nav>
      </main>
    </div>
  );
};

export default App;
