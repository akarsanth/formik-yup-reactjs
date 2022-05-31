import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Form
import TextfieldPw from "../FormsUI/Textfield/TextFieldPw";
import Textfield from "../FormsUI/Textfield";
import Button from "../FormsUI/Button";

// Custom Components
import { FormWrapper } from "../Form";

// MUI imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

export const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email address"),
  password: Yup.string().required("Password is a required field"),
});

///////////////////////////////////////////
// MAIN Component

const Login = () => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { reset }) => {
          console.log(values);
          reset();
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Login Form</Typography>
            </Grid>

            <Grid item xs={12}>
              <Textfield label="Enter Email" name="email" required />
            </Grid>

            <Grid item xs={12}>
              <TextfieldPw label="Enter Password" name="password" required />
            </Grid>

            <Grid item xs={12}>
              <Button>Login</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default Login;
