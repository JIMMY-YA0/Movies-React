import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-full">
        <img
          className=" sm:block fixed opacity-60 w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />

        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-4xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-5 ">
                <input
                  className="p-3 my-2 bg-gray-600 rounded "
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-600 rounded "
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold block">Sign Up</button>
                <div className="flex justify-between items-center text-gray-600 text-sm">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Nedd Help?</p>
                </div>
                <p className="py-8 text-gray-600 ">
                  Already subscribe BlackScreen?{" "}
                  <Link className="text-white" to="/login ">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
