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

export default function MyPageEdit() {
   const { setLayout } = useLayout();
   const [myInfo, setMyInfo] = useState<IMyInfo | null>(null);
   const { get, patch } = useApi();
   const { alert } = useAlert();
   const [inputsValue, setInputsValue] = useState<IInputValue>({
      nickname: { value: '', validation: null },
      originPassword: { value: '' },
      password: { value: '', validation: null },
      passwordConfirm: { value: '', validation: null },
      major: { value: '' },
      phoneNumber: { value: '' },
      verficationCode: { value: '', validation: null },
   });
   const [formInfo, setFormInfo] = useState<IFormInfo[][]>(
      defaultFormInfo({ originNickname: '', originMajor: '', inputsValue }),
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
                     setInputsValue((prev) => ({ ...prev, nickname: { ...prev.nickname, value: '' } }));
                     alert('변경완료');
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
            onChange: (value: string) => {
               return value === Object.getOwnPropertyDescriptor(inputsValue, 'password')?.value.value;
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
                           }: IFormInfo) => (
                              <div key={title}>
                                 <Label text={title} />
                                 <InputBox>
                                    <InputText
                                       type={inputType}
                                       placeholder={placeholder}
                                       disabled={title === '학과 및 재학 여부'}
                                       value={Object.getOwnPropertyDescriptor(inputsValue, id)?.value.value}
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                          setInputsValue((prev) => ({
                                             ...prev,
                                             [id]: {
                                                value: e.target.value,
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
               />
            </div>
         )}
      </>
   );
}
