import { PulseLoader } from 'react-spinners';
import { getisLoadingUser } from '../../redux/redux-bundle/selectors';
import { useSelector } from 'react-redux';

export const LoginFormButton = ({ text, isThemeDark }) => {
  const isLoading = useSelector(getisLoadingUser);
  console.log(isLoading);
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`${
        isThemeDark
          ? 'shadow-none hover:bg-buttonHoverColorDark text-buttonTextColorDark hover:text-lightPartsColorDark bg-buttonColorDark'
          : 'shadow-shadowBox hover:bg-buttonHoverColor text-buttonTextColor bg-buttonColor'
      } text-center font-light w-40 h-11 rounded-sm border-none outline-none 
      mx-auto cursor-pointer shadow-md mt-28 mb-8 flex items-center justify-around transition-all duration-300 ${
        isThemeDark ? 'text-lg md:w-48' : 'text-lg md:w-48'
      } ssm:w-40 ssm:h-10 md2:text-sm `}
    >
      {isLoading ? <PulseLoader color="#F5DEB3" size="6px" /> : <>{text}</>}
    </button>
  );
};
