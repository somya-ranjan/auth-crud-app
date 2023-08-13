import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab/";
import { CustomDialogueComponent } from "../modal/Modal";
import { RedBtn, primaryBtn } from "../../assets/style/Btn";
import { useBlockUnblockUserMutation } from "../../store/services";
import toaster from "../../utility/toaster";

function BlockUnBlockUser({ isOpen, onClose, userData }) {
  // // redux state
  const [blockUnBlockUser, { isLoading }] = useBlockUnblockUserMutation();
  const apiData = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    status: userData.status === "active" ? "blocked" : "active",
  };

  // // function
  const handelBlockUnBlockUser = async () => {
    await blockUnBlockUser({ currentId: userData.id, apiData });
    toaster.success(
      `User ${
        userData.status === "active" ? "blocked" : "unblocked"
      } completed successfully`
    );
    onClose();
  };
  return (
    <CustomDialogueComponent
      open={isOpen}
      onClose={onClose}
      label={userData.status === "active" ? "Block User" : "Unblock User"}
    >
      <Typography py={1} textAlign="center">
        Do you really want to{" "}
        {userData.status === "active" ? "block this user" : "unblock this user"}
        ? <br />
        This process cannot be undone.
      </Typography>
      <Box
        py={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{ ...RedBtn, px: 5, mr: 2 }}
          onClick={onClose}
        >
          Cancel
        </Button>
        <LoadingButton
          loading={isLoading}
          variant="outlined"
          sx={{ ...primaryBtn, px: 6 }}
          onClick={handelBlockUnBlockUser}
          disabled={isLoading}
        >
          Yes
        </LoadingButton>
      </Box>
    </CustomDialogueComponent>
  );
}

export default BlockUnBlockUser;
