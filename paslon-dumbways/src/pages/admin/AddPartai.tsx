import { FormPartai } from "../../components/addPaslonPartai/FormPartai";
import { AdminNavbar } from "../../components/dashboardAdmin/AdminNavbar";

export const AddPartai = () => {
  return (
    <>
      <AdminNavbar />
      <h1 className="uppercase text-5xl font-bold text-center my-10">
        add partai
      </h1>
      <FormPartai />
    </>
  );
};
