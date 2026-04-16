import HandleCall from "@/components/allToggleBtn/HandleCall";
import HandleText from "@/components/allToggleBtn/HandleText";
import HandleVedio from "@/components/allToggleBtn/HandleVedio";
import Image from "next/image";

import { FaArchive } from "react-icons/fa";
import { FcVideoCall } from "react-icons/fc";
import { MdAddCall, MdDelete, MdTextsms } from "react-icons/md";

const frinendDetails = async ({ params }) => {
  const { id } = await params;
  // console.log(data);

  const res = await fetch("http://localhost:3000/Data.json");
  const friends = await res.json();
  // console.log(friends);

  const friend = friends.find((friend) => friend.id === parseInt(id));
  // console.log(friend);

  return (
    <div className="max-w-[60%] my-10 mx-auto">
      <div className="flex gap-10 justify-between items-center">
        <div className="card bg-base-200 text-center shadow-sm w-88 pt-2">
          <figure className="w-15 h-15 rounded-full mx-auto">
            <Image
              src={friend.picture}
              width="1000"
              height="100"
              className="w-full h-full"
              alt="picture of john"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-black font-bold text-2xl">
              {friend.name}
            </h2>
            <div className="">{friend.days_since_contact}</div>

            <div className="text-center flex flex-col gap-6 justify-center items-center">
              <div className="badge bg-[#CBFADB] text-black">{friend.tags}</div>
              <div
                className={`badge bg-[#EF4444] text-white ${friend.status === "active" ? "bg-red-500" : friend.status === "overdue" ? "bg-green-500" : ""}`}
              >
                {friend.status}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="w-full py-3 btn">Snooze 2 weeks</div>
            <div className="w-full py-3 btn">
              <FaArchive /> Archive
            </div>
            <div className="w-full py-3 btn text-red-500">
              <MdDelete />
              Delete
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-6 justify-between items-center">
            <div className="bg-base-200 text-center p-5 rounded-xl">
              <h2 className="text-black font-semibold text-2xl">10</h2>
              <p className="text-[#64748B]">Days Since Contact</p>
            </div>
            <div className="bg-base-200 text-center p-5 rounded-xl">
              <h2 className="text-black font-semibold text-2xl">60</h2>
              <p className="text-[#64748B]">Goal (Days)</p>
            </div>
            <div className="bg-base-200 text-center p-5 rounded-xl">
              <h2 className="text-black font-semibold text-2xl">
                {friend.next_due_date}
              </h2>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>
          <div className="w-full bg-base-200 p-6 flex justify-between rounded-xl mt-5">
            <div>
              <h2 className="text-black font-semibold text-2xl">
                Relationship Goal
              </h2>
              <h3>
                <span className="text-[#64748B]">Connect every </span>
                {friend.days_since_contact} day ago
              </h3>
            </div>
            <div>
              <button className="btn">Edit</button>
            </div>
          </div>
          <div className="bg-base-200 w-full p-5 mt-5 rounded-xl">
            <h3 className="text-[#244D3F] font-medium text-2xl">
              Quick Check-In
            </h3>
            <div className="flex justify-between mt-4">
              <div>
                <HandleCall friend={friend}></HandleCall>
              </div>
              <div>
                <HandleText friend={friend}></HandleText>
              
              </div>
              <div>
                <HandleVedio friend={friend}></HandleVedio>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default frinendDetails;
