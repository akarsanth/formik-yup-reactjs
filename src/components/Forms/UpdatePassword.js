import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextfieldPw from "../FormsUI/Textfield/TextFieldPw";
import Button from "../FormsUI/Button";

// Custom Components
import { FormWrapper } from "../Form";

// MUI imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const INITIAL_FORM_STATE = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export const FORM_VALIDATION = Yup.object().shape({
  currentPassword: Yup.string().required("Password field is required field"),
  // .min(8, "Password is too short - should be 8 chars minimum."),
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  newPassword: Yup.string()
    .required("Password field is required field")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .notOneOf(
      [Yup.ref("currentPassword"), null],
      "Current and New password are same"
    ),
  confirmNewPassword: Yup.string()
    .required("Confirm password is a required field")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

///////////////////////////////////////////
// MAIN Component
const UpdatePassword = () => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
        }}
        validator={() => ({})}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Update Password</Typography>
            </Grid>

            <Grid item xs={12}>
              <TextfieldPw
                label="Current Password"
                name="currentPassword"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextfieldPw label="New Password" name="newPassword" required />
            </Grid>

            <Grid item xs={12}>
              <TextfieldPw
                label="Confirm New Password"
                name="confirmNewPassword"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button>Update Password</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default UpdatePassword;
