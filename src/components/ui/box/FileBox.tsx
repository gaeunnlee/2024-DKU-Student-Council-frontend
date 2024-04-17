import React from 'react';
import { PiPaperclipFill } from 'react-icons/pi';

import { ContentFileResponse } from '@/types/page';

interface FileBoxProps {
   files: ContentFileResponse[];
   className?: string;
   children?: React.ReactNode;
}

export default function FileBox({ files, className, children }: FileBoxProps) {
   return (
      <div
         className={`text-sm px-4 py-5 bg-white rounded-lg shadow-[2px_2px_5px_2px_#00000010] leading-5 transition-opacity animate-fadeIn ${
            className ?? ''
         }`}
      >
         {files.map((file) => (
            <a
               className='flex items-center gap-2'
               href={file.url}
               target='_blank'
               rel='noopener noreferrer'
               key={file.id}
            >
               <PiPaperclipFill style={{ fontSize: '20px' }} />
               <span className='overflow-hidden text-ellipsis truncate'>{file.originalName}</span>
            </a>
         ))}
         {children}
      </div>
   );
}