import React from 'react';
import { getRandomNumber } from '../../../helpers/getRandomNumber';
import { gradientClasses, blurSizes } from 'helpers/constants/gradient';

const ExtraSmallShine = ({ isThemeDark, left, top }) => {
  const colorKeys = Object.keys(gradientClasses);
  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];
  const randomGradientClasses = gradientClasses[randomColorKey];

  return (
    <>
      <div
        className={`pointer-events-none w-10 h-10 bg-transparent 
        bg-opacity-50  rounded-lg blur-sm absolute
        z-0 ssm:hidden`}
        style={{ left: `${left}px`, top: `${top}px` }}
      >
        <div
          className={`${
            isThemeDark
              ? `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
              : `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
          }absolute top-1/2 left-1/2 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-b animate-shine blur-sm rounded-full pointer-events-none`}
        ></div>
      </div>
    </>
  );
};

const generateExtraSmallShines = (count, isThemeDark) => {
  const shines = [];
  const maxWidth = window.innerWidth - 120;
  const maxHeight = window.innerHeight - 120;

  for (let i = 0; i < count; i += 1) {
    const randomBlurIndex = getRandomNumber(0, blurSizes.length - 1);
    const blurSize = blurSizes[randomBlurIndex];

    let left = getRandomNumber(0, maxWidth);
    let top = getRandomNumber(0, maxHeight);

    if (left + 90 > window.innerWidth) {
      left = window.innerWidth - 199;
    }
    if (top + 90 > window.innerHeight) {
      top = window.innerHeight - 400;
    }

    shines.push(
      <ExtraSmallShine
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

export { generateExtraSmallShines };
