export const HomePageShine = ({ isThemeDark }) => {
  return (
    <>
      <div className=" pointer-events-none w-32 h-32 bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-2xl absolute left-60 z-0 ssm:hidden top-72">
        <div
          className={`${
            isThemeDark
              ? 'from-transparent   to-green-500 '
              : 'from-transparent   to-orange-500 '
          } absolute top-1/2 left-1/2 w-80 h-80 transform -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-b animate-shine blur-3xl rounded-full pointer-events-none`}
        ></div>
      </div>
      <div className="w-12 pointer-events-none h-12 bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-2xl absolute right-96 z-0 top-64">
        <div
          className={`${
            isThemeDark
              ? 'from-transparent  to-green-500 '
              : 'from-transparent  to-orange-500 '
          } absolute bottom-0 left-1/2 w-80 h-80 transform 
        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full animate-shine blur-3xl pointer-events-none`}
        ></div>
      </div>
      <div
        className={`${
          isThemeDark ? '-top-52 right-96' : '-top-52 right-52'
        } w-[480px] h-96 pointer-events-none bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-2xl absolute  z-0 `}
      >
        <div
          className={`${
            isThemeDark
              ? 'from-transparent   to-violet-600 '
              : 'from-transparent  to-orange-400 '
          } absolute bottom-0 left-1/2 w-80 h-80 transform 
        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full animate-shine blur-3xl pointer-events-none`}
        ></div>
      </div>
    </>
  );
};
