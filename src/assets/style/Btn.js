export const RedBtn = {
  fontSize: "15px",
  fontWeight: "bold",
  borderRadius: "3px",
  borderColor: "red",
  color: "red",
  textTransform: "capitalize",
  boxShadow: 3,
  "&:hover": {
    backgroundColor: "red",
    color: "#fff",
    borderColor: "red",
  },
};

export const primaryBtn = {
  ...RedBtn,
  // padding: "0 30px",
  color: "#338cc9",
  borderColor: "#338cc9",
  "&:hover": {
    backgroundColor: "#338cc9",
    color: "#fff",
    borderColor: "#338cc9",
  },
};
