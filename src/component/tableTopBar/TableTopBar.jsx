import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function TableTopBar(props) {
  const {
    label,
    list,
    btnName,
    handelExportData,
    status,
    handleStatusChange,
    handleSearch,
    search,
    handelAddEmployee,
    disableExportBtn,
  } = props;
  // // style
  const btnStyle = {
    textTransform: "capitalize",
    background: "none",
    fontWeight: "700",
    border: "2px solid #338cc9",
    color: "#338cc9",
    "&:hover": {
      color: "#fff",
      border: "2px solid #338cc9",
      background: "#338cc9",
    },
  };
  return (
    <Grid container justifyContent="space-between" mb={2}>
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          paddingBottom: {
            xs: "15px",
            md: "0",
          },
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search user name/email"
          variant="outlined"
          size="small"
          type="search"
          onChange={handleSearch}
          value={search}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: {
              md: "flex-end",
            },
          }}
        >
          <Grid item xs={12} sm={4} md={3}>
            <FormControl fullWidth size="small" sx={{ minWidth: "100px" }}>
              <InputLabel id="demo-simple-select-label">{label}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label={label}
                onChange={handleStatusChange}
              >
                {list.map((item) => (
                  <MenuItem value={item.value} key={Math.random()}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <Button
              variant="contained"
              fullWidth
              sx={btnStyle}
              onClick={handelAddEmployee}
            >
              Add User
            </Button>
          </Grid>
          <Grid item xs={8} sm={4} md={5}>
            <Button
              variant="contained"
              fullWidth
              sx={{ ...btnStyle, borderColor: disableExportBtn && "lightgray" }}
              onClick={handelExportData}
              disabled={disableExportBtn}
            >
              {btnName}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TableTopBar;
