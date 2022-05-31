import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../FormsUI/Textfield";
import Select from "../FormsUI/Select";
import DateTimePicker from "../FormsUI/DateTimePicker";
import Checkbox from "../FormsUI/Checkbox";
import Button from "../FormsUI/Button";
import countries from "../../data/countries.json";

// Custom Components
import { FormWrapper } from "../Form";

// MUI imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfServices: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required Field"),
  lastName: Yup.string().required("Required Field"),
  email: Yup.string().email("Invalid email").required("Required Field"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required Field"),

  addressLine1: Yup.string().required("Required Field"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required Field"),
  state: Yup.string().required("Required Field"),
  country: Yup.string().required("Required Field"),
  arrivalDate: Yup.date().required("Required Field"),
  departureDate: Yup.date().required("Required Field"),
  message: Yup.string(),
  termsOfServices: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

///////////////////////////////////////////
// MAIN Component
const General = () => {
  return (
    <FormWrapper>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">General Form</Typography>
            </Grid>

            <Grid item xs={6}>
              <Textfield name="firstName" label="First Name" />
            </Grid>
            <Grid item xs={6}>
              <Textfield name="lastName" label="Last Name" />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="email" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <Textfield name="phone" label="Phone" />
            </Grid>

            <Grid item xs={12}>
              <Typography>Address</Typography>
            </Grid>

            <Grid item xs={12}>
              <Textfield name="addressLine1" label="Address Line 1" />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="addressLine2" label="Address Line 2" />
            </Grid>

            <Grid item xs={6}>
              <Textfield name="city" label="City" />
            </Grid>
            <Grid item xs={6}>
              <Textfield name="state" label="State" />
            </Grid>

            <Grid item xs={12}>
              <Select name="country" label="Country" options={countries} />
            </Grid>

            <Grid item xs={12}>
              <Typography>Booking information</Typography>
            </Grid>

            <Grid item xs={6}>
              <DateTimePicker name="arrivalDate" label="Arrival Date" />
            </Grid>

            <Grid item xs={6}>
              <DateTimePicker name="departureDate" label="Departure Date" />
            </Grid>

            <Grid item xs={12}>
              <DateTimePicker
                name="message"
                label="Message"
                multiline
                rows={4}
              />
            </Grid>

            <Grid item xs={12}>
              <Checkbox
                name="termsOfServices"
                legend="Terms of Service"
                label="I agree"
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

export default General;
