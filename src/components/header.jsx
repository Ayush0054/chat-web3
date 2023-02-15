import React from "react";

function Header() {
  return (
    <div className=" sticky top-0 p-5">
      <div className="   flex justify-center align pt-4 pb-4">
        <h1 className="text-6xl font-semibold text-[#ddd6fe] ">Dchat</h1>
      </div>
      <h2 className="text-2xl font-semibold text-[#ddd6fe]  ">UserName</h2>
    </div>
  );
}

export default Header;
