import { register } from '../redux/auth/operations-auth';
import { changeIsLoadingToken } from '../redux/auth/slice-auth';

export const validateRegistration = userData => {
  let errors = {};

  if (
    !userData.name ||
    userData.name.trim().length < 2 ||
    userData.name.trim().length > 16
  ) {
    errors = {
      ...errors,
      name: 'Please enter a name with at least 2 characters.',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userData.email || !emailRegex.test(userData.email.trim())) {
    errors = { ...errors, email: 'Please enter a valid email address.' };
  }

  if (!userData.password || userData.password.trim().length < 7) {
    errors = {
      ...errors,
      password: 'Password should be at least 7 characters long.',
    };
  }

  return errors;
};

export const handleRegistration = (userData, dispatch) => {
  const errors = validateRegistration(userData);

  if (Object.keys(errors).length === 0) {
    dispatch(register(userData));
  } else {
    dispatch(changeIsLoadingToken(false));
    return errors;
  }
};
