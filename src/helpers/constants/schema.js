import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(1)
    .max(18)
    .required()
    .matches(/^[a-zA-Zа-яА-ЯіїґІЇҐ].*$/, 'Name must start with letters'),
  phone: yup
    .string()
    .min(7)
    .max(18)
    .required()
    .matches(
      /^\+?(\d{2}-?\d{3}-?\d{3}-?\d{2}-?\d{2})$|^\d{7}$|^\d{10}$|^\+?\d{12}$/,
      `Number must have 7, 10 or 12 digits`
    ),
});

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name should be at least 2 characters')
    .max(16, 'Name should not exceed 16 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password should be at least 7 characters long')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});
