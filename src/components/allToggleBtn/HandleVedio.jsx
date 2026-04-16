'use client'
import { CallContext } from '@/Context/CallProvider';
import { useContext } from 'react';
import { FcVideoCall } from 'react-icons/fc';
import { toast } from 'react-toastify';

const HandleVedio = ({friend}) => {

    const {vedio, setVedio} = useContext(CallContext);


     const handleVedioBtn = () => {
        setVedio([...vedio, friend]);
        toast.success(`Vedio Calling with ${friend.name}`);
      };


    return (
        <div>
           <button onClick={handleVedioBtn} className="btn py-8 px-10 w-full flex flex-col">
                  <span className="text-2xl">
                    <FcVideoCall />
                  </span>
                  <p>Vedio</p>
                </button>
        </div>
    );
};

export default HandleVedio;