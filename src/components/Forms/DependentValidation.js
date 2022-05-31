import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../FormsUI/Textfield";
import Button from "../FormsUI/Button";
import CheckboxOpen from "../FormsUI/Checkbox/CheckboxOpen";

// Custom Components
import { FormWrapper } from "../Form";

// MUI imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const INITIAL_FORM_STATE = {
  isMorning: false,
  coffee: "",
};

export const FORM_VALIDATION = Yup.object().shape({
  isMorning: Yup.boolean(),
  coffee: Yup.string().when("isMorning", {
    is: true,
    then: Yup.string().required("Coffee is required"),
  }),
});

const DependentValidation = () => {
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
              <Typography variant="h6">Dependent Fields</Typography>
            </Grid>

            <Grid item xs={12}>
              <CheckboxOpen name="isMorning" label="Is Morning?" />
            </Grid>

            <Grid item xs={12}>
              <Textfield name="coffee" label="Coffee?" />
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

export default DependentValidation;
