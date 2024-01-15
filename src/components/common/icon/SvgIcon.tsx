import IconSprite from '../../../assets/icons/IconSprite.svg';
import React from 'react';

interface IconProps {
   id: string;
   color?: string;
   width: number;
   height: number;
}

const SvgIcon = ({ id, width, height, color }: IconProps) => {
   return (
      <svg width={width} height={height} fill={color}>
         <use href={`${IconSprite}#${id}`} />
      </svg>
   );
};

export default SvgIcon;
