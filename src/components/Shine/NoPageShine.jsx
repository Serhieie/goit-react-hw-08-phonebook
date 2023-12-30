import { generateExtraSmallShines } from './ExtraSmallShine';
import { generateMediumShines } from './MediumShine';
import { generateBigShines } from './BigShines';
import React, { useState, useEffect } from 'react';

export const NoPageShine = ({ isThemeDark }) => {
  const [smallShines, setSmallShines] = useState([]);
  const [mediumShines, setMediumShines] = useState([]);
  const [bigShines, setBigShines] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const small = generateExtraSmallShines(20, isThemeDark);
      setSmallShines(small);
    }, 0);

    setTimeout(() => {
      const medium = generateMediumShines(6, isThemeDark);
      setMediumShines(medium);
    }, 1000);

    setTimeout(() => {
      const big = generateBigShines(3, isThemeDark);
      setBigShines(big);
    }, 2000);
  }, [isThemeDark]);

  return (
    <>
      {smallShines}
      {mediumShines}
      {bigShines}
    </>
  );
};
