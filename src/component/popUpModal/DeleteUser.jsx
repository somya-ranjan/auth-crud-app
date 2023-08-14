import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab/";
import { CustomDialogueComponent } from "../modal/Modal";
import { RedBtn, primaryBtn } from "../../assets/style/Btn";
import { useDeleteUserMutation } from "../../store/services";
import toaster from "../../utility/toaster";

function DeleteUser({ isOpen, onClose, selectedId }) {
  // // redux state
  const [deleteUser, { isLoading, isSuccess }] = useDeleteUserMutation();

  // // function
  const handelDelete = async () => {
    await deleteUser({ currentId: selectedId });
  };
  useEffect(() => {
    if (isSuccess) {
      toaster.success("User deleted successfully");
      onClose();
    }
  }, [isSuccess]);
  return (
    <CustomDialogueComponent
      open={isOpen}
      onClose={onClose}
      label="Delete User"
    >
      <Typography py={1} textAlign="center">
        Do you really want to delete these records? <br />
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
          sx={{ ...primaryBtn, px: 5 }}
          onClick={handelDelete}
          disabled={isLoading}
        >
          Delete
        </LoadingButton>
        {/* <Button
          variant="outlined"
          sx={{ ...primaryBtn, px: 5 }}
          onClick={handelDelete}
        >
          Delete
        </Button> */}
      </Box>
    </CustomDialogueComponent>
  );
}

export default DeleteUser;
