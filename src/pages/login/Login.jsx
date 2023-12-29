import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTheme, getUserAuth } from '../../redux/redux-bundle/selectors';
import { LoginFormButton } from './LoginFormButton';
import { LoginInputs } from './LoginInputs';
import { RegistrationShine } from 'components/Shine/RegistrationShine';
import { login } from '../../redux/auth/operations-auth';
import { changeUserEmail } from '../../redux/auth/slice-auth';

export default function Login() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  const isThemeDark = useSelector(getTheme);

  const handleSubmit = async evt => {
    evt.preventDefault();
    const { userEmail, userPassword } = evt.target.elements;
    const userData = {
      email: userEmail.value.trim(),
      password: userPassword.value.trim(),
    };
    dispatch(login(userData));
    dispatch(changeUserEmail(''));
    evt.target.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={`${
          isThemeDark
            ? ' shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark '
            : ' from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 '
        }  flex gap-2 flex-col md3:w-5/12 pb-9   pt-20  px-10 rounded-sm
          shadow-lg bg-gradient-to-tr md2:mt-4  md2:pt-8  md:pb-14 md:px-5 md:min-h-0 md:w-[99%]
          transition-all ssm:pt-14 mx-auto z-20 mt-8`}
      >
        <h1 className="text-center text-4xl m-0 md:text-2xl md2:text-2xl font-normal mt-2">
          Login
        </h1>
        <LoginInputs isThemeDark={isThemeDark} />
        <Link
          className={` ${
            isThemeDark ? 'text-teal-400 ' : 'text-teal-600 '
          } mt-10 flex gap-4`}
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
          text="Sign in"
          // isLoading={isLoading}
          isThemeDark={isThemeDark}
        />
      </form>
      <RegistrationShine isThemeDark={isThemeDark} />
    </>
  );
}
