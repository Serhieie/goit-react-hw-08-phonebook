import { getRandomNumber } from '../../../helpers/getRandomNumber';
import { gradientClasses, blurSizes } from 'helpers/constants/gradient';
import PropTypes from 'prop-types';

const MediumShine = ({ isThemeDark, left, top }) => {
  //operations with  helpers static object
  const colorKeys = Object.keys(gradientClasses);
  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];

  //getting tailwind format classes for color of shinnes from helpers static object
  const randomGradientClasses = gradientClasses[randomColorKey];

  return (
    <>
      <div
        className={`pointer-events-none w-32 h-32 bg-transparent 
        bg-opacity-50  rounded-lg blur-md absolute
        z-0 ssm:hidden`}
        style={{ left: `${left}px`, top: `${top}px` }}
      >
        <div
          className={`${
            isThemeDark
              ? `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
              : `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
          }absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-b animate-shine blur-lg rounded-full pointer-events-none`}
        ></div>
      </div>
    </>
  );
};

//generating amount of  Components how many we need
const generateMediumShines = (count, isThemeDark) => {
  const shines = [];

  //preventing generation over the screen coordinates
  const paddingLeftRight = 10;
  const paddingTopBottom = 25;
  const maxWidth = window.innerWidth - (paddingLeftRight * 2 + 150);
  const maxHeight = window.innerHeight - (paddingTopBottom * 2 + 200);

  //generation starts here
  for (let i = 0; i < count; i += 1) {
    const randomBlurIndex = getRandomNumber(0, blurSizes.length - 1);
    const blurSize = blurSizes[randomBlurIndex];

    let left = getRandomNumber(paddingLeftRight, maxWidth);
    let top = getRandomNumber(paddingTopBottom, maxHeight);

    shines.push(
      <MediumShine
        key={i}
        isThemeDark={isThemeDark}
        left={left}
        top={top}
        blurSize={blurSize}
      />
    );
  }
  return shines;
};

MediumShine.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};

export { generateMediumShines };
