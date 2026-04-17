"use client"

import { CallContext } from "@/Context/CallProvider";
import Image from "next/image";
import { useContext } from "react";

import CallImg from "../../image/call.png";
import TextImg from "../../image/text.png";
import VedioImg from "../../image/video.png"



const TimeLinepage = () => {
  const { call, setcall } = useContext(CallContext);
  const { text, setText } = useContext(CallContext);
  const { vedio } = useContext(CallContext);


  return (
    <div className="max-w-[90%] lg:max-w-[70%] mx-auto my-10">
      <h2 className="text-3xl text-black font-bold">Timeline </h2>

      {call.length === 0 ? (
        <div className="bg-base-300 p-15 lg:p-30 rounded-2xl mt-6 text-black text-4xl font-bold justify-center flex items-center">
          Not Data Found!
        </div>
      ) : (
        <div className="mt-6">
          {call.map((item) => (
            <div
              key={item.id}
              className="bg-base-300 p-6 rounded-xl mb-5 flex gap-4"
            >
              <Image
                src={CallImg}
                width={30}
                height={10}
                alt="call img"
              ></Image>
              <div>
                <h2>
                  <span className="text-2xl text-black font-bold">
                    Calling with
                  </span>{" "}
                  {item.name}
                </h2>
                <p className="text-[#64748B]">March {item.next_due_date}</p>
              </div>
            </div>
          ))}
          <div className="mt-6">
            {text.map((item) => (
              <div
                key={item.id}
                className="bg-base-300 p-6 rounded-xl mb-5 flex gap-4"
              >
                <Image
                  src={TextImg}
                  width={30}
                  height={10}
                  alt="call img"
                ></Image>
                <div>
                  <h2>
                    <span className="text-2xl text-black font-bold">
                      Messaging with
                    </span>{" "}
                    {item.name}
                  </h2>
                  <p className="text-[#64748B]">March {item.next_due_date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            {vedio.map((item) => (
              <div
                key={item.id}
                className="bg-base-300 p-6 rounded-xl mb-5 flex gap-4"
              >
                <Image
                  src={VedioImg}
                  width={30}
                  height={10}
                  alt="call img"
                ></Image>
                <div>
                  <h2>
                    <span className="text-2xl text-black font-bold">
                      Vedio Calling with
                    </span>{" "}
                    {item.name}
                  </h2>
                  <p className="text-[#64748B]">March {item.next_due_date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeLinepage;
