import React, { useEffect, useState } from 'react';
import { API_PATH } from 'constants/api';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import { useApi } from 'hooks/useApi';
import { ProfileImage } from 'layouts/MyPageLayout';
import { IFormInfo, IMyInfo } from 'interfaces/mypage/edit';
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
            <div className='px-3 pb-5 flex items-center flex-col w-full'>
               <div className='flex justify-center py-10'>
                  <ProfileImage />
               </div>
               <div className='flex flex-col gap-5 w-full'>
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
                                 {item.validation !== undefined && (
                                    <ValidationIcon validation={item.validation.result} />
                                 )}
                              </InputBox>
                              {item.bigButton && <InputButton text={item.bigButton} type='big' />}
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
                           </div>
                        ))}
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
