import React, { useEffect, useState } from 'react';
import { API_PATH, CONSTANTS } from 'constants/api';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import { useApi } from 'hooks/useApi';
import { ProfileImage } from 'layouts/MyPageLayout';
import { IFormInfo, IInputValue, IMyInfo, IValidationInfo } from 'interfaces/mypage/edit';
import { defaultFormInfo } from 'data/mypage/edit/defaultFormInfo';
import {
   Box,
   InputBox,
   InputButton,
   InputText,
   Label,
   Message,
   ValidationIcon,
} from 'components/mypage/edit';
import { useAlert } from 'hooks/useAlert';
import { useNavigate } from 'react-router-dom';
import { checkInputRegex } from 'utils/checkInputRegex';

export default function MyPageEdit() {
   const { setLayout } = useLayout();
   const [myInfo, setMyInfo] = useState<IMyInfo | null>(null);
   const { get, patch } = useApi();
   const { alert } = useAlert();
   const navigate = useNavigate();
   const [inputsValue, setInputsValue] = useState<IInputValue>({
      nickname: { value: '', validation: null },
      originPassword: { value: '' },
      password: { value: '', validation: null },
      passwordConfirm: { value: '', validation: null },
      major: { value: '' },
      phoneNumber: { value: '', validation: null },
      verficationCode: { value: '' },
   });
   const [formInfo, setFormInfo] = useState<IFormInfo[][]>(
      defaultFormInfo({ originNickname: '', originMajor: '', originPhoneNumber: '', inputsValue }),
   );

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
            defaultFormInfo({
               originNickname: myInfo.nickname,
               originMajor: `${myInfo.department} ${myInfo.major}`,
               originPhoneNumber: `${myInfo.phoneNumber}`,
               inputsValue,
            }),
         );
   }, [myInfo, inputsValue]);

   const handleEvent = ({
      eventType,
      id,
      validation,
      value,
   }: {
      eventType: string;
      id: string;
      validation: IValidationInfo;
      value?: string;
   }) => {
      const events = {
         nickname: {
            onClick: async () => {
               if (validation?.result) {
                  try {
                     await patch(
                        `${CONSTANTS.SERVER_URL}${API_PATH.USER.CHANGE.NICKNAME}`,
                        { nickname: inputsValue.nickname.value },
                        { authenticate: true },
                     );
                     fetchMyInfo();
                     setInputsValue((prev) => ({ ...prev, nickname: { value: '', validation: null } }));
                     alert('변경 완료');
                  } catch (error) {
                     alert(error);
                  }
               } else {
                  alert(validation?.errorMessage);
               }
            },
            onChange: (value: string) => {
               return value.length > 2 && value.length < 17;
            },
         },
         password: {
            onChange: (value: string) => {
               setInputsValue((prev) => ({ ...prev, passwordConfirm: { value: '', validation: null } }));
               return (
                  value.length > 7 && value.length < 17 && /^(?=.*[a-zA-Z])(?=.*[0-9]).{7,17}$/.test(value)
               );
            },
         },
         passwordConfirm: {
            onClick: async () => {
               if (
                  inputsValue.originPassword.value.length > 0 &&
                  inputsValue.password.validation &&
                  inputsValue.passwordConfirm.validation
               ) {
                  try {
                     await patch(
                        `${CONSTANTS.SERVER_URL}${API_PATH.USER.CHANGE.PASSWORD}`,
                        {
                           password: inputsValue.originPassword.value,
                           newPassword: inputsValue.passwordConfirm.value,
                        },
                        { authenticate: true },
                     );
                     fetchMyInfo();
                     setInputsValue((prev) => ({
                        ...prev,
                        originPassword: { value: '', validation: null },
                        password: { value: '', validation: null },
                        passwordConfirm: { value: '', validation: null },
                     }));
                     alert('변경 완료');
                  } catch (error) {
                     alert(error);
                  }
               } else {
                  alert('모두 알맞게 입력해주세요.');
               }
            },
            onChange: (value: string) => {
               if (!inputsValue.password.validation) {
                  setInputsValue((prev) => ({ ...prev, passwordConfirm: { value: '', validation: null } }));
                  alert('비밀번호는 영문과 숫자를 1자 이상 포함하는 8-16 자리여야 합니다.');
               }
               return value === Object.getOwnPropertyDescriptor(inputsValue, 'password')?.value.value;
            },
         },
         phoneNumber: {
            onClick: () => {
               console.log('인증번호 전송');
            }, // API 미비
            onChange: (value: string) => {
               return value.length === 11 && /^[0-9]*$/.test(value);
            },
         },
      };

      const eventData = Object.getOwnPropertyDescriptor(events, id)?.value;
      const triggerEvent = Object.getOwnPropertyDescriptor(eventData, eventType)?.value;

      switch (eventType) {
         case 'onClick':
            return triggerEvent();
         case 'onChange':
            return triggerEvent(value);
      }
   };
   return (
      <>
         {myInfo && (
            <div className='px-3 pb-5 flex items-center flex-col w-full'>
               <div className='flex justify-center py-10'>
                  <ProfileImage />
               </div>
               <div className='flex flex-col gap-5 w-full'>
                  {formInfo?.map((box, i) => (
                     <Box key={i}>
                        {box.map(
                           ({
                              id,
                              title,
                              inputType,
                              placeholder,
                              button,
                              bigButton,
                              validation,
                              maxLength,
                           }: IFormInfo) => (
                              <div key={title}>
                                 <Label text={title} />
                                 <InputBox>
                                    <InputText
                                       type={inputType}
                                       placeholder={placeholder}
                                       disabled={title === '학과 및 재학 여부'}
                                       value={Object.getOwnPropertyDescriptor(inputsValue, id)?.value.value}
                                       maxLength={maxLength}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                          setInputsValue((prev) => ({
                                             ...prev,
                                             [id]: {
                                                value:
                                                   inputType === 'number'
                                                      ? checkInputRegex(e.target.value, 'number')
                                                      : e.target.value,
                                                validation:
                                                   validation !== undefined &&
                                                   handleEvent({
                                                      eventType: 'onChange',
                                                      id,
                                                      validation: validation!,
                                                      value: e.target.value,
                                                   }),
                                             },
                                          }));
                                       }}
                                    />
                                    {button && <InputButton text={button} />}
                                    {validation !== undefined && (
                                       <ValidationIcon validation={validation.result} />
                                    )}
                                 </InputBox>
                                 {validation?.defaultMessage && validation.result === null && (
                                    <Message text={validation?.defaultMessage} />
                                 )}
                                 {validation !== undefined &&
                                    (validation.result ? (
                                       <Message text={validation.successMessage} />
                                    ) : (
                                       validation.result !== null && (
                                          <Message text={validation.errorMessage} />
                                       )
                                    ))}
                                 {bigButton && (
                                    <InputButton
                                       onClick={() => {
                                          handleEvent({
                                             eventType: 'onClick',
                                             id,
                                             validation: validation!,
                                          });
                                       }}
                                       text={bigButton}
                                       type='big'
                                    />
                                 )}
                              </div>
                           ),
                        )}
                     </Box>
                  ))}
               </div>
               <InputButton
                  text='완료'
                  type='big'
                  style='mt-6 py-2 flex items-center flex-row justify-center'
                  onClick={() => {
                     navigate('/mypage');
                  }}
               />
            </div>
         )}
      </>
   );
}
