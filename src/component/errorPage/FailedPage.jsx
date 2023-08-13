import React from "react";
import { Box } from "@mui/material";
import pageNotFound from "../../assets/img/404.png";

function FailedPage() {
  return (
    <Box
      component="img"
      src={pageNotFound}
      alt=""
      sx={{
        margin: "auto",
        display: "block",
        maxWidth: "100%",
      }}
    />
  );
}

export default FailedPage;
