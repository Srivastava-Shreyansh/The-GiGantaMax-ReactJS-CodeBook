import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 pt-5 sm:px-8">
      <button
        onClick={() => navigate("/")}
        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70 transition hover:bg-white/10 hover:text-white active:scale-95"
      >
        Back to Home
      </button>

      <button
        onClick={() => navigate(-1)}
        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70 transition hover:bg-white/10 hover:text-white active:scale-95"
        >
        Back
      </button>

      <button
        onClick={() => navigate(+1)}
        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70 transition hover:bg-white/10 hover:text-white active:scale-95"
        >
        Next
      </button>
    </div>
  );
};

export default Navigation;
