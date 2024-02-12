import { Button } from "@mui/material";
import changeCodeArray from "../../libs/changeCodeArray";
import MyContext from "../../MyContext";
import { useContext } from "react";
import Encryption from "../../class/Encryption";

function SaveEdit() {

  let encryption = Encryption.getInstance();

  const { arrayValueCode, setArrayValueCode } = useContext(MyContext);
  const { indexCode, setIndexCode } = useContext(MyContext);
  const { valueCode, setValueCode } = useContext(MyContext);

  const handleSave = () => {
    let change = changeCodeArray(arrayValueCode, indexCode, valueCode);
    encryption.crpher.encryptAlphabet = change
    setArrayValueCode([...change]);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSave} sx={{ml: 2, mb: 2}}>
        Save Edit
      </Button>
    </div>
  );
}

export default SaveEdit;
