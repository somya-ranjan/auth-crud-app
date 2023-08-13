import React from "react";
import {
  Dialog,
  DialogTitle,
  Slide,
  IconButton,
  DialogContent,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./style.scss";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

export function CustomDialogueComponent(props) {
  return (
    <>
      <Dialog
        open={props.open}
        // TransitionComponent={Transition}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        keepMounted
        // onClose={props.onClose}
        sx={{
          zIndex: "1300",
          margin: "auto",
          "& .MuiPaper-root": {
            width: {
              xs: "100%", // theme.breakpoints.up('xs')
              sm: "65%", // theme.breakpoints.up('sm')
              md: "50%", // theme.breakpoints.up('md')
              lg: "38%", // theme.breakpoints.up('lg')
              xl: "30%", // theme.breakpoints.up('xl')
            },
          },
        }}
        className="somyaRanjan"
      >
        <DialogTitle
          sx={{
            color: "#000",
            fontSize: "22px",
            margin: "auto",
            fontWeight: "bold",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={props.onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogTitle
          sx={{
            color: "#000",
            fontSize: "22px",
            margin: "auto",
            fontWeight: "bold",
            padding: "0 0 10px 0",
          }}
        >
          {props.label}
        </DialogTitle>
        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </>
  );
}
