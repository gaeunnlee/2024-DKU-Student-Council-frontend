import React from 'react';

interface CheckboxProps {
   name: string;
   checked?: boolean;
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
   label: string;
   className?: string;
}

function Checkbox({ name, checked, onChange, label, className }: CheckboxProps) {
   return (
      <label className={`flex items-center gap-1 ${className}`}>
         <input type='checkbox' name={name} checked={checked} onChange={onChange} />
         <span className='text-xs'>{label}</span>
      </label>
   );
}

export default Checkbox;
