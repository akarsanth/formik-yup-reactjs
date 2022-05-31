import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../FormsUI/Textfield";
import Button from "../FormsUI/Button";
import TextfieldPw from "../FormsUI/Textfield/TextFieldPw";

// Custom Components
import { FormWrapper } from "../Form";

// MUI imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  password: "",
  confirmPassword: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is a required Field")
    .max(50, "Must be less than 50 characters"),
  lastName: Yup.string()
    .required("Last Name is a required Field")
    .max(50, "Must be less than 50 characters"),
  contactNumber: Yup.string()
    .required("Contact Number is a required field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  email: Yup.string()
    .required("Email is a required Field")
    .email("Invalid email address")
    .max(255, "Must be less than 255 characters"),
  password: Yup.string()
    .required("Password field is required field")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .max(255, "Must be less than 255 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is a required field"),
});

const Register = () => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Register Form</Typography>
            </Grid>

            <Grid item xs={6}>
              <Textfield label="First Name" name="firstName" required />
            </Grid>
            <Grid item xs={6}>
              <Textfield label="Last Name" name="lastName" required />
            </Grid>

            <Grid item xs={12}>
              <Textfield label="Email" type="email" name="email" required />
            </Grid>
            <Grid item xs={12}>
              <Textfield label="Contact Number" name="contactNumber" required />
            </Grid>

            <Grid item xs={12}>
              <TextfieldPw label="Password" name="password" required />
            </Grid>

            <Grid item xs={12}>
              <TextfieldPw
                label="Confirm Password"
                name="confirmPassword"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button>Register</Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default Register;
