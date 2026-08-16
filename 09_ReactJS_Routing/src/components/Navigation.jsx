import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cyan-700 px-10 py-5 flex items-center gap-4">
      <button
        onClick={() => navigate("/")}
        className="bg-gray-800 px-8 py-4 font-bold active:scale-95"
      >
        Back to Home
      </button>

      <button
        onClick={() => navigate(-1)}
        className="bg-gray-800 px-8 py-4 font-bold active:scale-95"
        >
        Back
      </button>

      <button
        onClick={() => navigate(+1)}
        className="bg-gray-800 px-8 py-4 font-bold active:scale-95"
        >
        Next
      </button>
    </div>
  );
};

export default Navigation;