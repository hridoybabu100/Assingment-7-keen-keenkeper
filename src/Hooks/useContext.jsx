import React, { useState } from "react";

const useContext = () => {
  const [call, setcall] = useState([]);
  const [text, setText] = useState([]);
  const [vedio, setVedio] = useState([]);

  return { call, setcall, text, setText, vedio, setVedio };
};

export default useContext;
