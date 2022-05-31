import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../FormsUI/Textfield";
import Button from "../FormsUI/Button";

// Custom Components
import { FormWrapper } from "../Form";

// MUI imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  contactNumber: "",
  message: "",
};

export const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required Field")
    .max(100, "Must be less than 100 characters"),
  email: Yup.string()
    .required("Email is a required Field")
    .email("Invalid email address")
    .max(255, "Must be less than 255 characters"),
  contactNumber: Yup.string()
    .required("Contact Number is a required field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  message: Yup.string().required("Message is a required Field"),
});

const ContactUs = () => {
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
              <Typography variant="h6">Contact Us Form</Typography>
            </Grid>

            <Grid item xs={12}>
              <Textfield label="Name" name="name" required />
            </Grid>
            <Grid item xs={12}>
              <Textfield label="Enter Email" name="email" required />
            </Grid>

            <Grid item xs={12}>
              <Textfield label="Contact Number" name="contactNumber" required />
            </Grid>

            <Grid item xs={12}>
              <Textfield
                label="Message"
                name="message"
                multiline
                rows={6}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button>Submit</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default ContactUs;
