import * as Yup from "yup";

export const NAME_SCHEMA =  Yup.string()
.matches(/^[a-z]{4,15}$/, "Errrrrorrr")
.required();

export const LOG_IN_SCHEMA = Yup.object({
  login: Yup.string()
    .matches(/^[a-z]{4,15}$/, "Errrrrorrr")
    .required(),
  password: Yup.string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
    .required("required"),
});

export const SING_UP_SCHEMA = Yup.object({
  lastName: NAME_SCHEMA,
  firstName: Yup.string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/).required("required"),
});
