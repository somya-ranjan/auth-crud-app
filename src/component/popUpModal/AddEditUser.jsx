import React from "react";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import { CustomDialogueComponent } from "../modal/Modal";
import { primaryBtn, RedBtn } from "../../assets/style/Btn.js";
import { useFormik } from "formik";
import validationSchema from "./Validation/AddEditSchema";
import { useAddUserMutation, useEditUserMutation } from "../../store/services";
import toaster from "../../utility/toaster";

function AddEditUser({ modalOpen, onClose, label, selectedData }) {
  // // initial state
  // // redux state
  const [addUser, { isLoading }] = useAddUserMutation();
  const [editUser, { isLoading: editLoading }] = useEditUserMutation();
  // local state
  const initName = label === "editUser" ? selectedData?.name : "";
  const initEmail = label === "editUser" ? selectedData?.email : "";
  const initStatus = label === "editUser" ? selectedData?.status : "";
  const nameLabel = label === "editUser" ? "Edit user name" : "Enter user name";
  const emailLabel =
    label === "editUser" ? "Edit user email" : "Enter user email";
  const statusItem = [
    { name: "Active", value: "active" },
    { name: "Blocked", value: "blocked" },
  ];
  // // validation
  const formik = useFormik({
    initialValues: {
      name: initName,
      email: initEmail,
      status: initStatus,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
      if (label === "addUser") {
        await addUser(values);
        toaster.success("User added successfully");
      } else {
        await editUser({ userData: values, currentId: selectedData.id });
        toaster.success("User edited successfully");
      }
      onClose(values);
      formik.resetForm();
    },
  });

  return (
    <CustomDialogueComponent
      open={modalOpen}
      onClose={onClose}
      label={
        label === "addUser"
          ? "Add User"
          : label === "editUser"
          ? "Edit User"
          : null
      }
    >
      <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
        <TextField
          name="name"
          id="demo-helper-text-aligned"
          label={nameLabel}
          fullWidth
          sx={{ marginTop: "10px" }}
          size="small"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.name && formik.errors.name)}
          helperText={
            formik.touched.name && formik.errors.name && formik.errors.name
          }
        />
        <TextField
          name="email"
          type="email"
          id="demo-helper-text-aligned"
          label={emailLabel}
          fullWidth
          sx={{ marginTop: "10px" }}
          size="small"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={
            formik.touched.email && formik.errors.email && formik.errors.email
          }
        />
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            name="status"
            id="demo-simple-select"
            value={formik.values.status}
            label="Status"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.status && formik.errors.status)}
          >
            {statusItem.map((item) => (
              <MenuItem value={item.value} key={Math.random()}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: "#d32f2f" }}>
            {formik.touched.status &&
              formik.errors.status &&
              formik.errors.status}
          </FormHelperText>
        </FormControl>
        <Box
          pb={2.5}
          pt={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{ ...RedBtn, px: 5, mr: 2 }}
            onClick={() => {
              onClose(false);
              formik.resetForm();
            }}
          >
            Cancel
          </Button>
          {/* <Button
            variant="outlined"
            type="submit"
            sx={{ ...primaryBtn, px: 6 }}
          >
            Save
          </Button> */}
          <LoadingButton
            loading={isLoading || editLoading}
            variant="outlined"
            sx={{ ...primaryBtn, px: 6 }}
            type="submit"
            disabled={isLoading || editLoading}
          >
            Save
          </LoadingButton>
        </Box>
      </Stack>
    </CustomDialogueComponent>
  );
}

export default AddEditUser;
