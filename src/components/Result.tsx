import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import Encryption from "../class/Encryption";
import { useContext, useEffect } from "react";
import MyContext from "../MyContext";

function Result() {
  const { text, setText } = useContext(MyContext);
  const encryption = Encryption.getInstance();

  useEffect(() => {
  }, [text]);

  return (
    <>
      <Box>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
          margin={0}
          maxWidth={700}
          paddingBottom={3}
        >
          <Grid item>
            <Paper sx={{ p: 2, pt: 1 }} elevation={3}>
              <Typography variant="h6">encrypted:</Typography>
              <Typography variant="subtitle1">{encryption.encrypted}</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper sx={{ p: 2 }} elevation={3}>
              <Typography variant="h6">decrypted:</Typography>
              <Typography variant="subtitle1">{encryption.decrypted}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Result;
