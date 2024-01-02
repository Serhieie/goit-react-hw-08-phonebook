import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';

export const UserDisplay = ({ fullState, handleLogout, isThemeDark }) => {
  return (
    <>
      {fullState.isLoggedIn && fullState.token ? (
        <div className="1xl2:mr-40  flex items-center gap-6 ssm:gap-2 ">
          <div
            className={`${
              isThemeDark
                ? ' bg-sky-950 border-sky-700'
                : '  bg-buttonHoverColor border-buttonColor'
            } w-12 h-12 ssm:w-7 ssm:h-7 rounded-full  flex items-center 
            justify-center overflow-hidden border-2`}
          >
            <img
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                width: '160%',
                height: '160%',
              }}
              src={fullState.avatar}
              alt="stone"
              width={300}
              height={300}
            />
          </div>

          <p
            className={`${
              isThemeDark
                ? 'text-blue-300 after:bg-blue-500 '
                : 'text-filterTextColor after:bg-filterTextColor '
            } ssm:text-xs 1xl2:text-2xl`}
          >
            {`${fullState.user.name}`}
          </p>
          <button
            className={`${
              isThemeDark
                ? ' bg-buttonColorDark  hover:bg-sky-950 '
                : 'bg-buttonColor  hover:bg-buttonHoverColor '
            }  p-2 ssm:p-1 rounded-full hover:fill transition-all duration-300`}
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

UserDisplay.propTypes = {
  fullState: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isThemeDark: PropTypes.bool.isRequired,
};
