import { LiaUserEditSolid } from 'react-icons/lia';
import { FiPhoneMissed } from 'react-icons/fi';
import { Field } from 'formik';

export function Inputs({ isThemeDark }) {
  return (
    <>
      <label
        htmlFor="name"
        className={`mt-2 text-xl flex items-center gap-2 md:ml-2 md:w-10/12
      md2:text-sm font-light sm:mt-1`}
      >
        <LiaUserEditSolid className="ml-3 md:ml-6" />
        Name
      </label>
      <Field
        type="text"
        name="name"
        id="name"
        placeholder="Enter name"
        className={`${
          isThemeDark
            ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
            : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
        }text-center mx-auto w-11/12 py-1 px-5 rounded-sm h-12 
          border-0 outline-none   
           placeholder:font-extralight
         md:w-10/12    md:h-10 text-xl md:py-0.5 md:px-2 placeholder:opacity-50 
           ssm:text-base  font-light  transition-all  2xl2:text-2xl`}
      />
      <label
        htmlFor="phone"
        className={`mt-1 text-xl flex items-center gap-2 md:ml-2 md:w-10/12
      md:text-4 font-light md2:text-xs`}
      >
        <FiPhoneMissed className="ml-3 md:ml-6 w-[14px] h-[14px]" />
        Phone Number
      </label>
      <Field
        type="tel"
        name="phone"
        id="phone"
        placeholder="Enter phone number"
        className={`${
          isThemeDark
            ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark  '
            : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont  '
        } text-center w-11/12 py-1 px-5 rounded-sm h-12 
        border-0 outline-none mx-auto  
        md:w-10/12  text-xl md:h-10 md:py-0.5 md:px-2 placeholder:opacity-50 
        ssm:text-base  placeholder:font-extralight font-light  transition-all 2xl2:text-2xl`}
      />
    </>
  );
}
