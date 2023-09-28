import React from 'react';

interface InputProps extends React.ComponentProps<'input'> {
   label?: string;
   placeholder?: string;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ className, type, label, placeholder, value, onChange, ...props }: InputProps) {
   return (
      <div className={'flex flex-col'}>
         {label && <label className={'block text-gray-600 text-sm ml-5 mb-1'}>{label}</label>}
         <input
            className={`w-311 border-none rounded-full bg-gray-200 text-sm px-6 py-5 focus:outline-none 
            ${className}::placeholder text-gray-600 mb-2`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...props}
         />
      </div>
   );
}
