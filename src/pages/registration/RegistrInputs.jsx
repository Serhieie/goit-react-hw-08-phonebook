import { Field, ErrorMessage } from 'formik';

export const RegLogInputs = ({ isThemeDark }) => {
  return (
    <>
      <label
        className={`mt-6 text-xl flex items-center gap-2 md:ml-2 md:w-10/12
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
        } mx-auto py-1 px-5 rounded-sm h-12 
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
        className={`mt-2 text-xl flex items-center gap-2 md:ml-2 
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
        } mx-auto w-full py-1 px-5 rounded-sm h-12 
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
        className={`mt-2 text-xl flex items-center gap-2 md:ml-2 
      md2:text-sm font-light sm:mt-1`}
        htmlFor="user-phone"
      >
        {' '}
        Password{' '}
      </label>

      <Field
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
      <div className="text-sm h-4 w-full text-center -mt-2">
        <ErrorMessage
          className=" text-errorMsg text-center m-0 p-0"
          name="password"
          component="div"
        />
      </div>
    </>
  );
};
