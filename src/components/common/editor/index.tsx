import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
   onChange: (value: string) => void;
   value: string;
}

export default function TextEditor({ onChange, value }: TextEditorProps) {
   const quillRef = useRef<ReactQuill | null>(null);

   const modules = {
      toolbar: {
         container: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ size: ['small', false, 'large', 'huge'] }],
         ],
      },
   };

   return (
      <ReactQuill
         ref={(el) => {
            if (el) {
               quillRef.current = el;
            }
         }}
         value={value}
         onChange={onChange}
         modules={modules}
         theme='snow'
      />
   );
}
