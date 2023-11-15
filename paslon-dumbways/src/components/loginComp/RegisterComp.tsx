import { Link } from "react-router-dom";

export const RegisterComp = () => {
  return (
    <>
      <div className="bg-slate-900 h-screen flex justify-center items-center">
        <div className="w-1/3 h-auto bg-white rounded-2xl p-8 mt-8 mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-slate-900">
            REGISTER
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Your address"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Male or Female"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Your username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border-2 border-black rounded-md"
                placeholder="Your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900"
            >
              Register
            </button>
          </form>
          <p className="text-gray-700 mt-3 flex">
            Already have an account?
            <Link to="/login">
              <p className="text-slate-800 hover:underline ml-1 font-bold">
                Login
              </p>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
