import React from "react";
import {BiSend} from "react-icons/bi"
function SendMessage() {

  //function for the sending the messages 
  async function sendOnClick(e){
    preventDefault(e)
  }
  return (
    <div className="object-fit ">

    <form
      action=""
      className="flex abosolute right-0 fixed bottom-10 w-full px-6 py-4 z-50 space-x-4 "
      >
      <input
        type="text"
        placeholder="write some thing here"
        className=" outline-none p-3 rounded-xl mr-4  drop-shadow-lg  bg-gray-800 text-white w-4/5 lg:w-11/12 "
        />
      <button className=" font-bold text-[#7c3aed] hover:bg-[#7c3aed] p-3 rounded-md hover:text-gray-800 ">
        <BiSend className="text-3xl"/>   
      </button>
    </form>
    </div>
  );
}

export default SendMessage;
