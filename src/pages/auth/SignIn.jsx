import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import validationSchema from "./validation/signInvalidation";
import toaster from "../../utility/toaster";
import { userSignIn } from "../../store/reducers/auth";

function SignIn() {
  // // initial state
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // // local state
  const [showPsw, setShowPsw] = useState(false);

  // // validation
  const formik = useFormik({
    initialValues: {
      email: "",
      psw: "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      if (
        values.email === "super.user@user.com" &&
        values.psw === "Super.user@123"
      ) {
        dispatch(userSignIn());
        // navigate("/main-page");
        formik.resetForm();
      } else {
        toaster.error("Please enter correct credential.");
        toaster.info("email:-super.user@user.com and psw:-Super.user@123");
      }
    },
  });
  return (
    <Grid container justifyContent="center" alignItems="center" height="84vh">
      <Grid item xs={10} sm={6} md={4} lg={3}>
        <Paper elevation={3} sx={{ p: 3, pb: 4, background: "#edf6f9" }}>
          <PersonOutlineIcon
            sx={{
              fontSize: 60,
              color: "#256d9c",
              border: "5px solid #256d9c",
              borderRadius: "50%",
              p: 1,
              display: "block",
              mx: "auto",
              mb: 4,
            }}
          />
          <Stack spacing={2} component="form" onSubmit={formik.handleSubmit}>
            <TextField
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              fullWidth
              size="small"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={
                formik.touched.email &&
                formik.errors.email &&
                formik.errors.email
              }
            />
            <TextField
              type={showPsw ? "text" : "password"}
              name="psw"
              label="Password"
              placeholder="Enter your password"
              fullWidth
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={(prev) => setShowPsw(!showPsw)}
                    >
                      {showPsw ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={formik.values.psw}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.psw && formik.errors.psw)}
              helperText={
                formik.touched.psw && formik.errors.psw && formik.errors.psw
              }
            />
            <Button
              variant="outlined"
              type="submit"
              sx={{
                textTransform: "capitalize",
                background: "none",
                fontWeight: "700",
                border: "2px solid #338cc9",
                color: "#338cc9",
                marginTop: "25px !important",
                "&:hover": {
                  color: "#fff",
                  border: "2px solid #338cc9",
                  background: "#338cc9",
                },
              }}
            >
              Sign In
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SignIn;
