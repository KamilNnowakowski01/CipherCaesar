import { useContext, useEffect, useState } from "react";
import Encryption from "./class/Encryption";
import { Container, Typography } from "@mui/material";
import InPut from "./components/InPut";
import ListCode from "./components/ListCode";
import EditCode from "./components/EditCode/EditCode";
import MyContext from "./MyContext";
import Result from "./components/Result";

function App() {
  let encryption: Encryption;

  const { arrayValueCode, setArrayValueCode } = useContext(MyContext);

  useEffect(() => {
    encryption = Encryption.getInstance();

    // SET RANDOM CODE
    encryption.crpher.encryptAlphabet = encryption.crpher.randomAlphabet();
    setArrayValueCode([...encryption.crpher.encryptAlphabet]);
  }, []);

  return (
    <Container>
      <center>
        <Typography variant="h4" component="h2" paddingBottom={2}>Caesar</Typography>
        <ListCode arrayValue={arrayValueCode} />
        <EditCode />
        <InPut />
        <Result />
      </center>
    </Container>
  );
}

export default App;
