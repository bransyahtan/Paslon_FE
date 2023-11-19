import paslon3 from "../../assets/images/paslon3.jpg";

export const FormPaslon = () => {
  return (
    <>
      <div className="flex justify-center gap-10">
        <div className="">
          <img
            src={paslon3}
            alt="Foto Profil"
            className="w-80 h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-96">
          <form>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-3 py-2 border-2 border-black rounded-md h-14"
                placeholder="Your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nomor Urut
              </label>
              <input
                type="text"
                id="Number"
                name="Number"
                className="w-full px-3 py-2 border-2 border-black rounded-md h-14"
                placeholder="Your Number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="visiMisi"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Visi-Misi
              </label>
              <textarea
                id="visiMisi"
                name="visiMisi"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Visi dan Misi Anda"
                cols={5}
                style={{ resize: "none" }}
              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900 h-12"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};
