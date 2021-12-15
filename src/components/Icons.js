import React from 'react';
import * as Icons from '../assets/icons';
import PropTypes from 'prop-types';

const iconList = {
  logo: Icons.Logo,
  arrowLeft: Icons.ArrowLeft,
  arrowRight: Icons.ArrowRight,
  basket: Icons.Basket,
  close: Icons.Close,
  loading: Icons.Loading,
  menu: Icons.Menu,
  minus: Icons.Minus,
  plus: Icons.Plus,
  threeDots: Icons.ThreeDots,
  vector: Icons.Vector,
};

export const Icon = React.memo(({ size, name, className, color, stroke, onClick, ...rest }) => {
  const LoadedSvg = iconList[name];

  if (!LoadedSvg) {
    return null;
  }

  return (
    <LoadedSvg
      className={className}
      width={size}
      height={size}
      color={color}
      stroke={stroke}
      onClick={onClick}
      {...rest}
    />
  );
});

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  stroke: PropTypes.string,
  onClick: PropTypes.func,
};
