export const DashboardList = () => {
  return (
    <>
      <div className="bg-slate-800 w-full h-2/3 mt-48 pb-20">
        <h1 className="text-center font-bold text-5xl pt-28 pb-14 text-white">
          LIST VOTER
        </h1>
        {/* Table */}
        <div className="flex justify-center">
          <table className="w-3/5">
            <thead className="bg-slate-600 text-white">
              <tr>
                <th className="py-1 px-4 border border-t-2 border-black">No</th>
                <th className="py-2 px-4 border border-t-2 border-black">
                  Nama Lengkap
                </th>
                <th className="py-2 px-4 border border-t-2 border-black">
                  Alamat
                </th>
                <th className="py-2 px-4 border border-t-2 border-black">
                  Jenis Kelamin
                </th>
                <th className="py-2 px-4 border border-t-2 border-black">
                  Paslon
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="py-1 px-4 border border-t-2 border-black">1</td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Supriadi Manalarang
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Jl. Aryaningsih No.7
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Laki-laki
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Gita Gutawa
                </td>
              </tr>
              <tr>
                <td className="py-1 px-4 border border-t-2 border-black">2</td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Gracelia Suherman
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Jl. Ayuningsih No.199
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Perempuan
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Megatron Dragon Lagoona
                </td>
              </tr>
              <tr>
                <td className="py-1 px-4 border border-t-2 border-black">2</td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Muhammad Samsudin Perindo
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Jl. Kampung Dadap Lr. Kilimanjaro
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Laki-Laki
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Gita Gutawa
                </td>
              </tr>
              <tr>
                <td className="py-1 px-4 border border-t-2 border-black">3</td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Stephaniezki Azemermer
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Jl. Helvetia Selatan No.29
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Perempuan
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Surya Garpit
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-3/5 mx-auto flex justify-center mt-10">
          <h2 className="mr-auto uppercase font-bold text-2xl text-white">
            Total Suara terkumpul : 100.000 votes
          </h2>
        </div>
      </div>
    </>
  );
};
