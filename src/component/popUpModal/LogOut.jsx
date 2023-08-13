import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { CustomDialogueComponent } from "../modal/Modal";
import { RedBtn, primaryBtn } from "../../assets/style/Btn";

function LogOut({ isOpen, onClose }) {
  const handelLogout = () => {
    localStorage.clear();
    onClose();
    window.location.reload();
  };
  return (
    <CustomDialogueComponent open={isOpen} onClose={onClose} label="Logout">
      <Typography component="p" py={1} textAlign="center">
        The action you are going to perform is irreversible. Please confirm! Are
        you sure that you want to logout?
      </Typography>
      <Box
        py={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="outlined"
          sx={{ ...RedBtn, px: 6, mr: 1 }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          type="submit"
          sx={{ ...primaryBtn, px: 3, textTransform: "none" }}
          onClick={handelLogout}
        >
          Yes log me out
        </Button>
      </Box>
    </CustomDialogueComponent>
  );
}

export default LogOut;
