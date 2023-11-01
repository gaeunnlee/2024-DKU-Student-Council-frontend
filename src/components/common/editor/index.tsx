import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  onChange: (value: string) => void;
  value: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ onChange, value }) => {
   const quillRef = useRef<ReactQuill | null>(null);

   const modules = useMemo(
      () => ({
         toolbar: {
            container: [
               ['bold', 'italic', 'underline', 'strike'],
               [{ size: ['small', false, 'large', 'huge'] }],
            ],
         },
      }),
      []
   );

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
         theme="snow"
      />
   );
};

export default TextEditor;
