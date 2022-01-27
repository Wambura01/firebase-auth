import React from "react";
import Button from "@mui/material/Button";

function BasicButton({ title, handleAction }) {
  return (
    <Button variant="contained" onClick={handleAction}>
      {title}
    </Button>
  );
}

export default BasicButton;
