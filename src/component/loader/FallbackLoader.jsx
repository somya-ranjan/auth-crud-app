import React from "react";
import { Box } from "@mui/material";
import { FALL_BACK_LOADER } from "../../assets/img";

function FallBackLoader() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <img src={FALL_BACK_LOADER} alt="fall back loader" />
    </Box>
  );
}

export default FallBackLoader;
