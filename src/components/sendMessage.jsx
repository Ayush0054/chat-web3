import React from "react";

function SendMessage() {
  return (
    <form
      action=""
      className="flex fixed bottom-10   w-[100%]  px-6 py-4 z-50 "
    >
      <input
        type="text"
        placeholder="write some thing here"
        className=" outline-none p-3 rounded-xl mr-5  drop-shadow-lg  bg-gray-800 text-white w-11/12 "
      />
      <button className=" font-bold text-[#7c3aed] ">Send</button>
    </form>
  );
}

export default SendMessage;
