import React, { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { BRAND_LOGO } from "../../assets/img";
import LogOut from "../popUpModal/LogOut";

function Navbar() {
  // // initial state
  const tokenPresent = localStorage.getItem("authToken");

  // // local state
  const [openLogOutModal, setOpenLogOutModal] = useState(false);
  return (
    <>
      <Grid
        container
        component={Paper}
        borderRadius="0"
        py={1}
        sx={{
          paddingX: {
            xs: "8px",
            sm: "25px",
          },
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={BRAND_LOGO}
              alt="brand logo"
              style={{ width: "85px" }}
              className="cp"
            />
            {tokenPresent && (
              <LogoutOutlinedIcon
                className="cp"
                onClick={() => setOpenLogOutModal(true)}
              />
            )}
          </Box>
        </Grid>
      </Grid>

      <LogOut
        isOpen={openLogOutModal}
        onClose={() => setOpenLogOutModal(false)}
      />
    </>
  );
}

export default Navbar;
