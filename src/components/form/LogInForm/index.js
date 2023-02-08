import React from "react";
import { Form, Formik } from "formik";
import { LOG_IN_SCHEMA } from "../../../utils/validationSchemas";
import InputWrapper from "../InputWrapper";
import InputWrapperWithValidate from '../InputWrapperWithValidate';
import styles from "./LogInForm.module.scss";

const initialValues = {//  обов'язковий props у Formik, 
    login: "", // ключі обов'язково співпадають з Input-- name="login"
    password: "",  //   name="number"
    number: 1,  //  name="password"
  };
const LogInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    // обов'язковий props у Formik, окрема логіка яка обробляє данні нашої форми,  приходить з зовні у props, не тут її прописувати!!!
    console.group();
    console.log(values);
    console.log(formikBag);// багато методів 
    console.groupEnd();
    formikBag.resetForm();
  };
  return (//Formik - фомує та зберігає стан, обробка та валідація полів
    <Formik
    initialValues={initialValues} //
    onSubmit={onSubmit}//
    validationSchema={LOG_IN_SCHEMA}
  >
    {(formikProps) => {
      //console.log(formikProps);
      return (
        <Form className={styles.form}>
          <InputWrapperWithValidate
            name="login"
            type="text"
            placeholder="your login"
            className={styles.labelValid}
          />
          <InputWrapper
            name="number"
            type="number"
            step="5"
            placeholder="your number"
            className={styles.label}
          />
          <InputWrapper
            name="password"
            type="password"
            placeholder="your password"
            className={styles.label}
          />
          <input type="submit" value="SEND" />
          {/* <Field type='submit' value="SEND"/> шнший варіант запису*/} 
        </Form>
      );
    }}
  </Formik>
  );
};

export default LogInForm;
