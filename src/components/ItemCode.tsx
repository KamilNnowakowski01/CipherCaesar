import { Grid, Paper } from "@mui/material";

interface ItemCodeProps {
  valueLabel: string;
  valueModify?: string;
}

function ItemCode({valueLabel, valueModify = "_"}: ItemCodeProps) {
  return (
    <>
      <Grid item>
        <Paper sx={{ p: 2,  minWidth: 60, textAlign: "center"}} elevation={3}>
          {valueLabel} &#10132; {valueModify}
        </Paper>
      </Grid>
    </>
  );
}

export default ItemCode;
