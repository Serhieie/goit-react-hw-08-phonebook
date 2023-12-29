export const RegistrationShine = ({ isThemeDark }) => {
  return (
    <>
      <div
        className={`${
          isThemeDark ? 'top-52 right-12' : 'top-32 left-12'
        } w-full  max-w-[280px] pointer-events-none h-full max-h-96 bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-3xl absolute   md:hidden `}
      >
        <div
          className={`${
            isThemeDark
              ? 'from-transparent   to-violet-800 '
              : 'from-transparent   to-amber-50 '
          } absolute bottom-0 w-full h-full  max-w-[580px] max-h-[480px] transform 
        -translate-x-1/2 pointer-events-none -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full animate-shine blur-3xl`}
        ></div>
      </div>

      <div
        className={`${
          isThemeDark ? 'top-10 left-2' : 'top-52  right-12'
        } w-full  max-w-[180px] pointer-events-none h-full max-h-96 bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-3xl absolute  md:-z-10`}
      >
        <div
          className={`${
            isThemeDark
              ? 'from-transparent   to-cyan-700 '
              : 'from-transparent   to-yellow-50 '
          } absolute bottom-0 w-full h-full  max-w-[580px] max-h-[480px] transform 
        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full pointer-events-none animate-shine blur-3xl`}
        ></div>
      </div>
    </>
  );
};
