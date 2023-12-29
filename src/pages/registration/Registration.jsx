import {
  getTheme,
  getisLoadingUser,
  getError,
} from '../../redux/redux-bundle/selectors';
import { handleRegistration } from '../../helpers/validateRegistration';
import { RegistrationFormButton } from './RegistrationFormButton';
import { useSelector } from 'react-redux';
import { Policy } from './Policy';
import { RegLogInputs } from './RegistrInputs';
import { RegistrationShine } from 'components/Shine/RegistrationShine';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { registrationSchema } from '../../constants/schema';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function Registration() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getisLoadingUser);
  const error = useSelector(getError);
  const isThemeDark = useSelector(getTheme);

  const handleSubmit = async (values, { resetForm }) => {
    const { name, email, password } = values;
    const userData = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    };
    handleRegistration(userData, dispatch);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          autoComplete="off"
          className={`${
            isThemeDark
              ? ' shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark '
              : ' from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 '
          }  flex gap-2 flex-col pt-10 md3:w-5/12 pb-12 px-10 rounded-sm
          shadow-lg bg-gradient-to-tr md:py-7 md:pb-14 md:px-5 md:min-h-0 md:w-[99%]
          transition-all ssm:pt-14 mx-auto z-60 mt-4 md2:pt-8 md2:mt-8`}
        >
          <h1 className="text-center text-4xl m-0 mt-1 md:text-2xl md2:text-2xl font-normal">
            Registration
          </h1>
          <RegLogInputs isThemeDark={isThemeDark} />
          <Policy />
          <RegistrationFormButton
            isLoading={isLoading}
            error={error}
            isThemeDark={isThemeDark}
          />
        </Form>
      </Formik>
      <RegistrationShine isThemeDark={isThemeDark} />
    </>
  );
}
