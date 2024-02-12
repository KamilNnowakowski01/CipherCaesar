import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import alphabet from "../../enum/alphabet";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../MyContext";

function IndexEdit() {
  const { indexCode, setIndexCode } = useContext(MyContext);

  const handleChangeLetter = (event: SelectChangeEvent) => {
    setIndexCode(event.target.value as string);
  };

  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <InputLabel>Letter</InputLabel>

        <Select
          label={`Letter`}
          value={indexCode}
          onChange={handleChangeLetter}
        >
          <MenuItem value={""}>
            <em>None</em>
          </MenuItem>
          {alphabet.map((letter) => (
            <MenuItem value={letter}>{letter}</MenuItem>
          ))}
        </Select>

        <FormHelperText>This letter will replaced</FormHelperText>
      </FormControl>
    </>
  );
}

export default IndexEdit;
