import { getTheme } from '../../redux/redux-bundle/selectors';
import { RegistrationFormButton } from './RegistrationFormButton';
import { useSelector } from 'react-redux';
import { Policy } from './Policy';
import { RegLogInputs } from './RegistrInputs';
import { RegistrationShine } from 'components/Shine/RegistrationShine';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations-auth';

export default function Registration() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  const isThemeDark = useSelector(getTheme);

  const handleSubmit = async evt => {
    evt.preventDefault();
    const { name, email, password } = evt.target.elements;
    const userData = {
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    };
    dispatch(register(userData));
    evt.target.reset();
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={`${
          isThemeDark
            ? ' shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark '
            : ' from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 '
        }  flex gap-2 flex-col pt-20 md3:w-5/12 pb-16 px-10 rounded-sm
          shadow-lg bg-gradient-to-tr md:py-7 md:pb-14 md:px-5 md:min-h-0 md:w-[99%]
          transition-all ssm:pt-14 mx-auto z-60 mt-8 md2:pt-8 md2:mt-8`}
      >
        <h1 className="text-center text-4xl m-0 md:text-2xl md2:text-2xl font-normal">
          Registration
        </h1>
        <RegLogInputs isThemeDark={isThemeDark} />
        <Policy />
        <RegistrationFormButton
          // isLoading={isLoading}
          isThemeDark={isThemeDark}
        />
      </form>
      <RegistrationShine isThemeDark={isThemeDark} />
    </>
  );
}
