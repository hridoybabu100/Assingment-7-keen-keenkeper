'use client'
import React, { createContext, useState } from 'react';


export const CallContext = createContext();

const CallProvider = ({children}) => {


    const [call,setcall] = useState([]);
    const [text, setText] = useState([]);
    const [vedio, setVedio] = useState([]);


    const data = {
        name : 'hridoy Akanda',
        age : 23,
       call, 
       setcall,
       text,
       setText,
       vedio,
       setVedio,
    }
    return (
       <CallContext.Provider value={data}>{children}</CallContext.Provider>
    );
};

export default CallProvider;