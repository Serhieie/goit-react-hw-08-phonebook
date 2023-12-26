import { ErrorMessage } from 'formik';

export const ErrorMessages = () => {
  return (
    <div
      className="w-full flex justify-center font-extralight items-center flex-col 
          h-20 mt-2 md:text-base md:h-7 text-center"
    >
      <ErrorMessage
        className="text-xl text-errorMsg m-0 p-0 font-extralight items-center 
              md:w-10/12 md:text-base md2:text-sm"
        name="name"
        component="div"
      />
      <ErrorMessage
        className="text-xl text-errorMsg m-0 p-0 font-extralight items-center 
              md:w-10/12 md:text-base md2:text-sm"
        name="phone"
        component="div"
      />
    </div>
  );
};
