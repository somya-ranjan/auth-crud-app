import React from "react";
import { CircularProgress, Stack } from "@mui/material";

function Loader() {
  return (
    <Stack alignItems="center">
      <CircularProgress color="success" />
    </Stack>
  );
}

export default Loader;
