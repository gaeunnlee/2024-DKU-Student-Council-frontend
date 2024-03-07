import IconSprite from 'assets/icons/IconSprite.svg';
import React from 'react';

export interface IconProps {
   id: string;
   color?: string;
   width: number;
   height: number;
   className?: string;
}

const SvgIcon = ({ id, width, height, color, className }: IconProps) => {
   return (
      <svg width={width} height={height} fill={color}>
         <use href={`${IconSprite}#${id}`} className={`text-${color} ${className ?? ''}`} />
      </svg>
   );
};

export default SvgIcon;
