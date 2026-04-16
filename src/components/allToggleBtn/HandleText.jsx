'use client'
import { CallContext } from "@/Context/CallProvider";
import React, { useContext } from "react";
import { MdTextsms } from "react-icons/md";
import { toast } from "react-toastify";

const HandleText = ({ friend }) => {
  const {text, setText} = useContext(CallContext);
  

  const handleTextBtn = () => {
    setText([...text, friend]);
    toast.success(`Massaging with ${friend.name}`);
  };
  return (
    <div>
      <button onClick={handleTextBtn} className="btn py-8 px-10 w-full flex flex-col">
        <span className="text-2xl">
          <MdTextsms />
        </span>
        <p>Text</p>
      </button>
    </div>
  );
};

export default HandleText;
