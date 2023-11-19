import { FormPaslon } from "../../components/addPaslonPartai/FormPaslon";
import { AdminNavbar } from "../../components/dashboardAdmin/AdminNavbar";

export const AddPaslon = () => {
  return (
    <>
      <AdminNavbar />
      <h1 className="uppercase text-5xl font-bold text-center my-10">
        add paslon
      </h1>
      <FormPaslon />
    </>
  );
};
