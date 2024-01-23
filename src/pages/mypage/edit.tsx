import React, { useEffect, useState } from 'react';
import { API_PATH } from 'constants/api';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import { useApi } from 'hooks/useApi';
import { ProfileImage } from 'layouts/MyPageLayout';
import { shadowStyle } from 'constants/style';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCircleExclamation } from 'react-icons/fa6';
interface IMyInfo {
   studentId: string;
   username: string;
   nickname: string;
   yearOfAdmission: string;
   major: string;
   department: string;
   phoneNumber: string;
   writePostCount: number;
   commentedPostCount: number;
   likedPostCount: number;
   admin: boolean;
}

interface IFormInfo {
   title: string;
   inputType: string;
   placeholder?: string;
   button?: string;
   bigButton?: string;
   defaultMessage?: string;
   errorMessage?: string;
   successMessage?: string;
   validationCheck?: boolean;
   validation?: null | boolean;
}

export default function MyPageEdit() {
   const { setLayout } = useLayout();
   const [formInfo, setFormInfo] = useState<IFormInfo[][]>(defaultFormInfo({ nickname: '', major: '' }));
   const [myInfo, setMyInfo] = useState<IMyInfo | null>(null);
   const { get } = useApi();

   // 회원정보 가져오기
   const fetchMyInfo = async () => {
      const data = await get<IMyInfo>(API_PATH.USER.ME, { authenticate: true });
      setMyInfo(data);
   };

   useEffectOnce(() => {
      fetchMyInfo();
      setLayout({
         title: '',
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingStyle: '',
         subHeadingStyle: '',
         margin: '',
         rounded: false,
      });
   });

   // 닉네임과 전공의 placeholder값을 myInfo(회원정보)에서 가져오기
   useEffect(() => {
      myInfo &&
         setFormInfo(
            defaultFormInfo({ nickname: myInfo.nickname, major: `${myInfo.department} ${myInfo.major}` }),
         );
   }, [myInfo]);

   return (
      <>
         {myInfo && (
            <div className='px-3 pb-5 flex items-center flex-col'>
               <div className='flex justify-center py-10'>
                  <ProfileImage />
               </div>
               <div className='flex flex-col gap-5'>
                  {formInfo?.map((box, i) => (
                     <Box key={i}>
                        {box.map((item: IFormInfo) => (
                           <div key={item.title}>
                              <Label text={item.title} />
                              <InputBox>
                                 <InputText
                                    type={item.inputType}
                                    placeholder={item.placeholder}
                                    disabled={item.title === '학과 및 재학 여부'}
                                 />
                                 {item.button && <InputButton text={item.button} />}
                                 {item.validationCheck && item.validation !== undefined && (
                                    <ValidationIcon validation={item.validation} />
                                 )}
                              </InputBox>
                              {item.bigButton && <InputButton text={item.bigButton} type='big' />}
                              {item.defaultMessage && <Message text={item.defaultMessage} />}
                           </div>
                        ))}
                     </Box>
                  ))}
               </div>
               <InputButton
                  text='완료'
                  type='big'
                  style='mt-6 py-6 flex items-center flex-row justify-center'
               />
            </div>
         )}
      </>
   );
}

const Box = ({ children, key }: { children: React.ReactNode; key: number }) => (
   <div key={key} className='rounded-lg bg-[#f4f4f4] p-4 flex flex-col gap-5'>
      {children}
   </div>
);
const Label = ({ text }: { text: string }) => <strong>{text}</strong>;
const InputBox = ({ children }: { children: React.ReactNode }) => (
   <div
      className={`bg-white ${shadowStyle.default} rounded-lg outline-none w-full h-10 w-full flex justify-between items-center overflow-hidden mt-2`}
   >
      {children}
   </div>
);
const InputText = ({
   placeholder,
   type,
   value,
   disabled,
}: {
   placeholder?: string;
   type: string;
   value?: string;
   disabled: boolean;
}) => (
   <input
      className={`outline-none h-10 border-none p-2 w-[250px] text-[0.9rem] ${
         type === 'number' &&
         '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
      }`}
      type={type}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
   />
);
const ValidationIcon = ({ validation }: { validation: null | boolean }) => (
   <div className='mr-2'>
      {validation !== null &&
         (validation ? <FaCheckCircle color='green' /> : <FaCircleExclamation color='#c73a4a' />)}
   </div>
);
const InputButton = ({ text, type, style }: { text: string; type?: string; style?: string }) => (
   <button
      className={`bg-black text-white rounded-lg px-3 h-full ${type === 'big' && 'w-full h-8 mt-3'} ${style}`}
   >
      {text}
   </button>
);
const Message = ({ text }: { text: string }) => (
   <p className='text-[#626262] text-[0.7rem] mt-1 pl-3'>{text}</p>
);

const defaultFormInfo = ({ nickname, major }: { nickname: string; major: string }) => [
   [
      {
         title: '닉네임',
         inputType: 'text',
         placeholder: nickname,
         bigButton: '변경',
         validation: null,
         validationCheck: true,
         successMessage: '사용 가능한 닉네임입니다',
         errorMessage: '사용 불가능한 닉네임입니다',
      },
   ],
   [
      {
         title: '비밀번호 변경',
         inputType: 'password',
         placeholder: '새로운 비밀번호를 입력해주세요',
         validation: null,
         validationCheck: true,
         defaultMessage: '비밀번호는 영문과 숫자를 1자 이상 포함하는 8-16 자리여야 합니다.',
         errorMessage: '비밀번호는 영문과 숫자를 1자 이상 포함하는 8-16 자리여야 합니다.',
      },
      {
         title: '비밀번호 재확인',
         inputType: 'password',
         placeholder: '새로운 비밀번호를 재입력해주세요',
         validation: null,
         validationCheck: true,
         bigButton: '확인',
         errorMessage: '사용 불가능한 닉네임입니다',
         successMessage: '비밀번호가 변경되었습니다.',
      },
   ],
   [
      {
         title: '학과 및 재학 여부',
         inputType: 'text',
         placeholder: major,
         button: '변경',
      },
   ],
   [
      {
         title: '휴대폰번호 변경',
         inputType: 'number',
         button: '인증',
      },
      {
         title: '인증번호 입력',
         inputType: 'number',
         button: '확인',
         errorMessage: '인증번호를 다시 입력해주세요',
         successMessage: '인증 완료되었습니다',
      },
   ],
];
