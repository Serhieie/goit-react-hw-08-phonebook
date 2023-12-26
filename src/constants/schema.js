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
