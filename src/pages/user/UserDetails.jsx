import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { primaryBtn } from "../../assets/style/Btn";
import { useGetUserDetailsQuery } from "../../store/services";
import BlockUnBlockUser from "../../component/popUpModal/BlockUnBlockUser";

function UserDetails() {
  // // initial state
  const { id } = useParams();
  const navigate = useNavigate();

  // // local state
  const [openBlockUnBlockModal, setOpenBlockUnblockModal] = useState({
    open: false,
    userData: "",
  });

  // // redux state
  const { data, isLoading } = useGetUserDetailsQuery(id);

  return (
    <Grid container justifyContent="center">
      <Grid item py={5} xs={11} sm={10} md={10} lg={9}>
        <Paper sx={{ background: "#edf6f9", p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" textTransform="capitalize">
              <ArrowBackIosIcon
                sx={{ mb: -0.5 }}
                className="cp"
                onClick={() => navigate(-1)}
              />
              {data?.name || "User details"}
            </Typography>
            <Button
              variant="outlined"
              sx={{ ...primaryBtn, px: 5 }}
              onClick={() =>
                setOpenBlockUnblockModal({ open: true, userData: data })
              }
            >
              {data?.status === "active" ? "Block" : "Active"} User
            </Button>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "20px",
              columnGap: "20%",
              alignItems: "start",
            }}
          >
            <img
              src={`https://i.pravatar.cc/300?img?img=${id}`}
              style={{ maxWidth: "200px", borderRadius: "10px" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Stack spacing={1.5}>
                <p>
                  User's Name
                  <Typography component="span" mx={7}>
                    :
                  </Typography>
                  <Typography component="span" textTransform="capitalize">
                    {isLoading ? (
                      <Skeleton animation="wave" />
                    ) : (
                      data?.name || "N/A"
                    )}
                  </Typography>
                </p>
                <p>
                  User's Email
                  <Typography component="span" mx={7}>
                    :
                  </Typography>
                  {isLoading ? (
                    <Skeleton animation="wave" />
                  ) : (
                    data?.email || "N/A"
                  )}
                </p>
                <p>
                  User's Status
                  <Typography component="span" mx={7}>
                    :
                  </Typography>
                  <Typography component="span" textTransform="capitalize">
                    {isLoading ? (
                      <Skeleton animation="wave" />
                    ) : (
                      data?.status || "N/A"
                    )}
                  </Typography>
                </p>
              </Stack>
            </Box>
          </Grid>
        </Paper>
      </Grid>
      <BlockUnBlockUser
        isOpen={openBlockUnBlockModal.open}
        onClose={() => setOpenBlockUnblockModal({ open: false, userData: "" })}
        userData={openBlockUnBlockModal.userData}
      />
    </Grid>
  );
}

export default UserDetails;
