import { shadowStyle } from 'constants/style';
import { IFormInfo, IInputValue } from 'interfaces/mypage/edit';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleExclamation } from 'react-icons/fa6';
import { checkInputRegex } from 'utils/checkInputRegex';

export const Box = ({ children, key }: { children: React.ReactNode; key: number }) => (
   <div key={key} className='w-full rounded-lg bg-[#f4f4f4] p-4 flex flex-col gap-5'>
      {children}
   </div>
);
export const Label = ({ text }: { text: string }) => <strong>{text}</strong>;
export const InputBox = ({ children }: { children: React.ReactNode }) => (
   <div
      className={`bg-white ${shadowStyle.default} rounded-lg outline-none w-full h-10 w-full flex justify-between items-center overflow-hidden mt-2`}
   >
      {children}
   </div>
);

export const InputText = ({
   item,
   value,
   setInputsValue,
}: {
   item: IFormInfo;
   value: string;
   setInputsValue: React.Dispatch<React.SetStateAction<IInputValue>>;
}) => (
   <input
      className={`outline-none h-10 border-none p-2 w-[250px] text-[0.9rem] ${
         item.inputType === 'number' &&
         '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
      }`}
      type={item.inputType === 'number' ? 'text' : item.inputType}
      value={value}
      disabled={item.title === '학과 및 재학 여부'}
      maxLength={item.maxLength}
      placeholder={item.placeholder}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
         setInputsValue((prev) => ({
            ...prev,
            [item.id]: {
               value:
                  item.inputType === 'number' ? checkInputRegex(e.target.value, 'number') : e.target.value,
               validation: item.validation,
            },
         }));
      }}
   />
);
export const ValidationIcon = ({ validation }: { validation: null | boolean }) => (
   <div className='mr-2'>
      {validation !== null &&
         (validation ? <FaCheckCircle color='green' /> : <FaCircleExclamation color='#c73a4a' />)}
   </div>
);
export const InputButton = ({
   text,
   type,
   style,
   onClick,
}: {
   text: string;
   type?: string;
   style?: string;
   onClick?: () => void;
}) => (
   <button
      className={`bg-black text-white rounded-lg px-3 h-full text-sm ${
         type === 'big' && 'w-full h-8 py-2 mt-3'
      } ${style}`}
      onClick={onClick}
   >
      {text}
   </button>
);
export const Message = ({ text }: { text: string }) => (
   <p className='text-[#626262] text-[0.6rem] mt-1 px-3 break-words'>{text}</p>
);
