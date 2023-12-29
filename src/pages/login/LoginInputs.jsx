import { useDispatch, useSelector } from 'react-redux';
import { changeUserEmail } from '../../redux/auth/slice-auth';
import { getUserData } from '../../redux/redux-bundle/selectors';

export const LoginInputs = ({ isThemeDark }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);

  const handleInputEmailChange = event => {
    const value = event.target.value;

    dispatch(changeUserEmail(value));
  };

  return (
    <>
      <label
        className={`mt-9 text-xl flex items-center gap-2 md:ml-2 
      md2:text-sm font-light sm:mt-1`}
        htmlFor="userEmail"
      >
        {' '}
        Email{' '}
      </label>
      <input
        onChange={handleInputEmailChange}
        className={`${
          isThemeDark
            ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
            : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
        } mx-auto w-full py-1 px-5 rounded-sm h-12 
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
      <input
        className={`${
          isThemeDark
            ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
            : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
        } mx-auto  py-1 px-5 rounded-sm h-12 
          border-0 outline-none   
           placeholder:font-base
            md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 
           ssm:text-base w-full  font-light  transition-all  2xl2:text-2xl`}
        type="password"
        name="userPassword"
        id="userPassword"
        placeholder="Enter your password"
        min={7}
        required
      />
    </>
  );
};
