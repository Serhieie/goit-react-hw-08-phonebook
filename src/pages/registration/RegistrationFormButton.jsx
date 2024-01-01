import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';

export const RegistrationFormButton = ({ isLoading, isThemeDark }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className={`${
        isThemeDark
          ? 'shadow-none hover:bg-buttonHoverColorDark text-buttonTextColorDark hover:text-lightPartsColorDark bg-buttonColorDark'
          : 'shadow-shadowBox hover:bg-buttonHoverColor text-buttonTextColor bg-buttonColor'
      } text-center font-light w-40 h-11 rounded-sm border-none outline-none 
      mx-auto cursor-pointer shadow-md mt-4 flex items-center justify-around transition-all duration-30 ${
        isThemeDark ? 'text-lg md:w-48' : 'text-lg md:w-48'
      } ssm:w-40 ssm:h-10 md2:text-sm`}
    >
      {isLoading ? (
        <PulseLoader
          color={`${isThemeDark ? '#3f78cc ' : '#F5DEB3 '}`}
          size="6px"
        />
      ) : (
        <>Registration</>
      )}
    </button>
  );
};

RegistrationFormButton.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};
