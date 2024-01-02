import { handleRegistration } from '../../helpers/validateRegistration';
import { RegistrationFormButton } from './RegistrationFormButton';
import { useEffect, useState } from 'react';
import { Policy } from './Policy';
import { RegLogInputs } from './RegistrInputs';
import { RegistrationShine } from 'components/Shine/RegistrationShine';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { registrationSchema } from '../../helpers/constants/schema';
import { useAuth } from '../../helpers/hooks/auth-selector-hook';
import { useTheme } from '../../helpers/hooks/theme-hook';
import { Helmet } from 'react-helmet';

//Formik state
const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

//Registration form is not have setting to LS option
export default function Registration() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  const { isThemeDark } = useTheme();

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  //resize listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    const { name, email, password } = values;
    const userData = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    //validation for inputs
    handleRegistration(userData, dispatch);
    resetForm();
  };

  const formWidthClass =
    windowSize.height > 460
      ? 'md3:w-5/12 pb-16 pt-20 '
      : 'md3:w-10/12  md2:mt-1 pb-8';

  return (
    <>
      <Helmet>
        <title>StoneBook-Registration</title>
      </Helmet>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form
          autoComplete="off"
          className={`
          ${formWidthClass}  
          ${
            isThemeDark
              ? ' shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark '
              : ' from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 '
          }  flex gap-2 flex-col pt-10 1xl2:pt-12 1xl2:pb-10 1xl2:mb-4   px-10 rounded-sm
          shadow-lg bg-gradient-to-tr md:py-7 md:pb-14 md:px-5 md:min-h-0 md:w-[96%]
          transition-all  ssm2:pt-16 ssm2:mt-4  mx-auto z-60 mt-4 md2:pt-8 md2:mt-8 `}
        >
          <h1 className="text-center text-4xl m-0 mt-1 md:text-2xl md2:text-2xl font-normal">
            Registration
          </h1>
          <RegLogInputs windowSize={windowSize} isThemeDark={isThemeDark} />
          <Policy windowSize={windowSize} />
          <RegistrationFormButton
            isLoading={isLoading}
            isThemeDark={isThemeDark}
          />
        </Form>
      </Formik>
      <RegistrationShine windowSize={windowSize} isThemeDark={isThemeDark} />
    </>
  );
}
