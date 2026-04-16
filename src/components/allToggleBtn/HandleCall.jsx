"use client";

import { CallContext } from "@/Context/CallProvider";
import { useContext } from "react";
import { MdAddCall } from "react-icons/md";
import { toast } from "react-toastify";

const HandleCall = ({friend}) => {

  
  
  const {call, setcall} = useContext(CallContext);
 
  
  const handleCallBtn = () => {
    // console.log('call Now');
    setcall([...call, friend]);
    toast.success(`Meet Up ${friend.name} with calling`)
    
  };
  console.log(call);
  

  return (
    <div>
      <button onClick={handleCallBtn} className="btn py-8 px-10  flex flex-col">
        <span className="text-2xl">
          <MdAddCall />
        </span>
        <p>Call</p>
      </button>
    </div>
  );
};

export default HandleCall;
