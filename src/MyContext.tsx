import React, { Dispatch, SetStateAction } from "react";

interface MyContextType {
  text: string;
  setText: (newValue: string) => void;
  indexCode: string;
  setIndexCode: (newValue: string) => void;
  valueCode: string;
  setValueCode: (newValue: string) => void;
  arrayValueCode: string[];
  setArrayValueCode: Dispatch<SetStateAction<string[]>>;
}

const MyContext = React.createContext<MyContextType>({
  text: "",
  setText: () => {},
  indexCode: "",
  setIndexCode: () => {},
  valueCode: "",
  setValueCode: () => {},
  arrayValueCode: [],
  setArrayValueCode: () => {},
});

export default MyContext;
