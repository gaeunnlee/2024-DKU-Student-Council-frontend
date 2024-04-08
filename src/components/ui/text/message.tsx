import React from 'react';

interface MessageProps {
   children: React.ReactNode;
   className?: string;
}

export default function Message({ children, className }: MessageProps) {
   return <p className={`text-[11px] text-center ${className ?? ''}`}>{children}</p>;
}
