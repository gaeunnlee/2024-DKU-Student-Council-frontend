import React, { ComponentProps } from 'react';
import { LuPaperclip } from 'react-icons/lu';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';
interface IPostBox {
   shadow?: boolean;
}

export default function PostBox({
   children,
   className,
   ...props
}: IPostBox & IWithReactChildren & ComponentProps<'div'>) {
   return (
      <div
         className={`p-4 bg-white rounded-lg m-5 leading-8 break-words transition-opacity animate-fadeIn shadow-[2px_2px_5px_2px_#00000010] ${
            className ?? ''
         }`}
         {...props}
      >
         {children}
      </div>
   );
}

interface IFileBox {
   files: [
      {
         id: number;
         url: string;
         originalName: string;
         mimeType: string;
      },
   ];
}

export function FileBox({
   children,
   className,
   files,
   ...props
}: IFileBox & IWithReactChildren & ComponentProps<'div'>) {
   return (
      <div
         className={`px-4 py-5 bg-white rounded-lg shadow-[2px_2px_5px_2px_#00000010] m-5 leading-5 transition-opacity animate-fadeIn ${
            className ?? ''
         }`}
         {...props}
      >
         {files.map((file) => (
            <>
               <a
                  className='flex items-center gap-2'
                  href={file.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={file.id}
               >
                  <LuPaperclip size={30} />
                  <span className='overflow-hidden text-ellipsis truncate'>{file.originalName}</span>
               </a>
            </>
         ))}
         {children}
      </div>
   );
}
