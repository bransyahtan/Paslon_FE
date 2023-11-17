import { Link } from "react-router-dom";

export const LoginComp = () => {
  return (
    <>
      <div className="bg-slate-900 h-screen flex justify-center items-center">
        <div className="w-96 h-auto bg-white rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-4 text-center text-slate-900">
            LOGIN
          </h1>
          <form>
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
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-slate-800 hover:underline">
                  Forgot Password?
                </p>
              </div>
              <div>
                <Link to="/register">
                  <p className="text-slate-800 hover:underline">Register</p>
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
