import React from 'react';

interface InputProps extends React.ComponentProps<'input'> {
   label?: string;
   placeholder?: string;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   message?: string | null;
   isSuccess?: boolean;
}

export default function Input({
   className,
   type,
   label,
   placeholder,
   name,
   value,
   onChange,
   message,
   isSuccess,
   ...props
}: InputProps) {
   const messageClassName = isSuccess ? 'text-blue-500' : 'text-red-500';

   return (
      <div className={'flex flex-col'}>
         {label && <label className={'block text-gray-600 text-sm ml-5 mb-1'}>{label}</label>}
         <input
            className={`w-[336px] border-none rounded-[10px] bg-[#EDEDED] text-sm px-6 py-4 focus:outline-none 
            ${className} ::placeholder text-[#868686]`}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange || (() => {})}
            {...props}
         />
         {message && <p className={`text-xs text-center ${messageClassName}`}>{message}</p>}
      </div>
   );
}
