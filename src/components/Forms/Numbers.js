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
  price: "",
  countInStock: "",
  even: "",
  odd: "",
  between: "",
};

export const FORM_VALIDATION = Yup.object().shape({
  price: Yup.number()
    .required("Price is a required Field")
    .typeError("Invalid entry")
    .max(99999999.99)
    .positive(),
  countInStock: Yup.number()
    .required("Count In Stock is a required Field")
    .typeError("Invalid entry")
    .moreThan(-1, "Count In Stock must be equal to greater than 0")
    .integer(),

  even: Yup.number()
    .required("Required Field")
    .test("Even?", "The number must be even", (value) => value % 2 === 0),

  odd: Yup.number()
    .required("Required Field")
    .test("Even?", "The number must be odd", (value) => value % 2 === 1),

  between: Yup.number()
    .required("Required Field")
    .min(0, "The number must be greater than 0")
    .max(10, "The number must be less than 10"),
});

const Numbers = () => {
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
              <Typography variant="h6">Working with numbers</Typography>
            </Grid>

            <Grid item xs={12}>
              <Textfield label="Price" name="price" required />
            </Grid>
            <Grid item xs={12}>
              <Textfield label="Count In Stock" name="countInStock" required />
            </Grid>

            <Grid item xs={12}>
              <Textfield label="Even number" name="even" required />
            </Grid>

            <Grid item xs={12}>
              <Textfield label="Odd number" name="odd" required />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="between" label="Between 0 and 10" required />
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

export default Numbers;
