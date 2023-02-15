import React from "react";
import EachMessage from "./eachMessage";
import SendMessage from "./sendMessage";

function Messages() {
  return (
    <div className=" ">
      <div className="  bg-gray-900 m-10 sticky drop-shadow-lg rounded-lg pb-96 p-5 max-h-screen z-50 ">
        <div className=" overflow-y-scroll object-contain scrollbar-hide ">
          <div className=" p-5 object-contain  max-h-96 ">
            <EachMessage />
            <SendMessage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
