import { Link, Outlet } from "react-router-dom"

const Cohort = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center gap-16 text-white">
        <Link
          className="text-xl font-semibold"
          to="/Cohort/webdevelopment"
        >
          Web Development Cohort
        </Link>

        <Link
          className="text-xl font-semibold"
          to="/Cohort/dsa"
        >
          DSA Cohort
        </Link>

        <Link
          className="text-xl font-semibold"
          to="/Cohort/aiml"
        >
          AI/ML Cohort
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
export default Cohort;