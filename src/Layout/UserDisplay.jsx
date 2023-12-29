import { FiLogOut } from 'react-icons/fi';

export const UserDisplay = ({ fullState, handleLogout, isThemeDark }) => {
  return (
    <>
      {fullState.isLoggedIn ? (
        <div className="mr-40 flex items-center gap-6">
          <div
            className={`${
              isThemeDark ? ' bg-sky-950 ' : '  bg-buttonHoverColor '
            } w-12 h-12 rounded-full  flex items-center justify-center overflow-hidden`}
          >
            <img src={fullState.avatar} alt="stone" width={34} height={34} />
          </div>

          <p
            className={`${
              isThemeDark
                ? 'text-blue-300 after:bg-blue-500 '
                : 'text-filterTextColor after:bg-filterTextColor '
            }`}
          >
            {`${fullState.user.email}`}
          </p>
          <button
            className={`${
              isThemeDark
                ? ' bg-buttonColorDark  hover:bg-sky-950 '
                : 'bg-buttonColor  hover:bg-buttonHoverColor '
            }  p-2 rounded-full hover:fill transition-all duration-300`}
            onClick={handleLogout}
            type="button"
          >
            <FiLogOut />
          </button>
        </div>
      ) : null}
    </>
  );
};
