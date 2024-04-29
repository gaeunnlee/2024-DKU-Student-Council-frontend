import { ProfileImage } from '@components/layouts/MyPageLayout';
import {
   Box,
   InputBox,
   InputButton,
   InputText,
   Label,
   Message,
   ValidationIcon,
} from '@components/mypage/edit';
import { API_PATH, CONSTANTS } from '@constants/api';
import { defaultFormInfo } from '@constants/form';
import { useAlert } from '@hooks/useAlert';
import { useApi } from '@hooks/useApi';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useFetchMyInfo } from '@hooks/useFetchMyInfo';
import { useLayout } from '@hooks/useLayout';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Gnb, GnbGoBack } from '@/components/common/gnb';
import { IEvent, IFormInfo, IInputValue, IValidationInfo } from '@/types/mypage/edit';

export default function MyPageEdit() {
   const { setLayout } = useLayout();
   const { myInfo, fetchMyInfo } = useFetchMyInfo();
   const { post, patch } = useApi();
   const { alert } = useAlert();
   const navigate = useNavigate();
   const [inputsValue, setInputsValue] = useState<IInputValue>({
      nickname: { value: '', validation: null },
      originPassword: { value: '' },
      password: { value: '', validation: null },
      passwordConfirm: { value: '', validation: null },
      major: { value: '' },
      phoneNumber: { value: '', validation: null },
      verificationCode: { value: '', validation: null },
   });
   const [formInfo, setFormInfo] = useState<IFormInfo[][]>(
      defaultFormInfo({ originNickname: '', originMajor: '', originPhoneNumber: '', inputsValue }),
   );
   const [verificationToken, setVerificationToken] = useState('');
   const [onChangeEvent, setOnChangeEvent] = useState<IEvent>({
      eventType: 'onChange',
      id: 'default',
      validation: {
         result: false,
         defaultMessage: '',
         errorMessage: '',
         successMessage: '',
      },
      value: '',
   });

   useEffectOnce(() => {
      fetchMyInfo();
      setLayout({
         title: '',
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingStyle: '',
         headingText: '',
         subHeadingText: '',
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

   const changeNickname = async (validation: IValidationInfo) => {
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
   };

   const changePassword = async () => {
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
   };

   const changePhoneNumber = async () => {
      if (inputsValue.phoneNumber.validation) {
         try {
            const data: { token: string } = await post(
               `${CONSTANTS.SERVER_URL}${API_PATH.USER.CHANGE.PHONE.VERIFY}`,
               { phoneNumber: inputsValue.phoneNumber.value },
               { authenticate: true },
            );
            alert('인증번호가 전송되었습니다.');
            setVerificationToken(data.token);
         } catch (error) {
            alert(error);
         }
      } else {
         alert('알맞게 입력해주세요.');
      }
   };

   const checkVerificationCode = async () => {
      if (inputsValue.verificationCode.validation && verificationToken.length > 0) {
         try {
            await patch(
               `${CONSTANTS.SERVER_URL}${API_PATH.USER.CHANGE.PHONE.INDEX}`,
               { token: verificationToken, code: inputsValue.verificationCode.value },
               { authenticate: true },
            );
            alert('휴대폰번호 변경 완료');
            fetchMyInfo();
            setVerificationToken('');
            setInputsValue((prev) => ({
               ...prev,
               phoneNumber: { value: '', validation: null },
               verificationCode: { value: '', validation: null },
            }));
         } catch (error) {
            alert(error);
         }
      } else {
         if (verificationToken.length === 0) {
            alert('인증번호를 전송해주세요.');
         } else {
            alert('알맞게 입력해주세요.');
         }
      }
   };

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
            onClick: () => {
               changeNickname(validation);
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
            onClick: changePassword,
            onChange: (value: string) => {
               if (!inputsValue.password.validation) {
                  setInputsValue((prev) => ({
                     ...prev,
                     passwordConfirm: { value: '', validation: null },
                  }));
                  alert('비밀번호는 영문과 숫자를 1자 이상 포함하는 8-16 자리여야 합니다.');
               }
               return value === Object.getOwnPropertyDescriptor(inputsValue, 'password')?.value.value;
            },
         },
         phoneNumber: {
            onClick: changePhoneNumber,
            onChange: (value: string) => {
               setVerificationToken('');
               setInputsValue((prev) => ({ ...prev, verificationCode: { value: '', validation: null } }));
               return value.length === 11 && /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/.test(value);
            },
         },
         verificationCode: {
            onClick: checkVerificationCode,
            onChange: (value: string) => {
               return value.length === 6 && /^[0-9]*$/.test(value);
            },
         },
         originPassword: {
            onChange: () => {},
         },
         major: {
            onClick: () => {
               navigate('/mypage/update');
            },
         },
         default: {
            onChange: () => {},
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

   useEffect(() => {
      setInputsValue((prev) => ({
         ...prev,
         [onChangeEvent.id]: {
            value: Object.getOwnPropertyDescriptor(prev, onChangeEvent.id)?.value.value,
            validation: handleEvent(onChangeEvent),
         },
      }));
   }, [onChangeEvent]);

   return (
      <>
         <Gnb>
            <GnbGoBack />
         </Gnb>
         {myInfo && (
            <div className='px-3 pb-5 flex items-center flex-col w-full bg-white'>
               <div className='flex justify-center py-10'>
                  <ProfileImage gender={myInfo.gender} />
               </div>
               <div className='flex flex-col gap-5 w-full'>
                  {formInfo?.map((box, i) => (
                     <Box key={i}>
                        {box.map((item: IFormInfo) => (
                           <div key={item.title}>
                              <Label text={item.title} />
                              <InputBox>
                                 <InputText
                                    item={item}
                                    value={Object.getOwnPropertyDescriptor(inputsValue, item.id)?.value.value}
                                    setInputsValue={setInputsValue}
                                    setOnChangeEvent={setOnChangeEvent}
                                 />
                                 {item.button && (
                                    <InputButton
                                       onClick={() => {
                                          handleEvent({
                                             eventType: 'onClick',
                                             id: item.id,
                                             validation: item.validation!,
                                          });
                                       }}
                                       text={item.button}
                                    />
                                 )}
                                 {item.validation !== undefined && (
                                    <ValidationIcon validation={item.validation.result} />
                                 )}
                              </InputBox>
                              {item.validation?.defaultMessage && item.validation.result === null && (
                                 <Message text={item.validation?.defaultMessage} />
                              )}
                              {item.validation !== undefined &&
                                 (item.validation.result ? (
                                    <Message text={item.validation.successMessage} />
                                 ) : (
                                    item.validation.result !== null && (
                                       <Message text={item.validation.errorMessage} />
                                    )
                                 ))}
                              {item.bigButton && (
                                 <InputButton
                                    onClick={() => {
                                       handleEvent({
                                          eventType: 'onClick',
                                          id: item.id,
                                          validation: item.validation!,
                                       });
                                    }}
                                    text={item.bigButton}
                                    type='big'
                                 />
                              )}
                           </div>
                        ))}
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
