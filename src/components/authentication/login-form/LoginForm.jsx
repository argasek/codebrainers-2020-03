import { Button } from "reactstrap";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import LoginFormFields from "components/authentication/constants/LoginFormFields";
import LoginFormUsername from "components/authentication/login-form/fields/LoginFormUsername";
import LoginFormPassword from "components/authentication/login-form/fields/LoginFormPassword";

const LoginForm = (props) => {
  const initialValues = LoginFormFields.getInitialValues();

  const onSubmit = (values) => {
    const credentials = LoginFormFields.toModel(values);
    props.onSubmit(credentials);
  };

  const noValidationMessageStyles = {
    backgroundColor: "#ff3333",
    padding: "0.375rem 0.75rem",
    borderRadius: "0.25rem",
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isValid }) => (
        <Form className="login-form">
          <LoginFormUsername />
          <LoginFormPassword />
          {props.noValidationMessage && <p style={noValidationMessageStyles}>{props.noValidationMessage}</p>}
          <Button color="primary" type="submit" className="mt-3" disabled={!isValid}>
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
