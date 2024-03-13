import SvgIcon from '@components/common/icon/SvgIcon';
import { IconProps } from '@components/common/icon/SvgIcon';
import React from 'react';

interface IconButtonProps extends IconProps {
   onClick: () => void;
}

export default function IconButton({ onClick, ...props }: IconButtonProps) {
   return (
      <button onClick={onClick}>
         <SvgIcon {...props} />
      </button>
   );
}
