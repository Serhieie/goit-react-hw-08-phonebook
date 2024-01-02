import { useDispatch, useSelector } from 'react-redux';
import { changeUserEmail } from '../../redux/auth/slice-auth';
import { getUserData } from '../../redux/selectors';
import { useTheme } from '../../helpers/hooks/theme-hook';
import { PiEyeClosedBold } from 'react-icons/pi';
import { HiMiniEye } from 'react-icons/hi2';
import { setShowPass } from '../../redux/theme/themeReducer';
import PropTypes from 'prop-types';

export const LoginInputs = ({ windowSize, isThemeDark }) => {
  const { showPassword } = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(getUserData);

  //by the way better to leave it here with use state
  //Im not shure need I set it in LS or not that why its with redux
  const togglePasswordVisibility = () => {
    dispatch(setShowPass());
  };

  //setting email to LS
  const handleInputEmailChange = event => {
    const value = event.target.value;
    dispatch(changeUserEmail(value));
  };

  //resize styles
  const formWidthClass = windowSize.height > 460 ? 'md3:mt-9' : 'md3:mt-0';

  return (
    <>
      <label
        className={`
        ${formWidthClass}
        mt-9 text-xl flex items-center gap-2 md:ml-2 
      md2:text-sm font-light sm:mt-1`}
        htmlFor="userEmail"
      >
        {' '}
        Email{' '}
      </label>
      <input
        onChange={handleInputEmailChange}
        className={`
        ${
          isThemeDark
            ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
            : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
        }  mx-auto w-full py-1 rounded-sm px-5  h-12 
          border-0 outline-none   
           placeholder:font-base
             md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 
           ssm:text-base  font-light  transition-all  2xl2:text-2xl`}
        type="email"
        name="userEmail"
        id="userEmail"
        placeholder="Balambino@mail.com"
        value={user.email || ''}
        required
      />
      <label
        className={`mt-2 text-xl flex items-center gap-2 md:ml-2 
      md2:text-sm font-light sm:mt-1`}
        htmlFor="userPassword"
      >
        {' '}
        Password{' '}
      </label>
      <div className="flex">
        <input
          className={`${
            isThemeDark
              ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
              : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
          } mx-auto  py-1 px-5 rounded-l-sm h-12 
          border-0 outline-none   
           placeholder:font-base
            md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 
           ssm:text-base w-full  font-light  transition-all  2xl2:text-2xl`}
          type={`${!showPassword ? 'password' : 'text'}`}
          name="userPassword"
          id="userPassword"
          placeholder="Enter your password"
          min={7}
          required
        />
        <button
          className={`${
            isThemeDark
              ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
              : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
          } rounded-r-sm w-12 transition-all`}
          type="button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <HiMiniEye /> : <PiEyeClosedBold />}
        </button>
      </div>
    </>
  );
};

LoginInputs.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
};
