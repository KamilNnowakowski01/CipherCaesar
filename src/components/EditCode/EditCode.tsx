import { Box } from "@mui/material";
import RandomCode from "../RandomCode";
import IndexEdit from "./IndexEdit";
import ValueEdit from "./ValueEdit";
import SaveEdit from "./SaveEdit";

function EditCode() {
  return (
    <>
      <RandomCode />
      <Box>
        <IndexEdit />
        <ValueEdit />
        <SaveEdit />
      </Box>
    </>
  );
}

export default EditCode;
