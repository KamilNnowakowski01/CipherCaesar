import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import alphabet from "../../enum/alphabet";
import { useContext, useState } from "react";
import MyContext from "../../MyContext";

function ValueEdit() {

  const { valueCode, setValueCode } = useContext(MyContext);

  const handleChangeValue = (event: SelectChangeEvent) => {
    setValueCode(event.target.value as string);
  };

  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <InputLabel>Value</InputLabel>

        <Select label={`Value`} value={valueCode} onChange={handleChangeValue}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {alphabet.map((letter) => (
            <MenuItem value={letter}>{letter}</MenuItem>
          ))}
        </Select>

        <FormHelperText>This value will replace the letter</FormHelperText>
      </FormControl>
    </>
  );
}

export default ValueEdit;
