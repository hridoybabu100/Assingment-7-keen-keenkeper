import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ data }) => {
  return (
    <Link href={`/friendId/${data.id}`} className="card bg-base-100 text-center shadow-sm p-6">
      <figure className="w-15 h-15 rounded-full mx-auto">
        <Image src={data.picture} width='1000' height='100' className="w-full h-full" alt="picture of john" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-black font-bold text-2xl">
          {data.name}
        </h2>
          <div className="">{data.days_since_contact}</div>
       
        <div className="text-center flex flex-col gap-6 justify-center items-center">
          <div className="badge bg-[#CBFADB] text-black">{data.tags}</div>
          <div className="badge bg-[#EF4444] text-white ">{data.status}</div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
