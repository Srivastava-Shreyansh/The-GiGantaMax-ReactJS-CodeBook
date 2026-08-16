const Pictures = ({ elem, index }) => {
  return (
    <a href={elem.url} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/60 hover:shadow-fuchsia-950/40">
      <div className="aspect-[4/5] overflow-hidden"><img className="size-full object-cover transition duration-500 group-hover:scale-110" src={elem.download_url} alt={`Photograph by ${elem.author}`} loading={index < 5 ? "eager" : "lazy"} /></div>
      <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/95 via-black/55 to-transparent px-3 pb-3 pt-12 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"><p className="truncate text-sm font-black">{elem.author}</p><p className="mt-0.5 text-[10px] font-bold tracking-wider text-cyan-200">OPEN ORIGINAL ↗</p></div>
      <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2 py-1 text-[10px] font-black text-white/80 backdrop-blur">#{String(index + 1).padStart(2, "0")}</span>
    </a>
  );
};

export default Pictures;
