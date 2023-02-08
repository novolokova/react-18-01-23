import React from "react";
import { ErrorMessage, Field} from "formik";

const InputWrapper = (props) => {
  const {name, className, ...rest} = props;
  return (
    <label className={className}>
      <Field name={name} {...rest}/>
      <ErrorMessage name={name} component="span" />
    </label>
  );
};
//ErrorMessage підтягує з LOG_IN_SCHEMA валідацію та виводить error-message 
export default InputWrapper;
