import { useState } from "react";
import MyContext from "./MyContext";

function MyProvider({ children }: any) {
  const [arrayValueCode, setArrayValueCode] = useState<string[]>([]);
  const [indexCode, setIndexCode] = useState<string>("");
  const [valueCode, setValueCode] = useState<string>("");
  const [text, setText] = useState<string>("");

  return (
    <MyContext.Provider
      value={{
        text,
        setText,
        indexCode,
        setIndexCode,
        valueCode,
        setValueCode,
        arrayValueCode,
        setArrayValueCode,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
