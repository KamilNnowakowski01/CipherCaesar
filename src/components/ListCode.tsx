import { Alert, Box, Grid } from "@mui/material";
import ItemCode from "./ItemCode";
import alphabet from "../enum/alphabet";
import findMissingElements from "../libs/findMissingElements";

interface ItemCodeProps {
  arrayLetter?: string[];
  arrayValue: string[];
}

function ListCode({ arrayValue, arrayLetter = alphabet }: ItemCodeProps) {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ maxWidth: "440px" }}
      >
        {arrayLetter.map((item, index) => (
          <ItemCode valueLabel={item} valueModify={arrayValue[index]} />
        ))}
      </Grid>
      <Box sx={{ m: 2 }} maxWidth={600}>
        {!findMissingElements(arrayValue).length ? null : (
          <Alert severity="error">
            You must use all the letters!
            <br /> Missing elements:
            {" " + findMissingElements(arrayValue).join(", ")}
          </Alert>
        )}
      </Box>
    </>
  );
}

export default ListCode;
