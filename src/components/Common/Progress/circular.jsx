import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Circular() {
  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}
