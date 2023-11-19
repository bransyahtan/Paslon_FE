import paslon3 from "../../assets/images/paslon3.jpg";

export const ListPartaiPart = () => {
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
                Ketua Umum
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Visi & Misi
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Alamat
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="py-1 px-4 border border-t-2 border-black">1</td>
              <td className="py-2 px-4 border border-t-2 border-black">
                <img src={paslon3} alt="Foto Kandidat" className="w-96" />
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Supriadi Manalarang Anto Jakawara
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Menciptakan Lingkungan Judi Yang damai dan tentram
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Pantai Agung Selatan
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
