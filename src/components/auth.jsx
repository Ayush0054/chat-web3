import React from "react";

function Auth() {
  return (
    <div className="min-h-screen bg-gray-800 py-6 flex flex-col text-center justify-center sm:py-12">
      <div className=" mb-4 ">
        <h1 className=" text-8xl font-semibold text-[#ddd6fe] ">Dchat</h1>
        <h1 className=" text-2xl font-semibold  text-[#ddd6fe]">
          A Web3 Decentralized Chat application{" "}
        </h1>
      </div>
      <div className="relative py-3 sm:max-w2xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#a78bfa] to-[#4c1d95] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-[#ddd6fe]  shadow-lg  sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <button className="bg-[#360a86] text-white rounded-md px-3 py-1">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
