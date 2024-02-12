import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import MyContext from "../MyContext";
import Encryption from "../class/Encryption";

function InPut() {
  const encryption = Encryption.getInstance();

  const [valueText, setValueText] = useState("");
  const { text, setText } = useContext(MyContext);

  const onChangeText = (value: string) => {
    setValueText(value);
  };

  const onClickEncrypting = () => {
    encryption.text = valueText;
    encryption.encrypted = encryption.crpher.encrypt(encryption.text);
    encryption.decrypted = encryption.crpher.decode(encryption.encrypted);
    setText(valueText);
  };

  const onClickDecrypting = () => {
    encryption.text = valueText;
    encryption.encrypted = encryption.text;
    encryption.decrypted = encryption.crpher.decode(encryption.encrypted);
    setText(valueText);
  };

  return (
    <Box sx={{ p: 1 }}>
      <TextField
        id="outlined-textarea"
        label="Provide the content to be encrypted"
        placeholder="Provide the content to be encrypted"
        multiline
        sx={{ width: "600px" }}
        onChange={(e) => onChangeText(e.target.value)}
        value={valueText}
      />
      <div>
      <Button variant="contained" onClick={onClickEncrypting} sx={{ml: 1, mr: 1, mt: 1}}>
        Encrypting
      </Button>
      <Button variant="contained" onClick={onClickDecrypting} sx={{mt: 1}}>
        Decrypting
      </Button>
      </div>
    </Box>
  );
}
export default InPut;
