/**
 * @format
 */

import ErrorMessages from "constants/errorMessages";
import { FormikHelpers, useFormik } from "formik";
import { ILogin } from "interfaces/auth";
import * as Yup from "yup";

const defaultValues: ILogin = {
  email: "",
  password: "",
};

const schema = Yup.object().shape({
  email: Yup.string().required(ErrorMessages.LOGIN.EMAIL),
  password: Yup.string().required(ErrorMessages.LOGIN.PASSWORD),
});

const useForm = (
  onSubmit: (
    values: ILogin,
    formikHelpers: FormikHelpers<ILogin>,
  ) => void | Promise<unknown>,
  initialValues: ILogin = defaultValues,
) => {
  return useFormik<ILogin>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useForm;
