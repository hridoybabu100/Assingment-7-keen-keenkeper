

import FriendCard from "../UI/FriendCard/FriendCard";


const Friends = async () => {
   const res = await fetch('http://localhost:3000/Data.json');
   const data = await res.json();
   console.log(data);
   
    
    return (
        <div className="max-w-[70%] mx-auto border-t-black border-t py-4 mb-6">
            <h1 className="text-black text-3xl font-bold">All friends : {data.length}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 pt-6">
                {
                    data.map((data) => <FriendCard key={data.id} data={data}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default Friends;