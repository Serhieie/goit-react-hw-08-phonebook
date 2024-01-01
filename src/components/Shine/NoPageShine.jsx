import { generateExtraSmallShines } from './shines-creators/ExtraSmallShine';
import { generateMediumShines } from './shines-creators/MediumShine';
import { generateBigShines } from './shines-creators/BigShines';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

export const NoPageShine = ({ isThemeDark }) => {
  const [smallShines, setSmallShines] = useState([]);
  const [mediumShines, setMediumShines] = useState([]);
  const [bigShines, setBigShines] = useState([]);

  //start to generate shines just for 404 page
  useEffect(() => {
    setTimeout(() => {
      const small = generateExtraSmallShines(40, isThemeDark);
      setSmallShines(small);
    }, 0);

    setTimeout(() => {
      const medium = generateMediumShines(12, isThemeDark);
      setMediumShines(medium);
    }, 1000);

    setTimeout(() => {
      const big = generateBigShines(5, isThemeDark);
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

NoPageShine.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
};
