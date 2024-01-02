import { Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { PiEyeClosedBold } from 'react-icons/pi';
import { HiMiniEye } from 'react-icons/hi2';
import PropTypes from 'prop-types';

export const RegLogInputs = ({ windowSize, isThemeDark }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePassword = field => {
    if (field === 1) {
      setShowPassword1(prevShowPassword => !prevShowPassword);
    } else if (field === 2) {
      setShowPassword2(prevShowPassword => !prevShowPassword);
    }
  };

  const widthClass = windowSize.height > 460 ? 'md3:mt-2' : 'md3:mt-0';
  const withInputClass = windowSize.height > 460 ? 'md3:mt-2' : 'md3:mt-0';
  return (
    <>
      <label
        className={`
        ${widthClass}
        mt-6 text-xl flex items-center gap-2 md:ml-2 md:w-10/12
      md2:text-sm font-light sm:mt-1`}
        htmlFor="user-name"
      >
        Name
      </label>

      <Field
        className={`${
          isThemeDark
            ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
            : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
        } rounded-sm mx-auto py-1 px-5  h-12 
          border-0 outline-none   
           placeholder:font-base
             md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 
           ssm:text-base w-full  font-light  transition-all  2xl2:text-2xl`}
        type="text"
        name="name"
        id="name"
        max={16}
        placeholder="Antonio Balambino"
      />
      <div className="text-sm h-4 w-full text-center -mt-2">
        <ErrorMessage className=" text-errorMsg" name="name" component="p" />
      </div>
      <label
        className={`
         ${withInputClass}
        mt-2 text-xl flex items-center gap-2 md:ml-2 
      md2:text-sm font-light sm:mt-1`}
        htmlFor="user-email"
      >
        Email
      </label>

      <Field
        className={`${
          isThemeDark
            ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
            : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
        } rounded-sm mx-auto w-full py-1 px-5 h-12 
          border-0 outline-none   
           placeholder:font-base
             md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 
           ssm:text-base  font-light  transition-all  2xl2:text-2xl`}
        type="email"
        name="email"
        id="email"
        placeholder="Balambino@mail.com"
        required
      />
      <div className="text-sm h-4 w-full text-center -mt-2">
        <ErrorMessage className=" text-errorMsg" name="email" component="p" />
      </div>
      <label
        className={`
         ${withInputClass}
        mt-2 text-xl flex items-center gap-2 md:ml-2 
      md2:text-sm font-light sm:mt-1`}
        htmlFor="user-phone"
      >
        {' '}
        Password{' '}
      </label>
      <div className="flex">
        <Field
          className={`${
            isThemeDark
              ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
              : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
          } mx-auto  py-1 px-5 rounded-l-sm h-12 
          border-0 outline-none   
           placeholder:font-base
            md:h-10 text-xl md:py-0.5 md:px-2 pr-8 placeholder:opacity-50 
           ssm:text-base w-full  font-light  transition-all  2xl2:text-2xl`}
          type={showPassword1 ? 'text' : 'password'}
          name="password"
          id="password"
          min={7}
          placeholder="Enter your password"
          required
        />
        <button
          className={`${
            isThemeDark
              ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
              : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
          } rounded-r-sm w-12 transition-all`}
          type="button"
          onClick={() => togglePassword(1)}
        >
          {showPassword1 ? <HiMiniEye /> : <PiEyeClosedBold />}
        </button>
      </div>

      <div className="text-sm h-4 w-full text-center -mt-2">
        <ErrorMessage
          className=" text-errorMsg text-center m-0 p-0"
          name="password"
          component="div"
        />
      </div>
      <label
        className={`
    ${withInputClass}
    mt-2 text-xl flex items-center gap-2 md:ml-2 
    md2:text-sm font-light sm:mt-1`}
        htmlFor="user-confirm-password"
      >
        Confirm Password
      </label>
      <div className="flex">
        <Field
          className={`${
            isThemeDark
              ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
              : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
          } rounded-l-sm mx-auto w-full py-1 px-5  h-12 
      border-0 outline-none   
       placeholder:font-base
         md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 
       ssm:text-base  font-light  transition-all  2xl2:text-2xl`}
          type={showPassword2 ? 'text' : 'password'}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your password"
          required
        />
        <button
          className={`${
            isThemeDark
              ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
              : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
          } rounded-r-sm w-12 transition-all`}
          type="button"
          onClick={() => togglePassword(2)}
        >
          {showPassword2 ? <HiMiniEye /> : <PiEyeClosedBold />}
        </button>
      </div>

      <div className="text-sm h-4 w-full text-center -mt-2">
        <ErrorMessage
          className=" text-errorMsg text-center m-0 p-0"
          name="confirmPassword"
          component="div"
        />
      </div>
    </>
  );
};

RegLogInputs.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
};
