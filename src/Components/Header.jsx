import React, { useState } from "react";
import logo from "../../src/assets/Images/google-hangouts.png";
import { MdLogout } from "react-icons/md";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = getAuth();
  const navigate=useNavigate()
  const signout=()=>{
    auth.signOut()
    console.log("out")
    navigate("/")
  

  }
  return (
    <div className="w-full h-16 mt-5">
      <div className="flex items-center justify-between p-5 cursor-pointer">
        <div onClick={()=>navigate("/content/home")} className="flex gap-3 items-center">
          <div>
            <img className="h-10 " src={logo} />
          </div>
          <div className="flex">
            {" "}
            <p className="text-xl text-white">Insta</p>
            <p className="text-xl text-yellow-300">Snap</p>
            <p className="text-xl text-white">Gram</p>
          </div>
        </div>
        <div className="mr-6 text-yellow-500 text-xl relative">
          <MdLogout onClick={() => setIsOpen(!isOpen)} />
          {isOpen ? (
            <div className="bg-white absolute text-black text-sm mt-2 rounded-sm ">
              <ul className="bg white w-14">
                <li className="cursor-pointer" onClick={signout} >Log Out</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
