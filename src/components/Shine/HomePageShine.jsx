import PropTypes from 'prop-types';

export const HomePageShine = ({ isThemeDark }) => {
  return (
    <>
      <div className="xl:hidden pointer-events-none w-32 h-32 bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-2xl absolute left-60 z-0 ssm:hidden top-72">
        <div
          className={`${
            isThemeDark
              ? 'from-transparent   to-green-500 '
              : 'from-transparent   to-orange-500 '
          } absolute top-1/2 left-1/2 w-80 h-80 transform -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-b animate-shine blur-3xl rounded-full pointer-events-none`}
        ></div>
      </div>
      <div className="xl:hidden w-12 pointer-events-none h-12 bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-2xl absolute right-96 z-0 top-64">
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
          isThemeDark ? 'top-10 right-96' : '-top-52 right-52'
        } xl:hidden w-96 h-52 pointer-events-none bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-2xl absolute  z-0 `}
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
      <div
        className={`${
          isThemeDark ? 'top-80 left-[30%]' : '-top-52 right-52'
        } xl:hidden w-52 h-52 pointer-events-none bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-md absolute  z-0 `}
      >
        <div
          className={`${
            isThemeDark
              ? 'from-transparent   to-violet-600 '
              : 'from-transparent  to-orange-400 '
          } absolute bottom-0 left-1/2 w-24 h-24 transform 
        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full animate-shine blur-sm pointer-events-none`}
        ></div>
      </div>
      <div
        className={`${
          isThemeDark
            ? 'top-44 right-96 w-32 h-32 '
            : 'top-14 left-[20%] w-40 h-20 '
        }  xl:hidden pointer-events-none bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-xl absolute  z-0 `}
      >
        <div
          className={`${
            isThemeDark
              ? 'from-transparent  w-20 h-20  to-green-600 '
              : 'from-transparent w-32 h-32   to-yellow-700 '
          } absolute bottom-0 left-1/2  transform 
        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full animate-shine blur-xl pointer-events-none`}
        ></div>
      </div>
      <div
        className={`${
          isThemeDark
            ? 'top-72 left-[52%] w-32 h-32 '
            : 'top-32 left-[46%] w-24 h-40 '
        } xl:hidden  pointer-events-none bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-md absolute  z-0 `}
      >
        <div
          className={`${
            isThemeDark
              ? 'from-transparent  w-20 h-20  to-green-600 '
              : 'from-transparent w-16 h-40   to-yellow-700 '
          } absolute bottom-0 left-1/2  transform 
        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full animate-shine blur-md pointer-events-none`}
        ></div>
      </div>
      <div
        className={`${
          isThemeDark
            ? 'top-32 left-[40%] w-[400px] h-96 '
            : 'top-[440px] right-72 w-96 h-52 '
        } xl:hidden pointer-events-none bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-3xl absolute  z-0 `}
      >
        <div
          className={`${
            isThemeDark
              ? 'from-transparent  w-[300px] h-96  to-blue-400 '
              : 'from-transparent w-72 h-32   to-yellow-300 '
          } absolute bottom-0 left-1/2  transform 
        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full animate-shine blur-3xl pointer-events-none`}
        ></div>
      </div>
      <div
        className={`${
          isThemeDark
            ? 'top-40 left-40 w-32 h-32 '
            : 'top-[460px] right-24 w-96 h-52 '
        }  xl:hidden pointer-events-none bg-transparent bg-opacity-50  overflow-hidden rounded-lg blur-xl absolute  z-0 `}
      >
        <div
          className={`${
            isThemeDark
              ? 'from-transparent  w-20 h-20  to-green-600 '
              : 'from-transparent w-72 h-32   to-yellow-200 '
          } absolute bottom-0 left-1/2  transform 
        -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent
          rounded-full animate-shine blur-xl pointer-events-none`}
        ></div>
      </div>
    </>
  );
};

HomePageShine.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
};
