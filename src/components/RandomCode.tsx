import { Box, Button } from "@mui/material";
import Encryption from "../class/Encryption";
import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot";
import { useContext, useEffect } from "react";
import MyContext from "../MyContext";

function RandomCode() {
  let encryption = Encryption.getInstance();
  
  const { arrayValueCode, setArrayValueCode } = useContext(MyContext);

  const handlerRandomCode = () => {
    // SET RANDOM CODE
    encryption.crpher.encryptAlphabet = encryption.crpher.randomAlphabet();
    setArrayValueCode([...encryption.crpher.encryptAlphabet])
    //
  }

  return (
    <Box sx={{p:1, mb:1}}>
      <Button variant="contained" onClick={() => {handlerRandomCode()}}>Random Code</Button>
    </Box>
  );
}

export default RandomCode;
