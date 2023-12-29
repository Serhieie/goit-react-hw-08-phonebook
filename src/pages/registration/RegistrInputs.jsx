import { useDispatch, useSelector } from 'react-redux';
import { changeUserName, changeUserEmail } from '../../redux/auth/slice-auth';
import { getUserData } from '../../redux/redux-bundle/selectors';

export const RegLogInputs = ({ isThemeDark }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUserData);

  const handleInputNameChange = event => {
    const value = event.target.value;
    dispatch(changeUserName(value));
  };

  const handleInputEmailChange = event => {
    const value = event.target.value;
    dispatch(changeUserEmail(value));
  };

  return (
    <>
      <label
        className={`mt-2 text-xl flex items-center gap-2 md:ml-2 md:w-10/12
      md2:text-sm font-light sm:mt-1`}
        htmlFor="user-name"
      >
        Name
      </label>
      <input
        onChange={handleInputNameChange}
        className={`${
          isThemeDark
            ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
            : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
        } mx-auto py-1 px-5 rounded-sm h-12 
          border-0 outline-none   
           placeholder:font-base
             md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 
           ssm:text-base w-full  font-light  transition-all  2xl2:text-2xl`}
        type="text"
        name="name"
        id="name"
        value={user.name || ''}
        placeholder="Antonio Balambino"
      />
      <label
        className={`mt-2 text-xl flex items-center gap-2 md:ml-2 
      md2:text-sm font-light sm:mt-1`}
        htmlFor="user-email"
      >
        Email
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
        name="email"
        id="email"
        placeholder="Balambino@mail.com"
        value={user.email || ''}
        required
      />
      <label
        className={`mt-2 text-xl flex items-center gap-2 md:ml-2 
      md2:text-sm font-light sm:mt-1`}
        htmlFor="user-phone"
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
        name="password"
        id="password"
        min={7}
        placeholder="Enter your password"
        required
      />
    </>
  );
};
