import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BasicButton from "./Button";

function Form({ title, setEmail, setPassword, handleAction }) {
  return (
    <div>
      <div className="heading-container">
        <h3>{title} Form</h3>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the Email"
          variant="outlined"
          onChange={setEmail}
        />
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
          onChange={setPassword}
        />
      </Box>
      <BasicButton title={title} handleAction={handleAction} />
    </div>
  );
}

export default Form;
