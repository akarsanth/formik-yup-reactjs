import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  // to set value of field
  // setFieldValue(fieldName, fieldValue)
  const { setFieldValue } = useFormikContext();
  // fieldInputProps and metaInputProps
  const [field, meta] = useField(name);

  // to handle select change
  const handleChange = (event) => {
    // desctructuring event.target
    const { value } = event.target;
    // setting value of the field
    setFieldValue(name, value);
  };

  // configs for select component
  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  // for error or helper text
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect} size="small">
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item} disableRipple>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
