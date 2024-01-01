import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginFormButton } from './LoginFormButton';
import { LoginInputs } from './LoginInputs';
import { RegistrationShine } from 'components/Shine/RegistrationShine';
import { login } from '../../redux/auth/operations-auth';
import { getisLoadingUser, getTheme } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Login() {
  const dispatch = useDispatch();
  const isThemeDark = useSelector(getTheme);
  const isLoading = useSelector(getisLoadingUser);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  //form submit
  const handleSubmit = async evt => {
    evt.preventDefault();
    const { userEmail, userPassword } = evt.target.elements;
    const userData = {
      email: userEmail.value.trim(),
      password: userPassword.value.trim(),
    };
    dispatch(login(userData));
    userData.password = '';
  };

  //dynamic styles for form
  const formWidthClass =
    windowSize.height > 460
      ? 'md3:w-5/12 pb-12'
      : 'md3:w-10/12   md2:mt-1 pb-1';
  const formThemeStyles = isThemeDark
    ? ' shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark '
    : ' from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 ';

  return (
    <>
      <Helmet>
        <title>StoneBook-Login</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={`
        ${formWidthClass} 
         ${formThemeStyles}  flex gap-2 flex-col   pt-20  px-10 rounded-sm
          shadow-lg bg-gradient-to-tr md2:mt-4  md2:pt-8  md:pb-14 md:px-5 md:min-h-0 md:w-[96%]
          transition-all  ssm2:-mt-4 ssm2:pt-28  mx-auto z-20 mt-2 `}
      >
        <h1 className="text-center text-4xl m-0 md:text-2xl md2:text-2xl font-normal mt-2">
          Login
        </h1>
        <LoginInputs windowSize={windowSize} isThemeDark={isThemeDark} />
        <Link
          className={` ${
            isThemeDark ? 'text-teal-400 ' : 'text-teal-600 '
          } mt-12 flex gap-4`}
          to={'/registration'}
        >
          <p
            className={`${
              isThemeDark ? 'text-darkFontDark' : 'text-darkFont'
            } `}
          >
            Have no account?
          </p>
          Registrate now
        </Link>
        <LoginFormButton
          windowSize={windowSize}
          text="Sign in"
          isLoading={isLoading}
          isThemeDark={isThemeDark}
        />
      </form>
      <RegistrationShine windowSize={windowSize} isThemeDark={isThemeDark} />
    </>
  );
}
