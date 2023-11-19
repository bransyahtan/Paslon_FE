import paslon2 from "../../assets/images/paslon2.jpg";

export const ListPaslonPart = () => {
  return (
    <>
      <div className="flex justify-center my-24">
        <table className="w-3/4 text-center">
          <thead className="bg-slate-600 text-white">
            <tr>
              <th className="py-1 px-4 border border-t-2 border-black">No</th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Photo
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Nama Lengkap
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Visi & Misi
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Koalisi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="py-1 px-4 border border-t-2 border-black">1</td>
              <td className="py-2 px-4 border border-t-2 border-black">
                <img src={paslon2} alt="Foto Kandidat" className="w-96" />
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Michael Anto bin Suherman Jasakarawa
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Menciptakan Lingkungan Judi Yang damai dan tentram
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Partai Jawa Sentosa, Partai Sumatera Indah, Partai Jalan Santaii
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
