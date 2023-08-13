import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/material";

function Actions(props) {
  const { view, remove, edit, block, unBlock } = props;

  const actionBtnStyle = {
    color: "#338cc9",
    cursor: "pointer",
    marginRight: "10px",
  };

  const actions = [];

  view &&
    actions.push(
      <VisibilityIcon onClick={view} sx={actionBtnStyle} key={Math.random()} />
    );
  edit &&
    actions.push(
      <NoteAltIcon onClick={edit} sx={actionBtnStyle} key={Math.random()} />
    );
  remove &&
    actions.push(
      <DeleteIcon onClick={remove} sx={actionBtnStyle} key={Math.random()} />
    );

  block &&
    actions.push(
      <LockOpenIcon onClick={block} sx={actionBtnStyle} key={Math.random()} />
    );
  unBlock &&
    actions.push(
      <RemoveCircleIcon
        nClick={unBlock}
        sx={{ ...actionBtnStyle, marginRight: "0" }}
        key={Math.random()}
      />
    );

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>{actions}</Box>
  );
}

export default Actions;
