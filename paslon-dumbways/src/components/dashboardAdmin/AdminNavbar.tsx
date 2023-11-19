import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

export const AdminNavbar = () => {
  return (
    <>
      <div className="flex bg-slate-800 justify-center">
        <div className="flex items-center justify-between py-3 w-4/5">
          <div className="flex gap-4">
            <img src={logo} alt="Dumbways" className="h-10" />
            <h1 className="uppercase text-white text-2xl font-bold">
              <Link to="/admin/dashboard">
                <span>Dashboard Pemilu Dumbways.ID</span>
              </Link>
            </h1>
          </div>
          <div className="flex gap-4 items-baseline">
            <p className="text-white">
              <Link to="/admin/add-partai">
                <span>Partai</span>
              </Link>
            </p>
            <span className="text-white">|</span>
            <p className="text-white">
              <Link to="/admin/add-paslon">
                <span>Paslon</span>
              </Link>
            </p>
            <p className="bg-white rounded-full px-2 py-1 font-bold">SB</p>
          </div>
        </div>
      </div>
    </>
  );
};
