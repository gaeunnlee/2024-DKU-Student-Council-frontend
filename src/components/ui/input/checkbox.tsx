import React from 'react';

interface CheckboxProps {
   name: string;
   checked: boolean;
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   label: string;
}

function Checkbox({ name, checked, onChange, label }: CheckboxProps) {
   return (
      <label>
         <input type='checkbox' name={name} checked={checked} onChange={onChange} />
         <span>{label}</span>
      </label>
   );
}

export default Checkbox;
