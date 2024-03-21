import SvgIcon from '@components/common/icon/SvgIcon';
import { IconProps } from '@components/common/icon/SvgIcon';
import React from 'react';

interface IconButtonProps extends IconProps {
   onClick: () => void;
   buttonStyle?: string;
}

export default function IconButton({ onClick, buttonStyle, ...props }: IconButtonProps) {
   return (
      <button onClick={onClick} className={`${buttonStyle ?? ''}`}>
         <SvgIcon {...props} />
      </button>
   );
}
