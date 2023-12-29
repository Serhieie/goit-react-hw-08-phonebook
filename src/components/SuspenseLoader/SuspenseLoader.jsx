import { PulseLoader } from 'react-spinners';

export const SuspenseLoader = ({ isThemeDark }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 ${
        isThemeDark ? 'bg-gradientColor2Dark ' : 'bg-gradientColor2 '
      } `}
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <PulseLoader
          color={`${isThemeDark ? '#3f78cc ' : '#F5DEB3 '}`}
          size="22px"
        />
      </div>
    </div>
  );
};
