import { Box, Typography } from "@mui/material";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

function NoData() {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        color: "gray",
      }}>
      <DocumentScannerIcon sx={{ fontSize: "100px" }} />
      <Typography variant="h6">No data</Typography>
    </Box>
  );
}

export default NoData;
